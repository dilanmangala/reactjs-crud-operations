import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class EditUser extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h1>Edit User</h1>
            <Form>
                <FormGroup>
                    <Label>Name :</Label>
                    <Input type='text' placeholder='Enter Name'></Input>
                </FormGroup>
                <Button className='btn btn-primary ml-2' type='submit'>Edit</Button>
                <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
            </Form>
            </div>
        );
    }
}
 
export default EditUser;