import { LightningElement } from 'lwc';

export default class World extends LightningElement {


name = '';
age = '';
gen = '';
email = '';
pass = '';

flag = false;
display = true;

info(event){
    this[event.target.name]  = event.target.value;
}

handleClick(){
     this.flag = true;
     this.display = false;
}
handleClick02(){
    this.flag = false;
    alert('your information submited successfully');
    
}
} 