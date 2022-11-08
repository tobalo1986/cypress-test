export class Loginpage{

    filluser(text){
        cy.get('#username').type(text)}


    fillpass(text){
        cy.get('#password').type(text)

    }  
    clickbuttonlogin(){
        cy.get('.fa').click()
    }

    fillpassclear(){
        cy.get('#password').clear()  
    }

    filluserclear(){
        cy.get('#username').clear() 

    }


}



