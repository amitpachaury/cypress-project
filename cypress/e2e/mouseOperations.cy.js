describe("Mouse Operations", ()=>{

it("MouseHover", ()=>{
    cy.visit("https://demo.opencart.com/")
    cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should("not.be.visible");
    
    cy.get("#narbar-menu > ul > li:nth-child(1) > a").trigger("mouseover").click();
    cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should("be.visible");

});

it.only("Right Click", ()=>{
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    
    cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu").click();
    

});

// it("Double Click", ()=>{


// });

// it("Drag and Drop", ()=>{


// });

// it("Scrolling page", ()=>{


// });




















})