import Person from "./Person.js";

export default class Employee extends Person {
    constructor(id, userName, position, address, email) {
        super(id, userName, position, address, email)
        this.dayWork = 0;
        this.dailyWage = 0;
    }
    salary = () => {
        return Number(this.dayWork) * Number(this.dailyWage);
    }
}