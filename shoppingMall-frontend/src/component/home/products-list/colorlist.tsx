import React, { CSSProperties } from 'react';

interface ListColorIProps {
  color: string
}

const ColorList = ({color} : ListColorIProps) => {
  
  const listStyle: CSSProperties = {
    background : color
  }

  return(
    <li style={listStyle}></li>    
  );}

export default ColorList;