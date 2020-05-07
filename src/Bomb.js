import React, { Component } from 'react';
import ImageSlider from './ImageSlider.js'

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    updateCount = () => {
        let newCount = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newCount
        })
    }


    render() {
        if (this.state.secondsLeft === 0) {
            return (
                `Boom!`
            )

        } else {
            console.log(this.state.secondsLeft)
            this.updateCount
            return (
                `${this.state.secondsLeft} seconds left before I go boom!`
            ) 
        }
    }

}