// import React from 'react'
// import NavBar from '../NavBar/NavBar'

// const Home = () => {
//   return (
//     <div>
//         <NavBar></NavBar>

//     </div>
//   )
// }

// export default Home

import React from 'react';
import NavBar from '../NavBar/NavBar';
// import VotingPage from '../VotingPage/VotingPage';
const showVotingPage = () => {
    // Logic to show the voting page
}
const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="home-container">
                <div className="background-image"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmynews13.com%2Ffl%2Forlando%2Fpolitics%2F2018%2F07%2F23%2F24-florida-election-and-voting-myths-debunked&psig=AOvVaw12tX2alFuDjQUotUN5BrpA&ust=1710435965613000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj2hNLc8YQDFQAAAAAdAAAAABAE" alt="" /></div>
                <div className="content">
                    <h1>Welcome to the Voting App</h1>
                    <p>Learn more about our voting system and exercise your right to vote.</p>
                    <button onClick={() => showVotingPage()}>Enter</button>
                </div>
            </div>
            {/* <VotingPage /> */}
        </div>
    );
}

export default Home;