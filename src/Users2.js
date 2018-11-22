import React from 'react'



class Users2 extends React.Component {
    state = {
        users: null

    }

    componentDidMount() {
        console.log('componentDidMount')
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(data => this.setState({
                users: data.results
            }))
    }

    render() {
        return (
            <div>
                {
                    this.state.users ?
                        this.state.users.map(user => (
                            <div
                                key={user.login.uuid}
                            >
                                {user.email}
                            </div>
                        ))
                        :
                        null
                }
            </div>
        )
    }
}
export default Users2


