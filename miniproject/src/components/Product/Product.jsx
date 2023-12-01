import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Product() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProduct([...data])
            })
    }, [])

    const data = useSelector(store => store)
    const dispatch = useDispatch()
    const handleAdd = (id) => {
        let item = product.find((item) => {
            return item.id == id;
        })

        dispatch({
            type: "Add",
            payload: {...item}
        })
    }
    return (
        <>
            <div className='grid grid-cols-4 gap-[100px] w-[90%] mt-[130px] m-auto'>
                {product.map((item, index) =>
                    <div key={index}>
                        <img className='h-[90%] max-w-[100%] object-fill' src={item.image} alt="" />
                        <p className='text-center'>{item.name}</p>
                        <p className='text-center'>{item.price}</p>
                        <button className='bg-slate-300 w-[270px] p-3 rounded text-' onClick={() => handleAdd(item.id)}>Add To Cart</button>

                    </div>
                )}
            </div>
        </>
    )
}
