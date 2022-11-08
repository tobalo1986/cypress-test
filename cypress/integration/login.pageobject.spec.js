/// <reference types="cypress" />

import {Mainpage} from "../page-objects/main"
import {Loginpage}from"../page-objects/login"
import {Welcomepage} from"../page-objects/welcome"

describe ("test de login",() => {
    const loginpage = new Loginpage()
    const mainpage = new Mainpage()
    const welcomepage = new Welcomepage()


 beforeEach(() => {
        mainpage.navigate()
        mainpage.clickloginoption()})
    

    it("a valid user can login",()=>{
        loginpage.filluser("tomsmith")
        loginpage.fillpass("SuperSecretPassword!")
        loginpage.clickbuttonlogin()
        welcomepage.checkmessage("You logged into a secure area!")})
    
        it("a not valid user can`t login",()=>{
            loginpage.filluser("123")
            loginpage.fillpass("SuperSecretPassword!")
            loginpage.clickbuttonlogin()
            welcomepage.checkmessage("Your username is invalid!")})
    
            it("a valid user can`t login with a not valid password",()=>{
                loginpage.filluser("tomsmith")
                loginpage.fillpass("12345")
                loginpage.clickbuttonlogin()
                welcomepage.checkmessage("Your password is invalid!")})
    
                it("a user try login with empty fields ",()=>{

                    loginpage.filluserclear()
                    loginpage.fillpassclear()
                    loginpage.clickbuttonlogin()
                    welcomepage.checkmessage("Your username is invalid!")

                })
    



    })

       

   

