import Person from "./Person.js"

export default class Student extends Person {
    constructor(id, userName, position, address, email) {
        super(id, userName, position, address, email)
        this.mathScore = 0;
        this.physicsScore = 0;
        this.chemistryScore = 0;
    }
    averScore = () => {
        return (Number(this.mathScore) + Number(this.physicsScore) + Number(this.chemistryScore)) / 3;
    }
}