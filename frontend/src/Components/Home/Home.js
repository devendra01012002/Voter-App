import React from 'react'
import PullingPage from './PullingPage'
import StartVoting from '../StartVoting/StartVoting'
import './Home.css'
import ElectionPage from '../ElectionList.js/ElectionPage'
import ScrollImageSect from '../ElectionList.js/ScrollImageSect'
import MainFooter from '../partials/MainFooter'

const Home = () => {
  return (
    <div>
      <PullingPage />
      <div className="voting">
        <h1>🗓️Start Voting</h1>
      </div>
      <StartVoting />
      <ElectionPage />
          <StartVoting />
          <ScrollImageSect />
          <MainFooter/>
          
    </div>
  );
}

export default Home
