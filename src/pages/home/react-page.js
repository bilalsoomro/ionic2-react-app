import React from 'react';
import { render } from 'react-dom';

export class ReactUI{
    static initialize(schema){
        render(React.createElement(
        "h1",
        null,
        "Hello"
        ), document.getElementById("react-container"));
    }
}