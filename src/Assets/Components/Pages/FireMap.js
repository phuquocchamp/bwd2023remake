import {memo} from 'react'
import '../../CSS/AboutUs.css';
import CarouselSwiper from '../LittleComponent/CarouselSwiper';
import Firemap from '../LittleComponent/FireMap';
import Highcharts from 'highcharts';


function FireMap() {
    return (
        
        <div>
            
            <Firemap/>
        </div>
    );
}

export default memo(FireMap);
