import '../../CSS/NewsComponent.css';
import { memo } from 'react';
function NewsComponent({data}) {
  return (
    <div className="news-component">
      <a href={data.URL} target='blank'>
       <img src={data.imageURL} alt=""/>
       <h2>{data.title}</h2>
       <div className='description'>{data.description}</div>
      </a>
    </div>
  );
}

export default memo(NewsComponent);
