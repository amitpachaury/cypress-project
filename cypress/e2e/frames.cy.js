import 'cypress-iframe'
describe('handling iframes', ()=>{

    it('approach1', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        let iframe = cy.get("#mce_0_ifr")
                        .its('0.contentDocument.body')
                        .should('be.visible')
                        .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}");                
    })

    it('approach2 using custom command', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}");                
    })

    it.only('approach3 using cypress Iframe plugin', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}"); 
        cy.frameLoaded("#mce_0_ifr")    //load or switch to the frame
        
        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");
    })
    
})