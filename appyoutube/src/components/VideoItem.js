import React, {useState, useEffect} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './VideoItem.css';
import {Link} from 'react-router-dom'
import Footer from './Footer';


const VideoItem = ({v1 , handleVideoSelect}) => {

    const [description, setDescription] = useState("")

    const [select, setSelect] = useState(false)

    const handleDetail = () => {
        setDescription(v1.snippet.description)
        setSelect(!select)
    }

 
    return (
        <>
          
        <Link to={`/video/${v1.id.videoId}`}>
            <div onClick={() => handleVideoSelect(v1) } className=' video-item item'>
                <img className='ui image' src={v1.snippet.thumbnails.medium.url} alt={v1.snippet.description}/>
                <div className='content'>
                    <div className='card-title '>{v1.snippet.title}</div>
                    
                </div>
               {select ? <div className='card '>{description}</div> : <div></div>}
            </div>
           
        </Link>
        {select ?  <button onClick={() => handleDetail()}>esconder</button> :  <button onClick={() => handleDetail()}>detalle</button> }
       
        </>
    )
};
export default VideoItem;