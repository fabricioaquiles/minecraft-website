import { Navbar, Nav } from "react-bootstrap";

import Image from "next/image";

import { FaCartShopping } from "react-icons/fa6";
import { FaHome, FaShoppingBasket } from "react-icons/fa";

import { handleOpenCart } from "../../functions";

import { useRouter } from "next/router";
import { Cart } from "../../components/Cart";

export function NavbarTemplate() {
  const router = useRouter();
  return (
    <>
      <section id="presentation" className="app-section-navbar">
        <Navbar expand="lg">
          <Navbar.Brand onClick={() => router.push("/")}>
            <button className="app-navbar-button-logo">
              <a>
                <b>TWISTY</b>
              </a>
            </button>
          </Navbar.Brand>
          <Navbar.Collapse id="navbar bg" style={{ transition: "0.5s" }}>
            <Nav className="m-auto">
              <li className="nav-item">
                <a
                  onClick={() => {
                    router.push("/");
                  }}
                  className="nav-link"
                >
                  <FaHome />
                  <span>Início</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    router.push("/store");
                  }}
                  className="nav-link"
                >
                  <FaShoppingBasket />
                  <span>Loja</span>
                </a>
              </li>
            </Nav>
            <div
              onClick={() => {
                handleOpenCart();
              }}
              className="app-navbar-cart-icon"
            >
              <a>
                <FaCartShopping />
              </a>
              <span>
                <p>2</p>
              </span>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </section>

      <div className="app-header-image">
        <Image
          src="/assets/img/twistynetwork.png"
          width={350}
          height={350}
          alt=""
        />
      </div>

      <Cart.Root>
        <Cart.Header quantity={"2"}>
          <Cart.Body orders={[]} />
        </Cart.Header>
      </Cart.Root>
    </>
  );
}
