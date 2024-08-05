describe("customCommands", () => {

    it.skip("handling links", () => {
        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.viewport('macbook-15')
        cy.get("#header_login_btn").click() //id
        cy.fixture('credentials').then((data) =>{
            cy.get("[name='username']").type(data.username); // using attribute
            cy.get("input.salary-benchmark-input[name='password']").type(data.password); 
        })
        // cy.get("[name='username']").type("apachaury+testadmin@sprout.ph") // using attribute
        // cy.get("input.salary-benchmark-input[name='password']").type("Amit@1234") // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click();
        cy.get('.header--nav:nth-child(3)').click(); // Click on report navigation header
        
        cy.get('.popover-body>div').first().click(); // Click on Salary dropdown under Report navigation header

        // cy.clickJobRoles("Architectural Assistant");
        // cy.get(".SBR-job-title").should('have.text',"Architectural Assistant")
        cy.fixture('job_roles').then((data) => {
            data.roles.forEach(job_roles => {
                cy.clickJobRoles(job_roles);
                cy.get(".SBR-job-title").should('have.text',job_roles);
                cy.get("div.SBR-bread-crumbs-container > div > div > nav > ol > li:nth-child(2) > a").click();
                cy.wait(1000);
            })
            
        })


    })

    it.skip("handling dropdown From Salary Report Page", () => {
        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.viewport('macbook-15')
        cy.get("#header_login_btn").click() //id
        cy.fixture('credentials').then((data) =>{
            cy.get("[name='username']").type(data.username); // using attribute
            cy.get("input.salary-benchmark-input[name='password']").type(data.password); 
        })
        // cy.get("[name='username']").type("apachaury+testadmin@sprout.ph") // using attribute
        // cy.get("input.salary-benchmark-input[name='password']").type("Amit@1234") // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click();
        cy.get('.header--nav:nth-child(3)').click(); // Click on report navigation header
        
        cy.get('.popover-body>div').first().click(); // Click on Salary dropdown under Report navigation header

        // cy.clickJobRoles("Architectural Assistant");
        // cy.get(".SBR-job-title").should('have.text',"Architectural Assistant")
        cy.fixture('job_roles').then((data) => {
            data.roles.forEach(job_roles => {
                cy.clickJobRoles(job_roles);
                cy.get(".SBR-job-title").should('have.text',job_roles);
                // cy.get("div.SBR-bread-crumbs-container > div > div > nav > ol > li:nth-child(2) > a").click();
                cy.wait(1000);
            })    
        });

        // Select Company in SRP
        cy.selectDropdown(".benchmark-reports-filter-premium:nth-child(1)", "div[aria-selected=false].select-option").should('be.visible');
        cy.get(".SBR-job-title").click();


        // Select Industry in SRP
        cy.selectDropdown(".SBR-industry-select", ".select-option-group").should('be.visible');
        cy.get(".SBR-job-title").click();

        // Select Location Page 

        cy.selectDropdown(".dropdown",".dropdown-selection").should('be.visible');
        cy.get(".SBR-job-title").click();

    });

    it.only("Login customCommand", () =>{
        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.loginBenchmark();
        // cy.get("#header_dropdown_toggle").should('have.text', "Test Admin");


    })

})