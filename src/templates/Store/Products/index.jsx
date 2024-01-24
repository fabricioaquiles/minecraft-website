import Image from "next/image";

import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

import { Modal } from "../../../components/Modal";
import { handleModal } from "../../../functions";

export function StoreProductsTemplate() {
  return (
    <>
      <Modal.Root>
        <Modal.Actions handleCloseModal={() => handleModal()} />
        <Modal.Header>
          <h2>Detalhes</h2>
        </Modal.Header>
        <Modal.Body>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Teste</h1>
          <h1>Testa</h1>
        </Modal.Body>
      </Modal.Root>

      <div id="modal-open" className="app-card-modal-background"></div>

      <div className="row">
        <div className="col-md-3">
          <div className="app-card-product">
            <Image
              className="app-card-product-image"
              src="/assets/img/twistynetwork.png"
              alt=""
              width={150}
              height={150}
            />
            <h1>MVP+ (30 dias)</h1>
            <p>R$20,00</p>
            <div className="">
              <a className="app-card-product-primary-button">
                <FaShoppingCart size={30} />
              </a>
              <a
                onClick={() => handleModal()}
                className="app-card-product-secondary-button"
              >
                <FaInfoCircle size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="app-card-product">
            <Image
              className="app-card-product-image"
              src="/assets/img/twistynetwork.png"
              alt=""
              width={150}
              height={150}
            />
            <h1>MVP+ (30 dias)</h1>
            <p>R$20,00</p>
            <div className="">
              <a className="app-card-product-primary-button">
                <FaShoppingCart size={30} />
              </a>
              <a className="app-card-product-secondary-button">
                <FaInfoCircle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
