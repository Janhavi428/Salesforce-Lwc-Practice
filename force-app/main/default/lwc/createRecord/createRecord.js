import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import EMAIL_FIELD from '@salesforce/schema/Account.Email_id__c';
export default class CreateRecord extends LightningElement {

    objectApiName = 'Account';  // there are two ways to fetch fields one is using import ,schema and another is directlt take api name in fields
    fields = [NAME_FIELD, 'Phone', INDUSTRY_FIELD, EMAIL_FIELD];  

    handleSuccess(event) {

        //this.showNotification('Submit', 'Record Created Successfully');
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Submit',
                message: 'Record Created ' + event.detail.id,  // event.detail.id because after a record is successfully created, 
                                                                // Salesforce sends the newly created record Id inside the event object.
                variant: 'success'
            })
        );
    }

    /*showNotification(tle, msg, vari){
        const event = new ShowToastEvent({
            title: tle,
            message: msg,
            variant: vari
        });

        this.dispatchEvent(event);
    }*/
}