import Socials from './socials';
import links from '../../data/links';
import data from './socials.data';
const { socials } = links;

describe('<Socials />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Socials section="footer" />);
    cy.get('.icon').should('exist');
    //Проверяем 1ю кнопку
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка скрыта (не монтирована в DOM)
    cy.get('a').eq(0).should('have.attr', 'href', socials.vk); //есть ссылка
    cy.get('a').eq(0).trigger('mouseover'); //наводим указатель мыши на иконку
    cy.get('[role=tooltip]').should('exist'); //должна появиться подсказка
    cy.get('[role=tooltip]').should('have.text', data[0].title); //"Вконтакте"
    cy.get('a').eq(0).trigger('mouseout'); //уводим указатель мыши в сторону
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка должна исчезнуть
    //Проверяем 2ю кнопку
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка скрыта (не монтирована в DOM)
    cy.get('a').eq(1).should('have.attr', 'href', socials.youtube); //есть ссылка
    cy.get('a').eq(1).trigger('mouseover'); //наводим указатель мыши на иконку
    cy.get('[role=tooltip]').should('exist'); //должна появиться подсказка
    cy.get('[role=tooltip]').should('have.text', data[1].title); //"Youtube"
    cy.get('a').eq(1).trigger('mouseout'); //уводим указатель мыши в сторону
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка должна исчезнуть
    //Проверяем 3ю кнопку
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка скрыта (не монтирована в DOM)
    cy.get('a').eq(2).should('have.attr', 'href', socials.telegram); //есть ссылка
    cy.get('a').eq(2).trigger('mouseover'); //наводим указатель мыши на иконку
    cy.get('[role=tooltip]').should('exist'); //должна появиться подсказка
    cy.get('[role=tooltip]').should('have.text', data[2].title); //"Telegram"
    cy.get('a').eq(2).trigger('mouseout'); //уводим указатель мыши в сторону
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка должна исчезнуть
    //Проверяем 4ю кнопку
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка скрыта (не монтирована в DOM)
    cy.get('a').eq(3).should('have.attr', 'href', socials.instagram); //есть ссылка
    cy.get('a').eq(3).trigger('mouseover'); //наводим указатель мыши на иконку
    cy.get('[role=tooltip]').should('exist'); //должна появиться подсказка
    cy.get('[role=tooltip]').should('have.text', data[3].title); //"Instagram"
    cy.get('a').eq(3).trigger('mouseout'); //уводим указатель мыши в сторону
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка должна исчезнуть
    //Проверяем 5ю кнопку
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка скрыта (не монтирована в DOM)
    cy.get('a').eq(4).should('have.attr', 'href', socials.whatsapp); //есть ссылка
    cy.get('a').eq(4).trigger('mouseover'); //наводим указатель мыши на иконку
    cy.get('[role=tooltip]').should('exist'); //должна появиться подсказка
    cy.get('[role=tooltip]').should('have.text', data[4].title); //"WtasApp"
    cy.get('a').eq(4).trigger('mouseout'); //уводим указатель мыши в сторону
    cy.get('[role=tooltip]').should('not.exist'); //Подсказка должна исчезнуть
  });
});
