export class Mainpage{

        navigate(){
        
        
        cy.visit("https://the-internet.herokuapp.com/" )}


            clickloginoption (){
                cy.get(':nth-child(21) > a').click()}

            clickshiftingcontent(){
                cy.get(':nth-child(39) > a').click ()
            }
            clickexample1(){
                cy.get('[href="/shifting_content/menu"]').click ()
            }

    
}