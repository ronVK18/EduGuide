import { useState } from 'react';
import axios from 'axios';

function Payment() {
  

  return (
    <>
      <button className='p-12 bg-amber-300' onClick={handlePayment}>Proceed to Payment</button>
    </>
  );
}

export default Payment;
