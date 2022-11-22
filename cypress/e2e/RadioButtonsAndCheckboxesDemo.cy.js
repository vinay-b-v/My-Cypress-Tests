/// <reference types="Cypress" />

describe('Check UI Elements', () => {
    it('Checking Radio Buttons', () => {

        //visibility of radio buttons
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio buttons

        //checking male
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        //checking female
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

        //checking other
        //cy.get("input#other").check().should('be.checked')
        //cy.get("input#male").should('not.be.checked')
        //cy.get("input#female").should('not.be.checked')
    })

    it.only('Checking Check boxes', () => {


        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // visibility of check box
        // cy.get("input#monday").should('be.visible')

        //Selecting single check box - monday
        // cy.get("input#monday").check().should('be.checked')

        //Unselecting single check box - monday
        // cy.get("input#monday").uncheck().should('not.be.checked')

        //Selecting all the check boxes
        // cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')


        //  cy.get("input.form-check-input[type='checkbox']").eq(2).check()

        let lastnumber = 3
        cy.get("input.form-check-input[type='checkbox']").then((listdata) => {
            const lstlen = Cypress.$(listdata).length
            let pos = lstlen - lastnumber
            console.log(lstlen)
            console.log(pos)
            for (let i = pos; i < lstlen; i++) {
                cy.get("input.form-check-input[type='checkbox']").eq(i).check().should('be.checked')
            }

        })


    });




    //Unselecting all the check boxes
    // cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    // //select first checkbox
    // cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

    // //select last check box
    // cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    // // Unselecting first check box
    // cy.get("input.form-check-input[type='checkbox']").first().uncheck().should('not.be.checked')

    // //Unselecting last checkbox
    // cy.get("input.form-check-input[type='checkbox']").last().uncheck().should('not.be.checked')

    // cy.get("input.form-check-input[type='checkbox']").check(3).should('be.checked')
})
