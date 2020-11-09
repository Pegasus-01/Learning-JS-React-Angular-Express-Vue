import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//by using reducer function call
function Checkbox(){
  const [checked,toggle]=useReducer(checked=>!checked , false);

  return(
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);



//BY USING "useState"
/*function Checkbox(){
  const [checked,setChecked]=useState(false);

  function toggle(){
    setChecked(checked=>!checked)
  }
  //HERE TOGGLE FUNCTION WORKS AS REDUCER FUNCTION BECAUSE THAT BYPASSES THE HARD CODING PART

  return(
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);*/



//learning fetching data with useEffect
/*function GitHubUser({ login }){
  const [data,setData] = useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
      .then(res=>res.json())
      .then(setData)
      .catch(console.error);

  }, []);
  
  if(data){
    return <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} width={169}/>
    
    </div>;
  }
  return null;
}

function App(){
  return <GitHubUser login="moonhighway" />;

}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);*/



//learning about dependency arrays
/*function App(){
  const [val,setVal] = useState("");
  const [val2,setVal2] = useState("");

  useEffect(()=>{
    console.log(`field 1: ${val}`)
  },[val])
  useEffect(()=>{
    console.log(`field 2: ${val2}`)
  },[val2])

  return (
    <>
      <label>
        Favourite phrase:
        <input 
          value={val}
          onChange={e => setVal(e.target.value)}
        />
      </label>
      <br />
      <label>
        second favourite phrase:
        <input 
          value={val2}
          onChange={e => setVal2(e.target.value)}
        />
      </label>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);*/

/*//working with useEffect
function Checkbox(){
  const [checked,setchecked]= useState(false)

  useEffect(()=>{
    alert(`checked: ${checked.toString()}`);
  });

  return(
    <> 
      <input type="checkbox" value={checked} onChange={()=> setchecked(checked=>!checked)} />
      {checked ? "checked": "not checked"}
    </>
  )
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);*/



//part of understanding useeffect
/*function App() {
  const [year,setYear] = useState(2050)
  const [manager,setManager] = useState("Alex");
  const [status , setStatus] = useState("Open");
  return (
    <>
      <div>
        <h1>Manager on duty : {manager}</h1>
        <button onClick={()=> setManager("Rachel")}>New Manager</button>
      </div>
      <div>
        <h1>{year}</h1>
        <button onClick={()=> setYear(year+1)}>New Year</button>
        <button onClick={()=> setYear(year-1)}>Previous Year</button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={()=> setStatus("Open")}>Open</button>
        <button onClick={()=> setStatus("Closed")}>closed</button>
        <button onClick={()=> setStatus("Back in 5")}>Break</button>
      </div>
    </>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById("root")
);*/
//ending of understanding useeffect


//array destructuring part starts
/*const [first,second,third]=["popcorn","pretzels","pineapple"];

console.log(first);
console.log(second);
console.log(third);*/
//array destructuring part ends




//FUNCTION NAME SHOULD START WITH CAPITAL LETTER
