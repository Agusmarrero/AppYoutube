import React, { useState } from 'react';
import { useVideoContext } from "../context/context"
import VideoList from './VideoList';
import Footer from './Footer';
import VideoDetail from './VideoDetail';
import InitialVideo from './InitialVideo';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
const Home = () => {
    
    const [video, setVideo] = useState([])
    const [videoSearch, setVideoSearch] = useState([])
    const { videosList, videoItem, videosSearch , videoSelect, emptyVideo, backButton} = useVideoContext()

    // console.log(videosList)
    const handleSearch = async (termFromSearchBar) => {
        
        const response =  await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        
        videosSearch(response.data.items)
    }

    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log(count)
    // })

    console.log(videosList)
    

    const handleVideoSelect = (video) => {

        videoSelect(video)
    
      
    }


    

    return (
        <div>
            <div className='container' style={{ height: 600 }} >
                <SearchBar handleSearch={handleSearch} />
                <div className='ui grid '>
                    <div className="ui row">
                        <div className="video-detail">
                            {videoItem.length !== 0 ? <VideoDetail video={videoItem}/> : <InitialVideo/>} 
                        </div>
                        <div className="video-list" style={{ backgroundColor: '#ebeaed' }}>
                           {backButton ?  '' : <VideoList handleVideoSelect={handleVideoSelect} videos={videosList}  /> }
                        </div>
                    </div>
                </div>
             </div>
            {/* <Footer /> */} 
        </div>
    )
}

export default Home;