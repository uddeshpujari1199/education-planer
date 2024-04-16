import React, { useEffect, useState } from 'react';
import './main.css';

function Main() {
    const [sub, setSub] = useState('');
    const [hours, setHours] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        localStorage.setList('items', JSON.stringify(list));
      }, [list]);

    function addData() {
        if (sub.trim() === '' || hours === 0) { 
            alert('Please enter both subject and hours.');
            return;
        }

        setList([...list, { subject: sub, hours: hours }]);
        setSub('');
        setHours(0); 
    }

    function increase(index) {
        const updatedList = [...list];
        updatedList[index].hours += 1;
        setList(updatedList);
    }

    function decrease(index) {
        const updatedList = [...list];
        if (updatedList[index].hours > 0) {
            updatedList[index].hours -= 1;
            setList(updatedList);
        }
    }

    return (
        <div>
            <div>
                <h1>Geekster Education Planner</h1>
                <div className='text-box'>
                    <input type='text' placeholder='Subject' value={sub} onChange={(e) => setSub(e.target.value)} />
                    <input type='number' placeholder='Hours' className='Hours' value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
                    <button onClick={addData}>ADD</button>
                </div>
                <div>
                    {list.map((item, index) => (
                        <div key={index} className='card'>
                            <span>{item.subject}</span> - <span>{item.hours} hours</span>
                            <button onClick={() => increase(index)} className='add'>+</button>
                            <button onClick={() => decrease(index)} className='dele'>-</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main;
