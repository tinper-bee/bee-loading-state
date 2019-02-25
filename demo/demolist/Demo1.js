/**
 * @title 基础Loadingstate
 * @description  点击按钮，呈现等待。
 */

import React, { Component } from 'react';
import Loadingstate from '../../src';


class Demo1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
            show: false
		}
	}

	handleClick = () => {
		this.setState({
			show: true
		});

		setTimeout(() => {
            this.setState({
                show: false
            })
		}, 3000)
	}

	render () {
		return (
			<Loadingstate
				showBackDrop={false}
				onClick={ this.handleClick }
				show={ this.state.show }
				colors="primary">
				confirm
			</Loadingstate>
		)
	}
}



export default Demo1;