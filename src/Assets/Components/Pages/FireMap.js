import {memo} from 'react'
import '../../CSS/AboutUs.css';
import Firemap from '../LittleComponent/FireMap';


function FireMap() {
    return (
        
        <div className='fire-map-page'>
            <Firemap/>
        </div>
    );
}

export default memo(FireMap);
