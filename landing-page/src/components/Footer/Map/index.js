import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import WrapperMap from './Wrapper';
import Maker from '../../../images/location.png';

const Marker = ({ name }) => (
    <div className="marker">
      <span>{name}</span>
      <img src={Maker} alt="marker googlemap" />
    </div>
);

class Map extends Component {
  static propTypes = {
    center: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    center: { lat: 10.8113567, lng: 106.6720422 },
    zoom: 16,
    name: 'NetLeaders',
  };

  render() {
    const { center, zoom, name } = this.props;
    return (
        <WrapperMap>
          <GoogleMapReact
              defaultCenter={center}
              defaultZoom={zoom}
              layerTypes={['TrafficLayer', 'TransitLayer']}
          >
            <Marker
                lat={center.lat}
                lng={center.lng}
                name={name}
            />
          </GoogleMapReact>
        </WrapperMap>
    );
  }
}

export default Map;
