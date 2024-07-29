describe('MyTestSuit', ()=>{

    before(()=>{
        cy.log("*********  Launch App  *********");
    })

    after(()=>{
        cy.log("*********  Close App  *********");
    })

    beforeEach(()=>{
        cy.log("*********  Login  *********");
    })

    afterEach(()=>{
        cy.log("*********  Logout  *********");
    })
    
    
    it('search', ()=>{

        cy.log("*********  Searching  *********");

    })

    it('Advance search', ()=>{

        cy.log("*********  Advance Searching  *********");


    })

    it('Listing products', ()=>{

        cy.log("*********  Listing products  *********");

    })


})