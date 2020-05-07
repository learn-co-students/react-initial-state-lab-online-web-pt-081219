import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    updateSlide = () => {
        this.setState({

        })
    }


    render() {
        return (
            `I am on slide ${this.state.currentSlideIndex}`
        )
    }

}
