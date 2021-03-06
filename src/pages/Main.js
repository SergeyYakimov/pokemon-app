import React, {Fragment} from 'react';
import {Search} from '../components/Search';
import {Card} from '../components/Card';

export const Main = () => {
  const cards = new Array(12)
    .fill('')
    .map((_, idx) => idx)

  return (
    <Fragment>
     <Search/>
     <div className="row">
       {
         cards.map(card => (
           <div className="col-sm-4 mb-4" key={card}>
             <Card/>
           </div>
         ))
       }
     </div>
    </Fragment>
  )
};
