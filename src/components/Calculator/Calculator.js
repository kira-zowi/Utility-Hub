import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import { FaBackspace } from "react-icons/fa";
import { MdClearAll } from "react-icons/md";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    if ("+-*/.".includes(value) && "+-*/.".includes(display.slice(-1))) return;
    setDisplay(display + value);
  };

  // Clear all
  const handleClear = () => {
    setDisplay("");
  };

  // Delete last character
  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  // Calculate result
  const handleCalculate = () => {
    try {
      if (display === "" || "+-*/.".includes(display.slice(-1))) {
        setDisplay("Error");
        return;
      }
      setDisplay(evaluate(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  //percentage
  const handlePercentage = () => {
    try {
      const result = parseFloat(display) / 100;
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  //square root
  const handleSquareRoot = () => {
    try {
      const result = Math.sqrt(parseFloat(display));
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  //keyboard support
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (!isNaN(key)) {
        handleClick(key);
      } else if ("+-*/.".includes(key)) {
        if (display.length === 0) return;
        if ("+-*/.".includes(display.slice(-1))) return;
        handleClick(key);
      } else if (key === "Enter") {
        handleCalculate();
      } else if (key === "Backspace") {
        handleDelete();
      } else if (key === "Escape") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [display]);

  return (
    <div>
    <div className="calculator">
      <input
        type="text"
        value={display}
        readOnly
        className="calculator-display"
      />

      <div className="calculator-buttons">
        <button className="special" onClick={handleClear}>
          <MdClearAll />
        </button>
        <button className="special" onClick={handleDelete}>
          <FaBackspace />
        </button>
        <button onClick={() => handlePercentage()}>%</button>
        <button onClick={() => handleClick("/")}>÷</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleSquareRoot()}>√</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="equals" onClick={handleCalculate}>
          =
        </button>
      </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
            backgroundColor: "#65B741",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Calculator;
