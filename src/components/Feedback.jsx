import React from "react";
// import "./Counter.css";
// import { render } from "react-dom";

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGood = () => {
        let currentCount = this.state.good;
        currentCount++;
        this.setState({
            good: currentCount
        });
        this.countTotalFeedback()
    }

    handleNeutral = () => {
        let currentCount = this.state.neutral;
        currentCount++;
        this.setState({
            neutral: currentCount
        });
        this.countTotalFeedback()
    }

    handleBad = () => {
        let currentCount = this.state.bad;
        currentCount++;
        this.setState({
            bad: currentCount
        });
        this.countTotalFeedback()
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
            <div>
                <h2>Please leave feedback</h2>
                <button onClick={this.handleGood}>Good</button>
                <button onClick={this.handleNeutral}>Neutral</button>
                <button onClick={this.handleBad}>Bad</button>

                <h2>Statistics</h2>
                <p>Good:{this.state.good}</p>
                <p>Neutral:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total:{total}</p>
                <p>Positive feedback:{percantage}%</p>
            </div>
        )
    }
}
export default Feedback;