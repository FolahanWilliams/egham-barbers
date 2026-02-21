import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ArrowRight, Scissors, Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const reviews = [
    {
      name: "Claire",
      review: "Exceptional service and meticulous attention to detail. The atmosphere is welcoming, and the professionalism is top-tier. Best haircut in Egham!",
    },
    {
      name: "Mark T.",
      review: "Friendly team, warm welcome, great coffee, and exceptional attention to detail. This place beats any top London salon I've ever been to.",
    },
    {
      name: "Jack",
      review: "Top-notch trims and excellent customer service. The barbers here are true experts who never rush the process. Highly recommend.",
    }
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: "Egham Barbers",
            telephone: "01784 434222",
            address: {
              "@type": "PostalAddress",
              streetAddress: "8 Station Road North",
              addressLocality: "Egham",
              postalCode: "TW20 9LE",
              addressCountry: "GB",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center bg-background px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000"
            alt="Barbershop Interior"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto text-center">
          <h1 className="mb-6 font-heading text-5xl font-bold uppercase tracking-tight sm:text-7xl md:text-8xl">
            Sharp Cuts. <br className="hidden sm:block" />
            <span className="text-primary">Classic Fades.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Premium grooming for the modern gentleman, located in the heart of Egham.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="w-full sm:w-auto text-base">
              <a href="tel:01784434222">
                <Phone className="mr-2 h-5 w-5" />
                Call to Book
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary/20">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 font-heading text-2xl font-semibold uppercase tracking-wide">
                Walk-ins Welcome
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Spontaneous decision? No problem. We accommodate walk-ins alongside our scheduled appointments.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary/20">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 font-heading text-2xl font-semibold uppercase tracking-wide">
                Expert Barbers
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Our master barbers are highly trained in both traditional techniques and the latest modern trends.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary/20">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 font-heading text-2xl font-semibold uppercase tracking-wide">
                Est. in Egham
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                A proud local community fixture, delivering premium cuts to the gentlemen of Surrey since 1997.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Col Info Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000"
                alt="Barber cutting hair"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-heading text-4xl font-bold uppercase tracking-tight">
                The Standard of <span className="text-primary">Excellence</span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Whether you need a classic taper, a modern skin fade, or a traditional hot towel beard trim, our team ensures you leave looking and feeling your absolute best.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-border/40 pb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="font-semibold">Mon - Fri</div>
                    <div className="text-sm text-muted-foreground">9:00 AM - 7:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-border/40 pb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="font-semibold">Saturday</div>
                    <div className="text-sm text-muted-foreground">8:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 font-heading text-4xl font-bold uppercase tracking-tight">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((testimonial, i) => (
              <Card key={i} className="bg-background border-border/40 flex flex-col items-center p-8 text-center text-card-foreground">
                <div className="flex mb-6 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <CardContent className="p-0 flex flex-col flex-1 gap-6">
                  <p className="italic text-muted-foreground leading-relaxed flex-1">"{testimonial.review}"</p>
                  <p className="font-heading text-lg font-medium tracking-wide uppercase">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
