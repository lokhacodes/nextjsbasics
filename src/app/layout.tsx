import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Learning Next.js App",
    template: "%s | My App",
    
  },
  description: "This is my application layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>

        <main>{children}</main>

        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
