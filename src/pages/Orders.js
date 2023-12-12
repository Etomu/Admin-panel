import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Customer",
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
const Orders = () => {
  return (
    <div className="bg-white p-4 rounded rounded-5 border border-1 border-black">
      <div className="border-bottom border-black">
        <h3 className="mb-1 title">Orders</h3>
        <div class="d-flex flex-wrap m-2 mb-4">
          <a class="p-2 border text-decoration-none fw-semibold fs-6 flex-fill text-center ">
            All Orders <span>(68)</span>
          </a>
          <a class="p-2 border text-decoration-none fw-semibold fs-6 flex-fill text-center ">
            New <span>(29)</span>
          </a>
          <a class="p-2 border text-decoration-none fw-semibold fs-6 flex-fill text-center ">
            In Progress <span>(34)</span>
          </a>
          <a class="p-2 border text-decoration-none fw-semibold fs-6 flex-fill text-center ">
            To Be Shipped <span>(11)</span>
          </a>
          <a class="p-2 border text-decoration-none fw-semibold fs-6 flex-fill text-center ">
            Shipped <span>(56)</span>
          </a>
          <a class="p-2 border text-decoration-none fw-semibold fs-6 flex-fill text-center ">
            Completed <span>(58)</span>
          </a>
        </div>
      </div>
      <div className="p-4">
        <div>
          <ul className="nav nav-underline justify-content-center">
            <li className="nav-item">
              <a className="nav-link fs-6 active" aria-current="page" href="#">
                Pending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="#">
                Received
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="#">
                Completed
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-3 p-4 mt-4 mb-4">
          <div className="bg-white p-4 w-50 rounded rounded-5 border border-1 border-black">
            <div className="d-flex mt-2 gap-5 justify-content-between">
              <h6 className="mt-2 fw-lighter fs-6">
                Order ID: <span className="fw-bold fs-6">258</span>
              </h6>
              <h6 className="mt-2 fw-lighter fs-6">
                Customer ID: <span className="fw-bold fs-6">258</span>
              </h6>
              <button
                type="button"
                class="btn btn-primary btn-sm rounded-pill"
              >
                Received
              </button>
            </div>
            <div className="d-flex mt-2 justify-content-between">
              <h6 className="mt-2 fw-lighter fs-6">
                Payment Method:{" "}
                <span className=" fw-bold fs-6">Google Pay</span>
              </h6>
              <button
                type="button"
                class="btn btn-link rounded-pill justify-content-end"
              >
                View Details
              </button>
            </div>
            <div className="d-flex mt-2 mb-4 justify-content-between">
              <h6 className="mt-2 w-60 fw-lighter fs-6">
                Destination Address: <br />
                <span className=" fw-bold fs-6">
                  Riyatsa, RMZ Commercial Building, <br /> WeWork 10th Floor,
                  Hebbal <br /> Bangalore, Karnataka- 560024
                </span>
              </h6>
            </div>
            <div className="d-flex mt-2 gap-5 justify-content-between">
              <h6 className="mt-2 fw-lighter fs-6">05 May 2022</h6>
              <h6 className="mt-2 fw-lighter fs-6">
                12:10 <span>am</span>
              </h6>
              <button type="button" class="btn btn-link">
              Check✔️
              </button>
            </div>
          </div>
          <div className="bg-white p-4 w-50 rounded rounded-5 border border-1 border-black">
            <div className="d-flex mt-2 gap-5 justify-content-between">
              <h6 className="mt-2 fw-lighter fs-6">
                Order ID: <span className="fw-bold fs-6">258</span>
              </h6>
              <h6 className="mt-2 fw-lighter fs-6">
                Customer ID: <span className="fw-bold fs-6">258</span>
              </h6>
              <button
                type="button"
                class="btn btn-primary btn-sm rounded-pill"
              >
                Received
              </button>
            </div>
            <div className="d-flex mt-2 justify-content-between">
              <h6 className="mt-2 fw-lighter fs-6">
                Payment Method:{" "}
                <span className=" fw-bold fs-6">Google Pay</span>
              </h6>
              <button
                type="button"
                class="btn btn-link rounded-pill justify-content-end"
              >
                View Details
              </button>
            </div>
            <div className="d-flex mt-2 mb-4 justify-content-between">
              <h6 className="mt-2 w-60 fw-lighter fs-6">
                Destination Address: <br />
                <span className=" fw-bold fs-6">
                  Riyatsa, RMZ Commercial Building, <br /> WeWork 10th Floor,
                  Hebbal <br /> Bangalore, Karnataka- 560024
                </span>
              </h6>
            </div>
            <div className="d-flex mt-2 gap-5 justify-content-between">
              <h6 className="mt-2 fw-lighter fs-6">05 May 2022</h6>
              <h6 className="mt-2 fw-lighter fs-6">
                12:10 <span>am</span>
              </h6>
              <button type="button" class="btn btn-link">
                Check✔️
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Orders;
