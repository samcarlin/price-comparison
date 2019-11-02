import React, { Component } from 'react';
import './app.css';
import Header from './header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
      ],
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
        <input className="search" placeholder="Search"></input>
        <div className="product-container">

          <div className="products">
            <button onClick={() => this.addNewItem()}>Add item</button>
            {this.state.items.map(item => (
              <input placeholder="Enter item" className="item"></input>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
