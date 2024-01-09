// loga na aplicação via API
Cypress.Commands.add('login', (email, password) => {

    cy.session([email, password], () => {

        // api para logar
        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                email,
                password
            }
        })
    }, { cacheAcrossSpecs: true })
})

// Seleciona um elemento pelo atributo data-test
Cypress.Commands.add('getElement', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})