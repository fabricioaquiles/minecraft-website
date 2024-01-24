import Image from "next/image";

import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export function CartBody({orders}) {
  return (
    <>
      <div className="">
        <div className="app-card-products-header">
          <span>Meus pedidos</span>
          <p>Confira seu carrinho</p>
        </div>
        {!orders.lenght && (
          <div className="app-cart-products">
            <div className="app-cart-products-empty">
              <a>
                <FaCartShopping />
              </a>
            </div>
          </div>
        )}
        <div className="app-cart-cupom">
          <div className="form-group">
            <label>Nickname de quem irá receber.</label>
            <input className="form-control" name="name" />
          </div>
          <div className="form-group">
            <label>Possuí um cupom?</label>
            <input className="form-control" name="name" />
          </div>
        </div>
        <div className="app-cart-prices">
          <div className="app-cart-prices-total">
            <a>Total</a>
            <span>R$0,00</span>
          </div>
          <div className="app-cart-prices-total">
            <a>Desconto</a>
            <span>R$0,00</span>
          </div>
          <div className="app-cart-prices-total">
            <a>Subtotal</a>
            <span>R$0,00</span>
          </div>
        </div>
        <div className="app-cart-gateways">
          <div className="app-cart-gateways-pix">
            <Image
              alt=""
              width={80}
              height={30}
              src="/assets/img/pix-106.png"
            />
          </div>
        </div>
        <div className="app-cart-checkout">
          <span>Finalizar compra</span>
          <a>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </>
  );
}
