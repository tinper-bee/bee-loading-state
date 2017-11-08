/**
 * @title 自定义`Loadingstate`
 * @description `loadingText`自定义等待文字.
 */


import React, { Component } from 'react';
import Loadingstate from '../../src';

class Demo2 extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: false
		}
	}

    handleClick = () => {
        this.setState({
            show: true
        })
        setTimeout(() => {
            this.setState({
                show: false
            })
        }, 3000)
    }
	render(){
		return (
			<Loadingstate
				onClick={ this.handleClick }
				colors="info"
				show={ this.state.show }
				loadingText="waiting...">
				confirm
			</Loadingstate>
		)
	}
}

export default Demo2;