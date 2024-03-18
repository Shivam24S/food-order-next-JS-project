import MainHeader from "@/component/main-header";
import "./globals.css";

export const metadata = {
  title: "Tasty Junction",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
