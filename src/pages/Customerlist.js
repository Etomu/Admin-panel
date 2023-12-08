import React from "react";

const Customerlist = () => {
  return (
    <div>
      <div>
        <h3 className="mb-4 title">Customer List</h3>
        <div>
          <div className="d-inline-flex gap-5 p-3">
          <div>
            Name
            <div>
              <div className="justify-content-around align-items-start bg-white p-3 rounded rounded-5 border border-black border-3">
                <img
                width={38}
                height={38}
                 src="https://res.cloudinary.com/duzshb1ng/image/upload/v1700666991/avatar-1_tjmyun.png"/>
                John Doe
                </div>
            </div>
          </div>
          <div>Email</div>
          <div>Phone Number</div>
          <div>Gender</div>
          <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Customerlist;
