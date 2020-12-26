import React from 'react';
import {Link} from 'react-router-dom';

export const Card = () => (
  <div className="card">
    <img src="" alt="" className="card-img-top"/>
    <div className="card-body">
      <h4 className="card-title">Pikachu</h4>
      <Link to={`/pokemon/pikachu`} className="btn btn-info">Открыть</Link>
    </div>
  </div>
);
