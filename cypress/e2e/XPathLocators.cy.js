describe('XPathLocators', () =>{
    it('find no of products', () =>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.xpath("//ol[@class='product-items widget-product-grid']/li").should('have.length',6)
    })

    it('chained xpath', () =>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.xpath("//ol[@class='product-items widget-product-grid']").xpath("./li").should('have.length',6)
    })
})