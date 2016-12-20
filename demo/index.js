
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Loadingstate from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title 基础Loadingstate
 * @description  点击按钮，呈现等待。
 */
class Demo1 extends Component {
	render () {
		return (
			<Loadingstate>confirm</Loadingstate>
		)
	}
}/**
 * @title 自定义`Loadingstate`
 * @description `loadingText`自定义等待文字，`loadingTime`自定义等待时间.
 */
class Demo2 extends Component {
	render(){
		return (
			<Loadingstate colors="info" loadingText="waiting..." loadingTime="4000">confirm</Loadingstate>
		)
	}
}var DemoArray = [{"example":<Demo1 />,"title":" 基础Loadingstate","code":"/**\n * @title 基础Loadingstate\n * @description  点击按钮，呈现等待。\n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Loadingstate>confirm</Loadingstate>\n\t\t)\n\t}\n}","desc":"  点击按钮，呈现等待。"},{"example":<Demo2 />,"title":" 自定义`Loadingstate`","code":"/**\n * @title 自定义`Loadingstate`\n * @description `loadingText`自定义等待文字，`loadingTime`自定义等待时间.\n */\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<Loadingstate colors=\"info\" loadingText=\"waiting...\" loadingTime=\"4000\">confirm</Loadingstate>\n\t\t)\n\t}\n}","desc":" `loadingText`自定义等待文字，`loadingTime`自定义等待时间."}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
