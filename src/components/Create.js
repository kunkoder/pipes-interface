import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [Pipe, setPipe] = useState({
    pre_order: "",
    line_item: "",
    heat: "",
    pipe_number: "",
    pipe_lenght: ""
  });

  const navigate = useNavigate();

  const AddPipe = (e) => {
    e.preventDefault();

    axios
      .post("https://json-server-pipe.vercel.app/pipes", Pipe)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a Pipe </h1>
        <form onSubmit={AddPipe}>
          <div className="mb-2">
            <label htmlFor="pre_order">Pre-Order Number:</label>
            <input
              type="text"
              name="pre_order"
              className="form-control"
              placeholder="Enter Pre-Order Number"
              //here we create copie de user avec ses proprietés initial
              //user initial ( name: '' , email : ' ', phone: ' ')
              // et on a modifié la valeur de name
              //avec e.target.value ( ma3anaha ay haja takteb f input (la saisie) thot f name)
              //user became ( name: 'yousra', email: ' ', phone: ' ')
              onChange={(e) => setPipe({ ...Pipe, pre_order: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="line_item">Line Item:</label>
            <input
              type="text"
              name="line_item"
              className="form-control"
              placeholder="Enter Line Item"
              // here the last user object copied is ( name: 'yousr', email: ' ', phone: ' ')
              //we insert the email's value and it became ( name: yousra, email: 'h@gma ', phone: ' ')
              onChange={(e) => setPipe({ ...Pipe, line_item: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="heat">Heat:</label>
            <input
              type="text"
              name="heat"
              className="form-control"
              placeholder="Enter Heat"
              onChange={(e) => setPipe({ ...Pipe, heat: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="pipe_number">Pipe Number:</label>
            <input
              type="text"
              name="pipe_number"
              className="form-control"
              placeholder="Enter Pipe Number"
              onChange={(e) => setPipe({ ...Pipe, pipe_number: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="pipe_length">Pipe Length:</label>
            <input
              type="number"
              name="pipe_length"
              className="form-control"
              placeholder="Enter Pipe Length"
              onChange={(e) => setPipe({ ...Pipe, pipe_length: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Create</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
