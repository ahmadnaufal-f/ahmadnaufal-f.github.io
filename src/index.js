import { Component, Dom } from "./component";

const p = Dom.p({ id: 'test-title', class: 'cx-title' });
p.html = "percobaan";

const body = new Component('body');

p.appendTo(body);