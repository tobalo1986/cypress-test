it("A valid user can login", () =>{
cy.visit('https://the-internet.herokuapp.com/')
cy.get(':nth-child(9) > a').click()
cy.get("li").should("have.length",4)
cy.get(':nth-child(3) > a').click()
cy.get('h1').contains("Not Found")



})