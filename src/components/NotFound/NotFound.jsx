import React from "react";

function NotFound({ content = "გვერდი ვერ მოიძებნა" }) {
  const style = {
    fontSize: "5rem",
    textAlign: "center",
    marginTop: "15rem",
  };

  return <div style={style}>{content}</div>;
}

export default NotFound;
