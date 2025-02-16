import type { Metadata } from "next";

const baseUrl = "https://www.danmugh.com/";

export async function generateMetadata(): Promise<Metadata> {
  const title = "My Blog";

  const description =
    "Welcome to my blog! Dive into a wealth of insightful articles, practical guides, and project breakdowns, empowering you to level up your Rust and Blockchain development skills.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    themeColor: "black",
    openGraph: {
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: "ograph/public/NIR_4006.JPG",
          secureUrl: "ograph/public/NIR_4006.JPG",
          width: 1200,
          height: 630,
          alt: "Preview image for Vamsi's Blog",
        },
      ],
      type: "website",
      siteName: "Vamsi Blog",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full min-h-screen flex flex-col sm:px-[100px] md:px-[140px] lg:px-[200px] xl:px-[225px]">
          {children}
        </div>
      </body>
    </html>
  );
}
