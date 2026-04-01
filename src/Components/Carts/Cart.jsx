import React from 'react';

const Cart = ({carts,setCarts}) => {
   const totalPrice = carts.reduce((sum,cart)=> sum + cart.price,0)
   const handleCheckout =()=> {
     setCarts([])
   }
   const handleDelete = (cart) => {
   const filteredCart = carts.filter(c => c.id !== cart.id)
    setCarts(filteredCart)
   }
    return (
        <div className='p-10 lg:w-5xl  mx-auto shadow-xl rounded-3x'>
            <h1 className='text-3xl font-bold mb-10'>Your Cart</h1>
            {
                carts.length === 0 ? <p className='text-xl p-10 text-gray-400 font-bold text-center'>Your cart is Empty</p> :
                <>
                
                <div className='w-full'>
                {
                    carts.map(cart => <div key={cart.id} className='md:flex items-center justify-between border border-gray-100 shadow-lg rounded-4xl p-5 mb-5  bg-gray-100'>
                       <div className='flex items-center justify-center gap-5'>
                         <div className=''>
                            <img className='h-10 w-10' src={cart.image} alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>{cart.title}</h2>
                            <p>${cart.price}</p>
                        </div>
                       </div>
                        <div>
                            <button onClick={() => handleDelete(cart)} className=' text-red-500 btn bg-gray-100 border-none'>Remove</button>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex w-full items-center justify-between px-7 py-10 mt-5 '>
                <div>Total</div>
                <div className='text-3xl font-bold'>$ {totalPrice}</div>
            </div>
            <div>
                <button onClick={handleCheckout} className='w-full bg-violet-700 text-white text-2xl font-bold p-5 rounded-4xl my-5'>
                    checkout
                </button>
            </div>
                </>
            }
            
        </div>
    );
};

export default Cart;