import { LightningElement, api } from 'lwc';

export default class ChildComponent02 extends LightningElement {

    @api
    name;

    @api
    showMessage() {
        alert('Hello from Parent');
    }

    @api
    showMethod() {
        alert('Show Method called from Parent');
    }
}