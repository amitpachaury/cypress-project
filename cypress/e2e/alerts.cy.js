describe('Alerts', () => {

//1. JS alert -> It will have some text and an 'OK' button

it.skip('js alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get('button[onclick="jsAlert()"]').click();

    cy.on('window:alert', (t) => {
        expect(t).to.contain('I am a JS Alert');
    })
    cy.get('#result').should('have.text', "You successfully clicked an alert");



})

//2. JS confirm Alert : It will have some text with 'OK' and 'Cancel' buttons

it.skip('js confirm alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:confirm', (t) => {
        expect(t).to.contain('I am a JS Confirm');
    })
    //cypress automatically close alert window by using ok button by default

    cy.get('#result').should('have.text', "You clicked: Ok");

})

it.skip('js confirm alert - Cancel', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:confirm', (t) => {
        expect(t).to.contain('I am a JS Confirm');
    })
    //cypress automatically close alert window by using ok button by default

    cy.on('window:confirm', () => false); // cypress will close the alert window using cancel button
    
    cy.get('#result').should('have.text', "You clicked: Cancel");

})

//3. JS promt alert : It will have some text with a text box for user input along with 'OK' button

it.skip('js prompt alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('welcome');

    })
    cy.get('button[onclick="jsPrompt()"]').click();

    //cypress will automatically close the prompted alert - it will use ok button by default
    
    // cy.on('window:prompt', () => false); //automatically close the alert window
    
    cy.get('#result').should('have.text', "You entered: welcome");

    

})
//4. Authentication Alert

it.only('js autenthicated alert', () => {

    //Approach 1
    // cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: 
                        
    //                                                                 {
    //                                                                     username: "admin",
    //                                                                     password: "admin"
    //                                                                 }});
    //     cy.get("div[class='example'] p").should('have.contain', "Congratulations"); 
        
                                            //or
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");  
        cy.get("div[class='example'] p").should('have.contain', "Congratulations");     

        });

})