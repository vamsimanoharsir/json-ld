ise<Metadata> {
  const title = "My Blog";

  const description =
    "Welcome to my blog! Dive into a wealth of insightful articles, practical guides, and project breakdowns, empowering you to level up your Rust and Blockchain development skills.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    themeColor: "black"
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.variable} font-sans bg-dark`}
      >
        <div className="w-full min-h-screen flex flex-col sm:px-[100px] md:px-[140px] lg:px-[200px] xl:px-[225px]">
          {children}
        </div>
      </body>
    </html>
  );
};