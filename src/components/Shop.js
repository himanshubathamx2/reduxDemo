import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './../state/index';
import { useSelector } from 'react-redux';

export const Shop = () => {
  const balance = useSelector(state => state.amount)
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  //use destructreing here to call directly: const {withdramoney, depositmoney} = bindActionCreators(act...
  return (
    <div>
      {/* without using bindaction creators */}
      {/* <button className='btn btn-primary' onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
      Add this item to cart
      <button className='btn btn-primary' onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}




      <button className='btn btn-primary' onClick={() => actions.withdrawMoney(100)}>-</button>
      Balance {balance}
      <button className='btn btn-primary' onClick={() => actions.depositMoney(100)}>+</button>



    </div>
  )
}
