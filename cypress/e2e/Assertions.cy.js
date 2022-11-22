describe("Assertions demo", () =>{
    it("Implicit assertions", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should and
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        //simpler way of writing the above: you can capture the url just once and then apply multiple .should assertions
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        // we can use .and asssertion keyword instead of multiple .should assertion keywords also
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

        // positive and negative assertions with keywords: contain and not.contain
        cy.url().should('contain','orangehrm')
        .and('not.contain', 'greenhrm')
        
        //title
        cy.title().should('include','range')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        //to check visibility of an element(here it is a logo) with be.visible and to check existence of an element in the page with exist.
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        // Assertion to check number of links 
        cy.xpath("//a").should('have.length',5)

        //assertion to verify the value on the element
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value',"Admin")
    })

    it("Explicit assertions", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="xyz";

        cy.get(".oxd-userdropdown-name").then((x) =>{

            let actName = x.text()

            //BDD Style assertions
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD style assertions
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
}) })