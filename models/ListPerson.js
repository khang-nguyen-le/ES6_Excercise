import Student from "./Student.js";
import Employee from "./Employee.js";
import Customer from "./Customer.js";
import Person from "./Person.js";

export default class ListPerson {
    constructor() {
        this.arrListPerson = [];
    }

    // Thêm user vào mảng user
    addPerson(person) {
        this.arrListPerson.push(person)
    }

    //Render danh sách user
    renderPerson() {
        let content = this.arrListPerson.map(item => {
            let person = new Person();
            Object.assign(person, item);

            let { id, userName, position, address, email } = person;

            return `
                <tr>
                    <th scope="row">${id}</th>
                    <td>${userName}</td>
                    <td><span class="badge text-bg-success">${position}</span></td>
                    <td>${email}</td>
                    <td>${address}</td>
                    <td>
                        <button id="btnEdit" class="btn btn-edit" data-bs-toggle="modal"
                        data-bs-target="#userModal" onclick="editPerson('${id}')">
                            <i class="fa fa-pencil-alt btn-edit-icon"></i>
                        </button>
                        <button id="btnDelete" class="btn btn-delete" onclick="deletePerson('${id}')">
                            <i class="fa fa-trash-alt btn-delete-icon" ></i>
                        </button>
                        <button id="btnInfo" class="btn btn-infor">
                            <i class="fa fa-info btn-infor-icon"></i>
                        </button>
                    </td>
                </tr>
                `
        })
        document.querySelector('.userList').innerHTML = content.join('');
    }

    // Lưu dữ liệu trong browser
    saveLocal() {
        localStorage.setItem('arrListPerson', JSON.stringify(this.arrListPerson))
    }

    // Lấy dữ liệu trong browser
    getLocal() {
        let listPersonLocal = JSON.parse(localStorage.getItem('arrListPerson'));

        if (listPersonLocal) {
            this.arrListPerson = [...listPersonLocal]
            this.renderPerson()
        }
    }

    // Xóa user
    deletePerson(idPerson) {
        const index = this.arrListPerson.findIndex(item => item.id == idPerson);

        if (index != -1) {
            this.arrListPerson.splice(index, 1);
            this.renderPerson();
            this.saveLocal();
        }
    }

    // Cập nhật user
    editPerson(idPerson) {
        document.getElementById('userModalLabel').textContent = 'Update User';
        document.getElementById('btnUpdate').style.display = 'block';
        document.getElementById('btnAdd').style.display = 'none';
        document.getElementById('id').disabled = true;
        document.getElementById('position').disabled = true;

        let person = this.arrListPerson.find(item => item.id == idPerson)

        if (person.position === 'Student') {
            document.querySelector('.studentProps').classList.add('show')
            document.querySelector('.employeeProps').classList.remove('show')
            document.querySelector('.customerProps').classList.remove('show')

            let arrInputStu = document.querySelectorAll('#id, #userName, #address, #email, #position, #mathScore, #physicsScore, #chemistryScore');

            for (let input of arrInputStu) {
                let { id } = input;
                input.value = person[id]
            }
        }
        else if(person.position === 'Employee') {
            document.querySelector('.studentProps').classList.remove('show')
            document.querySelector('.employeeProps').classList.add('show')
            document.querySelector('.customerProps').classList.remove('show')

            let arrInputEmp = document.querySelectorAll('#id, #userName, #address, #email, #position, #dayWork, #dailyWage');

            for (let input of arrInputEmp) {
                let { id } = input;
                input.value = person[id]
            }
        }
        else {
            document.querySelector('.studentProps').classList.remove('show')
            document.querySelector('.employeeProps').classList.remove('show')
            document.querySelector('.customerProps').classList.add('show')

            let arrInputCus = document.querySelectorAll('#id, #userName, #address, #email, #position, #company, #orderValue, #comment');

            for (let input of arrInputCus) {
                let { id } = input;
                input.value = person[id]
            }
        }
    }

    updatePerson(person) {
        const index = this.arrListPerson.findIndex(item => item.id == person.id);

        if(index !== -1) {
            this.arrListPerson[index] = person;
            this.renderPerson();
            this.saveLocal(); 
        }
    }
}