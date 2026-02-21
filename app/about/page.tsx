import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "About Us | Egham Barbers",
    description: "Learn about the history and master barbers of Egham Barbers, serving Surrey since 1997.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Story Content */}
                    <div className="flex flex-col">
                        <h1 className="mb-6 font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                            Our <span className="text-primary">Story</span>
                        </h1>
                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground mb-10">
                            <p className="mb-6 leading-relaxed">
                                Established in 1997, Egham Barbers has been a cornerstone of the local community for over two decades. What started as a modest two-chair operation has grown into Egham's premier destination for gentlemen's grooming, built entirely on word-of-mouth and a commitment to absolute excellence.
                            </p>
                            <p className="leading-relaxed">
                                We believe that a haircut is more than just a chore—it's an experience. Our shop bridges the gap between old-school traditional barbering and modern men's hairdressing. When you sit in one of our chairs, you're not just getting a cut; you're getting decades of combined expertise, careful attention to detail, and a moment to relax away from the busy world outside.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-lg border border-border/40">
                            <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
                                Why Egham <span className="text-primary">Barbers?</span>
                            </h2>
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground"><strong className="text-foreground font-medium">Expert barbers.</strong> Continuous training ensures our team masters both classic scissork-work and modern skin fading techniques.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground"><strong className="text-foreground font-medium">Walk-ins always welcome.</strong> We run a flexible system allowing you to drop by whenever suits your schedule.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground"><strong className="text-foreground font-medium">Central Egham location.</strong> Conveniently located right by the station at 8 Station Road North.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative aspect-[3/4] w-full mt-8 sm:mt-16 overflow-hidden rounded-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1503951914965-425486118a1b?auto=format&fit=crop&q=80&w=800"
                                alt="Barber working on client"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800"
                                alt="Vintage barbershop chair"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-24">
                    <h2 className="mb-8 font-heading text-3xl font-bold uppercase tracking-tight text-center">
                        Find <span className="text-primary">Us</span>
                    </h2>
                    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-border/40 bg-card">
                        <iframe
                            src="https://maps.google.com/maps?q=8+Station+Road+North,+Egham,+Surrey,+TW20+9LE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="Egham Barbers Map Location"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
