import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import axios from 'axios';

export default class UserAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      birthday: '',
      address: '',
      flag: '',
      dataList: [],
    }
    axios.post('http://localhost:3003/todos/show')
      .then((res) => {
        if (res.data.length > 0)
          this.setState({ dataList: res.data })
      }).catch((error) => {
        console.log(error)
      });
  }



  changename = (e) => { this.setState({ name: e.target.value }); }
  changeemail = (e) => { this.setState({ email: e.target.value }); }
  changepassword = (e) => { this.setState({ password: e.target.value }); }
  changeconfirm = (e) => { this.setState({ confirm: e.target.value }); }
  changebirthday = (e) => { this.setState({ birthday: e.target.value }); }
  changeaddress = (e) => { this.setState({ address: e.target.value }); }

  add(){
    var namev = document.getElementById('name').value;
    var emailv = document.getElementById('email').value;
    var passwordv = document.getElementById('password').value;
    var confirmv = document.getElementById('confirm').value;
    var birthdayv = document.getElementById('birthday').value;
    var addressv = document.getElementById('address').value;
   if(namev && passwordv && emailv && birthdayv && addressv){
      if (passwordv === confirmv) {
        let body = { name: namev, birthday: birthdayv, address: addressv, email: emailv, password: passwordv, flag: "2" }
        axios.post('http://localhost:3003/todos/add', body)
          .then((res) => {
            console.log(res.data)
            alert("Successful!!");
            window.location.reload();
          }).catch((error) => {
            console.log(error)
          });
      } else {
        alert("not same password with confirm!");
      }
    } else {
      alert("Fill in the blank!")
    }
    
  } 

  render(){
  return (
    <Card>
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="Please add a member!"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the name"
                label="Name"
                margin="dense"
                id="name"
                onChange={this.changename}
                required
                value={this.state.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Birthday"
                margin="dense"
                id="birthday"
                // type="date"
                onChange={this.changebirthday}
                required
                value={this.state.birthday}
                variant="outlined"
                format='DD/MM/YYYY'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                id="email"
                type="email"
                onChange={this.changeemail}
                required
                value={this.state.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Password"
                margin="dense"
                id="password"
                type="password"
                onChange={this.changepassword}
                required
                value={this.state.password}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                margin="dense"
                id="address"
                onChange={this.changeaddress}
                required
                // select
                // // eslint-disable-next-line react/jsx-sort-props
                // SelectProps={{ native: true }}
                value={this.state.address}
                variant="outlined"
              >
                {/* {states.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))} */}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Confirm Password"
                margin="dense"
                id="confirm"
                type="password"
                onChange={this.changeconfirm}
                required
                value={this.state.confirm}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={this.add}
          >
            Add
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
}
