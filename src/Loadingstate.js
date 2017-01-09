import React, { Component, PropTypes}from 'react';
import classnames from 'classnames';
import Button from 'bee-button';
import Loading from 'bee-loading';

const propTypes = {
	/**
	 * @title loading时间
	 */
	loadingTime: PropTypes.number,
	/**
	 * @title loading时的文字
	 */
	loadingText: PropTypes.string,
	/**
	 * @title 
	 */
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	])
	
}

const defaultProps = {
  loadingTime: '300'

}

class Loadingstate extends Component{
	constructor(props){
		super(props);
		this.state = {
			clickFlag: false,
			loadingText: this.props.children
		}
	}
	/**
	 * 手动触发修改状态
	 */
	handleClick (){
		this.setState({clickFlag: true,loadingText:this.props.loadingText});
		/**
		 * 设置定时器 根据参数时间 设定定时时间 而去改变状态
		 */
		this.timer = setTimeout(function() {
			this.setState({clickFlag: false,loadingText: this.props.children});
		}.bind(this),this.props.loadingTime)
	}
	// 组件移除
	componentWillUnmount () {

		clearInterval(this.timer);
	}
	render(){
		let {loadingTime,loadingText,children, ...others} = this.props;
		
		console.log(typeof(loadingText));

		let loadingTextTypeString = typeof(loadingText)==='string';

        return (
        	<span>
        	{loadingTextTypeString&&loadingText && (
        		<Button
	        		className = "ladda-button"
	        		disabled={this.state.clickFlag}
	        		onClick={this.handleClick.bind(this)}
	        		 {...others}>
	        		<span className="ladda-label">{children}</span><span className="ladda-text"> {loadingText} </span>
	        	</Button>
        	)}
        	{!loadingText && (
        		<Button
	        		className = "ladda-button"
	        		disabled={this.state.clickFlag}
	        		onClick={this.handleClick.bind(this)}
	        		 {...others}>
	        		<span className="ladda-label">{children}</span><span className="ladda-spinner"><Loading /></span>
	        	</Button>
        	)}
        	</span>
        );

	}
}
Loadingstate.propTypes = propTypes;
Loadingstate.defaultProps = defaultProps;

export default Loadingstate;