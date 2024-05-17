import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends React.Component{
  constructor(props){
    super(props);
    console.log('parent constructor');
  }

  componentDidMount(){
    console.log('Parent Did mount');
  }
  render(){
    console.log('parent render')
    return (
      <div>
          <h1>This is About Page</h1>
          <UserContext.Consumer>
            {(data)=>(
              <h1>{data.loggedInUser}</h1>
            )}
          </UserContext.Consumer>
          <User name={'harish function'}/>
          <UserClass name={'harish class'}/>
      </div>
    )
  }
}

export default About