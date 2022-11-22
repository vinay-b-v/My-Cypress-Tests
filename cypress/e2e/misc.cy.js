let lastNo = 6;
        cy.get("input.form-check-input[type='checkbox']")
        .then((listing) => {
            const listingCount = Cypress.$(listing).length;
            console.log("count",listingCount)
             let pos = listingCount - lastNo; 
             for(let i = pos;i<listingCount; i++){
                cy.get("input.form-check-input[type='checkbox']").eq(i).check()
             }
            })