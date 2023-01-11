/// <reference types="Cypress" />

describe('Home Pillowtex', () => {
    beforeEach(() => cy.visit('/'));
    

    it('CT01 - Validar acesso a HOME', () => {
        cy.visit('/lojas');
        cy.get('a.col-span-2 > img.h-8').click();
        cy.title().should('eq', "Pillowtex");
        cy.location('href').should('eq', 'https://www.pillowtex.com.br/');
    })

    it('CT02 - Validar acesso a barra de MENU (deslogado)', () => {
        cy.get('a > svg.text-white').first().click();
        cy.title().should('equal', 'Pillowtex - Acessar minha conta');
        cy.location('href').should('equal', 'https://www.pillowtex.com.br/store/access' );
       })

    it('CT03 - Validar cadastro de usuário novo pelo MY PROFILE', () => {
        cy.get('a > svg.text-white').first().click();
        cy.contains('Quero me cadastrar').click();
        cy.contains('Vamos ajuda-lo com o seu cadastro, é bem rapido!').should('be.visible')
        .and('have.text','Vamos ajuda-lo com o seu cadastro, é bem rapido!');

        cy.get('#name').should('be.visible').type('Clebson Accyole');
        cy.get('#name').should('have.value', 'Clebson Accyole');
        cy.get('#document').should('be.visible').type('69183444041');
        cy.get('#document').should('have.value', '691.834.440-41');
        cy.get('#phone').should('be.visible').type('9988774455');
        cy.get('#phone').should('have.value', '(99) 8877-4455');
        cy.get('#email').should('be.visible').type('jiray@email.com');
        cy.get('#email').should('have.value', 'jiray@email.com');
        cy.get('#password').should('be.visible').type('JaspionMelhorMetalHero@1');
        cy.get('#password').should('have.value', 'JaspionMelhorMetalHero@1');
        cy.get('#passwordVerify').should('be.visible').type('JaspionMelhorMetalHero@1');
        cy.get('#passwordVerify').should('have.value', 'JaspionMelhorMetalHero@1');
        cy.get('button:contains(Cadastrar)').click();
        
        cy.intercept('GET', 'https://www.pillowtex.com.br/api/customer/profile').as('getProfile');
        cy.wait('@getProfile').its('response.statusCode').should('eq', 200);
        cy.get('div.Toastify__toast--success').should('be.visible').and('have.text', 'Cadastro realizado com sucesso')
    })

    it('CT04 - Validar login de usuário com sucesso', () => {
        cy.get('a > svg.text-white').first().click();
        cy.contains('Acesse sua conta usando seu e-mail e senha').should('be.visible')
        .and('have.text','Acesse sua conta usando seu e-mail e senha');
        cy.get('#username').should('be.visible').type('jiray@email.com');
        cy.get('#username').should('have.value', 'jiray@email.com');
        cy.get('#password').should('be.visible').type('JaspionMelhorMetalHero@1');
        cy.get('#password').should('have.value', 'JaspionMelhorMetalHero@1');
        cy.get('button:contains(Acessar minha conta)').click();
        cy.get('button:contains(sair)').should('be.visible').and('have.text','sair');

        
    })

    it('CT05 - Validar cadastro de usuário novo pelo MINHA CONTA no rodapé', () => {
        cy.scrollTo('bottom');
        cy.contains('Minha conta').click();
        cy.title('contain', 'Acessar minha conta');
        cy.get('#headlessui-tabs-tab-2 > p').as('cadastrar').should('be.visible').and('have.text', 'Quero me cadastrar');

        cy.get('@cadastrar').click();
        cy.get('p:contains(Vamos ajuda-lo com o seu cadastro, é bem rapido!)').should('be.visible').and('have.text', 'Vamos ajuda-lo com o seu cadastro, é bem rapido!');

        cy.get('#name').should('be.visible').type('Jaspion Da Silva');
        cy.get('#name').should('have.value', 'Jaspion Da Silva');
        cy.get('#document').should('be.visible').type('17300772005');
        cy.get('#document').should('have.value', '173.007.720-05');
        cy.get('#phone').should('be.visible').type('9988774455');
        cy.get('#phone').should('have.value', '(99) 8877-4455');
        cy.get('#email').should('be.visible').type('jaspion7@email.com');
        cy.get('#email').should('have.value', 'jaspion7@email.com');
        cy.get('#password').should('be.visible').type('JaspionMelhorMetalHero@1');
        cy.get('#password').should('have.value', 'JaspionMelhorMetalHero@1');
        cy.get('#passwordVerify').should('be.visible').type('JaspionMelhorMetalHero@1');
        cy.get('#passwordVerify').should('have.value', 'JaspionMelhorMetalHero@1');
        cy.get('button:contains(Cadastrar)').click();
        
        //obs:
        cy.intercept('GET', 'https://www.pillowtex.com.br/api/customer/profile').as('getProfile');
        cy.wait('@getProfile').its('response.statusCode').should('eq', 200);
        cy.get('div.Toastify__toast--success').should('be.visible').and('have.text', 'Cadastro realizado com sucesso')

    })

    it('CT06 -', () => {})
    
    it('CT07 -', () => {})

    it('CT08 -', () => {})

    it('CT09 -', () => {})

    it('CT10 -', () => {})
})