describe('LoginTestSuite', () =>{

    it('DataDrivenTest', () =>{

        cy.fixture('logincredentials').then((data)=> { 

            cy.visit('https://benchmark-qa.sprout.ph/');
            cy.viewport('macbook-15')
            cy.get("#header_login_btn").click();

            data.forEach((userdata) => {
                cy.get("[name='username']").type(userdata.username) // using attribute
                cy.get("input.salary-benchmark-input[name='password']").type(userdata.password) // with tag.className[attribute]
                cy.get(".salary-benchmark-primary-button[name='login']").click();
                
                if(userdata.username=='apachaury+testadmin@sprout.ph' && userdata.password == 'Amit@1234'){
                    cy.get("#header_dropdown_toggle").should('have.text', userdata.userProfileName);
                    cy.get("#header_dropdown_toggle").click();
                    cy.get('#header_logout_btn').click();
                    cy.get("#header_login_btn").click();

                }
                else{
                    cy.get("#input-error").contains(userdata.loginError);

                }
                
            });
            

            
        })
    })

})