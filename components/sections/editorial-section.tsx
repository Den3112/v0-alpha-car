"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function EditorialSection() {
  const { t } = useLanguage();

  const stats = [
    { label: t("editorial.statRating"), value: "4.8/5" },
    { label: t("editorial.statExp"), value: "15+" },
    { label: t("editorial.statCars"), value: "2 000+" },
    { label: t("editorial.statSat"), value: "98%" },
  ];

  const whatsappUrl = `https://wa.me/421950261896?text=${encodeURIComponent(t("whatsappTemplates.booking"))}`;

  return (
    <section className="bg-background">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </p>
            <p className="font-medium text-foreground text-4xl">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* How to find us */}
      <div id="book" className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
        {/* Text */}
        <div className="px-6 py-16 md:px-12 md:py-24 lg:px-20 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            {t("editorial.badge")}
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-6">
            {t("editorial.addressTitle")}
            <br />
            {t("editorial.addressSubtitle")}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8 max-w-sm">
            {t("editorial.addressDirections")}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin size={16} className="text-muted-foreground shrink-0" />
              <span>{t("editorial.address")}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Phone size={16} className="text-muted-foreground shrink-0" />
              <a href={`tel:${t("editorial.phone").replace(/\s+/g, "")}`} className="hover:text-muted-foreground transition-colors">
                {t("editorial.phone")}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Clock size={16} className="text-muted-foreground shrink-0" />
              <span>{t("editorial.hours")}</span>
            </div>
          </div>
          <div className="mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              {t("editorial.book")}
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="relative min-h-[400px] md:min-h-0 bg-secondary overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.3789012431444!2d17.212783999999998!3d48.158059699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8f1a70dada2d%3A0x6dbb61f18708d05e!2sAlpha%20Car%20Servis!5e0!3m2!1ssk!2ssk!4v1716380000000!5m2!1ssk!2ssk"
            className="absolute inset-0 w-full h-full border-0 grayscale contrast-125"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpha Car Servis - Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
