import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h2>{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default List;

