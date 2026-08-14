import SelectedCart from "../../ui/SelectedCart";

const SelectedProductCart = ({ addToCart,setAddToCart }) => {


  return (
    <div>
      <div>
        <SelectedCart addToCart={addToCart} setAddToCart={setAddToCart}></SelectedCart>
      </div>
    </div>
  );
};

export default SelectedProductCart;
