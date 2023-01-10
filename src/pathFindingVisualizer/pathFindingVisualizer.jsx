import React, {Component} from 'react';
import Node from './Node/Node';
import './pathFindingVisualizer.css';

export default class pathFindingVisualizer extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        return(
            <div>
              Foo Bar Biz
              <Node></Node>
            </div>
        );   
    }
}


