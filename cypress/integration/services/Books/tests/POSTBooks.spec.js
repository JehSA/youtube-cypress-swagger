/// <reference types='cypress' />

import * as POSTBooks from '../requests/POSTBook.request';

describe ('Testa o método POST Books', () => {
    it('Adicionar um livro', () => {
        POSTBooks.addBook().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.title).to.equal("Livro Teste - Jefferson");
        }); 
    });
});
