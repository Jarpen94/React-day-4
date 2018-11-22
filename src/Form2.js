import React from 'react'

class Form2 extends React.Component {
    state = {
        text: 'Initial value'
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                <input
                    type="text"
                    value={this.state.text}
                   readOnly
                />
            </div>
        )
    }
}
export default Form2
