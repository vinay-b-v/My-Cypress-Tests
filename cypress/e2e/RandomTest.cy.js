describe('MyRandomTest', () => {

    it("New Account", () =>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button.oxd-button").click()

    cy.get("p.oxd-userdropdown-name")
})
})