/// <reference types='cypress' />

import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBook from '../requests/POSTBook.request';

describe('Testa o método DELETE Books', () => {
    it('Deletar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            //cy.log();
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.equal(200);
            });
        });
    });

    it('Criar e excluir um livro', () => {
        POSTBook.addBook().then((resAddBook) => {
            DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.equal(200);
            });
        });
    });

});