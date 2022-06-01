import { Component, Dom } from "./component";

const attribute = {
    id: "test",
    class: "cx-title"
}
const p = Dom.p(attribute);

const body = new Component('body');

p.appendTo(body);