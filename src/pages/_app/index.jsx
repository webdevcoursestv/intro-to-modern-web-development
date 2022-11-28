import "./globals.css";
import NextHead from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <title>Hi</title>

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </NextHead>

      <div className="container mx-auto">
        <div className="bg-green-800 min-h-screen drop-shadow-xl p-8">
          <header className="flex items-center gap-8 font-luckiest">
            <div>
              <img src="/logo.png" className="w-[80px]" />
            </div>
            <nav className="flex-grow">
              <ul className="flex items-center gap-8 text-3xl ">
                <li>Our Pies</li>
                <li>About us</li>
              </ul>
            </nav>
            <div>Cart</div>
          </header>
          <Component {...pageProps} />
        </div>{" "}
      </div>
    </>
  );
}
