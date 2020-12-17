import React from 'react';
import axios from 'axios';


export default class Form extends React.Component {
    //  userNameInput = React.createRef();
     state = {userName: ""};
      handleSubmit = async (event) => {
       event.preventDefault() // without it page will refresh 
      const resp = await 
      axios.get(`https://api.github.com/users/${this.state.userName}`);
      console.log(resp)
      this.props.onSubmit(resp.data);
        this.setState({userName:''});
     //  console.log(this.state.userName)
      // console.log(this.userNameInput.current.value)
     };
     
     render() {
       return <form onSubmit={this.handleSubmit}>
         <input type="text" className="inputEl" placeholder="Github username" //ref={this.userNameInput} required 
         value = {this.state.userName} onChange={event => this.setState({userName:event.target.value})} />
         <button className="searchBtn"> Search </button> 
         </form>
     }
   }
   
   