/// <reference types="Cypress" />

describe('handle dropdowns', () => {

    it.only('Dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Italy').should('have.value', 'Italy')

    })

    it.skip('Dropdown without select also called bootstrap element', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('span#select2-billing_country-container').click()
        cy.get('input.select2-search__field').type('Italy').type('{enter}')
        cy.get('span#select2-billing_country-container').should('have.text', 'Italy')

    })

    it('Auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('input#searchInput').type('Delhi')
        //writing wait so that I give time for the system to load the results and hence do further automation operations.
        cy.wait(500)
        cy.get('h3.suggestion-title').contains('Delhi University').click()


    })

    it('Dynamic dropdown', () => {
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length', 11)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })
        cy.get("input[name='q']").should('have.value', 'cypress automation tutorial')

    })

}) 