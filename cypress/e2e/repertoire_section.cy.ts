describe('repertoire_section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1300, 870);
  });
  it('expect get json reqest, then songs are visible in the accordions, when click on songs they are added them to the cart', () => {
    cy.intercept('GET', '/listOfSongs.json').as('getSongs');
    cy.get('[data-test=navbar] a').contains('Заказчикам').click();
    cy.wait('@getSongs');
    cy.get('.accordion').eq(1).should('exist'); //Проверяем есть ли второй аккордеон с песнями и тестируем его
    cy.get('.accordion').eq(1).click();
    cy.get('.accordion:last li').eq(1).click(); //кликаем на песню
    cy.getByData('icon-cart')
      .should('be.visible') //должен появиться блок корзины с количеством песен и общим таймингом
      .and('contain.text', 'Выбрано песен')
      .and('contain.text', 'Общее время');
    cy.get('.accordion:last li').eq(20).click(); //кликеам ещё на две песни
    cy.get('.accordion:last li').eq(17).click();
    cy.getByData('songs-count').should('have.text', '3'); //Проверяем, что должно быть выбрано 3 песни
    cy.get('[data-testid=ShoppingCartIcon]').should('be.visible'); //Кнопка открыть коризину
    cy.get('[data-testid=RemoveShoppingCartIcon]').should('be.visible'); //Кнопка очистить корзину
    cy.get('[data-testid=ShoppingCartIcon]').click(); //Открываем корзину
    cy.get('.track-item').should('have.length', 3); //Списке должно быть 3 песни
    cy.get('.track-item').should(
      'have.descendants',
      '[data-testid=DeleteForeverRoundedIcon]'
    ); //у каждой песни есть кнопка "удалить"
    cy.get('.track-item').eq(1).should('contain.text', '4:28'); //У первой песни написана её длительность
    cy.getByData('popup-song-count').should('have.text', '3'); //Проверяем счётчик в попапе
    cy.get('.track-item')
      .eq(1)
      .find('[data-testid=DeleteForeverRoundedIcon]')
      .click(); //удаляем вторую песню в списке
    cy.get('.track-item').should('have.length', 2); //Списке должно быть теперь 2 песни
    cy.getByData('popup-song-count').should('have.text', '2'); //Снова проверяем счётчик должно быть уже 2 песни
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        'http://localhost:3000': {
          cart: '[{"author":"Bon Jovi","song":"Always","length":"5.56","checked":true},{"author":"Maroon 5","song":"This Love","length":"3.26","checked":true}]',
          'iconify-count': '0',
          'iconify-version': 'iconify2',
        },
      });
    }); //Проверяем есть ли эти две песни в localStorage
    cy.get('button').contains('Скопировать сет-лист').click();
    cy.get('button').contains('Очистить').click(); //Очищаем корзину
    cy.getByData('icon-cart').should('not.be.visible'); //Блок корзины должен быть скрыт после очистки корзины
    cy.get('.rhap_container').should('not.exist'); //Аудио плеер должен быть не виден
    cy.get('.accordion:last li')
      .eq(3)
      .find('[data-testid=PlayCircleIcon]')
      .click(); //Кликаем на кнопку Play чтобы послушать 3ю песню из второго аккордеона.
    cy.get('.rhap_container').should('exist').and('be.visible'); //После воспроизведения песни аудиоплеер должен показаться на экране внизу
    cy.wait(3500);
    cy.get('.accordion:last li')
      .eq(3)
      .find('[data-testid=PauseCircleIcon]')
      .click(); //Кликаем на кнопку Pause чтобы остановить вопроизведение 3й песни из второго аккордеона.
    cy.getByData('close-audioplayer').click(); //Закрываем аудиоплеер
    cy.get('.rhap_container').should('not.exist'); //Аудиоплеер должен быть размонтирован
  });
});
