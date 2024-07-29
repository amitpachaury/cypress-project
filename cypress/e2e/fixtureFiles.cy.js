describe("fixtures", () =>{

it.skip("fixtures Demo Test", ()=>{

    cy.visit('https://benchmark-qa.sprout.ph/');
    cy.viewport('macbook-15')
    // cy.get("#header_login_btn").click() //id
    //     cy.fixture('benchmarkCredentials').then((data) =>{
    //         cy.get("[name='username']").type(data.username); // using attribute
    //         cy.get("input.salary-benchmark-input[name='password']").type(data.password); 
    //     })
    cy.get("#header_login_btn").click();
    cy.fixture('benchmarkCredetials').then((data)=>{

        cy.get("[name='username']").type(data.username) // using attribute
        cy.get("input.salary-benchmark-input[name='password']").type(data.password) // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click();
        cy.get("#header_dropdown_toggle").should('have.text', data.userProfileName);
    })
    
})

//Access through the Hook - For multiple "it" blocks

let userdata;

before(() => {
    cy.fixture('credentials').then((data) =>{
        userdata = data;
    })
        

})

    it("fixtures Demo", () =>{

        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.viewport('macbook-15')
    
        cy.get("#header_login_btn").click();
        cy.get("[name='username']").type(userdata.username) // using attribute
        cy.get("input.salary-benchmark-input[name='password']").type(userdata.password) // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click();
        cy.get("#header_dropdown_toggle").should('have.text', userdata.userProfileName);
 

    })


})