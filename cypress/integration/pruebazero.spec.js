it("validar pagina de inicio", () =>  {

cy.visit("http://zero.webappsecurity.com/")
cy.get('.active > img').should("be.visible")
cy.get('.active > .custom > h4').contains("Online Banking")


})