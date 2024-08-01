import { useState } from "react";
import "./Calculator.css"

const Calculator = () => {
    const [inputString, setInputString] = useState("");
    const [result, setResult] = useState("");
  
    const handleInputChange = (char) => {
      setInputString((prev) => prev + char);
    };
  
    const handleClick = (char) => {
      if (char === "C") {
        setInputString("");
        setResult("");
      } else if (char === "=") {
        try {
          const result = eval(inputString);
          console.log("Result is =>", result);
          if (result === undefined) {
            setResult("Error");
          } else {
            setResult(result);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        handleInputChange(char);
      }
    };
  
    return (
      <>
        <h1>React Calculator</h1>
        <input readOnly={true} type="text" value={inputString} />
        <div className="result">{result}</div>
        <div className="calculatorkeys">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("=")}>=</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>
      </>
    );
}

export default Calculator
