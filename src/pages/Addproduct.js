import {React, useState} from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Addproduct = () => {
  const [desc,setDesc] = useState();
  const handleDesc = (e) => {
     setDesc(e);
  };
  return (
    <div className="align-items-center bg-green p-3 roudned-3 mt-4">
      <h3 className="mb-4 title">Basic Information</h3>
      <div>
        <form action="">
        <div className="align-items-center bg-white p-3 roudned-3 mt-4">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag files to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
          </p>
        </Dragger>
          <div className='mb-3'>
          <h4 className="mb-0 mt-4">Name</h4>
          <CustomInput 
          type="text" 
          label="Enter Product Title" />
          </div>
          <div>
          <h4 className="mb-0 mt-4">Description</h4>
          <ReactQuill 
            theme="snow" 
            value={desc}  
            onChange={(evt) => {
              handleDesc(evt);
            }} 
            />
          </div>
          <div className='mb-3'>
            <CustomInput 
              type="number" 
              label="Enter Product Price" 
            />
          </div>
          <select name="" className="form-control py-3 mb-3" id="">
              <option value="">Select Size</option>
          </select>
          </div>

          <div className="align-items-center bg-white p-3 roudned-3 mt-4">
          <div className="">
            <h4 className="mb-0 mt-4">Visibllity</h4>
            <div className="d-flex align-items-center gap-1 mt-2">
              <input type="checkbox" />
              <h6>Published</h6>
            </div>
            <div className="d-flex align-items-center gap-1 mt-2">
              <input type="checkbox" />
              <h6>Scheduled</h6>
            </div>
            <div className="d-flex align-items-center gap-1 mt-2">
              <input type="checkbox" />
              <h6>Hidden</h6>
            </div>
            <div className="mb-3 mt-3">
              <h6>Publish date</h6>
            <input 
              type="date" 
              label="Enter Product Price" 
            />
          </div>
          </div>
          </div>
          
          <div className="align-items-center bg-white p-3 roudned-3 mt-4">
          <div className="mb-3 mt-3">
              <h6>Categories</h6>
              <div className='mb-3'>
                <CustomInput type="select" label="Add Category" />
              </div>
              <button 
                className="btn btn-success border-0 my-1 mb-3" 
                type="submit"
                >
                Add new category
              </button>
          </div>
          <div className="mb-3 mt-3">
              <h6>Tags</h6>
              <div className='mb-3'>
                <CustomInput type="select" label="Add Tags" />
              </div>
              <button 
                className="btn btn-success border-0 my-1 mb-3" 
                type="submit"
                >
                Add Tags
              </button>
          </div>
          </div>


        <button 
            className="btn btn-success border-0 rounded-3 my-5" 
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addproduct