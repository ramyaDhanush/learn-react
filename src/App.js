import React, {useState, useMemo} from "react";
import "./App.css";
import "./appStyles.css";
import useFetch from './components/useFetch'

const computeLongestWord = (data) =>{
    if(!data) return []
    console.log('Computing Longest Word');
    let longestString = '';
    JSON.parse(data).forEach(sent => {
      sent.split(' ').forEach(word=>{
        longestString = word.length > longestString.length ? word : longestString;
      })
    });
    return longestString;
}

const App = () => {
  const [count, setCount] = useState(0);
  const {data} = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json');

  

  const longestWord = useMemo(()=> computeLongestWord(data),[data]);

  return (
    <>
    <div>Lorem ipsum dolor sit amet.</div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <div>{computeLongestWord()}</div>
    </>
  );
}

export default App;
 