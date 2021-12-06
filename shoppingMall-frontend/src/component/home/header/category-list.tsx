import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import CategoryListDetails from "./category-list-details";

type ToggleCategoryIProps = {
  setCategory : (prev:boolean) => void
}

const CategoryList = ({setCategory}: ToggleCategoryIProps) => {

  const {mainCategory} = useSelector((state:RootState) => state.product)

  return (
    <div className="hide-section">
      <div className="category-zone">
          {mainCategory.map((item)=>
          <CategoryListDetails 
            key={item.id}
            item={item}
            setCategory={setCategory}
          />
          )}
      </div>
    </div>
  );
};

export default CategoryList;