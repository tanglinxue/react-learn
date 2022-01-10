import React, { Component } from 'react'
import { Button,DatePicker} from 'antd'
import {
  HomeOutlined,
  SearchOutlined
} from '@ant-design/icons';

const { RangePicker } = DatePicker;
export default class App extends Component {
  onChange = (date, dateString)=>{
    console.log(date, dateString)
  }
  render() {
    return (
      <div>
         <Button type="primary">Primary Button22</Button>
         <Button type='link'>Primary Button</Button>
         <HomeOutlined />
         <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <DatePicker onChange={this.onChange} />
        <RangePicker />
      </div>
    )
  }
}
