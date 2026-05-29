import { LightningElement, api } from 'lwc';

export default class RecordForm extends LightningElement {
    
    @api recordId;

    objectApiName = 'Account';
    fields = ['Name', 'Phone', 'Industry']

}