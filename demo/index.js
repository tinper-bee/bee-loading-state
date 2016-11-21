import Loadingstate from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div className="demo-loading-state">
        	<Loadingstate>confirm</Loadingstate>
        </div>
    );
}

function demo2() {
    return (
        <div className="demo-loading-state">
        	<Loadingstate loadingText="waiting..." loadingTime="4000">confirm</Loadingstate>
        </div>
    );
}

ReactDOM.render(demo1(), document.getElementById('ReactLoadingstateDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactLoadingstateDemo2'));