"use client";

import { FadeImage } from "@/components/fade-image";
import { useLanguage } from "@/lib/language-context";

export function FeaturedProductsSection() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("services.tires.title"),
      description: t("services.tires.desc"),
      image: "/images/service-tires.jpg",
    },
    {
      title: t("services.ac.title"),
      description: t("services.ac.desc"),
      image: "/images/service-ac.jpg",
    },
    {
      title: t("services.stk.title"),
      description: t("services.stk.desc"),
      image: "/images/service-stk.jpg",
    },
    {
      title: t("services.taxi.title"),
      description: t("services.taxi.desc"),
      image: "/images/service-taxi.jpg",
    },
    {
      title: t("services.diagnostics.title"),
      description: t("services.diagnostics.desc"),
      image: "/images/service-diagnostics.jpg",
    },
    {
      title: t("services.oil.title"),
      description: t("services.oil.desc"),
      image: "/images/service-oil.jpg",
    },
  ];

  return (
    <section id="services" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl whitespace-pre-line">
          {t("services.title")}
          <br />
          {t("services.subtitle")}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground uppercase tracking-widest">
          {t("services.badge")}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}

