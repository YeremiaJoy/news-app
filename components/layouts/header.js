import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();

  function handleLogin() {
    router.push("/login");
  }

  return (
    <div className="header-layout">
      <div className="header-content">
        <div className="header-logo">
          <Image src="/images/news-logo.png" width={32} height={32} />
          <span>News App</span>
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Header;
