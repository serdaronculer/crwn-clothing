import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "./../../contexts/categories.context";
import ProductCard from "./../../components/product-card/product-card.component";
import {CategoryContainer,CategoryTitle} from "./category.styles";
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from './../../store/categories/category.selector';
const Category = () => {
  const { category } = useParams();
  const  categoriesMap  = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
