/// <reference types="Cypress" />

describe('Alê', () => {
    it('should be able to add something in to-do list', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=to-do]').should('exist').type("Comer alguma coisa")
        cy.get('[data-cy=btn-todo]').click()
        cy.get('[data-cy=to-do]').should('exist').type("Estudar JavaScript")
        cy.get('[data-cy=btn-todo]').click()
        cy.get('[data-cy=to-do]').should('exist').type("Assistir Tv")
        cy.get('[data-cy=btn-todo]').click()
        cy.get('[data-cy=to-do]').should('exist').type("Estudar Cypress")
        cy.get('[data-cy=btn-todo]').click()
        cy.get('[data-cy=to-do]').should('exist').type("Dormir cedo")
        cy.get('[data-cy=btn-todo]').click()
    });

    it('should be able to check my to-do list itens', () => {
        cy.contains('Comer alguma coisa').should('exist')
        cy.get('[data-key^="todo-"] > .checkbox').first().click()

        cy.contains('Estudar JavaScript').should('exist')
        cy.get('[data-key^="todo-"] > .checkbox').eq(1).click()

        cy.contains('Assistir Tv').should('exist')
        cy.get('[data-key^="todo-"] > .checkbox').eq(2).click()

        cy.contains('Estudar Cypress').should('exist')
        cy.get('[data-key^="todo-"] > .checkbox').eq(3).click()

        cy.contains('Dormir cedo').should('exist')
        cy.get('[data-key^="todo-"] > .checkbox').last().click()
    });

    it('should be able to delete a item', () => {
        cy.get('[data-key^="todo-"] > .delete-button').first().click()

        cy.get('[data-key^="todo-"] > .delete-button').eq(1).click()

        cy.get('[data-key^="todo-"] > .delete-button').eq(0).click()

        cy.get('[data-key^="todo-"] > .delete-button').eq(1).click()

        cy.get('[data-key^="todo-"] > .delete-button').last().click()
    });
})
