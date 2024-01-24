
import { handleCloseCart } from "../../functions";

export function CartRoot({children}) {
    
  return (
    <>
      <div id="cart-id" className="app-cart-card-background">
        <div
          className="app-cart-area-close"
          onClick={() => {
            handleCloseCart();
          }}
        ></div>
        {children}
      </div>
    </>
  );
}
