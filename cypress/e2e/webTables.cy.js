describe('web table', () => {

    beforeEach('Login', ()=>{
        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.viewport('macbook-15')
        cy.get("#header_login_btn").click() //id
        cy.get("[name='username']").type("apachaury@sprout.ph") // using attribute
        cy.get("input.salary-benchmark-input[name='password']").type("Abcd@1234") // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click()
        cy.get(".home-page-first-container-title").contains("Sprout") //using class name
        cy.get('.header--nav').last().click();
        cy.get(".job-title-tab", {timeout: 100000}).should("be.visible").click(); // job title tab from Overview tab
    })


    it('check number of rows and columns', ()=>{

        
        cy.get("table[class='salary-review-table mt-3']>tbody>tr").should('have.length', '10');
        cy.get("table[class='salary-review-table mt-3']>thead>tr>th").should('have.length', '5');

    })

    it.skip('check cell data from specific row and column', ()=>{

        
        cy.get("table[class='salary-review-table mt-3']>tbody>tr:nth-child(9)>td:nth-child(2)")
        .contains('Human Resource Manager');
        

    })

    it.skip('Read all the data rows and columns', ()=>{

        cy.get("table[class='salary-review-table mt-3']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })

    // it.only('Pagination', ()=>{
    //     let totalPages;
    //     //find total number of Pages
    //     cy.get(".current-page.d-flex.align-items-center>span").last().then((e)=>{
    //         let myText = e.text();
    //         cy.log(myText); //of 4
    //         totalPages = myText.substring(myText.indexOf("f")+1);
    //         cy.log("Total Nubmer of pages>>"+totalPages);

    //         for(let p=1; p<=totalPages;p++){
    //             let jobTitle; // for storing the element text into the variable
    //             if(totalPages>1){
    //                 cy.get("table[class='salary-review-table mt-3']>thead>tr>th:first-child", {timeout: 200000}).should("be.visible")
    //                 cy.log("Active Page is ==>"+p);
    //                 // .current-page.d-flex.align-items-center>svg:nth-child(6)
    //                 jobTitle = cy.get("table[class='salary-review-table mt-3']>tbody>tr")  //Iteration for each row and specific column
    //                                 .each (($row, index, $rows)=>{
    //                                  cy.wrap($row).within(()=>{
    //                                  cy.get("td:nth-child(2)").then((e)=>{
    //                                  cy.log(e.text()); //Job title
    //                         })
    //                 })

    //             })
    //             cy.log(">>>>>>>>>>>>>>>Job Title>>>>>>>>>>>>>>>>>>> "+jobTitle);
    //             if(jobTitle!='AFTER SALES MANAGER'){
    //             cy.get("div.current-page.d-flex.align-items-center > span:nth-child(5)+svg>path").click({ multiple: true, force: true }); // click on pagination next button
                
    //             } else{
    //                 assert.equal(jobTitle,'AFTER SALES MANAGER');
    //             } 
    //         }
    //     }

    //     })
    // })

    it.only('Pagination', () => {
        let totalPages;
    
        // Find total number of Pages
        cy.get(".current-page.d-flex.align-items-center > span").last().then((e) => {
            const myText = e.text();
            cy.log(myText); // of 4
            totalPages = parseInt(myText.substring(myText.indexOf("f") + 1).trim());
            cy.log("Total Number of pages >> " + totalPages);
    
            function checkJobTitles(page) {
                if (page > totalPages) {
                    throw new Error('Job title "AFTER SALES MANAGER" not found in any page');
                }
    
                cy.log("Active Page is ==> " + page);
                let found = false;
                
                cy.get("table.salary-review-table.mt-3 > tbody > tr", { timeout: 200000 }).each(($row) => {
                    cy.wrap($row).within(() => {
                        cy.get("td:nth-child(2)").then(($cell) => {
                            const jobTitle = $cell.text().trim();
                            cy.log("Job Title: " + jobTitle);
                            if (jobTitle === 'AFTER SALES MANAGER') {
                                found = true;
                                assert.equal(jobTitle, 'AFTER SALES MANAGER');
                                return false; // Stop iterating through rows
                            }
                        });
                    });
                }).then(() => {
                    if (!found) {
                        cy.get('body').then(($body) => {
                            if ($body.find("div.current-page.d-flex.align-items-center > span:nth-child(5) + svg > path").length > 0) {
                                cy.get("div.current-page.d-flex.align-items-center > span:nth-child(5) + svg > path").click({ multiple: true, force: true });
                                cy.wait(2000); // Wait for the page to load
                                checkJobTitles(page + 1);
                            } else {
                                throw new Error('Job title "AFTER SALES MANAGER" not found in any page');
                            }
                        });
                    }
                });
            }
    
            checkJobTitles(1);
        });
    });
    
    
    
})