import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccConControllwc.getAccount';

export default class LifecycleHook extends LightningElement {

    name;
    flag = true;
    accounts = [];   // Array to store Account records

    //Called when component is created 
    constructor() {
        super();     // it is for calls the parent lightning element constructo initialize the component properly setup internal framework feature like reactive system DOM access
        console.log('Constructor called');
    }

    handleClick(){
        this.flag = false;  // Hide component/card
    }

    handleChange(event){
        this.name = event.target.value;  // Stores entered input value
    }

    //Called when component is inserted into DOM
    connectedCallback() {
        console.log('Connected Callback');

        // Call Apex
        getAccounts()
            .then(result => {   // Runs when data received successfully
                this.accounts = result;  // Store records into accounts array
            })
            .catch(error => {   // Runs if error occurs
                console.error(error);
            });
    }

    //Called after rendering
    renderedCallback() {
        console.log('Rendered Callback');
    }

    //Called when component is removed
    disconnectedCallback() {
        console.log('Disconnected Callback');
    }
}
