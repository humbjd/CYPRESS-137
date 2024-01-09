describe.only('página de login', () => {
    
    beforeEach(() => {
        cy.visit('/login')
    })
    it('faz um login válido', () => {
        
        // spy na api de login
        cy.intercept('GET', '/api/profile/me')
            .as('apiLogin')

        cy.getElement('login-email')
            .type(Cypress.env('email'))

            // preenche a senha
            cy.getElement('login-password')
                .type(Cypress.env('senha'))

            // clica no login
            cy.getElement('login-submit')
                .click()
            
            // espera a api responder    
            cy.wait('@apiLogin')
                .then(({ response }) => {
                   expect(response.body.user.name, 'REPOSTA DA API').to.eq('HUMBERTO JOSE DANTAS')
                })

            // valida se o usuário está logado
            cy.getElement('dashboard-welcome')
                .should('be.visible')
                .and('contain', 'HUMBERTO JOSE DANTAS')
    })
})