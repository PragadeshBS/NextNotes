import {
  faSun,
  faMoon,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  return (
    <div className="bg-[#00425A] text-white py-3 mb-5">
      <div className="container mx-auto grid grid-cols-12 items-center">
        <div className="col-span-11 font-bold text-5xl">Notes</div>
        <div
          className="col-span-1 grid justify-items-center cursor-pointer"
          onClick={handleThemeChange}
        >
          <div>
            <FontAwesomeIcon
              icon={
                theme === "system"
                  ? faCircleHalfStroke
                  : theme === "light"
                  ? faSun
                  : faMoon
              }
              className="text-2xl"
            />
          </div>
          <div>
            {theme === "system"
              ? "System"
              : theme === "light"
              ? "Light"
              : "Dark"}
          </div>
        </div>
      </div>
    </div>
  );
}
