import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'Ramya'
    }
    console.log('LifecycleA Constructor');
  }

  static getDerivedStateFromProps(props,state){
    console.log(`LifecycleA getDerivedStateFromProps`);
    return null
  }

  shouldComponentUpdate(){
    console.log(`LifecycleA shouldComponentUpdate`);
    return true
  }

  componentDidMount(){
    console.log(`LifecycleA  componentDidMount`)
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(`LifecycleA getSnapshotBeforeUpdate`);
    return null
  }

  componentDidUpdate(){
    console.log(`LifecycleA componentDidUpdate`)
  }

  changeState = ()=>{
    this.setState({
      name:`Codevolution`
    })
  }

  render() {
    console.log(`LifecycleA render`)
    return (
      <>
      <button onClick={this.changeState}>Change State</button>
      <div>
        LifecycleA
      </div>
      <LifecycleB></LifecycleB>
      </>
    )
  }
}

export default LifecycleA
