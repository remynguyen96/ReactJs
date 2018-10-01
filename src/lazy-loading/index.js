import React, { PureComponent, createRef } from 'react';
import Styles from './Styles.scss';

const elementInViewport = (el) => {
  const { top, left } = el.getBoundingClientRect();
  const { innerHeight } = window;
  const { clientHeight } = document.documentElement;
  return (
    top >= 0 && left >= 0 && top <= (innerHeight || clientHeight)
  );
};
export default class LazyLoading extends PureComponent {
  constructor(prop) {
    super(prop);
    this.imgRef = createRef();
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let timeOut;
    if (timeOut) clearTimeout(timeOut);
    const { src, keepRatio, width: widthProp } = this.props;
    const elementImg = this.imgRef.current;
    if (!this.state.loaded && elementInViewport(elementImg)) {
      const imageLoader = new Image();
      imageLoader.src = src;
      imageLoader.onload = () => {
        let { width, height } = imageLoader;
        const ratioWH = width / height;
        timeOut = setTimeout(() => {
          elementImg.setAttribute('src', src);
          elementImg.classList.add(Styles.visible);
          keepRatio && elementImg.setAttribute('height', widthProp / ratioWH);
        }, 650);
        this.setState({ loaded: true });
      };
    }
  };

  render() {
    const { width, height } = this.props;
    return (
      <img className={Styles.lazyImage}
           ref={this.imgRef}
           width={width || '100%'}
           height={height || '100%'}
           alt='Alt Default'
      />
    );
  }
}

