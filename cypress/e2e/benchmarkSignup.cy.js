

describe("BenchMark Signup", () => {


    beforeEach('Login', () => {
        const t0 = performance.now()
        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.viewport('macbook-15');
        cy.get("#sign_up_btn").click(); //homepage signup button
        cy.wrap(performance.now()).then(t1 => {   // this is now a queued command which will 
            // only run after the previous command
            cy.log(`Page load took ${t1 - t0} milliseconds.`);
        })

    })

    it.skip("valid signup", () => {

        cy.get("#firstName").type("FN8218"); //Firstname field
        cy.get("#lastName").type("LN8218"); //Lastname field
        cy.get("#email").type("apachaury+LN8218@sprout.ph"); //email field
        cy.get("#username").type("LN8218"); //username field
        cy.get("#password").type("Amit@1234"); //password field
        cy.get("#password-confirm").type("Amit@1234"); // confirm password field
        cy.get(".salary-benchmark-primary-button").click(); // signup button
        cy.get("input[type='checkbox']").check().should('be.checked'); // terms and condition checkbox
        cy.get("#signup_continue_btn").click(); // continue button

        cy.get("#signup_job_title_field").type("Sr Cypress Engineer"); //Job title field
        cy.get("#signup_company_field").type("Sprout Solutions"); // company field

        //Click Next button
        cy.get("#signup_next_btn").click();

        //Select industry
        cy.get(".sign-up-industry-container > div:nth-child(2) > div").click();
        cy.get("input[placeholder]").type("Financial and Insurance Activities");
        cy.get(".dropdown-content-container>div>.dropdown-selection").click();
        cy.get(".sign-up-card-header").click();
        // cy.get("input.input-focused").should('have.text', 'Financial and Insurance Activities');

        //Select Company

        cy.get(".sign-up-company-size-container>div>div.benchmark-dropdown").click();
        // cy.get(".dropdown-content-container>div>.dropdown-selection").click();
        // cy.get(".sign-up-industry-container > div:nth-child(2) > div").should('have.text', '');

        //Random int number generator between min and max
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // cy.get('#benchmark_dropdown > div >div') // we get the select/option by finding the select by id
        // .then(listing => {        
        // const randomNumber = getRandomInt(0, listing.length-1); //generate a rendom number between 0 and length-1. In this case 0,1,2
        //         cy.get('#benchmark_dropdown > div >div').eq(randomNumber).then(($select) =>  //choose an option randomly
        //     {              
        //         const text = $select.text()       //get the option's text. For ex. "A"
        //         cy.get('div.dropdown-selection').eq($select) .click();    // select the option on UI
        //         // cy.get(".sign-up-company-size-container>div>div.benchmark-dropdown").should('have.text', text)
        //     });    
        // })
        cy.get('div.dropdown-selection')
            .its('length')
            .then((len) => {
                cy.get('div.dropdown-selection')
                    .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
                    .click()
            })


        //Click on next button
        cy.get(".sign-up-card-header").click();
        cy.get("#signup_next_btn").click();

        //Select the location
        cy.get("div.city-province-region-container > div:nth-child(2) > div").click();

        cy.get('div.dropdown-selection>div')
            .its('length')
            .then((len) => {
                cy.get('div.dropdown-selection>div')
                    .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
                    .click();
            })

        cy.get('div.dropdown-selection>div')
            .its('length')
            .then((len) => {
                cy.get('div.dropdown-selection>div')
                    .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
                    .click();
            })

        cy.get('div.dropdown-selection>div')
            .its('length')
            .then((len) => {
                cy.get('div.dropdown-selection>div')
                    .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
                    .click();
            })

        cy.get(".sign-up-card-header").click();

        // Enter phone number    
        cy.get("#signup_phone_number_field").type("09212111111");

        cy.get("#signup_next_btn").click();

        cy.get("#header_dropdown_toggle>button", { timeout: 200000 }).should('have.text', 'Fn8218 Ln8218');
    })

    it.skip("Signup with invalid email", () => {

        cy.fixture('invalidEmails').then((data) => {
            data.emails.forEach(email => {
                // Generate random strings and store them in Cypress variables
                cy.generateRandomString(5).as('firstName');
                cy.generateRandomString(5).as('lastName');
                cy.generateRandomString(5).as('randomEmailValue');
                cy.generateRandomString(5).as('username');

                // Use the generated strings to fill the form
                cy.get('@firstName').then((firstName) => {
                    cy.get("#firstName").clear().type(firstName); // Firstname field
                });

                cy.get('@lastName').then((lastName) => {
                    cy.get("#lastName").clear().type(lastName); // Lastname field
                });

                cy.get('@randomEmailValue').then((randomEmailValue) => {
                    cy.get("#email").clear().type(randomEmailValue + email); // Email field
                });

                cy.get('@username').then((username) => {
                    cy.get("#username").clear().type(username); // Username field
                });

                //username field
                cy.get("#password").type("Amit@1234"); //password field
                cy.get("#password-confirm").type("Amit@1234"); // confirm password field
                cy.get(".salary-benchmark-primary-button").click(); // signup button
                cy.get("#input-error-email").contains('Invalid email address.')
                cy.reload();
            });
        });
    })

    it.only("valid signup using custom commands", () => {

        cy.generateRandomString(5).as('firstName');
        cy.generateRandomString(5).as('lastName');
        cy.generateRandomString(5).as('randomEmailValue');
        cy.generateRandomString(5).as('username');
        cy.generateRandomString(6).as('jobTitle');
        cy.generateRandomString(7).as('companyName');

        // Use the generated strings to fill the form
        cy.get('@firstName').then((firstName) => {
            cy.get("#firstName").clear().type(firstName); // Firstname field
        });

        cy.get('@lastName').then((lastName) => {
            cy.get("#lastName").clear().type(lastName); // Lastname field
        });

        cy.get('@randomEmailValue').then((randomEmailValue) => {
            cy.get("#email").clear().type(randomEmailValue + "@sprout.ph"); // Email field
        });

        cy.get('@username').then((username) => {
            cy.get("#username").clear().type(username); // Username field
        });

        //username field
        cy.get("#password").type("Amit@1234"); //password field
        cy.get("#password-confirm").type("Amit@1234"); // confirm password field
        cy.get(".salary-benchmark-primary-button").click(); // signup button

        cy.get("input[type='checkbox']").check().should('be.checked'); // terms and condition checkbox
        cy.get("#signup_continue_btn").click(); // continue button

        cy.get('@jobTitle').then((jobTitle) => {
            cy.get("#signup_job_title_field").clear().type(jobTitle); // jobtitle field
        });

        cy.get('@companyName').then((companyName) => {
            cy.get("#signup_company_field").clear().type(companyName); // companyName field
        });
        

        //Click Next button
        cy.get("#signup_next_btn").click();

        //Select industry
        // cy.get(".sign-up-industry-container > div:nth-child(2) > div").click();
        // cy.get("input[placeholder]").type("Financial and Insurance Activities");
        // cy.get(".dropdown-content-container>div>.dropdown-selection").click();
        // cy.get(".sign-up-card-header").click();
        // cy.get("input.input-focused").should('have.text', 'Financial and Insurance Activities');
        cy.selectDropdown(".sign-up-industry-container > div:nth-child(2) > div", ".dropdown-selection.cursor-pointer");
        cy.get(".sign-up-card-header").click();

        //Select Company

        cy.get(".sign-up-company-size-container>div>div.benchmark-dropdown").click();
        cy.selectDropdown(".sign-up-company-size-container>div>div.benchmark-dropdown", ".dropdown-selection");
        cy.get("#signup_next_btn").click();

        //Select the location

        cy.selectDropdown("div.city-province-region-container > div:nth-child(2) > div", ".dropdown-selection");
        cy.get(".sign-up-card-header").click();
        cy.selectDropdown("div.city-province-region-container > div:nth-child(2) > div", ".dropdown-selection");
        cy.get(".sign-up-card-header").click();
        cy.selectDropdown("div.city-province-region-container > div:nth-child(2) > div", ".dropdown-selection");
        cy.get(".sign-up-card-header").click();
        
        // cy.get("div.city-province-region-container > div:nth-child(2) > div").click();

        // cy.get('div.dropdown-selection>div')
        //     .its('length')
        //     .then((len) => {
        //         cy.get('div.dropdown-selection>div')
        //             .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
        //             .click();
        //     })

        // cy.get('div.dropdown-selection>div')
        //     .its('length')
        //     .then((len) => {
        //         cy.get('div.dropdown-selection>div')
        //             .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
        //             .click();
        //     })

        // cy.get('div.dropdown-selection>div')
        //     .its('length')
        //     .then((len) => {
        //         cy.get('div.dropdown-selection>div')
        //             .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
        //             .click();
        //     })

        // cy.get(".sign-up-card-header").click();

        // Enter phone number    
        cy.get("#signup_phone_number_field").type("09212111111");

        cy.get("#signup_next_btn").click();

        // cy.get("#header_dropdown_toggle>button", { timeout: 200000 }).should('have.text', @firstName+" "+ @lastName);
        
    })

})