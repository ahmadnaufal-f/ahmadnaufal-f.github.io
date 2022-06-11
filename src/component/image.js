import { Dom } from './dom';

export class Image {
    constructor(id, type, imagePath) {
        this._class = 'image';
        this._children = {};

        this._children.wrapper = Dom.div({ id, className: 'cx__image__wrapper' });
        this._children.wrapper.dataset.type = type;

        if(imagePath && imagePath.length > 0) {
            this.setImage(imagePath);
        }
    }

    setImage(path) {
        if(path.includes('png')) {
            this._children.image = Dom.img({ 
                className: 'cx__image__image',
                src: path,
                onload: () => this._children.wrapper.appendChild(this._children.image) })
        }
        else {
            // TODO: create setImage for svg
        }
    }
}