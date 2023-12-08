import React, { useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { DualAxes, Column } from "@ant-design/plots";
import { Button, Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

const Dashboard = () => {
  const data = [
    {
      month: "Jan",
      revenue: 3,
      sales: 10,
    },
    {
      month: "Feb",
      revenue: 4,
      sales: 4,
    },
    {
      month: "Mar",
      revenue: 3.5,
      sales: 5,
    },
    {
      month: "Apr",
      revenue: 5,
      sales: 5,
    },
    {
      month: "May",
      revenue: 4.9,
      sales: 4.9,
    },
    {
      month: "Jun",
      revenue: 6,
      sales: 35,
    },
    {
      month: "Jul",
      revenue: 7,
      sales: 7,
    },
    {
      month: "Aug",
      revenue: 9,
      sales: 1,
    },
    {
      month: "Sep",
      revenue: 13,
      sales: 14,
    },
    {
      month: "Oct",
      revenue: 15,
      sales: 17,
    },
    {
      month: "Nov",
      revenue: 10,
      sales: 20,
    },
    {
      month: "Dec",
      revenue: 12,
      sales: 12,
    },
  ];
  const config = {
    data: [data, data],
    xField: "month",
    yField: ["revenue", "sales"],
    geometryOptions: [
      {
        geometry: "line",
        color: "#5B8FF9",
      },
      {
        geometry: "line",
        color: "#5AD8A6",
      },
    ],
  };
  return (
    <div>
      <div className="d-flex">
      <h3 className="mb-4 title">Dashboard</h3>
      <select placeholder="Month"></select>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex bi justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded rounded-5 border border-black border-3">
          <div>
            <p className="desc">Total Sales</p>
            <h4 className="mb-0 sub-title">$7899.78</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="orange">
              <BsArrowUpRight /> 32%
            </h6>
            <p className="mb-0  desc">Last 30 Days</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded rounded-5 border border-black border-3">
          <div>
            <p className="desc">Average Order Value</p>
            <h4 className="mb-0 sub-title">$373.98</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Last 30 Days</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded rounded-5 border border-black border-3">
          <div>
            <p className="desc">Total Orders</p>
            <h4 className="mb-0 sub-title">478</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="blue">
              <BsArrowUpRight /> 32%
            </h6>
            <p className="mb-0  desc">Last 30 Days</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded rounded-5 border border-black border-3">
          <div>
            <p className="desc">Total Income</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowUpRight /> 32%
            </h6>
            <p className="mb-0  desc">Last 30 Days</p>
          </div>
        </div>
      </div>
      <div className="d-flex gap-4">
        <div className="w-75">
          <div className="align-items-center bg-white p-3 rounded rounded-5 mt-4 border border-black border-3">
            <div className="mt-4">
              <h3 className="mb-3 title p-3">Earning Statistics</h3>
              <div>
                <div className="d-flex gap-5 p-2 mb-4">
                  <div className="border border-success border-1 rounded rounded-5 p-2">
                    <p className="mb-2">Month's Revenue</p>
                    <h4 className="fw-bold green">$12,000,000</h4>
                  </div>
                  <div className="border border-success border-1 rounded rounded-5 p-2">
                    <p className="mb-2">Month's Sales Number</p>
                    <h4 className="fw-bold green">2,000</h4>
                  </div>
                </div>
                <DualAxes {...config} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-25 mt-4 justify-content-between p-3 bg-white rounded rounded-5 border border-black border-3">
          <h3 className="mb-4 title p-3">Best Selling</h3>
          <div>
            <div>
              <img
                width={55}
                height={55}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667084/bathrmgadget3_l6jjf0.jpg"
                className="rounded float-start"
                alt=""
              />
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column mb-2 ps-3">
                  <h6 class="fw-bold">Heavy Bag</h6>
                  <p class="fw-light">Bag</p>
                </div>
                <div className="d-flex flex-column mb-2 ps-2">
                  <h6 class="fw-bold green">$1,200</h6>
                  <p class="fw-light">
                    items: <span>8</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={55}
                height={55}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667454/Samsung_Galaxy_Note_20_Ultra_vgcuzy.jpg"
                className="rounded float-start"
                alt=""
              />
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column mb-2 ps-3">
                  <h6 class="fw-bold">Heavy Bag</h6>
                  <p class="fw-light">Bag</p>
                </div>
                <div className="d-flex flex-column mb-2 ps-2">
                  <h6 class="fw-bold green">$1,200</h6>
                  <p class="fw-light">
                    items: <span>8</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={55}
                height={55}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667528/wallclock2_iqd1l2.jpg"
                className="rounded float-start"
                alt=""
              />
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column mb-2 ps-3">
                  <h6 class="fw-bold">Heavy Bag</h6>
                  <p class="fw-light">Bag</p>
                </div>
                <div className="d-flex flex-column mb-2 ps-2">
                  <h6 class="fw-bold green">$1,200</h6>
                  <p class="fw-light">
                    items: <span>8</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={55}
                height={55}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667521/Wabi-sabi_Table_modern_center_tea_table3_oaklsp.jpg"
                className="rounded float-start"
                alt=""
              />
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column mb-2 ps-3">
                  <h6 class="fw-bold">Heavy Bag</h6>
                  <p class="fw-light">Bag</p>
                </div>
                <div className="d-flex flex-column mb-2 ps-2">
                  <h6 class="fw-bold green">$1,200</h6>
                  <p class="fw-light">
                    items: <span>8</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={55}
                height={55}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667487/Tatami_Fat_Single_Sofa_Leisure_Chair4_mfswmr.jpg"
                className="rounded float-start"
                alt=""
              />
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column mb-2 ps-3">
                  <h6 class="fw-bold">Heavy Bag</h6>
                  <p class="fw-light">Bag</p>
                </div>
                <div className="d-flex flex-column mb-2 ps-2">
                  <h6 class="fw-bold green">$1,200</h6>
                  <p class="fw-light">
                    items: <span>8</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={55}
                height={55}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667472/smartgadget3_ufjzxt.jpg"
                className="rounded float-start"
                alt=""
              />
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column mb-2 ps-3">
                  <h6 class="fw-bold">Heavy Bag</h6>
                  <p class="fw-light">Bag</p>
                </div>
                <div className="d-flex flex-column mb-2 ps-2">
                  <h6 class="fw-bold green">$1,200</h6>
                  <p class="fw-light">
                    items: <span>8</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={55}
                height={55}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667088/beanbag5_mlhxp4.jpg"
                className="rounded float-start"
                alt=""
              />
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column mb-2 ps-3">
                  <h6 class="fw-bold">Heavy Bag</h6>
                  <p class="fw-light">Bag</p>
                </div>
                <div className="d-flex flex-column mb-2 ps-2">
                  <h6 class="fw-bold green">$1,200</h6>
                  <p class="fw-light">
                    items: <span>8</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center border-top border-black border-2">
              <div className="mt-2">
                <a className="fw-bold black">View All</a>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="d-flex gap-4">
        <div className="w-25 rounded rounded-3">
          <div className="align-items-center bg-white p-3 mt-4 border border-black border-3">
            <div className="mt-4">
              <h3 className="mb-3 title p-3">Recent Activity</h3>
              <div>
                <div className=" p-2 border border-black border-1 mb-1">
                <div className="d-flex gap-1 mb-0">
                  <input type="checkbox" />
                  <h6 className="m-0">New Item Sold</h6>
                </div>
                <div>
                <span className="d-flex justify-content-end align-self-end">14 min</span>
                  <p className="m-0">John Doe purshased Samsung Galaxy 20sonar</p>
                </div>
                </div>
                <div className=" p-2 border border-black border-1 mb-1">
                <div className="d-flex gap-1 mb-0">
                  <input type="checkbox" />
                  <h6 className="m-0">New Item Sold</h6>
                </div>
                <div>
                <span className="d-flex justify-content-end align-self-end">14 min</span>
                  <p className="m-0">John Doe purshased Samsung Galaxy 20sonar</p>
                </div>
                </div>
                <div className=" p-2 border border-black border-1 mb-1">
                <div className="d-flex gap-1 mb-0">
                  <input type="checkbox" />
                  <h6 className="m-0">New Item Sold</h6>
                </div>
                <div>
                <span className="d-flex justify-content-end align-self-end">14 min</span>
                  <p className="m-0">John Doe purshased Samsung Galaxy 20sonar</p>
                </div>
                </div>
                <div className=" p-2 border border-black border-1 mb-1">
                <div className="d-flex gap-1 mb-0">
                  <input type="checkbox" />
                  <h6 className="m-0">New Item Sold</h6>
                </div>
                <div>
                <span className="d-flex justify-content-end align-self-end">14 min</span>
                  <p className="m-0">John Doe purshased Samsung Galaxy 20sonar</p>
                </div>
                </div>
                <div className=" p-2 border border-black border-1 mb-1">
                <div className="d-flex gap-1 mb-0">
                  <input type="checkbox" />
                  <h6 className="m-0">New Item Sold</h6>
                </div>
                <div>
                <span className="d-flex justify-content-end align-self-end">14 min</span>
                  <p className="m-0">John Doe purshased Samsung Galaxy 20sonar</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-25 mt-4 justify-content-between p-4 bg-white rounded rounded-5 border border-black border-3">
          <h3 className="mb-2 mt-4 p-3 title">Total Sales</h3>
          <p>This year total data</p>
          <div></div>
          <h4>Sales volume increased intensely!</h4>
        </div>
        <div className="w-25 mt-4 justify-content-between p-4 bg-white rounded rounded-5 border border-black border-3">
          <h3 className="mb-2 mt-4 p-3 title">Total Sales</h3>
          <p>This year total data</p>
          <div></div>
          <h4>Sales volume increased intensely!</h4>
        </div>
        <div className="w-25 mt-4 justify-content-between p-4 bg-white rounded rounded-5 border border-black border-3">
          <h3 className="mb-2 mt-4 p-3 title">Website Visitors</h3>
          <p>This chart is showing every month's value</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
