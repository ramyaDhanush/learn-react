import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="App">
        <Form></Form>
        {/* <h1 className="error">Error</h1>
        <h2 className={styles.success}>Success</h2>

        <StyleSheet primary={true}></StyleSheet>
        <Inline></Inline> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
      </div>

      {/* 
      <ParentComponent></ParentComponent> */}

      {/* <EventBind>
        
      </EventBind>
       */}
      {/* // <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Greet name="Ramya" last="Dhanushkodi"></Greet>
      <Greet name="Person 2">ChildrenProperty</Greet>

      <Welcome name="Class - 1">Wowowowow</Welcome>
      <Message></Message>
      <Counter></Counter> */}
    </>
  );
}

export default App;
