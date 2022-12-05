import Button, { BUTTON_TYPES_CLASSES } from "./../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCardContainer,
  Price,
  Name,
  Footer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPES_CLASSES.inverted}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
