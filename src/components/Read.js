import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Read() {
  const [dataPipe, setDataPipe] = useState({});
  //un hook qui extrait id de l'URL actuelle
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://json-server-pipe.vercel.app/pipes/" + id)
      .then((res) => setDataPipe(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg white shadow px-5 pt-3 pb-5 rounded">
        <h1>Detail of User</h1>
        <div className="mb-2">
          <strong> Pre-Order Number: {dataPipe.pre_order}</strong>
        </div>
        <div className="mb-2">
          <strong> Line Item: {dataPipe.line_item}</strong>
        </div>
        <div className="mb-2">
          <strong> Heat: {dataPipe.heat}</strong>
        </div>
        <div className="mb-2">
          <strong> Pipe Number: {dataPipe.pipe_number}</strong>
        </div>
        <div className="mb-2">
          <strong> Pipe Length: {dataPipe.pipe_length}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Update
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}
