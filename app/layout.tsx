import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import NavBar from "./NavBar";
import AuthProvider from "./api/auth/Provider";
import QueryClientProvier from "./QueryClientProvier";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <QueryClientProvier>
          <AuthProvider>
            <Theme accentColor="purple" appearance="light">
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvier>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker sample",
};
