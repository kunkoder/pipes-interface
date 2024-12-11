import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Update() {
  const [Pipe, setPipe] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://json-server-pipe.vercel.app/pipes/" + id)
      .then((res) => {
        setPipe(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const UpdatePipe = (e) => {
    e.preventDefault();
    axios
      .put("https://json-server-pipe.vercel.app/pipes/" + id, Pipe)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Pipe {Pipe.pre_order}</h1>
        <form onSubmit={UpdatePipe}>
          <div className="mb-2">
            <label htmlFor="pre_order">Pre-Order Number:</label>
            <input
              type="text"
              name="pre_order"
              className="form-control"
              value={Pipe.pre_order}
              onChange={(e) => setPipe({ ...Pipe, pre_order: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="line_item">Line Item:</label>
            <input
              type="text"
              name="line_item"
              className="form-control"
              value={Pipe.line_item}
              onChange={(e) => setPipe({ ...Pipe, line_item: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="heat">Heat:</label>
            <input
              type="text"
              name="heat"
              className="form-control"
              value={Pipe.heat}
              onChange={(e) => setPipe({ ...Pipe, heat: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="pipe_number">Pipe Number:</label>
            <input
              type="text"
              name="pipe_number"
              className="form-control"
              value={Pipe.pipe_number}
              onChange={(e) => setPipe({ ...Pipe, pipe_number: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="pipe_length">Pipe Length:</label>
            <input
              type="number"
              name="pipe_length"
              className="form-control"
              value={Pipe.pipe_length}
              onChange={(e) => setPipe({ ...Pipe, pipe_length: e.target.value })}
            />
          </div>

          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
