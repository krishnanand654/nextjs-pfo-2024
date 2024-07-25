import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/themes";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [backButtonToggle, setBackButtonToggle] = useState(false);
  const router = useRouter();

  const currrentPath = router.pathname;
  useEffect(() => {
    if (currrentPath != "/") {
      setBackButtonToggle(true);
    } else {
      setBackButtonToggle(false);
    }
  }, [currrentPath]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="layout">
      <div
        className={`flex ${
          backButtonToggle ? "justify-between" : "justify-end"
        }`}
      >
        {backButtonToggle && (
          <ArrowLeft className="cursor-pointer" onClick={handleGoBack} />
        )}

        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <Image
              src="/dark.png"
              width={20}
              height={20}
              alt="Picture of the author"
            />
          ) : (
            <Image
              src="/sun.png"
              width={20}
              height={20}
              alt="Picture of the author"
            />
          )}
        </button>
      </div>
      {children}
    </div>
  );
}

export default Layout;
