import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export default function Header() {
  const data = useSelector(store => store)
  const dispatch = useDispatch()
  const show = () => {
    dispatch({
      type: "Add"
    })
  }
  return (
    <>
      <div className='bg-black w-[100%] h-[100px] flex items-center fixed top-0 z-[99]'>
        <div className='w-[100%] flex justify-around  text-xl m-auto'>
         
          <Link to={"/"}> <h2 className='text-white'>Rikkei Shop</h2></Link>
          <input type="text" className='w-[30%] p-1 text-xl' />
          <Link to={"/cart"}><AiOutlineShoppingCart style={{ width: "30px", height: "30px", color: "white" }} />
            <p style={{color:"white"}}>{data.length}</p>
          </Link>

        </div>
      </div>
    </>
  )
}
