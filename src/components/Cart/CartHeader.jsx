export function CartHeader({ quantity, children }) {
  return (
    <>
      <div id="open-cart" className="app-cart-card">
        <div className="app-cart-header">
          <h1>Carrinho</h1>
          <a>{quantity}</a>
        </div>
        {children}
      </div>
    </>
  );
}
