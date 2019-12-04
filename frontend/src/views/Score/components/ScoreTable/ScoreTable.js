import React, { useState } from 'react';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';

 import axios from "axios";


class ScoreTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id:'',
      name: '',
      date: '',
      price: '',
      client: '',
      bio: '',
      user: [],
      length:0,
      page:0,
      // rowsPerPage: 5,
      selectedUsers:[]

    }
  }


  componentDidMount=()=>{
      axios.post('http://localhost:3003/todos/jobshow')
        .then((res) => {
          if (res.data.length > 0) {
            this.setState({ user: res.data })

          }
        }).catch((error) => {
          console.log(error)
        })
  }

  handlePageChange = ()=>{

  }

  handleRowsPerPageChange = ()=>{

  }

  rowsPerPage = ()=>{

  }

  render(){

    return (
      <Card>
        <CardContent>
          <PerfectScrollbar>
            <div >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Client Name</TableCell>
                    <TableCell>Bio</TableCell>
                    {/* <TableCell>Phone</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.user.slice(0, this.state.rowsPerPage).map((item, index) => (
                    <TableRow   
                      hover
                      key={[index]}
                      selected={this.state.selectedUsers.indexOf(index) !== -1}
                    >
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{moment(item.date).format('DD/MM/YYYY')}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.client}</TableCell>
                      <TableCell>{item.bio}</TableCell>
                      {/* <TableCell>
                            <Button
                             >
                            Delete
                            </Button>
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    )
  }
  
}

export default ScoreTable;
