import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataForm } from "./formSlice";

const Form = () => {
  const name = useSelector(state => state.form.name)
  const location = useSelector(state => state.form.location)
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    dispatch(setDataForm({ name, value }))
  }

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Nombre:</label>
        <input className="input" name="name" value={name} onChange={handleChange} />
      </div>

      <div className="input-item">
        <label className="label">Ubicación:</label>
        <input className="input" name="location" value={location} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Form;
