import type { Metadata } from "next";
import "./globals.css";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "採点者資格制度のご案内｜日本朗読検定協会",
  description:
    "朗読・読み聞かせ検定の採点を担う新資格。経験不問、Zoom研修と充実サポートで採点業務を始められます。",
  icons: {
    icon: `${assetBase}/roudoku-logo.jpg`,
    shortcut: `${assetBase}/roudoku-logo.jpg`,
  },
  openGraph: {
    title: "採点者資格制度のご案内｜日本朗読検定協会",
    description:
      "朗読・読み聞かせ検定の採点を担う新資格。経験不問、Zoom研修と充実サポートで採点業務を始められます。",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "採点者資格制度のご案内｜日本朗読検定協会",
    description:
      "朗読・読み聞かせ検定の採点を担う新資格。経験不問、Zoom研修と充実サポートで採点業務を始められます。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
