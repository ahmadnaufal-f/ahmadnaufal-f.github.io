import { Dom } from '../component/dom'

export class Container {
    constructor(id, type) {
        this._container = Dom.div({ id, className: "cx__container" });
        this._container.dataset.type = type;
    }
}