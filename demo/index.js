
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基础Loadingstate","code":"/**\n * @title 基础Loadingstate\n * @description  点击按钮，呈现等待。\n */\n\nimport React, { Component } from 'react';\nimport Loadingstate from 'bee-loading-state';\n\n\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n            show: false\n\t\t}\n\t}\n\n\thandleClick = () => {\n\t\tthis.setState({\n\t\t\tshow: true\n\t\t});\n\n\t\tsetTimeout(() => {\n            this.setState({\n                show: false\n            })\n\t\t}, 3000)\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<Loadingstate showBackDrop={false} onClick={ this.handleClick } show={ this.state.show } colors=\"info\">confirm</Loadingstate>\n\t\t)\n\t}\n}\n\n\n\n","desc":"  点击按钮，呈现等待。"},{"example":<Demo2 />,"title":" 自定义`Loadingstate`","code":"/**\n * @title 自定义`Loadingstate`\n * @description `loadingText`自定义等待文字.\n */\n\n\nimport React, { Component } from 'react';\nimport Loadingstate from 'bee-loading-state';\n\nclass Demo2 extends Component {\n\tconstructor(props){\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tshow: false\n\t\t}\n\t}\n\n    handleClick = () => {\n        this.setState({\n            show: true\n        })\n        setTimeout(() => {\n            this.setState({\n                show: false\n            })\n        }, 3000)\n    }\n\trender(){\n\t\treturn (\n\t\t\t<Loadingstate\n\t\t\t\tonClick={ this.handleClick }\n\t\t\t\tcolors=\"info\"\n\t\t\t\tshow={ this.state.show }\n\t\t\t\tloadingText=\"waiting...\">\n\t\t\t\tconfirm\n\t\t\t</Loadingstate>\n\t\t)\n\t}\n}\n\n","desc":" `loadingText`自定义等待文字."}]


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
