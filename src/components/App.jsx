import React, { useState } from "react";
import Statistics from "./Statistics";
import { Section } from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import { Notification } from "./Notification";

export default function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const onLeaveFeedback = (type) => {
    setFeedback((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }))
  }

  const countTotalFeedback = () => {
    return feedback.bad + feedback.neutral + feedback.good;
  }

  const countPositiveFeedbackPercentage = () => {
    let sum = countTotalFeedback();
    return sum > 0 ? Math.round(feedback.good * 100 / sum) : 0;
  }

  const total = countTotalFeedback()
  const percantage = countPositiveFeedbackPercentage()

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={onLeaveFeedback} />
      {total === 0
        ? <Notification message="There is no feedback" />
        : <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={percantage} />
      }
    </Section>
  );
}