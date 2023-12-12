import React from "react";

const Customerlist = () => {
  return (
    <div>
      <div className="border border-1 p-4 bg-white">
        <div>
          <h3 className="mb-4 title">Customer List</h3>
        </div>
        <table class="table border border-1 p-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Mark</td>
              <td>+00 000 0000</td>
              <td>mark@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customerlist;
