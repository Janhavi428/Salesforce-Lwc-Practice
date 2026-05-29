import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationTypes extends NavigationMixin(LightningElement) {

    navToRecordPage() {

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001gK00000o3fGLQAY',
                objectAPIName: 'Account',
                actionName: 'view'
            }
        });
    }
    navToWebPage() {

        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://login.salesforce.com/?locale=in'
            }
        });
    }

    navtoListView() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "list",
            },
            state: {
                filterName: "AllAccounts" 
            },
        });
    }

}