describe('Posts', () => {
    
    beforeEach(() => {
        
        cy.login(Cypress.env('email'), Cypress.env('senha'))
    })
    it('cria um post', () => {
        
        
        let valorComentario = 'Criado por Humberto Dantas na aula de Cypress'

        // api que cria o post
        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: valorComentario
            }
        }).then(({ status, body }) => {
            
            expect(status).to.eq(201)
            expect(body.text).to.eq(valorComentario)
        })
               
    })

    it('cria outro post', () => {
        
        let valorComentario = 'Outro comentário criado por Humberto Dantas na aula de Cypress'

        // api que cria comentário
        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: valorComentario
            }
        }).then(({ body }) => {
            
            // api que deleta o comentário
            cy.request({
                method: 'DELETE',
                url: `/api/posts/${body._id}`
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.msg).to.eq('Post removido')
            })
        })
    })
})