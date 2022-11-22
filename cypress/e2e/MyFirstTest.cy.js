/*
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

describe('My First Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
    })
})
*/

describe('My First Test', () => {

    it('verify title-positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })

    it('verify title-negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })

    
})