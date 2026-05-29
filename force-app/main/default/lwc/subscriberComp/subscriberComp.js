import { LightningElement, wire } from 'lwc';
import {MessageContext, subscribe} from 'lightning/messageService';  // Import LMS methods
import MSG_CHANNEL from '@salesforce/messageChannel/MessageChannelSample__c'   // Import Message Channel

export default class SubscriberComp extends LightningElement {
   
    Fname='';
    Lname='';
      
    @wire (MessageContext) messageContext; // Creates Message Context required for LMS

    connectedCallback(){           // Runs automatically when component loads
        this.subscribeMethod();   // Call subscribe method
    }

    // Method to subscribe to Message Channel
    subscribeMethod(){

        // Subscribe to the channel
        subscribe(this.messageContext, MSG_CHANNEL, 
            (payload) => {    // Callback function receives published data
                
                this.Fname = payload.FirstName;   // Store received First Name
                          
                this.Lname = payload.LastName;   // Store received Last Name
            }
        )
    }

}