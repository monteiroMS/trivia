import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa a página About da aplicação', () => {
  it('Teste 1 - Testa se a página tem as informações sobre o Trivia', () => {
    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/about');

    const aboutHeader = screen.getByRole('heading', { name: 'About', level: 1 });
    expect(aboutHeader).toBeInTheDocument();

    const aboutText = screen.getByText(/Trivia is an exciting 5-question quiz./i);
    expect(aboutText).toBeInTheDocument();
  });
  
  it('Teste 2 - Testa se a página informa o usuário sobre as regras da pontuação', () => {
    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/about');

    const rulesHeader = screen.getByRole('heading', { name: 'Score rules', level: 1 });
    expect(rulesHeader).toBeInTheDocument();

    const rulesText = screen.getByText(/Your score is updated after every question based on the following formula:/i);
    expect(rulesText).toBeInTheDocument();
  });

  it('Teste 3 - Testa se o botão de Home Page retorna o usuário para a tela de login', () => {
    const { history } = renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/about');

    const homeButton = screen.getByRole('button', { name: 'Return to home page' });
    expect(homeButton).toBeInTheDocument();

    userEvent.click(homeButton);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  })
});
