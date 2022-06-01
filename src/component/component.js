export class Component {
    constructor(element) {
        if(element) {
            if (element instanceof Component) {
                return element;
            }

            if (element === 'body') {
                element = document.body;
            } else if (typeof element === 'string') {
                element = document.getElementById(element);
                if (!element) {
                    return undefined;
                }
            }
        }

        this._ele = element;
    }

    get ele() {
        return this._ele;
    }

    get html() {
        return this.ele.innerHTML;
    }

    set html(value) {
        this.ele.innerHTML = value ?? '';
    }

    static toElement(obj) {
        if (obj) {
            if (Component.isElement(obj)) {
                return obj;
            } else if (obj instanceof Component || Component.isElement(obj.ele)) {
                return obj.ele;
            }
        }

        return undefined;
    }

    static isElement(obj) {
        return (typeof HTMLElement === 'object');
    }

    appendTo(obj) {
        obj = Component.toElement(obj);
        if (!obj) {
            return this;
        }

        obj.appendChild(this.ele);

        return this;
    }

    removeChild(obj) {
        obj = Component.toElement(obj);
        if (!obj) {
            return this;
        }

        this.ele.removeChild(obj);

        return this;
    }
}

export function toComponent(element) {
    return new Component(element);
}

export function toElement(component) {
    return new Component(component).ele;
}