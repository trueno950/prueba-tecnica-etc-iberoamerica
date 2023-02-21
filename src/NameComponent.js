import React from "react";
import { useSelector } from "react-redux";


const NameComponent = () => {
  const name = useSelector(state => state.form.name)
  return (
    <div style={{ marginTop: "30px" }}>
      <h5>
        <strong>Nombre</strong>:  {name}
      </h5>
    </div>
  );
};

export default NameComponent;
