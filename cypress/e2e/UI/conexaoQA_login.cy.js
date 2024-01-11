describe.only('página de login', () => {
    
    const CAMPO_EMAIL = 'login-email'
    const CAMPO_SENHA = 'login-password'
    const CAMPO_LOGIN = 'login-submit'

    beforeEach(() => {
        cy.visit('/login')
    })
    it('faz um login válido', { tags: ['smoke', 'login'] }, () => {
        
        // spy na api de login
        cy.intercept('GET', '/api/profile/me')
            .as('apiLogin')

        cy.getElement(CAMPO_EMAIL)
            .type(Cypress.env('email'))

            // preenche a senha
            cy.getElement(CAMPO_SENHA)
                .type(Cypress.env('senha'))

            // clica no login
            cy.getElement(CAMPO_LOGIN)
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

    it('faz um login inválido', { tags: '@smoke' },  () => {
        
        // spy na api de login
        cy.intercept('POST', '/api/auth')
            .as('apiLogin')

        // preencher o email
        cy.getElement(CAMPO_EMAIL)
            .type(Cypress.env('email'))

        // preencher a senha
        cy.getElement(CAMPO_SENHA)
                .type('abcdef')

        // clicar no botao login
        cy.getElement(CAMPO_LOGIN)
                .click()

        // esperar a API
        cy.wait('@apiLogin')
            .then(({ response }) => {
                expect(response.statusCode, 'Validação do HTTP Status Code').to.eq(401)
            })

        // validar a mensagem de retorno (erro)
        cy.getElement('alert')
            .should('have.text', 'Credenciais inválidas')
    })

    it('valida a digitação de um email inválido', { tags: ['smoke', 'login'] }, () => {
        
        // preencher o email (inválido)
        cy.getElement(CAMPO_EMAIL)
            .type('Humberto')

        // preencher a senha
        cy.getElement(CAMPO_SENHA)
                .type('abcdef')    
        
        // validar a máscara do campo
        cy.contains('p', 'Digite um email válido')
            .should('be.visible')
        
            
    })
})