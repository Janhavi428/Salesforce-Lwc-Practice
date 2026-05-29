import { LightningElement, track} from 'lwc';

export default class TrackExample extends LightningElement {

    @track user={
        Name : 'Janhavi',
        age: 23
    }

    myfunc(){
        // this.user = {...this.user, Name:'JK', age:40, city:'Pune'};
        this.user.Name = 'Ritesh'
        // this.user.age =30,     ...... with use of track we can update properties directly but if we want to add anything use spread 
        // this.user.city = 'Pune'       always
    }

    myEvent(event){
        // this.user ={...this.user,[event.target.name]: event.target.value} ....for dynamic values directly do below step no need to spread
        this.user[event.target.name] = event.target.value
    }
}