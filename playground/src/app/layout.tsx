

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "red",
            padding: "2rem"
          }}  
        >
          <h1>Hello</h1>
        </header> 

        {children}

        <footer
        style={{
          backgroundColor: "blue",
          alignContent: "right",
          padding: "2rem"
        }}
        >
          <h1>Bye</h1>
        </footer>
      </body>
    </html>
  );
}
