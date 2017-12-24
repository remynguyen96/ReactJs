import React, {Children} from 'react';
import styled from 'styled-components';

const WrapperSlider = styled.div`
    width: 960px;
    padding: 30px;
    margin: 0 auto;
`


class SlideShow extends React.Component {

    state = {
        total: 0,
        current: 0,
    }

    componentDidMount() {
        const { children } = this.props;
        this.setState({
            total: Children.count(children),
        });
        this.interval = setInterval(this.showNext, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showNext = () => {
        const { total } = this.state;
        this.setState((prevState) => ({
                current: (prevState.current + 1) === total ? 0 : (prevState.current + 1) ,
        }));
    }

    moveSlide = (index) => {
       this.setState({
           current: index,
       });
    }


    render() {
        const { children } = this.props;
        const bullets = Array.from({length: this.state.total}, (_, index) => (
            <button type="button" key={index} onClick={() => this.moveSlide(index)}>&ordm;</button>
        ));
        bullets[this.state.current] = (<button type="button" onClick={() => this.moveSlide(this.state.current)} key={this.state.current}>&bull;</button>);
        return (
            <section>
                <WrapperSlider>
                    {Children.toArray(children)[this.state.current]}
                </WrapperSlider>
                {bullets}
            </section>
        )
    }
}

export default SlideShow;