import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super()
    this.count = 0
    this.state = {
      value: null,
      index: null,
      output: null
    }
    this.data = [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ]
  }
  linSearch() {
    this.count = 0
    const value = parseInt(this.refs.textInput.value.trim(), 10)
    this.refs.textInput.value = ''
    for (let i = 0; i < this.data.length; i++) {
      this.count++
      if (this.data[i] === value) {
        const output = `${value} found in position ${i} with ${this.count} steps`
        this.setState({ output })
        this.count = 0
        return i
      }
    }
    const output = `${value} was not found`
    this.setState({ output })
    return false
  }

  recBinSearch(arr, value, start = 0, end = this.data.length - 1) {
    // return falsy value
    this.count++
    if (start > end) {
      return -1;
    }
    let index = Math.floor((start + end) / 2);
    let middle = arr[index];

    if (value === middle) {
      const output = `${value} is found in ${this.count} steps`
      this.setState({ output })
      this.count = 0
      return index;
    }
    else if (middle < value) {
      return this.recBinSearch(arr, value, index + 1, end);
    }
    else if (middle > value) {
      return this.recBinSearch(arr, value, start, index - 1);
    }
    this.count = 0
  }

  handleBinarySearch = () => {
    const value = parseInt(this.refs.textInput.value.trim(), 10)
    this.refs.textInput.value = ''
    let newData = this.data.sort((a,b) => a-b)
    this.recBinSearch(newData, value)
  }

  handleLinearSearch = () => {
    this.linSearch()
  }

  
  render(){
  return(
    <div className = "App" >
      <header className="App-header">
        Search Comparison
      </header>
      <main>
        <div>
          <input type="text" ref="textInput"></input>
          <button onClick={this.handleLinearSearch} type='button'>Linear Search</button>
          <button onClick={this.handleBinarySearch} type='button'>Binary Search</button>
          <p>{this.state.output}</p>
        </div>
      </main>
    </div>
  );
}
}

