import React, {Component, PropTypes} from 'react';
import './PlantItem.css';
import { useState } from "react";

class PlantItem extends React.Component {
    render() {
    return (
        <p>
            <img src = {this.props.image}/>
            <div>{this.props.name}</div> 
            <div id="ss">Price: ${this.props.price}, Difficulty: {this.props.difficulty}/10, Climate: {this.props.climate}</div>
            <div id="buttons">
                {this.props.addbutton} {this.props.removebutton}{this.props.count}
            </div>
        </p>
    )
    }
}
  

export default PlantItem;