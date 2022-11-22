
describe('Alerts', ()=>{
    //1) Javascript Alert: It will have some text and an 'OK' button
    it('Js Alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //alert window automatically closed by cypress

        cy.get("p[id='result']").should('have.text','You successfully clicked an alert')
    })

    //2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it('Js confirm alert - OK',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Confim')

        })

        //cypress automatically closed the alert window by using ok button

        cy.get("p[id='result']").should('have.text','You clicked: Ok')
    }) 
    
    it('Js confirm alert - Cancel',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Confim')

        })
        
        cy.on('window:confirm',()=> false)

        //cypress closes the alert window by using cancel button

        cy.get("p[id='result']").should('have.text','You clicked: Cancel')
    }) 
    
    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'
    it('Js prompt alert', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()

        //cypress will automatically close prompted alert - it will use OK button - by default

        cy.get("#result").should('have.text','You entered: welcome')
        
    })

    //4) Authenticated Alert
})