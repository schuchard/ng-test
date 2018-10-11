describe('Pizza route', () => {
  beforeEach(() => {
    cy.visit('/pizza');
  })

  it('should increment the pizza quantity', () => {
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();

    cy.get('app-order-display').get('h3').contains('Order total: 3 pizzas');
  });

  it('should decrement the pizza quantity', function () {
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();
    cy.get('button').contains('Add').click();

    cy.get('app-order-display').get('h3').contains('Order total: 3 pizzas');

    cy.get('button').contains('Remove').click();
    cy.get('button').contains('Remove').click();

    cy.get('app-order-display').get('h3').contains('Order total: 1 pizzas');
  });
});
