"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function FooterSection() {
  const { t, language } = useLanguage();

  const exploreLabels = {
    services: { sk: "Služby", en: "Services", ru: "Услуги" },
    gallery: { sk: "Galéria", en: "Gallery", ru: "Галерея" },
    reviews: { sk: "Hodnotenia", en: "Reviews", ru: "Отзывы" },
    contact: { sk: "Kontakt", en: "Contact", ru: "Контакты" },
  };

  const exploreLinks = [
    { label: exploreLabels.services[language], href: "#services" },
    { label: exploreLabels.gallery[language], href: "#gallery" },
    { label: exploreLabels.reviews[language], href: "#contact" },
    { label: exploreLabels.contact[language], href: "#contact" },
  ];

  const servicesList = (t("footer.servicesList") as string[]) || [];
  const servicesLinks = servicesList.map((label) => ({
    label,
    href: "#services",
  }));

  const contactLinks = [
    { label: t("editorial.address"), href: "#contact" },
    { label: t("editorial.phone"), href: `tel:${t("editorial.phone").replace(/\s+/g, "")}` },
    { label: t("editorial.hours"), href: "#contact" },
  ];

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
              {t("footer.desc")}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">{t("footer.navTitle")}</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
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
            <h4 className="mb-4 text-sm font-medium text-foreground">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
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
            <h4 className="mb-4 text-sm font-medium text-foreground">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3">
              {contactLinks.map((link, idx) => (
                <li key={idx}>
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
            © {new Date().getFullYear()} {t("footer.rights")}
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
              href="https://maps.app.goo.gl/wKwiUSsgWv4a7PsEA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Google Maps
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
