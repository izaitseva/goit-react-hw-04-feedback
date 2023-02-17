import React, { useState } from "react";
import Statistics from "./Statistics";
import { Section } from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import { Notification } from "./Notification";

export default function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGood(good.target.value + 1);
        break;

      case "neutral":
        setNeutral(neutral.target.value + 1);
        break;

      case "bad":
        setBad(bad.target.value + 1);
        break;

      default:
        console.error("invalid feedback")
    }
  }

  const countTotalFeedback = () => {
    return bad + neutral + good;
  }

  const countPositiveFeedbackPercentage = () => {
    let sum = countTotalFeedback();

    return sum > 0 ? Math.round(good * 100 / sum) : 0;
  }

  let total = countTotalFeedback()
  let percantage = countPositiveFeedbackPercentage()

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={onLeaveFeedback} />
      {total === 0
        ? <Notification message="There is no feedback" />
        : <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percantage} />
      }
    </Section>
  );
}
