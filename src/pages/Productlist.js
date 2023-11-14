import React from 'react'
import { Table } from "antd";
import {BiEdit} from 'react-icons/bi'
import { AiFillDelete } from "react-icons/ai";


const columns = [
    {
      title: "No.",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Status",
      dataIndex: "staus",
    },
    {
      title: "Address",
      dataIndex: "adres",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King`,
      product: 32,
      adres: `London, Park Lane no. ${i}`,
      staus: `Pending`,
      date: `2023-10-02`,
      total: `$15,000`,
    });
  }
const ProductList = () => {
  return (
    <div> 
        <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default ProductList