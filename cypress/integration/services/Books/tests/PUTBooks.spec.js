/// <reference types='cypress' />

import * as PUTBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBook from '../requests/POSTBook.request';

describe('Testa o método PUT Books', () => {
    it('Alterar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.equal(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.equal('Livro Alterado!');
            });
        });
    });

    it('Cria e altera um livro', () => {
        POSTBook.addBook().then((resAddBook) => {
            PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.equal(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.equal('Livro Alterado!');
            });
        });
    });
});