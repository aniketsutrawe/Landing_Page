import "./globals.css";

export const metadata = {
  title: "Aniket Sutrawe Landing Page",
  description: "Developed by Aniket Sutrawe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full scroll-smooth overflow-ellipsis" >
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
