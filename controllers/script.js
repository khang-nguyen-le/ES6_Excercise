'use strict'

import Person from "../models/Person.js";
import Student from "../models/Student.js";
import Employee from "../models/Employee.js";
import Customer from "../models/Customer.js";
import ListPerson from "../models/ListPerson.js";
import removeAscent from "./helper.js";
import { closeModal } from "./helper.js";

// Sự kiện thêm người dùng
let listPerson = new ListPerson();

listPerson.getLocal();

document.getElementById('btnAdd').addEventListener('click', () => {


    let positionVal = position.value;

    if (positionVal === 'Student') {

        let arrInputStu = document.querySelectorAll('#id, #userName, #address, #email, #position, #mathScore, #physicsScore, #chemistryScore');

        let student = new Student();

        for (let item of arrInputStu) {
            let { id, value } = item;

            student[id] = value;
        }

        listPerson.addPerson(student);

        listPerson.renderPerson();

        listPerson.saveLocal();

        closeModal('.studentProps');
    }
    else if (positionVal === 'Employee') {
        let arrInputEmp = document.querySelectorAll('#id, #userName, #address, #email, #position, #dayWork, #dailyWage');

        let employee = new Employee();

        for (let item of arrInputEmp) {
            let { id, value } = item;

            employee[id] = value
        }

        listPerson.addPerson(employee);

        listPerson.renderPerson();

        listPerson.saveLocal();

        closeModal('.employeeProps');
    }
    else {
        let arrInputCus = document.querySelectorAll('#id, #userName, #address, #email, #position, #company, #orderValue, #comment');

        let customer = new Customer();

        for (let item of arrInputCus) {
            let { id, value } = item;

            customer[id] = value
        }

        listPerson.addPerson(customer);
        console.log(listPerson)

        listPerson.renderPerson();

        listPerson.saveLocal();

        closeModal('.customerProps');
    }
})

// Sự kiến xóa người dùng
window.deletePerson = (idPerson) => {
    listPerson.deletePerson(idPerson)
}

// Sự kiện lấy dữ liệu để cập nhật người dùng
window.editPerson = (idPerson) => {
    listPerson.editPerson(idPerson)
}

// Sự kiện cập nhật người dùng
document.getElementById('btnUpdate').addEventListener('click', () => {
    let positionVal = position.value;

    if (positionVal === 'Student') {

        let arrInputStu = document.querySelectorAll('#id, #userName, #address, #email, #position, #mathScore, #physicsScore, #chemistryScore');

        let student = new Student();

        for (let item of arrInputStu) {
            let { id, value } = item;

            student[id] = value;
        }

        listPerson.updatePerson(student);

        closeModal('.studentProps');
    }
    else if (positionVal === 'Employee') {
        let arrInputEmp = document.querySelectorAll('#id, #userName, #address, #email, #position, #dayWork, #dailyWage');

        let employee = new Employee();

        for (let item of arrInputEmp) {
            let { id, value } = item;

            employee[id] = value
        }

        listPerson.updatePerson(employee);

        closeModal('.employeeProps');
    }
    else {
        let arrInputCus = document.querySelectorAll('#id, #userName, #address, #email, #position, #company, #orderValue, #comment');

        let customer = new Customer();

        for (let item of arrInputCus) {
            let { id, value } = item;

            customer[id] = value
        }

        listPerson.updatePerson(customer);

        closeModal('.customerProps');
    }
})

// Hàm sắp xếp tên user
window.sortTable = (colNum) => {
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0,
        table = document.querySelector('.table-user');

    switching = true;
    dir = "asc";

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[colNum];
            y = rows[i + 1].getElementsByTagName("TD")[colNum];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            switchcount++;
        } else {

            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// Hàm lọc đối tượng theo chức vụ
window.filterPosition = () => {
    let sortValue = document.getElementById('userSort').value,
        userTable = document.querySelector('.table-user'),
        userTr = userTable.getElementsByTagName('tr'),
        userTd, userText;

    for (let i = 0; i < userTr.length; i++) {
        userTd = userTr[i].getElementsByTagName('td')[1]
        if (userTd) {
            userText = userTd.textContent;

            if (sortValue == 'All') {
                userTr[i].style.display = "";
            } else if (sortValue === userText) {
                userTr[i].style.display = "";
            } else {
                userTr[i].style.display = "none";
            }
        }
    }
}

// Hàm tìm kiếm đối tượng
window.searchPerson = () => {
    let searchInput = document.getElementById('userSearch'),
        filterInput = searchInput.value.toUpperCase(),
        userTable = document.querySelector('.table-user'),
        userTr = userTable.getElementsByTagName('tr'),
        userTd, userText, userTextAscent;

    for (let i = 0; i < userTr.length; i++) {
        userTd = userTr[i].getElementsByTagName('td')[0]
        if (userTd) {
            userText = removeAscent(userTd.textContent);
            userTextAscent = userTd.textContent;

            if ((userText.toUpperCase().indexOf(filterInput) > -1) || (userTextAscent.toUpperCase().indexOf(filterInput) > -1)) {
                userTr[i].style.display = "";
            } else {
                userTr[i].style.display = "none";
            }
        }
    }
}

// Sự kiện xem thông tin đối tượng 
window.infoPerson = (idPerson) => {
    listPerson.infoPerson(idPerson)
}
