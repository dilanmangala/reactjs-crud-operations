import React, { Component } from 'react';

import Heading from './heading';
import UserList from './userlist';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Heading/>
            <UserList/>
            </div>
        );
    }
}
 
export default Home;
