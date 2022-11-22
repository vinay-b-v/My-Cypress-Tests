describe("Mouse Operations",()=>{

    it('MouseHover',()=>{
        cy.visit("https://demo.opencart.com/")

        cy.get("a.nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should('not.be.visible') //to locate the desired sub element (which is mac here) and ensure that it is not visible before the below mousehover action.
        
        cy.get("a.nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']").trigger('mouseover').click() // this is to do mousehover operation on "Desktops" element.
    
        cy.get("a.nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should('be.visible') //to locate the desired sub element (which is mac here) and ensure that it is visible now after the above mousehover action.

    })

    it.only('Right click',()=>{
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")

        //Method1
        cy.get("span.context-menu-one.btn.btn-neutral").trigger('contextmenu') //to get the locator of the element using .get and then perform right click action using 'contextmenu' in .trigger().
        cy.get("li.context-menu-icon-copy").should('be.visible')

        //Method2
        cy.get("span.context-menu-one.btn.btn-neutral").rightclick() //to get the locator of the element using .get and then perform right click action using .rightclick()
    })

    it('Double click',()=>{

    })

    it('Drag and Drop using plugin',()=>{

    })

    it('Scrolling Page',()=>{

    })

})
        