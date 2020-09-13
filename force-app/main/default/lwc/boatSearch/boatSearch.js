import { LightningElement, track } from 'lwc';

export default class BoatSearch extends LightningElement {
    @track boatTypeId = '';

    handleTypeSelect(event) {
        console.log('inside event');
        console.log('inside event - details ',event.detail);
        this.boatTypeId = event.detail;
    }

}

//to do
//   create button
//   on boatDetail full details button