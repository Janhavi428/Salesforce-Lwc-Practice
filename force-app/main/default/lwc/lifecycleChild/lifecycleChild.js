import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {

    constructor() {
        super();
        console.log('I am a Construtor From child');
    }

    connectedCallback() {
        // console.log('I am a connectedCallback From child');
        throw new Error('I am from child component');  // here we throw error 
    }

    renderedCallback() {
        console.log('I am a renderedCalback From child');
    }

    disconnectedCallback() {
        console.log('I am a disconnectedCallback From child');
    }

}