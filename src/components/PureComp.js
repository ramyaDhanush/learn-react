import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  // Adv. : Performance boost -> Not re-rendering unnecessarily

  render() {
    console.log('PureComp render')
    return (
      <div>
        PureComponent  {this.props.name}
      </div>
    )
  }
}

export default PureComp
