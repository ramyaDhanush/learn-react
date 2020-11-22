import React from 'react';
import { useCountRenders } from './useCountRenders';

const Hello = React.memo(({increment}) => {
  useCountRenders();
  return (
    <div>
      <button onClick={increment}>Hello</button>
    </div>
  )
})

export default Hello;