import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './VideoItem.css';
const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='card-title '>{video.snippet.title}</div>
            </div>
            
        </div>
    )
};
export default VideoItem;