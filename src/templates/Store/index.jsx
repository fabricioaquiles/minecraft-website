import { useRouter } from "next/router";

import Image from "next/image";

export function StoreTemplate({children}) {
  const router = useRouter();
  return (
    <>
      <div className="container app-container">
        <div className="row">
          <div className="col-md-3">
            <div className="app-card-category">
              <p>Selecione um servidor</p>
              <div className="app-card-border"></div>
              <div className="app-card-list-categorys">
                <ul>
                  <li>
                    <a
                      onClick={() => {
                        router.push("/store/products");
                      }}
                    >
                      RankUP
                    </a>
                  </li>
                  <li>
                    <a>Factions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="app-card-meta">
              <div>
                <h1>Maior doador</h1>
                <div className="app-card-border"></div>
              </div>
              <div className="app-card-meta-info">
                <div>
                  <Image
                    className="app-card-meta-img"
                    src="https://minotar.net/avatar/Dust/100"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <p>Dust</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
