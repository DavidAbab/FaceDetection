import React from "react";

const RanK = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{`${name}, ton score actuel est ...`}</div>
      <div className="white f1">{`${entries} #`}</div>
    </div>
  );
};

export default RanK;
