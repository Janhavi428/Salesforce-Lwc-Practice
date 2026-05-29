import { LightningElement, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/DataTable.getContacts';
import { NavigationMixin } from 'lightning/navigation';
export default class DataTable extends NavigationMixin(LightningElement) {

    dataList = [];  // Stores contact records coming from Apex

    @track actions = [ // Action buttons for each row in datatable
        { label: "View", name: "view" },   // to give actions of view and edit record
        { label: "Edit", name: "edit" }
    ]
    @track columnsList = [
        { label: "Contact Name", fieldName: "Name" },   
        { label: "Contact Phone no", fieldName: "Phone" },
        { label: "Contact Email", fieldName: "Email" },
        {
            type: 'action',
            typeAttributes: {            // here to add view and edit controls we implement all this
                rowActions: this.actions,  // here i take the this.actions to enable the controls 
                menuAlignment: 'right'    
            }
        }
    ]

    @wire(getContacts) // fetched apex method using wire 
    wiredContact({ data, error }) {
        if (data) {
            this.dataList = data;  // add data coming from apex to the datalist array
        } 
        else if (error) {
            console.log(JSON.stringify(error));
        }
    }

    handleRowAction(event) {
        const row = event.detail.row;  // event.detail.row → gives the complete record (current row data) on which the button was clicked

        // If View button is clicked
        if (event.detail.action.name == 'view') {

            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {                  // if just want to view record it will go on this event.detail.action.name == 'view' condition after click on view 
                    recordId: row.Id,
                    actionName: 'view'
                }
            });
        }

        // If Edit button is clicked
        if (event.detail.action.name == 'edit') {

            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {                      // if just want to edit record it will go on this event.detail.action.name == 'edit' condition after click on edit
                    recordId: row.Id,
                    objectAPIName: 'Contact',
                    actionName: 'edit'
                }
            });
        }
    }
}