"use client";

import { MapPin, Clock, Phone } from "lucide-react";

const stats = [
  { label: "Hodnotenie", value: "4.9/5" },
  { label: "Rokov skúseností", value: "15+" },
  { label: "Vozidiel ročne", value: "2 000+" },
  { label: "Spokojnosť", value: "98%" },
];

export function EditorialSection() {
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
            Ako nás nájdete
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-6">
            Majerská 42,
            <br />
            Bratislava – Vrakuňa
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8 max-w-sm">
            Po vstupe do areálu choďte rovno až na úplný koniec. Nájdete nás v poslednej budove vpravo.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin size={16} className="text-muted-foreground shrink-0" />
              <span>Majerská 42, 821 07 Bratislava</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Phone size={16} className="text-muted-foreground shrink-0" />
              <a href="tel:+421950261896" className="hover:text-muted-foreground transition-colors">
                +421 950 261 896
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Clock size={16} className="text-muted-foreground shrink-0" />
              <span>Po – Pi: 7:00 – 18:00 | So: 8:00 – 13:00</span>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="tel:+421950261896"
              className="inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Objednať termín
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="relative min-h-[400px] md:min-h-0 bg-secondary overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.0!2d17.162!3d48.143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e6b8f2c!2sMajersk%C3%A1+42%2C+Bratislava!5e0!3m2!1ssk!2ssk!4v1"
            className="absolute inset-0 w-full h-full border-0 grayscale contrast-125"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpha Car Service - Majerská 42, Bratislava"
          />
        </div>
      </div>
    </section>
  );
}
