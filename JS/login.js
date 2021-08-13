"use strict"

let username = document.getElementsByClassName("username")
let password = document.getElementsByClassName("password")
const btn_login = document.getElementById("button_login")
let text_html = document.getElementById("demo")
const btn_register = document.getElementById("button_register")
// const btn_confirm

btn_login.onclick = function login () {
    if (username[0].value == 'hoangthien2003') {
        if (password[0].value == 'baothien2003') {
            confirm(`Welcome ${username[0].value} to the navbar's world ^^`)
            text_html.innerHTML = `Hello ${username[0].value} ^^`
            setTimeout(() => {
                location.href = "file:///home/hoangthien/Desktop/fullstack/basic/main.html"
            }, 1000)
        }
        else {
            alert ('Password wrong! Please try again...')
        }
    }
    else {
        alert ('User cannot found !!')
    }
    username[0].value = ""
    password[0].value = ""
    setTimeout(() => {
        text_html.innerHTML = 'Hello World ^^'
    }, 3000)
}

// btn_login.onclick = login

btn_register.onclick = function register () {
    if (username[0].value == 'hoangthien2003') {
        if (password[0].value == 'baothien2003') {
            confirm(`Welcome ${username[0].value} to the button's world ^^`)
            text_html.innerHTML = `Hello ${username[0].value} ^^`
            setTimeout(() => {
                location.href = "file:///home/hoangthien/Desktop/fullstack/basic/button.html"
            }, 1000)
        }
        else {
            alert ('Password wrong! Please try again...')
        }
    }
    else {
        alert ('User cannot found !!')
    }
    username[0].value = ""
    password[0].value = ""
    setTimeout(() => {
        text_html.innerHTML = 'Hello World ^^'
    }, 3000)
}

// btn_register.onclick = register