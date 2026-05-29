import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {

    constructor(){
        super();
        console.log('I am a Construtor From Parent');
    }

    connectedCallback(){
        console.log('I am a connectedCallback From Parent');
    }

    renderedCallback(){
        console.log('I am a renderedCalback From Parent');
    }

    disconnectedCallback(){
        console.log('I am a disconnectedCallback From Parent');
    }

    errorCallback(error, stack){
        console.log('Error catch form child by parent');  // errorcallback catches error of child
        console.error(error.message);
        console.log(stack);
    }
}

/*1. Parent Constructor        // with error 
2. Parent connectedCallback
3. Child Constructor
4. Child connectedCallback
5. Error occurs in Child
6. Parent errorCallback catches error
7. Parent renderedCallback*/


/*1. Parent constructor
2. Parent connectedCallback
3. Child constructor
4. Child connectedCallback
5. Child renderedCallback
6. Parent renderedCallback*/   // without error 