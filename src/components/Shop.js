import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const Shop = () => {
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update balance
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}
