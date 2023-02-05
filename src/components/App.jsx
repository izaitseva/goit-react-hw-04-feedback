import React from "react";
import Statistics from "./Statistics";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        this.setState({
          good: this.state.good + 1
        });
        break;

      case "neutral":
        this.setState({
          neutral: this.state.neutral + 1
        });
        break;

      case "bad":
        this.setState({
          bad: this.state.bad + 1
        });
        break;

      default:
        console.error("invalid feedback")
    }
  }

  countTotalFeedback() {
    return this.state.bad + this.state.neutral + this.state.good;
  }

  countPositiveFeedbackPercentage() {
    let sum = this.countTotalFeedback();

    return sum > 0 ? Math.round(this.state.good * 100 / sum) : 0;
  }

  render() {
    let total = this.countTotalFeedback()
    let percantage = this.countPositiveFeedbackPercentage()

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        {total === 0
          ? <Notification message="There is no feedback" />
          : <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={percantage} />
        }
      </Section>
    );
  }
};
