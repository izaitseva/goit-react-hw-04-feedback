import React from "react";

export class FeedbackOptions extends React.Component {

    handleGood = () => {
       this.props.onLeaveFeedback('good')
    }

    handleNeutral = () => {
        this.props.onLeaveFeedback('neutral')
    }

    handleBad = () => {
        this.props.onLeaveFeedback('bad')
    }

    render() {

        return (
            <div>
                <button onClick={this.handleGood}>Good</button>
                <button onClick={this.handleNeutral}>Neutral</button>
                <button onClick={this.handleBad}>Bad</button>
            </div>
        )
    }
}