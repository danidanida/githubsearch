import React from 'react';


export default class Card extends React.Component {
    render () {
      const profile = this.props;
      return <div className="github-profile" style={{margin:'2rem'}}> 
         <img src={profile.avatar_url} />
          <div className="info">
            <div className="name"> {profile.name}</div>
            <div className="company">{profile.company}</div>
            <div className="bio"> {profile.bio}</div>
            <div className="bio">Followers: {profile.followers}</div>
            <div className="bio">Following: {profile.following}</div>
            <div className="bio"> Profile created at: {profile.created_at}</div>
            <div className="bio"> Location: {profile.location}</div>
            <div className="bio"> Email: {profile.email}</div>
            <div className="bio"> Twitter username: {profile.twitter_username}</div>
             </div> 
      </div> 
    }
    
  }
  