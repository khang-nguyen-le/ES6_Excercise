'use strict'

// Hàm bỏ dấu tiếng Việt
export default function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

// Sự kiện mở modal Add User
document.getElementById('btnUserModal').addEventListener('click', () => {
    document.getElementById('userModalLabel').textContent = 'Add User';
    document.getElementById('btnUpdate').style.display = 'none';
    document.getElementById('btnAdd').style.display = 'block';
    document.getElementById('id').disabled = false;
    document.getElementById('position').disabled = false;
})

// Sự kiện đóng modal khi click nút close
document.getElementById('btnClose').onclick = function () {
    document.getElementById('userForm').reset()
    document.querySelector('.studentProps').classList.remove('show')
    document.querySelector('.employeeProps').classList.remove('show');
    document.querySelector('.customerProps').classList.remove('show');
    document.querySelector('.averScore').classList.remove('show');
    document.querySelector('.salary').classList.remove('show');
}
document.querySelector('.btn-close').onclick = function () {
    document.getElementById('userForm').reset()
    document.querySelector('.studentProps').classList.remove('show')
    document.querySelector('.employeeProps').classList.remove('show');
    document.querySelector('.customerProps').classList.remove('show');
    document.querySelector('.averScore').classList.remove('show');
    document.querySelector('.salary').classList.remove('show');
}

// Hàm close và reset modal
export function closeModal(props) {
    document.getElementById('btnClose').click();
    document.getElementById('userForm').reset();
    document.querySelector(props).classList.remove('show')
}

// Sự kiện hiển thị các thuộc tính theo chức vụ trong modal
let position = document.getElementById('position');

function posChanged() {
    let positionVal = position.value,
        studentProps = document.querySelector('.studentProps'),
        employeeProps = document.querySelector('.employeeProps'),
        customerProps = document.querySelector('.customerProps');

    if (positionVal === 'Student') {
        studentProps.classList.add('show')
        employeeProps.classList.remove('show')
        customerProps.classList.remove('show')
    }
    else if (positionVal === 'Employee') {
        studentProps.classList.remove('show')
        employeeProps.classList.add('show')
        customerProps.classList.remove('show')
    }
    else if (positionVal === 'Customer') {
        studentProps.classList.remove('show')
        employeeProps.classList.remove('show')
        customerProps.classList.add('show')
    }

}

position.addEventListener("change", posChanged);