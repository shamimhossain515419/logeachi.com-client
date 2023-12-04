
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    return (
        <Link to={`/product/category?category=${category?.name}&minprice=${0}&maxprice=${1000}&name=`}>
            <li className="category_item ">
                <div  className="  uppercase">{category?.name}</div>
            </li>
        </Link>
    );
};

export default Category;
