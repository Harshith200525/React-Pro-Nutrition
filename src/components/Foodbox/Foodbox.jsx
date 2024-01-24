/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Foodbox.css'

const Foodbox = (props) => {
    const { data } = props

    const [Amount, setAmount] = useState(0)

    const [Quantity, setQuantity] = useState(0)

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleCheck = () => {
        setQuantity(data.cal * Amount)
    }

    const handleReset = () => {
        setAmount(0)
        setQuantity(0)
    }



    return (
        <div className='main-container'>
            <div className='item-display'>
                <img src={data.img} style={{ width: '200px' }} />
                <div className='information'>
                    <p style={{fontWeight: 'bold'}}>{data.name}</p>
                    <p>{data.cal}</p>
                </div>
                <div className='input-for-calorie'>
                    <input type='number' placeholder='Enter a number' value={Amount} onChange={handleAmount} />
                    <button onClick={handleCheck}>+</button>
                </div>
            </div>
            <div className='calorie-counter'>
                <p>
                    {Amount} {data.name} = {Quantity} Calories
                </p>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Foodbox