import { LightningElement, wire} from 'lwc';
import {MessageContext, publish} from 'lightning/messageService';  // Import LMS methods
import MSG_CHANNEL from '@salesforce/messageChannel/MessageChannelSample__c';  // Import Message Channel

export default class PublisherComp extends LightningElement {

    Fname = '';
    Lname = '';

    @wire (MessageContext) messageContext;  // Creates Message Context required for LMS

    handlechange(event){
        this[event.target.name] = event.target.value;
    }

    handleClick(event){
        //send data to subscriber
        const payload = {FirstName : this.Fname, LastName : this.Lname};  // Create payload object to send data FirstName these names from message channel
        publish(this.messageContext, MSG_CHANNEL, payload)  // Publish message to Message Channel
    }
}