describe('alerta de login', () => {
    
    it('valida o alerta de credencial inválida', { tags: ['@smoke', '@login'] }, () => {

        // faz o spy na hora
        cy.clock()

        // intercepta a API de Login
        cy.intercept('POST', '/api/auth')
            .as('login')

        // visita a página de login
        cy.visit('/login')

        // preencher um email aleatorio
        cy.getElement('login-email')
            .type('usuarioALeatorio@teste.com')

        // preencher uma senha aleatoria
        cy.getElement('login-password')
            .type('123456')

        // clicar no botao Login
        cy.getElement('login-submit')
            .click()
        
        cy.wait('@login')

        // Validar o alerta de credencial inválido
        cy.getElement('alert')
            .should('have.text', 'Credenciais inválidas')

        // cy.wait(10000)
        
        // cy.getElement('alert') função customizada não permite options
        // cy.get('[data-test=alert]', { timeout:10000 })
        //    .should('not.exist')

        // adiantar o tempo da aplicacao em 10 segundos
        cy.tick(10000)
        
        cy.getElement('alert')
            .should('not.exist')

    })

})