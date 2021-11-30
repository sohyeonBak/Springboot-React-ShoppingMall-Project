import React, { CSSProperties } from 'react';
import { ListColorIProps } from './products-list-detailed';



const ListColor = ({color} : ListColorIProps) => {
  
  const listStyle: CSSProperties = {
    background : color
  }

  return(
    <li style={listStyle}></li>    
  );}

export default ListColor;