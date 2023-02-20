import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <div className="xl:container xl:mx-auto">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
