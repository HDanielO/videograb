import "./globals.css";

export const metadata = {
  title: "VideoGrab",
  description: "Download Videos From Your Favorite Social Media Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
