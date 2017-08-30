/**
 * @title 自定义`Loadingstate`
 * @description `loadingText`自定义等待文字，`loadingTime`自定义等待时间.
 */


import React, { Component } from 'react';
import Loadingstate from '../../src';

class Demo2 extends Component {
	render(){
		return (
			<Loadingstate colors="info" loadingText="waiting..." loadingTime={3000}>confirm</Loadingstate>
		)
	}
}

export default Demo2;