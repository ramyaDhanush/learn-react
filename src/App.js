import React,{createContext, useState} from 'react'
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
export const ThemeContext = createContext();

const App = () => {
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor : dark ? "#000" : "#eee",
    color : !dark ? "#000" : "#FFF",
    padding: "2rem",
    margin: "2rem"
  }

  const setTheme = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={setTheme}>Toggle Theme</button>
      <FunctionComponent style={theme}/>
      <ClassComponent/>
    </ThemeContext.Provider>
  )
}

export default App;
