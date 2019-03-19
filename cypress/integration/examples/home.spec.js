/**
 *  @fileOverview tnexus-ui-beta-3 Write what's going on in the file here.
 *  @file         toolbox.spec Created at 9/3/18 with WebStorm
 *  @author       Rihan | MacbookPro
 */
context('Home test Page', () => {

  before(() => {
    cy.visit('http://localhost:3000')
  })

	it('Should type', () => {
		cy.wait(3000).then(_ => {
      cy.get('#username').type('AUTOMATED')
        .should('have.value', 'AUTOMATED')
    })
	})
})
