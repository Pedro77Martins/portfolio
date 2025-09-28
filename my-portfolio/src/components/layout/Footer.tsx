import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-background py-16 px-6 border-t border-zinc-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-md text-zinc-400">
        <div className="max-w-[220px]">
          <p className="font-bold text-white mb-2">✺.</p>
          <p>
            Our goal is to raise design standards by delivering innovative,
            professional solutions that exceed expectations and inspire
            creativity across all visual mediums
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Quick Links</p>
          <ul className="space-y-1 text-accent">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Contact Info</p>
          <p>
            hello@flokstudio.eu
            <br />
            +31 63 942 6749
            <br />
            Mon–Fri 9am–5pm
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Social Channels</p>
          <div className="flex space-x-3">
            <Link href="#">
              <span>LinkedIn</span>
            </Link>
            <Link href="#">
              <span>Instagram</span>
            </Link>
            <Link href="#">
              <span>Facebook</span>
            </Link>

            <Link href="#">
              <span>Behance</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-left mt-12 text-md pl-20 mx-auto text-foreground">
        ©2025 Flok.studio ·{" "}
        <Link href="#" className="text-accent">
          Terms
        </Link>{" "}
        ·{" "}
        <Link href="#" className="text-accent">
          Privacy
        </Link>
      </div>
      <Image
        src="https://nvhac9j28qs9fiq8.public.blob.vercel-storage.com/logos/F_Logo_2_w_2k_asterisk.png"
        alt="Logo"
        className="object-cover pointer-events-none select-none w-screen max-w-5xl mx-auto mt-8"
        width={200}
        height={80}
        draggable={false}
      />
    </footer>
  );
}
