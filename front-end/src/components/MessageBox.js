import React from "react";

export default function MessageBox(props) {
  return (
    <div className="message">
      <div className={`message__${props.className}`}>{props.children}</div>;
    </div>
  );
}
