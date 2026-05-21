"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Igor K.",
    text: "Rýchla výmena pneumatík, priateľský personál. Hovorili aj po rusky, čo veľmi pomohlo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mária H.",
    text: "Výborný servis klimatizácie. Prišla som bez termínu a za hodinu som odišla spokojná.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tomáš B.",
    text: "Pripravili mi auto na STK bez problémov. Profesionálny prístup, férové ceny.",
    rating: 5,
  },
  {
    id: 4,
    name: "Alexei S.",
    text: "Отличный сервис! Персонал говорит по-русски. Быстро и качественно поменяли колёса.",
    rating: 5,
  },
  {
    id: 5,
    name: "Petra M.",
    text: "Rýchloservis pre taxikárov funguje skvelo. Sme tam pravidelne s celou flotilou.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michal D.",
    text: "Profesionálna diagnostika, presná identifikácia problému. Odporúčam každému.",
    rating: 5,
  },
];

export function CollectionSection() {
  return (
    <section id="contact" className="bg-background">
      {/* Trust Header */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Zlatá Firma</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Hodnotenie 4.9/5
            </h2>
            <div className="mt-3 flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="fill-foreground text-foreground" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">od Zlatá Firma</span>
            </div>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
            Stovky spokojných zákazníkov hodnotia naše služby na Zlatá Firma.
            Ich dôvera je naša najväčšia odmena.
          </p>
        </div>
      </div>

      {/* Reviews Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review) => (
            <div key={review.id} className="flex-shrink-0 w-[80vw] snap-center">
              <div className="rounded-2xl border border-border bg-secondary/30 p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-xs font-medium text-muted-foreground">{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:px-12 lg:px-20">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-2xl border border-border bg-secondary/30 p-6">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs font-medium text-muted-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
