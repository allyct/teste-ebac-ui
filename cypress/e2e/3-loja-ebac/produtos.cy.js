/// <reference types="cypher"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        .contains('Aether Gym Pant')
        .click()
        cy.get('#tab-title-description > a').should('contain','Descrição')

    });
});