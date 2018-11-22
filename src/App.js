import React from 'react'

import Counter from './Counter'
import ForceUpdate from './ForceUpdate'
import Form from './Form'
import Form2 from './Form2'
import Users from './Users'

const App = (props) => (
  <div>
    <Counter
      startValue={5}
      min={-10}
      max={10}
    />
    <hr />
    <Counter />
    <hr />
    <ForceUpdate />
    <hr />
    <Form />
    <hr />
    <Form2 />
    <div>
      <Users />
    </div>

  </div>
)

export default App