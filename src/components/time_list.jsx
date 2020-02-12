import React,{useState, useEffect} from 'react'
import firebase from '../firebase';

const SORT_OPTIONS = {
    'TIME_ASC':{column:'time_seconds', direction:'asc'},
    'TIME_DESC':{column:'time_seconds', direction:'desc'},
    'TITLE_ASC':{column:'title', direction:'asc'},
    'TITLE_DESC':{column:'title', direction:'desc'}
}

function useTime(sortBy='TIME_ASC'){
    const [time, setTime] = useState([]);

    useEffect(()=>{
       const unsubscriobe =  firebase.firestore().collection('times').orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction).onSnapshot((snapshot)=>{
            const newTimes = snapshot.docs.map(docs =>({
                
                id:docs.id,
                ...docs.data()
            }))
            setTime(newTimes);
        })
        return ()=> unsubscriobe(); 
    },[sortBy])
    return time
}
 const Time_list = () => {
    const [sortBy, setsortBy] = useState('TIME_ASC');
     const time = useTime(sortBy);
    return (
        <div>
            <h2>Time LIsts:</h2>
            <div>
                <label htmlFor="Sort By:">Sort By:</label>
                <select value={sortBy} onChange={e => setsortBy(e.currentTarget.value)}>
                    <option value='TIME_ASC'>Time(fastest)</option>
                    <option value='TIME_DESC'>Time(slowest)</option>
                    <option disabled>-----</option>
                    <option value='TITLE_ASC'>Title(a-z)</option>
                    <option value='TITLE_DESC'>Time(z-a)</option>
                </select>
            </div>
            <ol>
                {time.map(time =>  
                <li key={time.id}>
                    <div className='time-entry'> {time.title} <code className='time'>{time.time_seconds} (seconds)</code></div>
                </li>
                )}
               
            </ol>
        </div>
    )
}

export default Time_list