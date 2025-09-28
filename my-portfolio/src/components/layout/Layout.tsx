"use client";

import { useLenis } from "@/hooks/useLenis";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  useLenis();
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
