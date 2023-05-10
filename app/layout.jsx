import "./globals.css";
import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <AuthContext>
            <main className='max-w-screen-2xl m-auto bg-white'>
              <Navbar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
