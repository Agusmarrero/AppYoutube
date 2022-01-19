import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
const VideoDetail = ({video}) => {
    if (!video) {
        return <div style={{marginTop:10}}><img src="https://i.ibb.co/2cqwvsS/VIDEO.png" alt="VIDEO" border="0"></img></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='segment'>
                <h4 className='header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;