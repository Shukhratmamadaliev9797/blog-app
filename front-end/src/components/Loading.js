import React from "react";

import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__box">
        <PropagateLoader color={"#393e46"} size={20} />
      </div>
    </div>
  );
}
