it("A valid user can login", () =>{

    cy.visit("https://badmintonronda.es/cocktail/index.php")
    cy.get(" button:nth-child(1) > a").click()
    cy.get('.inputNombre > input').type("name =julia")
    cy.get(' div.input-box.inputContraseña > input[type=password]').type("julia")
   cy.get('")').click()


})
