import React from "react";
import createReactClass from "create-react-class"
import Carousel from "nuka-carousel"
import Benefit from "./Benefit";

const Benefits = createReactClass({
    mixins: [Carousel.ControllerMixin],
    render() {
      return (
        <Carousel
        autoplay={true}
        autoplayInterval={3000}
        >
          <Benefit title="Safer Calling"/>
          <Benefit title="Crystal Clear Quality"/>
          <Benefit title="Enjoy Now!" subtitle="simply press continue"/>
        </Carousel>
      )
    }
  });

export default Benefits;