
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('should have the title "Calculator App"', () => {
    cy.get('title').should('have.text', 'Calculator App');
  });

  it('should display 2 when "1 + 1 = " is clicked', () => {

    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-add').click();
    cy.get('.key-1').click();
  
    // Act
    cy.get('.key-equals').click();
  
    // Assert
    cy.get('.calculator-display').should('have.text', '2');
  
  });

  it('should display 2 when "3 - 1 = " is clicked', () => {

    // Assemble
    cy.get('.key-3').click();
    cy.get('.key-subtract').click();
    cy.get('.key-1').click();
  
    // Act
    cy.get('.key-equals').click();
  
    // Assert
    cy.get('.calculator-display').should('have.text', '2');
  
  });

  it('should display 6 when "2 * 3 = " is clicked', () => {

    // Assemble
    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
  
    // Act
    cy.get('.key-equals').click();
  
    // Assert
    cy.get('.calculator-display').should('have.text', '6');
  
  });

  it('should display 2 when "10 / 5 = " is clicked', () => {

    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-0').click();
    cy.get('.key-divide').click();
    cy.get('.key-5').click();
  
    // Act
    cy.get('.key-equals').click();
  
    // Assert
    cy.get('.calculator-display').should('have.text', '2');
  
  });

  it('should display Infinity when "3 / 0 = " is clicked', () => {

    // Assemble
    cy.get('.key-3').click();
    cy.get('.key-divide').click();
    cy.get('.key-0').click();
  
    // Act
    cy.get('.key-equals').click();
  
    // Assert
    cy.get('.calculator-display').should('have.text', 'Infinity');
  
  });

  it('should display 0 when "C" is clicked', () => {

    // Assemble
    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
  
    // Act
    cy.get('.key-clear').click();
  
    // Assert
    cy.get('.calculator-display').should('have.text', '0');
  
  });

  it('should display 3.5 when "2.5 + 1 =" is clicked', () => {

    // Assemble
    cy.get('.key-2').click();
    cy.get('.key-dot').click();
    cy.get('.key-5').click();
    cy.get('.key-add').click();
    cy.get('.key-1').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '3.5');
  });

  it('should display 2 when "1 + 2 / 2 =" is clicked', () => {

    // Assemble
    cy.get('.key-1').click();
    cy.get('.key-add').click();
    cy.get('.key-2').click();
    cy.get('.key-divide').click();
    cy.get('.key-2').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '2');
  });

  it('should display -6 when "-2 * 3 =" is clicked', () => {

    // Assemble
    cy.get('.key-subtract').click();
    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();

    // Act
    cy.get('.key-equals').click();

    // Assert
    cy.get('.calculator-display').should('have.text', '-6');
  });

});
