import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import palette from 'theme/palette';
import { options } from './chart';
import axios from "axios";

// const useStyles = makeStyles(() => ({
//   root: {},
//   chartContainer: {
//     height: 400,
//     position: 'relative'
//   },
//   actions: {
//     justifyContent: 'flex-end'
//   }
// }));


class ChartSales extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      date: '',
      price: '',
      user: [],
      length: 0,
      selectedUsers: [],
      graphData: {
        labels: [],
        datasets: [
          {
            label: 'Plan',
            backgroundColor: palette.primary.main,
            data: [18, 5, 19, 27, 29, 19, 20]
          },
          {
            label: 'Score',
            backgroundColor: palette.neutral,
            data: [11, 20, 12, 29, 30, 25, 13]
          }
        ]

      }
    }
  }

  componentDidMount = () => {

    axios.post('http://localhost:3003/todos/jobshow')
      .then((res) => {
        if (res.data.length > 0) {
          console.log("res : ", res.data)
          let { graphData } = this.state
          let graphLabels = []
          let data1 = [], data2 = []
          let price

          for (var i = 0; i < res.data.length; i++) {
            let isExist = false
            for (var j = 0; j < graphLabels.length; j++) {
              if (res.data[i].name == graphLabels[j]) {
                data1[j] += Number(res.data[i].price)
                isExist = true
                break
              }
            }

            if (!isExist) {
              graphLabels.push(res.data[i].name)
              // data1.push(Number(res.data[i].price))
              data1.push(Number(res.data[i].price))
              data2.push(3000)
            }

            // price = 0
            // for (var j = i; j < res.data.length; j++) {
            //   if (res.data[i].name === res.data[j].name) {
            //     price = Number(price) + Number(res.data[j].price)
            //     console.log('this is price :', price, res.data[j].price)
            //   }
            // }
            
          }
            
          // res.data.user.map((item)=>{
          //   res.data.user.map((item1)=>{

          //     if(item['name'] === item1['name'])
          //       item['price'] = item['price'] + item1['price']

          //     })
          // graphLabels.push(item['name'])
          // data1.push(item['price'])
          // data2.push(3000)
          // })
          graphData.labels = graphLabels
          graphData.datasets[0].data = data1
          graphData.datasets[1].data = data2
          this.setState({ user: res.data, graphData })

        }
      }).catch((error) => {
        console.log(error)
      })
  }
  handlePageChange = () => {

  }

  handleRowsPerPageChange = () => {

  }

  rowsPerPage = () => {

  }

  render() {
    return (
      <Card>
        <CardHeader
          action={
            <Button
              size="small"
              variant="text"
            >
              Monthly <ArrowDropDownIcon />
            </Button>
          }
          title="Chart"
        />
        <Divider />
        <CardContent>
          <div>
            <Bar
              data={this.state.graphData}
              options={options}
            />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            size="small"
            variant="text"
          >
            Overview <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    );
  };
}

export default ChartSales;