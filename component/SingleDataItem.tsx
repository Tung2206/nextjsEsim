// components/SingleDataItem.js
import React from 'react';

const SingleDataItem = ({ item }) => {
  return (
    <div>
      <h3>{item.single_name_country}</h3>
      <p>{item.single_data_day}</p>
      <p>{item.single_price}</p>
      <p>{item.single_description}</p>
      {/* Render other details */}
    </div>
  );
};

export default SingleDataItem;
