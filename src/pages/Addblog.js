import React, { useState } from "react";
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

const Addblog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div className="bg-white p-4">
      <div className="border-bottom border-black">
        <h3 className="mb-4 title">Add Blog</h3>
      </div>
      <div className="">
        <form action="" className="d-flex gap-4 mt-4">
          <div className="w-40 border border-1 p-3">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </div>
          <div className="w-50 border border-1 p-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Blog Title
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Trendy Home Products 2023"
              />
            </div>
            <select name="" className="form-control py-3 mb-3" id="">
              <option value="">Select Blog Category</option>
            </select>
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
            <button
              type="submit"
              class="btn btn-warning border-0 rounded-3 my-4"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
