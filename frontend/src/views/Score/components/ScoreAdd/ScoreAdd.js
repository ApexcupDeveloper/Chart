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

export default class ScoreAdd extends React.Component {
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
  changedate = (e) => { this.setState({ date: e.target.value }); }
  changeprice = (e) => { this.setState({ price: e.target.value }); }
  changeclient = (e) => { this.setState({ client: e.target.value }); }
  changebio = (e) => { this.setState({ bio: e.target.value }); }

  add(){
    var namev = document.getElementById('name').value;
    var datev = document.getElementById('date').value;
    var pricev = document.getElementById('price').value;
    var clientv = document.getElementById('client').value;
    var biov = document.getElementById('bio').value;

   if(namev && datev && pricev && clientv && biov){
        let body = { name: namev, date: datev, price: pricev, client: clientv, bio: biov}
        axios.post('http://localhost:3003/todos/jobadd', body)
          .then((res) => {
            console.log(res.data)
            alert("Successful!!");
            window.location.reload();
          }).catch((error) => {
            console.log(error)
          });
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
          subheader="Please add a score!"
          title="Add score"
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
                label="Date"
                margin="dense"
                id="date"
               type="date"
                onChange={this.changedate}
                required
                value={this.state.date}
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
                label="Price"
                margin="dense"
                id="price"
                onChange={this.changeprice}
                required
                value={this.state.price}
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
                label="Client Name"
                margin="dense"
                id="client"
                onChange={this.changeclient}
                required
                value={this.state.client}
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
                label="Bio"
                margin="dense"
                id="bio"
                onChange={this.changebio}
                required
                value={this.state.bio}
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
