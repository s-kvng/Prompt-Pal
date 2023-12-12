import "@styles/globals.css";

export const metadata = {
  title: "Promt-Pal",
  description: "Discover & Share AI prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className=" gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
