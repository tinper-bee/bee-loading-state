/**
 * @title 基础Loadingstate
 * @description  点击按钮，呈现等待。
 */

import React, { Component } from 'react';
import Loadingstate from '../../src';


class Demo1 extends Component {
	render () {
		return (
			<Loadingstate colors="info" loadingTime={4000}>confirm</Loadingstate>
		)
	}
}



export default Demo1;