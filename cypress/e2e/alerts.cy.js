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

it('js confirm alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:confirm', (t) => {
        expect(t).to.contain('I am a JS Confirm');
    })
    //cypress automatically close alert window by using ok button by default

    cy.get('#result').should('have.text', "You clicked: Ok");

})

it.only('js confirm alert - Cancel', () => {

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
//4. Authentication Alert

})