import React from 'react';
import ItemSlider from './ItemSlider';
import SlideShow from './SlideShow';
import Animated, { FadeAnimations, SlideAnimations } from 'animated-styled-components';

class Slider extends React.Component {
    render() {
        return (
            <div>
                <Animated
                    animation={{
                        delay_in: 0,

                        in: FadeAnimations.FadeInBottom,
                        duration_in: 0,

                        continuous: SlideAnimations.SlideInRight,
                        duration_continuous: 0,

                        out: FadeAnimations.FadeOutTop,
                        duration_out: 0,

                        delay_between: 0,
                        // iteration: 'infinite'
                    }}
                    transitions={[]}
                >
                    <SlideShow>
                        <ItemSlider bg={`#75FF9D`}>1</ItemSlider>
                        <ItemSlider bg={`#FF6869`}>2</ItemSlider>
                        <ItemSlider bg={`#FF994B`}>3</ItemSlider>
                        <ItemSlider>4</ItemSlider>
                    </SlideShow>
                </Animated>
            </div>
        )
    }
}

export default Slider;