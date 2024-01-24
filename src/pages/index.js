import Head from "next/head";
import { NavbarTemplate } from "../templates/Navbar";
import { HomeTemplate } from "../templates/Home";
import { FooterTemplate } from "../templates/Footer";


export default function Home() {
  return (
    <>
    <Head>
      <title>Minecraft Website</title>
    </Head>
    <NavbarTemplate />
    <HomeTemplate />
    <FooterTemplate />
    </>
  )
}
