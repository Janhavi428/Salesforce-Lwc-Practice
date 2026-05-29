import { LightningElement, api, wire } from 'lwc';
import {getRecord, getFieldValue } from 'lightning/uiRecordApi';  // Import getRecord and getFieldValue from UI Record API

// Import Account fields
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import AMOUNT_FIELD from '@salesforce/schema/Account.Balance__c'

export default class Wireexample2 extends LightningElement {

    @api recordId;  // Automatically receives current record Id from record page

    @api fields = [NAME_FIELD, INDUSTRY_FIELD, AMOUNT_FIELD];  // Array of fields to fetch from Account object
    
    // Wire adapter to fetch Account record data
    @wire(getRecord, {
        recordId:'$recordId',   // Dynamic record Id
        fields:'$fields'})      // Fields to retrieve from array of fields 
        account;

       // Getter methods to fetch data

        get name() {
            // Extracts Name field value from record data
            return getFieldValue(this.account.data, NAME_FIELD);    

            /*this.account.data → Contains complete record data fetched using getRecord.
              NAME_FIELD  → Reference of Account Name field imported from schema.
              getFieldValue()  → Extracts only the required field value from record data.*/
        }

        get industry() {
            return getFieldValue(this.account.data, INDUSTRY_FIELD);

        }
        
        get balance() {
            return getFieldValue(this.account.data, AMOUNT_FIELD);

        }

    }


/*getRecord
---------------------------------------------------------
Used with @wire to fetch Salesforce record data 
without writing Apex code.*/


/*getFieldValue
---------------------------------------------------------
Used to extract a specific field value 
from the fetched record data.*/