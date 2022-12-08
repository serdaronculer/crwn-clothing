import Button, { BUTTON_TYPES_CLASSES } from "./../button/button.component";
import { addItemToCart } from "./../../store/cart/cart.action";
import { selectCartItems } from "./../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductCardContainer,
  Price,
  Name,
  Footer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
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
