import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/About.css';

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      wantToGoHome: false,
    };
  }

  handleFinish = () => {
    this.setState({
      wantToGoHome: true,
    });
  }

  render() {
    const { wantToGoHome } = this.state;

    if (wantToGoHome) {
      return <Redirect to="/" />;
    }

    return (
      <main>
        <div className="about-page-container">
          <section className="about-container">
            <h1>About</h1>
            <p className="normal-text">
              Trivia is an exciting 5-question quiz.
              You can choose from a variety of configurations to play the game.
              You can also let the us choose the five questions randomly for you! :D
            </p>
            <p className="normal-text">
              You can also check your ranking at any time. Challenge your friends!
            </p>
          </section>
          <aside className="rules-container">
            <h1>Score rules</h1>
            <p className="normal-text">
              Your score is updated after every question based on the following formula:
            </p>
            <p className="rules-text-special">
              (Remaining time * Question Difficulty) + 10
            </p>
            <p className="normal-text">Question Difficulty values:</p>
            <p className="rules-text">Easy: 1</p>
            <p className="rules-text">Medium: 2</p>
            <p className="rules-text">Hard: 3</p>
          </aside>
        </div>
        <button
          type="button"
          onClick={ this.handleFinish }
          className="home-button"
        >
          Return to home page
        </button>
      </main>
    );
  }
}

export default Ranking;
