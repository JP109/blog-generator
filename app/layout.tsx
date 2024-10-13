import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Dev Musings",
  description: "THE WEB AND OTHER ARCANE SPELLCRAFT, BY JAI PAWAR",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <Link href={"/"}>
        <h1>Web Dev Musings</h1>
      </Link>
    </header>
  );

  let footer = (
    <footer>
      <p>
        Thank you for visiting <strong>Web Dev Musings</strong>!
      </p>
      <p>
        Opinions are my own. No spells were harmed in the making of this blog.
      </p>
      <p>© 2024 Jai | All rights reserved.</p>
      <div>
        <a
          href="https://github.com/JP109"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://www.linkedin.com/in/jai-pawar"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <p>
        For inquiries, feel free to reach out at{" "}
        <a href="mailto:jaipawar113@gmail.com">jaipawar113@gmail.com</a>.
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
