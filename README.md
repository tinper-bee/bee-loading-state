# bee-loading-state
[![npm version](https://img.shields.io/npm/v/bee-loading-state.svg)](https://www.npmjs.com/package/bee-loading-state)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-loading-state)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-loading-state.svg)](https://david-dm.org/tinper-bee/bee-loading-state#info=devDependencies)


bee-loading-state 组件常用于在按钮上加载状态

#### 安装步骤

```sh
$ git clone https://github.com/tinper-bee/bee-loading-state
$ cd bee-loading-state
$ npm install
$ npm run dev
```
## 使用

loading-state依赖于button,使用loading-state还需把button组件down下来
```sh
$ npm install bee-loading-state
$ npm run dev
```
#### 组件引入
先进行下载loading-state包
```
npm install --save bee-loading-state
```
组件调用
```js
import Loadingstate from 'bee-Loading-state';
React.render(<div>
    <div>
        <Loadingstate loadingTime="4000" loadingText="loading...">Confirm</Loadingstate>
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 因为loading-state是依赖于button,所以使用link引入dist目录下button.css
```
<link rel="stylesheet" href="./node_modules/build/bee-button.css">
```
- 同理,在js中import样式也是button的样式
```js
import "./node_modules/src/Button.scss"
//或是
import "./node_modules/build/bee-button.css"
```

### 使用tinper-bee组件库
(tinper-bee组件库使用方法)[]




## API

button的参数在loading-state同样适用，
loading-state扩展的参数如下。


|参数|说明|类型|默认值|
|---|----|---|------|
|loadingText|loading时显示内容|string|loading|
|loadingTime|loading的时间|number|300ms|
