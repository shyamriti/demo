import React, { useState } from 'react';

const App = () =>{
    const [values, setValues] = useState("");

    const inputEvent =(event) =>{
        setValues(values.concat(event.target.name))
    }
    const calculate =() =>{
        try{
            // eslint-disable-next-line
            setValues(eval(values.toString()));

        }catch(err){
            setValues("error")
        }
    }
    const clear=()=>{
        setValues("");
    }
    const backspace = ()=>{
        setValues(values.slice(0, -1));
    }

    return(
        <div className="display">
            
           
            
            <div >
                <input type="text" value={values} />
            </div>
            
            <div className="clear">
            <button onClick={clear} id="clear" >c</button>
            <button onClick={backspace} id="delete">delete</button>
            </div>
            
            
            <div className="button">
            

            <button onClick={inputEvent} name ="1">1</button>
            <button onClick={inputEvent} name ="2">2</button>
            <button onClick={inputEvent} name ="3">3</button>
            <button onClick={inputEvent} name ="+">+</button>

            <button onClick={inputEvent} name ="4">4</button>
            <button onClick={inputEvent} name ="5">5</button>
            <button onClick={inputEvent} name ="6">6</button>
            <button onClick={inputEvent} name ="-">-</button>

            <button onClick={inputEvent} name ="7">7</button>
            <button onClick={inputEvent} name ="8">8</button>
            <button onClick={inputEvent} name ="9">9</button>
            <button onClick={inputEvent} name ="*">*</button>

            <button onClick={inputEvent} name =".">.</button>
            <button onClick={inputEvent} name ="0">0</button>
            <button onClick={inputEvent} name ="/">/</button>
            <button onClick={calculate} id="Result" size="2" name ="=">=</button>
            </div>
            </div>
        
    );
}

export default App;