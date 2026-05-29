import { LightningElement, wire } from 'lwc';

import getAcc from '@salesforce/apex/ReturnAccount.getAccounts';

export default class WireExample extends LightningElement {

    accounts;
    @wire(getAcc)                 
     wiredAccount({data, error}){     // wire as a function  
        if(data){
            this.accounts = data   // this.accounts - to store data come from apex method
        }
        if(error){         // shows error if error occurs
            console.log('Error is coming' + error.body.message);
        }

    }
}

// can we write wire in connected callback() method? 
// No.. we cannot write wire in any lifecycle hook or in any js method, we use wire to call apex 
// wire called automatically everytime when component runs 