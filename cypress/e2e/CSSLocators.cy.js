// const cypress = require("cypress")
describe('CSSLocators', () => {
    it.only("Login", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.wait(5000)
        cy.get("input[name='username']").type('Admin')
        cy.wait(5000)
        cy.get("input[type='password']").type('admin123')
        cy.wait(5000)
        cy.get("button[type='submit']").click()
        cy.wait(1000)
        cy.get("brutton[type='button']").click() 
})
})
  
