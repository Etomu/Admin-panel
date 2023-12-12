import React from "react";

const Categorylist = () => {
  return (
    <div className="d-flex gap-4">
      <div className="w-25">
      <div className="border border-1 p-4 bg-white">
      <h3 className="mb-4 title">Add Category</h3>
      <div>
        <form action="">
        <input class="form-control" type="text" placeholder="Enter Category Name Here..." aria-label="" />
          <button type="button" class="btn btn-warning mt-3">Add Category</button>
        </form>
      </div>
      </div>
      </div>

      <div className="w-75">
        <div className="border border-1 p-4 bg-white">
          <h3 className="mb-4 title">Product Categories</h3>
          <div>
            <table class="table border border-1 p-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorylist;
