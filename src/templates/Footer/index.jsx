import Image from "next/image";

import { FaCartShopping, FaDiscord, FaTwitter } from "react-icons/fa6";
import { FaHome, FaShoppingBasket } from "react-icons/fa";

import { useRouter } from "next/router";
import { handleOpenCart } from "../../functions";

export function FooterTemplate() {
  const router = useRouter();

  return (
    <>
      <footer>
        <div className="footer" style={{ background: "#131313" }}>
          <div className="logo">
            <div className="container">
              <a href="">
                <Image
                  src="/assets/img/twistynetwork.png"
                  alt=""
                  className="img-fluid mb-3"
                  width={80}
                  height={80}
                />
              </a>
              <div className="footer-social">
                <a
                  className="icon-twitter"
                  href="http://www.twitter.com/"
                  target="_blank"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  className="icon-discord"
                  href="https://discord.gg/"
                  target="_blank"
                >
                  <FaDiscord size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="overlay" style={{ background: "black;" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  &copy; <a href="">TwistyNetwork</a>. Todos direitos
                  reservados. <br />
                  <p className="text-muted">
                    Este site não é de propriedade ou operado pela Mojang AB
                    e/ou do Minecraft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer>
        <div className="app-footer-navbar">
          <ul>
            <li>
              <a
                onClick={() => {
                  router.push("/");
                }}
              >
                <FaHome />
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/store");
                }}
              >
                <FaShoppingBasket />
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleOpenCart();
                }}
              >
                <FaCartShopping />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
