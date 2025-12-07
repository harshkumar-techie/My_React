import '../stylesheets/projects.css';
import { useState } from 'react';

function Calculator() {

    const [Value, setValue] = useState("");
    function HandleClick(e) {
        if (e.target.innerText === "=") {
            setValue(eval(Value))
        } else {
            setValue(Value + e.target.innerText)
        }
    }

    return (
        <div id='calculator'>
            <div id='calculator_nav'>
                <span>Welcome to Calculator</span>
            </div>

            <div id='calculator_body'>
                <div id="calculator_component">
                    <div id='cal_controls'>
                        <button onClick={() => setValue("")}>AC</button>
                        <div id='cal_screen'>{Value}</div>
                        <button onClick={HandleClick}>7</button>
                        <button onClick={HandleClick}>8</button>
                        <button onClick={HandleClick}>9</button>
                        <button onClick={HandleClick}>=</button>
                        <button onClick={HandleClick}>4</button>
                        <button onClick={HandleClick}>5</button>
                        <button onClick={HandleClick}>6</button>
                        <button onClick={HandleClick}>+</button>
                        <button onClick={HandleClick}>1</button>
                        <button onClick={HandleClick}>2</button>
                        <button onClick={HandleClick}>3</button>
                        <button onClick={HandleClick}>-</button>
                        <button onClick={HandleClick}>.</button>
                        <button onClick={HandleClick}>0</button>
                        <button onClick={HandleClick}>/</button>
                        <button onClick={HandleClick}>*</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;