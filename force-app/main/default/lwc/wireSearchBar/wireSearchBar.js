import { LightningElement, wire } from 'lwc';

// Import Apex method
import getAccount from '@salesforce/apex/AccConControllwc.getAccount1';

export default class Wire04 extends LightningElement {

    // Variable used for storing search text
    accName='';

    // Runs whenever user types in search box
    inputChange(event){
        this.accName = event.target.value;   // Store input value inside accName
    }


    @wire(getAccount,{name : '$accName'})     // Wire method calls Apex automatically
                                              // '$accName' makes it reactive
                                              // Whenever accName changes, Apex runs again

    account;     // account contains:
                 // account.data  -> success data
                 // account.error -> error data

}