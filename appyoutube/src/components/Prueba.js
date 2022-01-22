
import React, { useState } from 'react';
import PruebaSearchBar from './PruebaSearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
const Prueba = () => {
    
    const [video, setVideo] = useState([])

    const [videoSearch, setVideoSearch] = useState([])

    const handleSearch = async (termFromSearchBar) => {
        const response =  await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        setVideoSearch(response.data.items)
    }

    const handleVideoSelect = (video) => {
      
        setVideo(video)
        console.log(JSON.stringify(video));
    }
    

    return (
        <div>
            <div className='container' style={{ height: 600 }} >
                <SearchBar handleFormSubmit={handleSearch} />
                <div className='ui grid '>
                    <div className="ui row">
                        <div className="video-detail">
                            <VideoDetail video={video} />
                        </div>
                        <div className="video-list" style={{ backgroundColor: '#ebeaed' }}>
                            <VideoList handleVideoSelect={handleVideoSelect} videos={videoSearch} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer ></Footer> */}
        </div>
    )
}

export default Prueba;