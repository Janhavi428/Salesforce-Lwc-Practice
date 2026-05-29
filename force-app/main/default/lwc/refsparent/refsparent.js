import { LightningElement } from 'lwc';

export default class ParentComponent02 extends LightningElement {
    
    Name;

    // USING querySelector()
    /*handleClick(){

        // Access child component using CSS selector
        const child = this.template.querySelector('c-child-component-0-2');

         // Call child public method
        child.showMessage();

         // Access child public property
        this.Name = child.name;
    }*/


    //LWC-Refs-------
     // Access child component using lwc:ref
    handleClick02(){
        this.refs.childCalled.showMethod(); // refs is modern method 
        // here we direct access child method with use of childCalled which is refernce we create in parent html using lwc:ref
    }

}