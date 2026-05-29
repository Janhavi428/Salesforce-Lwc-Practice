import { LightningElement, track, wire } from 'lwc';

import getAccount from '@salesforce/apex/AccConControllwc.getAccount';
import getcontact from '@salesforce/apex/AccConControllwc.getcontact';

export default class WireExample03 extends LightningElement {

    @track contacts;
    selectedAccountId;

    // Get Accounts
    @wire(getAccount)
    accounts;  // wire as property when we use this -> if we want to retrive data as it is

    // Get Contacts (Reactive)
    @wire(getcontact, { accountId: '$selectedAccountId' })
    wiredContacts({ data, error }) {   // wire as a function -> used when -> if we want to process the retrived data or want to handle result and error
        if (data) {
            this.contacts = data;
        } else if (error) {
            console.error(error);
        }
    }

    // Handle Click
    handleAccountClick(event) {     
       this.selectedAccountId = event.target.dataset.id;  // we used target.dataset here because took data-id in html 
}
}