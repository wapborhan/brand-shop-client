const CartList = () => {
  return (
    <div>
      <div className="cart-card border-t-2">
        <div className="flex justify-between items-center">
          <div className="image">
            <img
              src="https://www.bdshop.com/pub/media/catalog/product/cache/1d3c01a67a82857ace775d06fc4540d2/p/a/panasonic-vacuum-cleaner-mc-yl690.jpeg"
              alt=""
              className="w-16"
            />
          </div>
          <div className="content">
            <h2>Name Name Name</h2>
            <div className="price">$ 200</div>
          </div>
          <div className="del">
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
