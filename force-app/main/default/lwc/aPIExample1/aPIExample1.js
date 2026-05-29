import { LightningElement, api} from 'lwc';

export default class APIExample1 extends LightningElement {
    @api name01 = 'Janhavi';
    @api obj={
        lastName:'JK',
        age:20
    }
}