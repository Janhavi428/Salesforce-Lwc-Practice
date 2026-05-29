import { LightningElement } from 'lwc';

export default class World extends LightningElement {
    // Your properties and methods go here
    name = ' ';
    age = 0;
    gender = '';

   UserInfo(event) {
    this[event.target.name] = event.target.value ;  //this is for trigger the event and access the fields 
}                                                 //[event.target.name] use to target the (name) var....we have used name var in html for refernce 
                                                  //to js variables the event is triggerd those var

demo = {
    Password : '',
    Email : ''
}

changeName(event){
    this.demo = {...this.demo, [event.target.name] : event.target.value }  // to access the records in object to html through event we use
}                                                                         // spread operator(...) <--this is how we use spread op

HandleClick() {
    alert('Your Information is submitted')
}
}