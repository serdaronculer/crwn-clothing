import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import ProductCard from "./../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  categoriesIsLoading,
  deneme
} from "./../../store/categories/category.selector";
import Spinner from "./../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(categoriesIsLoading);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => <ProductCard product={product} key={product.id} />)}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
