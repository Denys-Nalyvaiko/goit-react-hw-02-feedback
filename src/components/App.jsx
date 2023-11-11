import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  onLeaveFeedback = event => {
    const currentValue = event.target.textContent.toLowerCase();

    this.setState(prevState => ({
      [currentValue]: prevState[currentValue] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section
        title="Please leave feedback"
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        options={1}
        onLeaveFeedback={this.onLeaveFeedback}
      />
    );
  }
}
