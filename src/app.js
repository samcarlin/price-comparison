import React, { Component } from 'react';
import './app.css';
import Header from './header';
import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: Object.keys(data),
    };
  }

  addNewItem() {
    let items = [...this.state.items];
    items.push('');
    this.setState({ items: items });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="product-container">

          <div className="products">
            <button onClick={() => this.addNewItem()}>Add item</button>
            {this.state.items.map(item => (
              <input placeholder="Enter item" className="item" value={item}></input>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
