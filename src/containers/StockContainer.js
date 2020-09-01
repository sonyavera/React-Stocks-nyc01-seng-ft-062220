import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {



  addToPortfolio=(stockObj)=>{
    this.props.moveStock(stockObj)
  }

  removeFromPortfolio=(stockObj=>{
    this.props.removeStock(stockObj)
  })

  renderStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock removeStock={this.removeFromPortfolio} moveStock={this.addToPortfolio} key={stock.id} stock={stock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
