import React, { Component, PropTypes}from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Button } from '../node_modules/bee-button'

const propTypes = {
	/**
	 * @title loading时间
	 */
	loadingTime: PropTypes.number.string,
	/**
	 * @title loading时的文字
	 */
	loadingText: PropTypes.string.string,
	
}

const defaultProps = {
  loadingTime: 300,
  loadingText: 'loading',
}

const clsPrefix = 'u-button';

class Loadingstate extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			clickFlag: false,
			loadingText:this.props.children
		}
	}
	handleClick (){
		this.setState({clickFlag: true,loadingText:this.props.loadingText});
		this.timer = setInterval(function() {
			this.setState({clickFlag: false,loadingText: this.props.children});
		}.bind(this),this.props.loadingTime)
	}
	render(){
		let {loadingTime,loadingText, ...others} = this.props;
        return (
        	<Button
        		 disabled={this.state.clickFlag}
        		 onClick={this.handleClick.bind(this)}
        		 {...others}>
        		{this.state.loadingText}
        	</Button>
        );

	}
}
Loadingstate.PropTypes = propTypes;
Loadingstate.defaultProps = defaultProps;

export default Loadingstate;