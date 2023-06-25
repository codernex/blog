import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="scroll-smooth scrollbar-hide">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
