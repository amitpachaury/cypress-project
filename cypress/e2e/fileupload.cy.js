import 'cypress-file-upload'

describe("file handling", ()=>{

    beforeEach('Login', ()=>{
        cy.visit('https://benchmark-qa.sprout.ph/');
        cy.viewport('macbook-15')
        cy.get("#header_login_btn").click() //id
        cy.fixture('benchmarkCredentials').then((data) =>{
            cy.get("[name='username']").type(data.username); // using attribute
            cy.get("input.salary-benchmark-input[name='password']").type(data.password); 
        })
        // cy.get("[name='username']").type("apachaury+testadmin@sprout.ph") // using attribute
        // cy.get("input.salary-benchmark-input[name='password']").type("Amit@1234") // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click()
        cy.get(".home-page-first-container-title").contains("Sprout") //using class name
        cy.get('.header--nav').last().click();
        
        // cy.get(".job-title-tab", {timeout: 100000}).should("be.visible").click(); // job title tab from Overview tab
    })

    it("single file upload", ()=>{
        
        cy.get("#upload").attachFile("Salary-Data-Upload-Template (1).xlsx"); //uplaod file
        cy.get("button.btn.btn-success.shadow-0.w-100.text-center").click(); //Click submit button
        cy.get(".toast.fade.mx-auto.toast-fixed.show>div>div", {timeout: 10000}).should('have.text', "Your data was successfully uploaded! Review the standard job roles before saving." )
        cy.get(".job-title-tab", {timeout: 100000}).should("be.visible"); //verify file upload
        cy.get(".btn.btn-success.shadow-0.salary-confirm-upload-btn").click();
        cy.get("table[class='salary-review-table mt-3']>thead>tr>th:first-child", {timeout: 200000}).should("be.visible")
        cy.get(".cursor-pointer.salary-main-actions").click();

    })

    it.only("File uplaod Rename", ()=>{

        cy.get("#upload").attachFile({filePath:'Salary-Data-Upload-Template (1).xlsx', fileName: 'salary_data.xlsx'}); //uplaod file
        cy.get("button.btn.btn-success.shadow-0.w-100.text-center").click(); //Click submit button
        cy.get(".toast.fade.mx-auto.toast-fixed.show>div>div", {timeout: 10000}).should('have.text', "Your data was successfully uploaded! Review the standard job roles before saving." )
        cy.get(".job-title-tab", {timeout: 100000}).should("be.visible"); //verify file upload
        cy.get(".btn.btn-success.shadow-0.salary-confirm-upload-btn").click();
        cy.get("table[class='salary-review-table mt-3']>thead>tr>th:first-child", {timeout: 200000}).should("be.visible")
        cy.get(".cursor-pointer.salary-main-actions").click();
        cy.get(".delete-data.cursor-pointer").click();
        cy.get("button.btn-danger").click();

        cy.get(".salary-card-header>h1", {timeout: 50000}).should('have.text', "Upload Your Data");
        cy.get(".salary-card-template-title").last().should('have.text', "Done with setting up your file?");


    })

    it("single file upload", ()=>{


    })

    it("single file upload", ()=>{


    })

    it("single file upload", ()=>{


    })
})