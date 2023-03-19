import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      buffer: "0",
      prevOp: null,
      runningTotal: 0,
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleSymbol = this.handleSymbol.bind(this);
    this.handleMath = this.handleMath.bind(this);
  }

  handleNumber = (event) => {
    const numStr = event.target.innerText;
    let buffer = this.state.buffer;
    let display = this.state.display;

    if (numStr === ".") {
      const regex = /\./g;
      if (regex.test(buffer)) {
        return;
      }
      buffer += numStr;
      display += numStr;
    } else if (buffer === "0") {
      if (display === "0") {
        buffer = numStr;
        display = numStr;
      } else {
        display += numStr;
        buffer = numStr;
      }
    } else {
      buffer += numStr;
      display += numStr;
    }
    this.setState({
      buffer: buffer,
      display: display,
    });
  };

  handleSymbol = (event) => {
    const symbol = event.target.innerText;
    switch (symbol) {
      case "AC":
        this.setState({
          buffer: "0",
          display: "0",
          runningTotal: 0,
          prevOp: null,
        });
        break;
      case "=":
        if (this.state.prevOp === null) {
          return;
        } else {
          this.handleMath(symbol);
        }
        break;
      case "/":
      case "X":
      case "-":
      case "+":
        this.handleMath(symbol);
        break;
    }
  };

  handleMath = (symbol) => {
    let prevOp = this.state.prevOp;
    let buffer = this.state.buffer;
    let display = this.state.display;
    let runningTotal = this.state.runningTotal;

    const regex = /[+/X-]+$/;

    if (regex.test(display)) {
      if (symbol === "-") {
        display += symbol;
        buffer = symbol;
      } else {
        display = display.replace(regex, symbol);
        prevOp = symbol;
        buffer = "0";
      }
      this.setState({
        display: display,
        prevOp: prevOp,
        buffer: buffer,
      });
      return;
    }

    const parsedBuffer = parseFloat(buffer);

    if (buffer === "0") {
      console.log("nothing");
      return;
    } else if (prevOp === null) {
      display += symbol;
      runningTotal = parsedBuffer;
      buffer = "0";
    } else if (prevOp === "+") {
      display += symbol;
      runningTotal += parsedBuffer;
      buffer = "0";
    } else if (prevOp === "-") {
      display += symbol;
      runningTotal -= parsedBuffer;
      buffer = "0";
    } else if (prevOp === "X") {
      display += symbol;
      runningTotal *= parsedBuffer;
      buffer = "0";
    } else if (prevOp === "/") {
      display += symbol;
      runningTotal /= parsedBuffer;
      buffer = "0";
    } else if (prevOp === "=") {
      display += symbol;
      buffer = "0";
    }

    if (symbol === "=") {
      display += runningTotal;
      buffer = runningTotal;
    }
    this.setState({
      buffer: buffer,
      display: display,
      prevOp: symbol,
      runningTotal: runningTotal,
    });
  };

  render() {
    return (
      <div
        className="container position-absolute top-50 start-50 translate-middle bg-dark border-dark rounded"
        style={{ width: "350px" }}
      >
        <div className="p-1">
          <div className="row" style={{ height: "22px" }}>
            <div
              id="screen"
              className="col text-end p-1 text-danger overflow-hidden"
            >
              {this.state.display}
            </div>
          </div>
          <div className="row" style={{ height: "62px" }}>
            <div
              id="display"
              className="col text-end fs-1 p-1 text-warning text-break"
            >
              {this.state.buffer}
            </div>
          </div>
          <div id="first-row" className="row" style={{ height: "84px" }}>
            <button
              id="clear"
              onClick={this.handleSymbol}
              className="col-6 btn btn-danger border-2 border-dark"
            >
              AC
            </button>
            <button
              id="divide"
              onClick={this.handleSymbol}
              className="col btn btn-primary border-2 border-dark"
            >
              /
            </button>
            <button
              id="multiply"
              onClick={this.handleSymbol}
              className="col btn btn-primary border-2 border-dark"
            >
              X
            </button>
          </div>
          <div id="second-row" className="row" style={{ height: "84px" }}>
            <button
              id="seven"
              onClick={this.handleNumber}
              className="col btn btn-secondary border-2 border-dark"
            >
              7
            </button>
            <button
              id="eight"
              onClick={this.handleNumber}
              className="col btn btn-secondary border-2 border-dark"
            >
              8
            </button>
            <button
              id="nine"
              onClick={this.handleNumber}
              className="col btn btn-secondary border-2 border-dark"
            >
              9
            </button>
            <button
              id="subtract"
              onClick={this.handleSymbol}
              className="col btn btn-primary border-2 border-dark"
            >
              -
            </button>
          </div>
          <div id="third-row" className="row" style={{ height: "84px" }}>
            <button
              id="four"
              onClick={this.handleNumber}
              className="col btn btn-secondary border-2 border-dark"
            >
              4
            </button>
            <button
              id="five"
              onClick={this.handleNumber}
              className="col btn btn-secondary border-2 border-dark"
            >
              5
            </button>
            <button
              id="six"
              onClick={this.handleNumber}
              className="col btn btn-secondary border-2 border-dark"
            >
              6
            </button>
            <button
              id="add"
              onClick={this.handleSymbol}
              className="col btn btn-primary border-2 border-dark"
            >
              +
            </button>
          </div>
          <div id="fourth-fifth-container" className="row">
            <div className="col">
              <div id="fourth-row" className="row" style={{ height: "84px" }}>
                <button
                  id="one"
                  onClick={this.handleNumber}
                  className="col btn btn-secondary border-2 border-dark"
                >
                  1
                </button>
                <button
                  id="two"
                  onClick={this.handleNumber}
                  className="col btn btn-secondary border-2 border-dark"
                >
                  2
                </button>
                <button
                  id="three"
                  onClick={this.handleNumber}
                  className="col btn btn-secondary border-2 border-dark"
                >
                  3
                </button>
              </div>
              <div id="fifth-row" className="row" style={{ height: "84px" }}>
                <button
                  id="zero"
                  onClick={this.handleNumber}
                  className="col-8 btn btn-secondary border-2 border-dark"
                >
                  0
                </button>
                <button
                  id="decimal"
                  onClick={this.handleNumber}
                  className="col-4 btn btn-secondary border-2 border-dark"
                >
                  .
                </button>
              </div>
            </div>
            <button
              id="equals"
              onClick={this.handleSymbol}
              className="col-3 btn btn-warning border-2 border-dark"
            >
              =
            </button>
          </div>
          <div className="fs-6 text-center text-secondary">
            Designed and Coded by Matt Hastings
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
