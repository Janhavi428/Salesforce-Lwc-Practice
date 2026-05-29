import { LightningElement, api } from 'lwc';
import createCon from '@salesforce/apex/CreateConLwc.createCon';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WireImperative extends LightningElement {

    Lname;
    @api recordId;

    Lastname(event) {
        this.Lname = event.target.value;      
    }

    
    // ✅ Correct function name
    showNotification(title, msg, variant) {  // Reusable Toast Method, Used to display success or error messages.
        const event = new ShowToastEvent({  // create toast event 
            title: title,
            message: msg,
            variant: variant
        });
        this.dispatchEvent(event);  // Dispatch event to show toast
    }


//async and await are used to handle asynchronous operations in JavaScript. 

    async handleClick() {   // async : This function contains asynchronous code
        await createCon({  // Wait until Apex method finishes {wait until this particular process finishes}     
            lname: this.Lname,
            accid: this.recordId // parameters
        })
            .then(() => {   // Runs if record created successfully

                this.showNotification(
                    'Contact Created',
                    'Contact has been created',
                    'success'
                );
            })
            .catch(error => { // Runs if error occurs

                this.showNotification(
                    'Error',
                    'Enter Your Last name',
                    'error'
                );
                console.log(JSON.stringify(error)); // Print complete error object
                console.log(error.body.pageErrors[0].message); // Print Salesforce page error message
            });
    }
}

