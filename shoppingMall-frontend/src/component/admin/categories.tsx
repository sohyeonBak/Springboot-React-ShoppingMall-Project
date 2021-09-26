import React from 'react';
import {AdminProps} from '../admin/admin.js'

const Categories = (categoryClick: AdminProps[`adminSelect`]) => {
  console.log(categoryClick===true)
  return (
    <div className={categoryClick===true?'show':''}>
      hi
    </div>
  );
};

export default Categories;