import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }


  putInPortfolio =(stockObj) => {
    // const stockId = stockObj.id
    console.log("in main container", stockObj)
    this.setState({portfolio: [...this.state.portfolio, stockObj]}, ()=> console.log("this.state.portoflio:", this.state.portfolio))
  
    // if(!this.state.porfolio.includes(stockObj)){
    //   this.setState({portfolio: [...this.state.portfolio, stockObj]})
    //   }
  }

  removeFromPortfolio=(stockObj)=>{
    const stockId = stockObj.id
    this.setState({portfolio: this.state.portfolio.filter(stock => stock.id !== stockId)})
  }

  componentDidMount(){
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(resp => this.setState({stocks: resp}))
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer moveStock={this.putInPortfolio} removeStock={this.removeFromPortfolio} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer moveStock={this.putInPortfolio} removeStock={this.removeFromPortfolio} stocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
