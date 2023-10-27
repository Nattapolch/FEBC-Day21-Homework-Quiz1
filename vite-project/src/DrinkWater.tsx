import React, { useState } from 'react'


const DrinkWater = () => {
    const [Weight, setWeight] = useState<number>();
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const onChangeWeight = (event:React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
        console.log(Weight)
    }
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
      const btnText = theme === 'light' ? '☀️ Light' : '🌛 Dark';
    return (
        <>
            <div className={theme}>
                <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
                <h2>{Weight === undefined || Weight === 0
                ? "x มล."
                : (Weight * 2.2 * 30 / 2 ).toFixed(1)+ " มล."} </h2>
                <input type="text" id='weight' placeholder='น้ำหนักของคุณ (กิโลกรัม)' onChange={onChangeWeight}/>
                <button className="theme-btn" onClick={toggleTheme}>{btnText}</button> 
            </div>
        </>
    )
}
export default DrinkWater