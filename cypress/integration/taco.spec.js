describe('Taco route', () => {
  beforeEach(() => {
    cy.visit('/taco');
  })

  it('should increment the taco quantity', () => {
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();

    cy.get('app-order-display').get('h3').contains('Order total: 3 tacos');
  });

  it('should decrement the taco quantity', function () {
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();

    cy.get('app-order-display').get('h3').contains('Order total: 3 tacos');

    cy.get('button').contains('Remove').click();
    cy.get('button').contains('Remove').click();

    cy.get('app-order-display').get('h3').contains('Order total: 1 tacos');
  });
});
