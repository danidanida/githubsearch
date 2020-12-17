import React,{ useState }  from 'react';
import './App.css';

import CardList from './CardList';
import testData from './testData';
import Form from './Form';
import DarkMode from './Darkmode'; 

export default class App extends React.Component {
 
  state = {
    profiles:[]
  };

  
  addNewProfile = (profileData) => {
   // this.setState(prevState => ({profiles: [...prevState.profiles,profileData]})) // render everything
   this.setState({profiles: [profileData]}) // search for one 
  }

  render() { 
    return <div>
    <div className="header"> {this.props.title} <div className="modeWrapper">
    <DarkMode/>

    </div>
    </div> 
      <Form onSubmit={this.addNewProfile}/>
      <CardList profiles={this.state.profiles}/> 
      
      </div>
  }
} 

/*function App (props) {

  const [state, setState] = useState([]);

  function addNewProfile (profileData) {
    setState(profileData) }

  
      return <div>
      <div className="header"> {props.title} <div className="modeWrapper">
      <DarkMode/> 
      </div>
      </div> 
        <Form onSubmit={addNewProfile}/>
        <CardList profiles={state.profiles}/> 
        
        </div>
  }

export default App */