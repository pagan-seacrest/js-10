"use strict";


const pass = document.getElementById("pass");
const passConfirm = document.getElementById("pass-confirm");
const label = document.getElementsByClassName("input-wrapper")[1];
const span = document.createElement("span");
span.textContent = "Нужно ввести одинаковые значения"
span.style.cssText = "display: none; color: red"
label.append(span);

const confirm = document.getElementsByClassName("btn")[0];

confirm.addEventListener("click", () => {
    passConfirm.value !== pass.value ? span.style.display = "flex" : span.style.display = "none";
    pass.value === passConfirm.value && (pass.value !== "" || passConfirm.value !== "") ? alert("You are welcome!") : false;
});

const opened = document.getElementsByClassName("icon-password")[0];
const hidden = document.getElementsByClassName("icon-password")[1];
const opened2 = document.getElementsByClassName("icon-password")[2];
const hidden2 = document.getElementsByClassName("icon-password")[3];



opened.addEventListener("click", function hideFirst() {
    pass.type = "text";
    hidden.style.display = "inline";
    opened.style.display = "none";
    hidden.addEventListener("click", openFirst);

});

function openFirst() {
    pass.type = "password";
    opened.style.display = "inline";
    hidden.style.display = "none";
}

opened2.addEventListener("click", function hideSecond() {
    passConfirm.type = "text";
    hidden2.style.display = "inline";
    opened2.style.display = "none";
    hidden2.addEventListener("click", openSecond);
});

function openSecond() {
    passConfirm.type = "password";
    opened2.style.display = "inline";
    hidden2.style.display = "none";
}


pass.addEventListener("blur", () => {
    if (pass.value === "") {
        opened.style.display = "inline";
        hidden.style.display = "none";
        pass.type = "password";
    }
});
passConfirm.addEventListener("blur", () => {
    if (passConfirm.value === "") {
        opened2.style.display = "inline";
        hidden2.style.display = "none";
        passConfirm.type = "password";
    }
});