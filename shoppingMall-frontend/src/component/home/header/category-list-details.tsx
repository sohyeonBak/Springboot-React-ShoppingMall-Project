import { useCallback } from "react";
import { Link } from "react-router-dom";


interface CategoryIProps {
  item: {
    id: number,
    kind: string,
    details: { id: number, title: string}[]
  },
  setCategory : (prev:boolean) => void
}

const CategoryListDetails = ({item, setCategory}: CategoryIProps) => {
  

  const onCloseCategory = useCallback((e)=>{
    setCategory(false)
  },[setCategory]);

  return(
    <div className="sec01">
      <h3>{item.kind}</h3>
      <ul>
        {item.details.map((list)=>
          <Link to={`/productlist/${list.id}`} key={list.id}>
            <li onClick={onCloseCategory}>{list.title}</li>
          </Link>
        )}
      </ul>
    </div>
  );}

export default CategoryListDetails;