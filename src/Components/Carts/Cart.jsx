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
        <div className='p-10 lg:w-5xl  mx-auto'>
            <h1 className='text-3xl font-bold mb-10'>Your Cart</h1>
            {
                carts.length === 0 ? <p className='text-xl p-10 text-gray-400 font-bold text-center'>Your cart is Empty</p> :
                <>
                
                <div className='w-full'>
                {
                    carts.map(cart => <div key={cart.id} className='md:flex items-center justify-between border border-gray-100 shadow-lg rounded-4xl p-5 mb-5  bg-gray-200'>
                        <div className=''>
                            <img className='h-20 w-20' src={cart.image} alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>{cart.title}</h2>
                            <p>{cart.description}</p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'>{cart.price}</h2>
                            <p>/Month</p>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(cart)} className='btn rounded-full bg-violet-700 text-white'>X</button>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex w-full items-center justify-between px-7 py-10 mt-5  bg-black text-white text-3xl font-bold rounded-4xl '>
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
            <div>
                <button onClick={handleCheckout} className='w-full bg-red-500 text-white text-2xl font-bold p-5 rounded-4xl my-5'>
                    checkout
                </button>
            </div>
                </>
            }
            
        </div>
    );
};

export default Cart;