import { Component } from 'react';
import { Global } from '@emotion/react';
import { Section } from './Section/Section';
import { GlobalStyles } from 'css/GlobalStyles';

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
    return Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
  }

  onLeaveFeedback = event => {
    const currentValue = event.target.textContent.toLowerCase();

    this.setState(prevState => ({
      [currentValue]: prevState[currentValue] + 1,
    }));
  };

  render() {
    return (
      <>
        <Global styles={GlobalStyles} />
        <Section
          title="Please leave feedback"
          options={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </>
    );
  }
}
