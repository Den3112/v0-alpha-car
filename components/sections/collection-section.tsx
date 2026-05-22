"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function CollectionSection() {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: t("reviews.r1.name"),
      text: t("reviews.r1.text"),
      rating: 5,
    },
    {
      id: 2,
      name: t("reviews.r2.name"),
      text: t("reviews.r2.text"),
      rating: 5,
    },
    {
      id: 3,
      name: t("reviews.r3.name"),
      text: t("reviews.r3.text"),
      rating: 5,
    },
    {
      id: 4,
      name: t("reviews.r4.name"),
      text: t("reviews.r4.text"),
      rating: 5,
    },
    {
      id: 5,
      name: t("reviews.r5.name"),
      text: t("reviews.r5.text"),
      rating: 5,
    },
    {
      id: 6,
      name: t("reviews.r6.name"),
      text: t("reviews.r6.text"),
      rating: 5,
    },
  ];

  return (
    <section id="contact" className="bg-background">
      {/* Trust Header */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-28">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("reviews.badge")}</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {t("reviews.ratingTitle")}
            </h2>
            <div className="mt-3 flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="fill-foreground text-foreground" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">{t("reviews.ratingSub")}</span>
            </div>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
            {t("reviews.description")}
          </p>
        </div>
      </div>

      {/* Reviews Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review) => (
            <div key={review.id} className="flex-shrink-0 w-[80vw] snap-center">
              <div className="rounded-2xl border border-border bg-secondary/30 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground mb-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <p className="text-xs font-semibold text-muted-foreground">{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:px-12 lg:px-20">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-2xl border border-border bg-secondary/30 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <p className="text-xs font-semibold text-muted-foreground mt-2">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

