/// <reference types="cypher"/>

describe('Funcionalidade: Login', () => {
    
    it('Deve fazer login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ally.teste@teste.com.br')
        cy.get('#password').type('Senha123*')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, ally.teste (não é ally.teste? Sair)')
    })


})
