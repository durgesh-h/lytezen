import "./globals.css";

export const metadata = {
  title: 'Lytezen | Home',
  description: 'DevOps Consultancy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
