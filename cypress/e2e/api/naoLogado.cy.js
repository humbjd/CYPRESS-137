describe('API - Profile', () => {
    
    context('valida a API de perfis', () => {
        
    
        it('todos os perfis', () => {
            
          //  cy.request('GET', '/api/profile')
          cy.request({
            url: '/api/profile',
            method: 'GET'
          }).then(({ status, duration, body }) => {
                expect(status, 'status code').to.eq(200)
                expect(duration, 'duração').to.be.lessThan(1000)
                expect(body[0].status).to.eq('Estudante ou Aprendendo')
                expect(body[2].skills).to.have.lengthOf(2)
                expect(body[3].skills[0]).to.eq('Ser a mais linda e fofa')
                expect(body[3].user.name).to.eq('Lagertha')
                expect(body[0].website).to.eq('https://www.linkedin.com/in/humberto-dantas-a5233973/')
                expect(body[0].social.facebook).to.eq('')
                expect(body[0].date).to.not.be.null
          })
        })
    })

    context('valida um perfil especifico', () => {

      let urlApiPerfil = '/api/profile/user/'

        it('seleciona um usuário inválido', () => {
          
          let usuarioId = '1'  

          cy.request({
            method: 'GET',
            url: `${urlApiPerfil}/${usuarioId}`,
            failOnStatusCode: false
          }).then(({ status, body }) => {
              expect(status, 'Status Code').to.eq(404)
              expect(body.errors[0].msg, 'Mensagem de erro').to.eq('Perfil não encontrado')
          })
        })

        it('seleciona usuário válidos', () => {
          let usuarioId = '656f2092f192f0350cf82ce4'

          cy.request({
            method: 'GET',
            url: `${urlApiPerfil}${usuarioId}`
          }).then(({ status, body }) => {
            expect(status).to.eq(200)
            expect(body.user.name).to.eq('Humberto')
          })
        })

        it('', () => {
          
        })
    })
})