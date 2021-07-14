import React, { Component } from "react";
import { connect } from 'react-redux';
import CryptoForm from '../components/CryptoForm'
import { addToken } from '../actions/cryptoActions';
import { removeToken } from '../actions/cryptoActions';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './CryptoForm.css'

class CryptoWallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            cName: "",
            symbol: "",
            price: "",
            quantity: ""
        }
    }

    handleDelete = (index) => {
        this.clearData();
        if (window.confirm("Are you sure?")){
        // whatever we map to dispatch...   
        this.props.removeToken(index);
    }
}

    clearData = () => {  
        this.setState({  
            id: 0,
            cName: "",
            symbol: "",
            price: "",
            quantity: ""  
        });  
      }  

    render() {
        console.log(this.props.allCryptos)
        return (
            <div className='crypto-app'>
                {/* <CryptoForm /> */}
                <img src="https://academy.bit2me.com/wp-content/uploads/2019/12/wallet-monederos-de-criptomonedas.jpg" height={600} width={1100} /><br />
            <div className="crypto-form">
                <h1 className="crypto-text">Crypto Wallet</h1><br />
                
                
            <hr />
            <div className="crypto-link"><Link to="/">Crypto Search</Link></div>
            <div className="crypto-link"><Link to="/form">Crypto Form</Link></div><br />
            <Table bordered>
                <thead>
                    <tr>
                        <th>ID#</th>
                        <th>Crypto Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.allCryptos.map((item, index) => {
                            return <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{item.cName}</td>
                            <td>{item.symbol}</td>
                            <td>$ {item.price}</td>
                            <td>{item.quantity}</td>
                            <button onClick={() => this.handleDelete(index)}>Delete</button>    
                        </tr>
                        })
                    }
                </tbody>
            </Table>
                    
                 
                </div>
            </div>
        
        
        )
    }
}



// useSelector => mapStateToProps
const mapStateToProps = (state) => {
    return {
        allCryptos: state.crypto.tokens
    }
}
// useDispatch => mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        addToken: (tokenData) => dispatch(addToken(tokenData)), 
        removeToken: (tokenData) => dispatch(removeToken(tokenData)), 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CryptoWallet);    