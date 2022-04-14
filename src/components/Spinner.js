import React, { Component } from 'react'
import Spiner from './Spiner.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="container  d-flex justify-content-center my-5 ">
                <img src={Spiner} alt="loading" />
            </div>
        )
    }
}
