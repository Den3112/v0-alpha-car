"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Služby", href: "#services" },
    { label: "Galéria", href: "#gallery" },
    { label: "Hodnotenia", href: "#contact" },
    { label: "Kontakt", href: "#contact" },
  ],
  services: [
    { label: "Pneuservis", href: "#services" },
    { label: "Servis klimatizácie", href: "#services" },
    { label: "Príprava na STK/EK", href: "#services" },
    { label: "Rýchloservis taxíky", href: "#services" },
  ],
  contact: [
    { label: "Majerská 42, Bratislava", href: "#contact" },
    { label: "+421 950 261 896", href: "tel:+421950261896" },
    { label: "Po–Pi: 7:00–18:00", href: "#contact" },
    { label: "So: 8:00–13:00", href: "#contact" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-semibold text-foreground">
              ALPHA CAR SERVICE
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Profesionálny autoservis v Bratislave – Vrakuňa. Pneuservis, klimatizácia, STK/EK, rýchloservis pre taxíky.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Navigácia</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Služby</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Kontakt</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Alpha Car Service. Všetky práva vyhradené.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="https://www.zlatafirma.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Zlatá Firma
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
