describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');//Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверили цвет кнопки

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click();//Нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю,что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible');//Проверяю,что пользователь видет текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })

     it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверили цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); //Ввели не верный пароль
        cy.get('#loginButton').click();//Нажала войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю,что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю,что пользователь видет текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })
  
    
     it('Проверка,что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверили цвет кнопки

        cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без собачки
        cy.get('#pass').type('iLoveqastudio1'); //Ввели  верный пароль
        cy.get('#loginButton').click();//Нажала войти
    
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Проверяю,что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю,что пользователь видет текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })
    it('Верный пароль,но не верный логин', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверили цвет кнопки

        cy.get('#mail').type('panfilovaluba91@mail.ru'); //Ввели не верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click();//Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю,что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю,что пользователь видет текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

   })
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверили цвет кнопки

       
        cy.get('#forgotEmailButton').click();//Нажала кнопку забыли пароль пароль

        cy.get('#mailForgot').type('german@dolnikov.ru');//Ввела почту для восстановления
        cy.get('#restoreEmailButton').click();//Нажала на кнопку Отправить код
    
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Проверяю на совпадение текст текст
        cy.get('#messageHeader').should('be.visible');//Проверяю,что пользователь видет текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

    })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверили цвет кнопки

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click();//Нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю,что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю,что пользователь видет текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

   })
})
 
 
 
 