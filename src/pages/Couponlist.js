import React from "react";

const Couponlist = () => {
  return (
    <div className="d-flex gap-4">
      <div className="w-25">
        <div className="border border-1 p-4 bg-white">
          <h3 className="mb-4 title">Coupon</h3>
          <div>
            <form action="">
              <input
                class="form-control mb-3"
                type="text"
                placeholder="Coupon Name Here..."
                aria-label=""
              />
              <input
                class="form-control mb-3"
                type="text"
                placeholder="Coupon code Here..."
                aria-label=""
              />
              <textarea
                  class="form-control"
                  placeholder="Coupon Description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              <button type="button" class="btn btn-warning mt-3">
                Add Coupon
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-75">
        <div className="border border-1 p-4 bg-white">
          <h3 className="mb-4 title">Coupon List</h3>
          <div>
            <table class="table border border-1 p-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Coupon List</th>
                  <th scope="col">Coupon Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Mark</td>
                  <td>Up To 25% Off</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couponlist;
