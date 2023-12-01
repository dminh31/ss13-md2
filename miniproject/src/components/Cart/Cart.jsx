import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
    const data = useSelector(store => store)
    const dispatch=useDispatch()
    const handleDelete = (id) => {
        dispatch({
            type: "Delete",
            payload: id
        })
    }
    const handleIncrease=(id)=>{
        dispatch({
            type:"increase",
            payload:id
        })
    }
    const handleDecrease =(id)=>{
        dispatch({
            type:"decrease",
            payload:id
        })
    }
    return (
        <div className='mt-[100px] text-black'>
            <table border={1} cellPadding={10} cellSpacing={10} className='text-center w-[100%]' >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Ảnh</th>
                        <th>Quantity</th>
                        <th>Giá</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <img className='w-[300px] m-auto' src={item.image} alt="" />
                            </td>
                            <td>
                                <button onClick={() => handleDecrease(item.id)} className='bg-slate-400 rounded-xl px-3'>-</button>
                                {item.quantity}
                                <button onClick={() => handleIncrease(item.id)} className='bg-slate-400 rounded-xl px-3'>+</button>
                                </td>
                            <td>{item.price * item.quantity}</td>
                            <td>
                                <button className='bg-slate-400 p-3 rounded-xl' onClick={()=>handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                        
                    })}
                    <tr>
                        <td colSpan={2}>Tổng tiền</td>
                        <td colSpan={6}>200020</td>
                    </tr>
                </tbody >
            </table>
        </div>
    )
}
