import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center'>
          <img src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner