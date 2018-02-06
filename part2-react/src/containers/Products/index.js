import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getApi} from './actions';

class Products extends Component {
    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eius fuga incidunt ipsum laudantium, maxime molestiae necessitatibus officia, provident quia reiciendis tenetur vel. Culpa eum facere fuga illum, nobis voluptatum.</p>
            </div>
        )
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Products);


