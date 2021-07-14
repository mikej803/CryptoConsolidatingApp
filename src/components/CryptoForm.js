import React, { Component } from 'react'
// import {useSelector, useDispatch} from 'react-redux';
import { connect } from 'react-redux'
import { addToken } from '../actions/cryptoActions'
import { Link } from 'react-router-dom';
import './CryptoForm.css'

class CryptoForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cName :'',
            symbol :'',
            price : '',
            quantity : '' 
        }
    }

    // state = {
    //             cName :'',
    //             symbol :'',
    //             price : '',
    //             quantity : ''
    // }
    
    
    // returnStateObject(){
    //     if (this.props.currentIndex == -1)
    //         return {
    //             cName :'',
    //             symbol :'',
    //             price : '',
    //             quantity : ''
    //         }

    //     else
    //         return this.props.list[this.props.currentIndex]
    // }

    // componentDidUpdate(prevProps){
    //     if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
    //         this.setState({...this.returnStateObject()})
    // }

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e =>{
        // e.preventDefault()
        console.log(this.state);
        this.props.addToken(this.state)
        alert ("Transferred To Wallet")
            // return ()

        // if(this.props.currentIndex == -1)
        //     this.props.insertTransaction(this.state)
        // else
        //     this.props.updateTransaction(this.state)
    }

    render() {
        console.log(this.props.allCryptos)
        return (
    <div className='crypto-app'>
      <img src="https://blog.cointracking.info/wp-content/uploads/2020/03/cryptocurrency-coins-with-exchange-rate-table-PHCU3TX-779x520.jpg" height={600} width={1100} /><br />
      <div className="crypto-form">
    <h1 className="crypto-text">Crypto Form</h1><br />
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input className="crypto-input" name="cName" placeholder="Token Name" value={this.state.cName} onChange={this.handleInputChange} /> <br/>
          <input className="crypto-input" name="symbol" placeholder="Token Symbol" value={this.state.symbol} onChange={this.handleInputChange} /> <br/>
          <input className="crypto-input" name="price" placeholder="Price" value={this.state.price} onChange={this.handleInputChange} /> <br/>
          <input className="crypto-input" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleInputChange} /> <br/>
          <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
        </form><br/>
        <div className="crypto-link"><Link to="/">Crypto Search</Link></div>
        <div className="crypto-link"><Link to="wallet">Crypto Wallet</Link></div>
      </div>
    </div>
        )
    }
}

// useSelector => mapStateToProps
const mapStateToProps = state => {
    return {
        allCryptos: state.crypto.tokens
    }
}
// useDispatch => mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        addToken: (tokenData) => dispatch(addToken(tokenData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CryptoForm);

