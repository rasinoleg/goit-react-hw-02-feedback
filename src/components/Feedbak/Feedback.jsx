import React, { Component } from 'react';
import css from '../Feedbak/Feedback.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbakOptions/FeedbakOptions';
import Section from '../Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (good / total) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className={css.feedbackContainer}>
        {/* <h1 className={css.please}>Please leave feedback</h1>
        <button className={css.button} onClick={() => this.handleClick('good')}>
          Good
        </button>
        <button className={css.button} onClick={() => this.handleClick('bad')}>
          Bad
        </button>
        <button
          className={css.button}
          onClick={() => this.handleClick('neutral')}
        >
          Neutral
        </button> */}
         <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
       
      </div>
    );
  }
}

export default Feedback;
