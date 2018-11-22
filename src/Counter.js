import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
    state = {
        number: this.props.startValue
    }

    incHandler = () => {
        if (this.state.number >= this.props.max) return

        this.setState({ number: this.state.number + 1 })
    }

    decHandler = () => {
        if (this.state.number <= this.props.min) return

        this.setState({ number: this.state.number - 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.incHandler}
                >
                    +
        </button>
                <button
                    onClick={this.decHandler}
                >
                    -
        </button>
                <div>
                    {
                        this.state.number === this.props.min ?
                            'Lower range exceeded!'
                            :
                            this.state.number === this.props.max ?
                                'Upper range exceeded!'
                                :
                                null
                    }
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {
    startValue: 0,
    min: -5,
    max: 5
}

Counter.propTypes = {
    startValue: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number
}

export default Counter