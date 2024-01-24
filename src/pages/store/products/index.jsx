import Head from "next/head";
import { NavbarTemplate } from "../../../templates/Navbar";
import { StoreTemplate } from "../../../templates/Store";
import { StoreProductsTemplate } from "../../../templates/Store/Products";
import { FooterTemplate } from "../../../templates/Footer";


export default function StoreProducts() {
  return (
    <>
    <Head>
      <title>Minecraft Website - Products</title>
    </Head>
    <NavbarTemplate />
    <StoreTemplate>
        <StoreProductsTemplate />
    </StoreTemplate>
    <FooterTemplate />
    </>
  )
}
