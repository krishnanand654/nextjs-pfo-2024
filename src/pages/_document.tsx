import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="mx-auto flex min-h-screen max-w-[872px] flex-col ">
        <section className="m-10">
          <h1 className="font-medium"></h1>
          <Main />
          <NextScript />
        </section>
      </body>
    </Html>
  );
}
