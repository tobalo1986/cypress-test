
it("the shifting content have five element in the menu 1", () =>{
cy.visit ("https://the-internet.herokuapp.com/")
cy.get(':nth-child(39) > a').click ()
cy.get('[href="/shifting_content/menu"]').click ()
cy.get(':nth-child(1) > a').contains ("Home")
cy.get(':nth-child(7) > :nth-child(2) > a').contains ("About")
cy.get(':nth-child(7) > :nth-child(3) > a').contains ("Contact Us")
cy.get(':nth-child(7) > :nth-child(4) > a').contains ("Portfolio")
cy.get('.shift').contains ("Gallery")
cy.get(':nth-child(7) >').should('have.length', 6)})
it("the shifting content have five element in the menu 1 (2)", () => {
     cy.get(".shift", { includeShadowDom: true })
     cy.get(':nth-child(1) > a',{ includeShadowDom: true })
     cy.get(':nth-child(7) > :nth-child(2) > a',{ includeShadowDom: true })
cy.get(':nth-child(7) > :nth-child(3) > a',{ includeShadowDom: true })
cy.get(':nth-child(7) > :nth-child(4) > a',{ includeShadowDom: true })
cy.get('.shift',{ includeShadowDom: true })
cy.get(':nth-child(7) > ',{ includeShadowDom: true }).should('have.length', 5)})











     