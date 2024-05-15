import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import {toast} from 'react-hot-toast';
function CartItem({item, itemIndex}) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Removed");
  }
  return (
    <div className='flex gap-8 px-8 w-[35rem] border-b-2 py-7 border-black '>
        <div className='w-25'>
          <img className='max-w-28' src={item.image} alt="" />
        </div>
        <div className='flex flex-col gap-2'> 
          <h1 className='font-semibold'>{item.title}</h1>
          <h1 className='text-gray-500 leading-tight'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>${item.price}</p>
            <div className='h-8 text-red-700 hover:text-black  cursor-pointer hover:scale-110 drop-shadow-xl transition w-8 rounded-full bg-red-300 hover:bg-gray-400   flex justify-center items-center' onClick={removeFromCart}>
              <MdDelete/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItem