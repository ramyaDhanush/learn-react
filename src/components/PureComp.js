import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  // Adv. : Performance boost -> Not re-rendering unnecessarily
  // Only work with class based components
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
