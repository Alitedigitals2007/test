import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ajoje the Renaissance — Science of Service",
  description:
    "A movement for inclusive representation, accountable leadership, and meaningful progress in the Faculty of Science Students' Association, University of Ibadan.",
  openGraph: {
    title: "Ajoje the Renaissance — Science of Service",
    description:
      "Welfare. Infrastructure. Empowerment. A movement for inclusive representation and accountable leadership in FASSA, University of Ibadan.",
    type: "website",
    images: [{ url: "/images/ajoje-hero.webp", width: 960, height: 1200, alt: "Portrait of Adedeji-Ajoje Daniel (Ajoje)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajoje the Renaissance — Science of Service",
    description:
      "Welfare. Infrastructure. Empowerment. A movement for inclusive representation and accountable leadership in FASSA.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f1e3" },
    { media: "(prefers-color-scheme: dark)", color: "#17100b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInit = `(function(){try{var t=localStorage.getItem("renaissance-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hanken.variable} ${plex.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:text-brand-fg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
