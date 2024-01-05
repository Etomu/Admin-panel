import { React, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Addproduct = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div className="p-3">
      <div>
        <div className="d-flex gap-4">
          <div className="w-25 bg-white p-4 rounded rounded-5 border border-1 border-black">
            <div className="border-bottom border-black">
              <div>
                <h3 className="mb-3 fw-bold fs-5">Product Images</h3>
              </div>
            </div>
            <div class="mt-3">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-bold fs-6"
              >
                Tags
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter and type"
              />
            </div>
            <div className="mt-3">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint text-break">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </div>
          </div>
          <div className="w-75 bg-white p-4 rounded rounded-5 border border-1 border-black">
            <div className="border-bottom border-black">
              <div>
                <h3 className="mb-3 fw-bold fs-5">General Information</h3>
              </div>
            </div>
            <div class="mt-3 p-2">
              <label
                for="exampleFormControlInput1"
                class="form-label fw-bold fs-6"
              >
                Product Name
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter product name"
              />
              <div className="d-flex gap-4 mt-3">
                <div class="w-50 mb-3">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-bold fs-6"
                  >
                    Product Type
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chair</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="w-50 mb-3">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label fw-bold fs-6"
                  >
                    Product Category
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Furniture</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="w-25">
                  <div>
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-bold fs-6"
                    >
                      Prod. Price <span className="fw-light">(PBD.)</span>
                    </label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">£</span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
                <div className="w-25">
                  <div>
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-bold fs-6"
                    >
                      Discount <span className="fw-light">(Optional)</span>
                    </label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">%</span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
                <div className="w-25">
                  <div>
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-bold fs-6"
                    >
                      Dist. Price
                    </label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">£</span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
                <div className="w-25">
                  <div>
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-bold fs-6"
                    >
                      Prod. Price <span className="fw-light">(PAD.)</span>
                    </label>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">£</span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-4 mt-2">
                <div class="w-75 mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label fw-bold fs-6"
                  >
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
                <div className="w-25 mt-4">
                  <label
                    for="exampleColorInput"
                    class="form-label fw-bold fs-6"
                  >
                    Color picker
                  </label>
                  <input
                    type="color"
                    class="form-control form-control-color"
                    id="exampleColorInput"
                    value="#563d7c"
                    title="Choose your color"
                  />
                  <div class="input-group mt-4">
                    <label class="input-group-text" for="inputGroupSelect01">
                      P. Size
                    </label>
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Size...</option>
                      <option value="1">sm</option>
                      <option value="2">md</option>
                      <option value="3">l</option>
                      <option value="4">xl</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Addproduct;
