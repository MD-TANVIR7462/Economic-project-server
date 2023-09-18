import React from "react";

const ContactFrom = () => {
  return (
    <div className="hero   my-32">
      <div className="card bg-base-200 md:p-4 w-full max-w-2xl shadow-2xl ">
        <p className="text-[#168a73] text-center font-semibold text-2xl">
          Leave Us A message
        </p>
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Messege</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type Here"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
