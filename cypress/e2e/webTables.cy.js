describe('web table', () => {

    beforeEach('Login', ()=>{
        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.viewport('macbook-15')
        cy.get("#header_login_btn").click() //id
        cy.get("[name='username']").type("apachaury@sprout.ph") // using attribute
        cy.get("input.salary-benchmark-input[name='password']").type("Amit@1234") // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click()
        cy.get(".home-page-first-container-title").contains("Sprout") //using class name
        cy.get('.header--nav').last().click();
        cy.wait(10000);
        cy.get(".job-title-tab").click();
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

    it.only('Pagination', ()=>{
        let totalPages;
        //find total number of Pages
        cy.get(".current-page.d-flex.align-items-center>span").last().then((e)=>{
            let myText = e.text();
            cy.log(myText); //of 4
            totalPages = myText.substring(myText.indexOf("f")+1);
            cy.log("Total Nubmer of pages>>"+totalPages);

            for(let p=1; p<=totalPages;p++){
                if(totalPages>1){
                    cy.log("Active Page is ==>"+p);
                    // .current-page.d-flex.align-items-center>svg:nth-child(6)
                    cy.get("table[class='salary-review-table mt-3']>tbody>tr")
                    .each (($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get("td:nth-child(2)").then((e)=>{
                                cy.log(e.text()); //Job title
                            })
                    })

                })
                cy.get(".current-page.d-flex.align-items-center>svg:nth-child(6)").click()
            }
        }

        })
    })
    
})