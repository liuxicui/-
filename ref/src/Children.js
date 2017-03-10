import React from 'react';

import Son from './Son';
import Test from './Test';


class Children extends React.Component {

    render() {
        return (
          <div >
            haha
            <Son name='aa'>
              <Test />
            < /Son>
          < /div >
        )
    }
}

export default Children;
