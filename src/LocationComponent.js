import React from "react";
import { useSelector } from "react-redux";

const LocationComponent = () => {
  const location = useSelector(state => state.form.location)
  return (
    <div>
      <h5>
        <strong>Ubicación</strong>: {location}
      </h5>
    </div>
  );
};

export default LocationComponent;
