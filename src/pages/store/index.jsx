import Head from "next/head";
import { NavbarTemplate } from "../../templates/Navbar";
import { StoreTemplate } from "../../templates/Store";
import { StoreHomeTemplate } from "../../templates/Store/Home";
import { FooterTemplate } from "../../templates/Footer";


export default function Store() {
  return (
    <>
    <Head>
      <title>Minecraft Website - Store</title>
    </Head>
    <NavbarTemplate />
    <StoreTemplate>
        <StoreHomeTemplate />
    </StoreTemplate>
    <FooterTemplate />
    </>
  )
}
