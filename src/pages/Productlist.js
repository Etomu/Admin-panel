import React from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
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
    <div className="bg-white p-4 rounded rounded-5 border border-1 border-black">
      <div className="border-bottom border-black">
        <div>
          <h3 className="mb-3 title">Products</h3>
        </div>
        <div></div>
      </div>
      <div>
        <div className="d-flex g-col-4 gap-3 justify-content-between mt-3 mb-3">
          <a>
            <div>
              <img
                className="img-thumbnail rounded mx-auto d-block"
                width={280}
                height={225}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667551/Nordic_Ergonomic_Convertible_Modular_Sectional_Sofa_L-Shaped_Minimalist_Couch1_cbxl0u.jpg"
                alt=""
              ></img>
              <div className="align-items-start p-2 border border-top-0 rounded-bottom">
                <h6 className="mt-2 fw-bold fs-6">
                  . ID- <span className="fw-lighter fs-6">L-shaped Sofa</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . NAME- <span className="fw-lighter fs-6">Furniture</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . CATEGORY- <span className="fw-lighter fs-6">100</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . PRICE- <span className="fw-lighter fs-6">2kg</span>
                </h6>
              </div>
            </div>
          </a>
          <a>
            <div>
              <img
                className="img-thumbnail rounded mx-auto d-block"
                width={280}
                height={225}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667502/Tatami_Fat_Single_Sofa_Leisure_Chair7_iccghr.jpg"
                alt=""
              ></img>
              <div className="align-items-start p-2 border border-top-0 rounded-bottom">
                <h6 className="mt-2 fw-bold fs-6">
                  . ID- <span className="fw-lighter fs-6">L-shaped Sofa</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . NAME- <span className="fw-lighter fs-6">Furniture</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . CATEGORY- <span className="fw-lighter fs-6">100</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . PRICE- <span className="fw-lighter fs-6">2kg</span>
                </h6>
              </div>
            </div>
          </a>
          <a>
            <div>
              <img
                className="img-thumbnail rounded mx-auto d-block"
                width={280}
                height={225}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667472/smartgadget3_ufjzxt.jpg"
                alt=""
              ></img>
              <div className="align-items-start p-2 border border-top-0 rounded-bottom">
                <h6 className="mt-2 fw-bold fs-6">
                  . ID- <span className="fw-lighter fs-6">L-shaped Sofa</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . NAME- <span className="fw-lighter fs-6">Furniture</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . CATEGORY- <span className="fw-lighter fs-6">100</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . PRICE- <span className="fw-lighter fs-6">2kg</span>
                </h6>
              </div>
            </div>
          </a>
          <a>
            <div>
              <img
                className="img-thumbnail rounded mx-auto d-block"
                width={280}
                height={225}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667521/Wabi-sabi_Table_modern_center_tea_table3_oaklsp.jpg"
                alt=""
              ></img>
              <div className="align-items-start p-2 border border-top-0 rounded-bottom">
                <h6 className="mt-2 fw-bold fs-6">
                  . ID- <span className="fw-lighter fs-6">L-shaped Sofa</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . NAME- <span className="fw-lighter fs-6">Furniture</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . CATEGORY- <span className="fw-lighter fs-6">100</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . PRICE- <span className="fw-lighter fs-6">2kg</span>
                </h6>
              </div>
            </div>
          </a>
          <a>
            <div>
              <img
                className="img-thumbnail rounded mx-auto d-block"
                width={280}
                height={225}
                src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700667450/rug30_huarby.jpg"
                alt=""
              ></img>
              <div className="align-items-start p-2 border border-top-0 rounded-bottom">
                <h6 className="mt-2 fw-bold fs-6">
                  . ID- <span className="fw-lighter fs-6">L-shaped Sofa</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . NAME- <span className="fw-lighter fs-6">Furniture</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . CATEGORY- <span className="fw-lighter fs-6">100</span>
                </h6>
                <h6 className="mt-2 fw-bold fs-6">
                  . PRICE- <span className="fw-lighter fs-6">2kg</span>
                </h6>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
