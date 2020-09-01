import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {



  renderStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} moveStock={this.props.moveStock} removeStock={this.props.removeStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
