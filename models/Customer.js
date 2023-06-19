import Person from "./Person.js";

export default class Customer extends Person {
    constructor(id, userName, position, address, email) {
        super(id, userName, position, address, email)
        this.company = '';
        this.orderValue = 0;
        this.comment = '';
    }
}