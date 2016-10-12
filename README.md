# bee-loadingstate
[![npm version](https://img.shields.io/npm/v/bee-loadingstate.svg)](https://www.npmjs.com/package/bee-loadingstate)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-loadingstate)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-loadingstate.svg)](https://david-dm.org/tinper-bee/bee-loadingstate#info=devDependencies)


react bee-loadingstate component for tinper-bee

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-loadingstate
$ cd bee-loadingstate
$ npm install
$ npm run dev
```
## 使用

### loadingstate依赖于button,使用loadingstate还需把button组件down下来
```sh
$ npm install bee-button
$ npm run dev
```
#### 组件引入
先进行下载loadingstate包
```
npm install --save bee-loadingstate
```
组件调用
```js
import { Loadingstate } from 'bee-Loadingstate';
React.render(<div>
    <div>
        <Loadingstate loadingTime="4000" loadingText="loading...">Confirm</Loadingstate>
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 因为loadingstate是依赖于button,所以使用link引入dist目录下button.css
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

button的参数在loadingstate同样适用，
loadingstate扩展的参数如下。
|参数|说明|类型|默认值|
|---|----|---|------|
|loadingText|loading时显示内容|string|loading|
|loadingTime|loading的时间|number|300ms|