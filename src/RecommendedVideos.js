import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard'

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos-video">
            <VideoCard
              title="5 Usages for cloud functions"
              views="850k Views"
              timestamp="1 days ago"
              chanelImage=""
              channel="firebasse"
              image=""
            />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />

        </div>
      
    </div>
  )
}

export default RecommendedVideos
