import localFont from "next/font/local";

export const metadata = {
  title: "Manual.co Quiz page",
  description: "Want to see  ",
};
const myFont = localFont({
  src: "../public/fonts/TT_Norms_Pro_Regular.otf",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
