import React from 'react';
import Cart from '../../_components/Cart/Cart';
import CheckoutComponent from '../../_components/Checkout/Checkout';
export default function Checkout() {
  return (
    <>
  <div className='flex items-center justify-around w-full'>
  <div className='border '>
  <Cart />
    </div>
    <div>
      <CheckoutComponent />
    </div>
    </div>
    </>
  )
}