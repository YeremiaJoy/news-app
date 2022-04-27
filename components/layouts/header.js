import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { getCookie } from "../../helpers/cookies";

function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const [account, setAccount] = useState({});

  useEffect(() => {
    if (pathname === "/news" && getCookie("user") !== "") setAccount(JSON.parse(getCookie("user")));
  }, []);

  function handleLogout() {
    // clearCookies doesnt work so i need to do it manually
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    router.push("/", undefined, { shallow: false });
  }

  return (
    <div className="header-layout">
      <div className="header-content">
        <Link href="/">
          <a>
            <div className="header-logo">
              <Image src="/images/news-logo.png" width={32} height={32} />
              <span>News App</span>
            </div>
          </a>
        </Link>
        {pathname === "/" && (
          <Link href="/login">
            <a>
              <div className="header-login-btn">LOGIN</div>
            </a>
          </Link>
        )}
        {pathname === "/news" && (
          <div className="Logout-container">
            <span>
              Hi, {account?.firstName} {account?.lastName}!
            </span>
            <div className="header-login-btn" onClick={handleLogout}>
              LOGOUT
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
