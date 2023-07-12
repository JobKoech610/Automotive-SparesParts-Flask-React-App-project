import React, { useState } from "react";
import AccessoryList from "./components/AccessoryList";

function ParentComponent() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm} className="btn">
        Update
      </button>
      {showForm && <AccessoryList id={id} showForm={showForm} toggleForm={toggleForm} />}
    </div>
  );
}

export default ParentComponent;
