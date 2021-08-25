import * as GETBooks from '../requests/GETBooks.request';

describe('Testa o metodo GET Books', () => {
    it('listar todos os livros', () => {
        GETBooks.allBooks().should((response) => {
            cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.body)
            expect(response.status).to.equal(200);
            //expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;   
        })
    });

});