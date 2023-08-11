import React, { Component } from 'react';
import { Container, Button, List} from './Statistic.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  }

  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const allFeedback = good + neutral + bad;
    return allFeedback
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = good;
    const totalFeedback = good + neutral + bad;
  
    if (totalFeedback === 0) {
      return 0; 
    }
  
    const positivePercentage = (positiveFeedback / totalFeedback) * 100;
    return Math.round(positivePercentage);
  }

  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <List>
          <li><Button onClick={this.handleClickGood}>Good</Button></li>
          <li><Button onClick={this.handleClickNeutral}>Neutral</Button></li>
          <li><Button onClick={this.handleClickBad}>Bad</Button></li>
        </List>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </Container>
    );
  }
}
