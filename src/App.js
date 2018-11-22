import React from 'react'

import Counter from './Counter'
import ForceUpdate from './ForceUpdate'
import Form from './Form'

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
  </div>
)

export default App