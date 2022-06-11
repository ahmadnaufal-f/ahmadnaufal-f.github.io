import { Component } from './component';

function createEle(type, attribute) {
    if (typeof(type) === "undefined") {
        return false;
    }
    var el = document.createElement(type);
    if (typeof(attribute) === 'object') {
        for (var key in attribute) {
        el.setAttribute(key, attribute[key]);
        }
    }
    
    return new Component(el);
}

export function div(...args) {
    return createEle('div', ...args);
}

export function p(...args) {
    return createEle('p', ...args);
}

export function a(...args) {
    return createEle('a', ...args);
}

export function span(...args) {
    return createEle('span', ...args);
}

export function ul(...args) {
    return createEle('ul', ...args);
}

export function li(...args) {
    return createEle('li', ...args);
}

export function img(...args) {
    return createEle('li', ...args);
}

export const Dom = {
    div,
    p,
    a,
    span,
    ul,
    li,
    img
};