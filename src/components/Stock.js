import React from 'react'

class Stock extends React.Component {


  state = {
    inPortfolio: false
  }

  clickHandler = (stockObj) => {
    this.setState({ inPortfolio: !this.state.inPortfolio}, ()=>this.stockAction(stockObj))
  }

  stockAction=(stockObj)=>{
    console.log("props of the stock element", this.props)
    console.log("in portfolio?", this.state.inPortfolio)
    this.state.inPortfolio ? this.props.moveStock(stockObj) : this.props.removeStock(stockObj)
  }


  render(){
    return (
      <div onClick={()=> this.clickHandler(this.props.stock)} className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.stock.name}</h5>
          <p className="card-text">{this.props.stock.ticker}: {this.props.stock.price}</p>
        </div>
      </div>
    )
  }

}


export default Stock
