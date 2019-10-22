import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  addNewItem() {
    let items = [...this.state.items];
    items.push('');
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="products">
        <button onClick={() => this.addNewItem()}>Add item</button>
        {this.state.items.map(item => (
          <input placeholder="Enter item"></input>
        ))}
      </div>
    );
  }
}

export default App;
