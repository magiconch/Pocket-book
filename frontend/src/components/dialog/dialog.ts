import "98.css"



export default class Win98Dialog extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const ele = document.getElementById("win98-dialog");
       
        if (ele instanceof HTMLTemplateElement) {
            shadow.appendChild(ele.content.cloneNode(true));
        } else {
            throw Error("Don't have dialog template.");
        }
        
    }
}

customElements.define("win98-dialog", Win98Dialog);