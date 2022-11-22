/// <reference types="Cypress" />


describe('Handle Tables', () => {
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()
        //Customers-->Customers

        cy.get("#menu-customer > a").click()      //this will click on the customer's main menu
        // this also works cy.get("#menu-customer > a.parent").click()

        cy.get("li#menu-customer>ul>li:first-child").click() //customers child item
    })


    it('Check Number Rows & Columns', () => {
        cy.get("table[class='table table-bordered table-hover'] > tbody > tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover'] > thead > tr> td").should('have.length', 7)
    })


    it('Check cell data from specific row & Column', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(6)>td:nth-child(3)").contains('rs@yopmail.co')
    })


    it('Read all the rows & Columns data in the first page', () => {
        cy.get("table[class='table table-bordered table-hover'] > tbody > tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })
    })

    it('Pagination', () => {
        //writing logic for finding total number of pages
        /*let totalPages;
        cy.get("div.col-sm-6.text-end").then((x) => {
            let pagetext = x.text(); //Showing 1 to 10 of 7112 (712 Pages)
            let totalPages = pagetext.substring(pagetext.indexOf("(") + 1, pagetext.indexOf("Pages") - 1);
            cy.log("Total number of pages in a table======>" + totalPages);
        })
        */

        
        let totalPages=5;
        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1)
            {
                cy.log("Active page is==="+p)
                
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000)

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row,index,$rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text()); //Email
                        })
                    })
                })
            }
        }
    })
})




describe('Table assignment1', () => {

    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()
        //Customers-->Customers

        cy.get("#menu-customer > a").click()      //this will click on the customer's main menu
        // this also works cy.get("#menu-customer > a.parent").click()

        cy.get("li#menu-customer>ul>li:first-child").click() //customers child item
    })


    it('edit customer details', () => {
        /*
        cy.get("table[class='table table-bordered table-hover'] > tbody > tr:nth-child(1) > td:nth-child(7)").within(() =>{
             cy.get('a.btn.btn-primary').click()
        })
         */

        //use this above (or)

        // cy.get("table[class='table table-bordered table-hover'] > tbody > tr:nth-child(1) > td:nth-child(7)").find('a.btn').click()

        //use this above (or)

        cy.get("table[class='table table-bordered table-hover'] > tbody > tr:nth-child(1) > td:nth-child(7) > div > a.btn").click()

        //use this above as they all are different ways to achieve same task of editing a data

        cy.get("#input-store").select('Default')
        cy.get("#input-customer-group").select('Default')
        cy.get("input[name='firstname']").clear().type('Bob')
        cy.get("input[name='lastname']").clear().type('Marley')
        cy.get("input[name='email']").clear().type("bombarley@sing.com")
        cy.get("input[name='telephone']").type('1234567890')
        cy.get("input[name='password']").type('bobmpswd')
        cy.get("input[name='confirm']").type('bobmpswd')
        cy.get("input[name='newsletter']").uncheck()
        cy.get("input[name='status']").uncheck()
        cy.get("input[name='safe']").check()
        cy.get("button[form='form-customer']").click()
    })


    it('create customer', () => {
        //add new 
        cy.get(".float-end > a.btn").click()
        //General
        cy.get("#input-store").select('Default')
        cy.get("#input-customer-group").select('Default')
        cy.get("input[name='firstname']").clear().type('Bob')
        cy.get("input[name='lastname']").clear().type('Marley')
        cy.get("input[name='email']").clear().type("bombarley@sing.com")
        cy.get("input[name='telephone']").type('1234567890')
        cy.get("input[name='password']").type('bobmpswd')
        cy.get("input[name='confirm']").type('bobmpswd')
        cy.get("input[name='newsletter']").uncheck()
        cy.get("input[name='status']").uncheck()
        cy.get("input[name='safe']").check()
        //   put this in the last cy.get("button[form='form-customer']").click()

        //Addresses
        cy.get("li.nav-item > a[href='#tab-address']").click()
        cy.get("button#button-address").click()
        cy.get("input[name='address[0][firstname]']").type('Bob')
        cy.get("input[name='address[0][lastname]']").type('Marley')
        cy.get("input[name='address[0][company]']").type('90studios')
        cy.get("input[name='address[0][address_1]']").type('Church Street')
        cy.get("input[name='address[0][address_2]']").type('Graffitti Road')
        cy.get("input[name='address[0][city]']").type('South Carolina')
        cy.get("input[name='address[0][postcode]']").type('123456')
        cy.get("select[name='address[0][country_id]']").select('United States')
        cy.get("select[name='address[0][zone_id]']").select('California')
        cy.get("input[type='radio']").check()

        cy.get("button#button-address").click()
        cy.wait(1000)
        cy.get("fieldset#address-row-1 > legend > button.btn.btn-danger.btn-sm.float-end").click()

        //Payment Methods
        cy.get("li.nav-item > a[href='#tab-payment']").click()
        cy.get("div#tab-payment > fieldset > legend").contains('Payment Methods')

        //History
        cy.get("li.nav-item > a[href='#tab-history']").click()
        cy.get("div#tab-history > fieldset > legend").contains('History')
        cy.get("div#tab-history > form > fieldset > legend").contains('Add History')
        cy.get("textarea.form-control").type('Right here right now this is my comment')
        cy.get("button#button-history").click()
        cy.get('div#alert >div.alert > button.btn-close').click()

        //Transactions
        cy.get("li.nav-item > a[href='#tab-transaction']").click()
        cy.get("div#tab-transaction > fieldset > legend").contains('Transactions')
        cy.get("div#tab-transaction > form > fieldset > legend").contains('Add Transaction')
        cy.get("form#form-transaction > fieldset > div.row.mb-3 > div > input[name='description']").type("Adding new transaction here")
        cy.get("input[name='amount']").type('1234')
        cy.get("button#button-transaction").click()
        cy.get('div#alert >div.alert > button.btn-close').click()

        //Reward Points
        cy.get("li.nav-item > a[href='#tab-reward']").click()
        cy.get("div#tab-reward > fieldset > legend").contains('Reward Points')
        cy.get("div#tab-reward > form > fieldset > legend").contains('Add Reward Points')
        cy.get("form#form-reward > fieldset > div.row.mb-3 > div > input[name='description']").type("Adding new reward points here")
        cy.get("div.row.mb-3 > div > input[name='points']").type('20')
        cy.get("button#button-reward").click()
        cy.get('div#alert >div.alert > button.btn-close').click()

        //IP Addresses
        cy.get("li.nav-item > a[href='#tab-ip']").click()
        cy.get("div#tab-ip > fieldset > legend").contains('IP')

        //Save button
        cy.get("button[form='form-customer']").click()
        cy.get('div#alert >div.alert > button.btn-close').click()
    })
})