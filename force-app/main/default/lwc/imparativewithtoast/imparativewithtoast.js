import { LightningElement } from 'lwc';
import createCon from '@salesforce/apex/CreateConLwc.createCon';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WireImperative extends LightningElement {
 
    Lname;

    Lastname(event) {
        this.Lname = event.target.value;
    }

    showNotification(title, msg, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: msg,
            variant: variant
        });
        this.dispatchEvent(event);
    }

    async handleClick() {
        await createCon({
            Lname: this.Lname,
            accId: '001g500000DD92pAAD'
        })
        .then(() => {
            this.showNotification(
                'Contact Created',
                'Contact has been created',
                'success'
            );
        })
        .catch(error => {
            this.showNotification(
                'Error',
                'Enter Your Last name',
                'error'
            );
            console.log(JSON.stringify(error));
            console.log(error.body.pageErrors[0].message);
        });
    }
}