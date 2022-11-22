/// <reference types="Cypress" />


describe('Login page tests', ()=>{
    beforeEach('home page',()=>{
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    })
    it("Title Verification",()=>{
        cy.title().should('eq',"XYZ Bank")
    })

    it('Page Heading',()=>{
        cy.get("strong.mainHeading").contains('XYZ Bank')
    })

    it('Page Buttons',()=>{
        
        //Home
        cy.get('button.btn.home').should('be.visible').contains('Home').click()

        //Customer Login
        cy.get("button[ng-click='customer()']").should('be.visible').contains('Customer Login').click()

        //Bank Manager Login
        cy.get("button[ng-click='manager()']").should('be.visible').contains('Bank Manager Login').click()
    })
})

describe.only('Customer Login',()=>{
    
    beforeEach('customer login page',()=>{
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
        cy.get("button[ng-click='customer()']").should('be.visible').contains('Customer Login').click()
        //cy.get("div[class='form-group']>label").should('be.visible').contains('Your Name :')
    

        //cy.get("select[name='userSelect']>option").contains('---Your Name---')
        //cy.get("select[name='userSelect']>option").select('Harry Potter').should('have.value', 'Harry Potter')
        cy.get("#userSelect").select('Harry Potter').should('contain','Harry Potter')
        cy.get("button[type='submit']").should('be.visible').click()
    })

    it('test1-check name',()=>{
        cy.get("span.fontBig.ng-binding").should('contain','Harry Potter')
        //cy.get()
    })

    it('test2-home button',()=>{
        cy.get("button.btn.home").click().then((x)=>{
            cy.url().should('eq',"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")

        //this tests whether clicking the home button would take to the home page or not by comparing the url of the page after redirection
        })
    })

    
    // it('test2-home button',()=>{

    // })
    // it('test2-home button',()=>{

    // })
    // it('test2-home button',()=>{

    // })
    // it('test2-home button',()=>{

    // })
    // it('test2-home button',()=>{

    // })
    // })    
})
