// import React, { Component } from 'react';
// import CryptoForm from './CryptoForm';
// import { connect }  from "react-redux";
// import * as actions from "../actions/cryptoActions";
// import { bindActionCreators } from "redux"


// class CryptoList extends Component {
//     state = {
//         currentIndex: -1,
//         list: this.returnList()
//     }

//     returnList() {
//         if (localStorage.getItem('transactions') == null)
//             localStorage.setItem('transactions', JSON.stringify([]))
//         return JSON.parse(LocalStorage.getItem('transactions'))
//     }

//     onAddOrEdit = (data) => {
//         var list = this.returnList()
//             if (this.state.currentIndex == -1)
//                 list.push(data)
//             else
//                 list[this.state.currentIndex] = data
//             LocalStorage.setItem('transaction', JSON.stringify(list))
//             this.setState({list,currentIndex: -1})
        
//     }

//     handleEdit = index => {
//         this.setState({
//             currentIndex: index
//         })
//     }

//     handleRemove = index => {
//         this.props.removeTransaction(index)
//     }

//     render() {
//         return (
//             <div>
//                 <CryptoForm />
//                 <hr />
//                 <table>
//                     <tbody>
//                         {
//                             this.props.list.map((item, index) => {
//                                 return <tr key={index}>
//                                     <td>{item.cName}</td>
//                                     <td>{item.symbol}</td>
//                                     <td>{item.price}</td>
//                                     <td>{item.quantity}</td>
//                                     <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
//                                     <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>
            
//             </div>
//         )
//     }
// }
// const mapStateToProps = state =>{
//     return {
//         list: state.List
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return bindActionCreators ({ 
//         removeTransaction : actions.remove,
//         updateTransactionIndex: actions.updateIndex
//     }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CryptoList)
