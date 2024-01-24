import Image from "next/image";

import { FaUser, FaTable, FaDiscord, FaTwitter } from "react-icons/fa6";

export function HomeTemplate() {
  return (
    <>
      <div className="container app-container">
        <div className="row">
          <div className="col-md-8">
            <div className="card" id="noticias">
              <div className="zoom">
                <div className="card-header d-flex" id="header-noticias">
                  <div className="article-author">
                    <Image
                      className="fundo-header img-responsive"
                      // loader={() => `https://minotar.net/avatar/Dust/100`}
                      src="https://minotar.net/avatar/Dust/100"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="d-inline-block align-self-center news-header">
                    <h3 className="news-title">Noticia nova!!</h3>
                    <h3 className="news-author">
                      <FaUser /> Dust <FaTable className="pl-2" /> 15/09/2022
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p>Minecraft Website by Fabricio Aquiles</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app-sidebar-card">
              <div className="app-sidebar-card-header">
                <h2>VEJA TAMBÉM</h2>
              </div>
              <div className="app-sidebar-card-body">
                <a
                  style={{ background: "#55acee" }}
                  id="sidebar-icon"
                  className="icon-twitter"
                  href="http://www.twitter.com/"
                  target="_blank"
                >
                  <FaTwitter size={30}/>
                </a>
                <a
                  style={{ background: "#7289da" }}
                  id="sidebar-icon"
                  className="icon-discord"
                  href="https://discord.gg/"
                  target="_blank"
                >
                  <FaDiscord size={30}/>
                </a>
              </div>
            </div>
            <div className="sidebar-bottom">
              <div className="card"></div>
              <iframe
                src="https://discordapp.com/widget?id=809558364995715173&theme=dark"
                width="100%"
                height="350"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
