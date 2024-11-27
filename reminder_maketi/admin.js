document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.scroll-up').onclick = scrollToTop;
    // admin.js

// Получаем элементы
var closeBtns = document.getElementsByClassName("close");
var blockuserModal = document.getElementById("Blockuser");
var openBlockuserBtns = document.getElementsByClassName("openBlockuserForm");
const registerSuccessMessage = document.getElementById("registerSuccessMessage");
const registerErrorMessage = document.getElementById("registerErrorMessage");

var addadminModal = document.getElementById("Addadmin");
var openAddadminBtns = document.getElementsByClassName("openAddadminForm");
const registerSuccessMessage2 = document.getElementById("registerSuccessMessage2");
const registerSuccessMessage3 = document.getElementById("registerSuccessMessage3");

// Обработчик для кнопок закрытия
Array.from(closeBtns).forEach(button => {
    button.onclick = function () {
        this.parentElement.parentElement.style.display = "none";
        // Убедитесь, что captchaErrorMessage определен в этом контексте
        if (typeof captchaErrorMessage !== 'undefined') {
            captchaErrorMessage.style.display = "none"; // Скрываем при закрытии
        }
    }
});

// Обработчик для открытия модального окна блокировки пользователя
Array.from(openBlockuserBtns).forEach(button => {
    button.onclick = function () {
        blockuserModal.style.display = "block";
    }
});

// Обработчик для открытия модального окна добавления администратора
Array.from(openAddadminBtns).forEach(button => {
    button.onclick = function () {
        addadminModal.style.display = "block";
    }
});

// Закрытие модальных окон при клике вне их
window.onclick = function (event) {
    if (event.target == blockuserModal || event.target == addadminModal) {
        event.target.style.display = "none";
    }
}

// Обработчик для формы блокировки пользователя
document.getElementById("BlockuserForm").onsubmit = function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    if (email == "admin@gmail.com") {
        registerErrorMessage.style.display = "block";
        registerSuccessMessage.style.display = "none";
    } else {
        registerSuccessMessage.style.display = "block";
        registerErrorMessage.style.display = "none";
    }
};

// Обработчик для формы добавления администратора
document.getElementById("AddadminForm").onsubmit = function (event) {
    event.preventDefault();
    const email = document.getElementById("addadminemail").value;
    if (email == "admin@gmail.com") {
        registerErrorMessage2.style.display = "block";
        registerErrorMessage3.style.display = "none";
        registerSuccessMessage2.style.display = "none";
    } else if (email == "ggadmin@gmail.com") {
        registerErrorMessage3.style.display = "block";
        registerErrorMessage2.style.display = "none";
        registerSuccessMessage2.style.display = "none";
    } else {
        registerSuccessMessage2.style.display = "block";
        registerErrorMessage2.style.display = "none";
        registerErrorMessage3.style.display = "none";
    }
};

});