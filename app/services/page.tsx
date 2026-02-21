import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Phone } from "lucide-react";

export const metadata = {
    title: "Our Services | Egham Barbers",
    description: "Explore our range of premium grooming services at Egham Barbers, from classic haircuts to traditional hot towel shaves.",
};

const servicesList = [
    {
        title: "Classic Haircut",
        description: "A tailored cut using scissors and clippers to suit your personal style, finished with premium styling products.",
    },
    {
        title: "Skin Fade",
        description: "A seamless gradient fade down to the skin, precision-blended for a sharp, modern look.",
    },
    {
        title: "Beard Trim & Shape",
        description: "Expert beard sculpting, line-up, and conditioning to keep your facial hair looking sharp.",
    },
    {
        title: "Men's Shaving",
        description: "A traditional hot towel wet shave experience for the ultimate smooth finish and relaxation.",
    },
    {
        title: "Head Shave",
        description: "A close, smooth head shave utilizing professional straight razors and soothing skin treatments.",
    },
    {
        title: "Restyle",
        description: "Looking for a change? Consult with our master barbers for a complete transformation and new look.",
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h1 className="mb-6 font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                    Our <span className="text-primary">Services</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    We offer a comprehensive range of premium barbering services. Every cut includes a consultation to ensure you leave looking your absolute best.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {servicesList.map((service) => (
                    <Card key={service.title} className="flex flex-col bg-card border-border/40 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background border border-primary/20">
                                <Scissors className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="font-heading text-xl uppercase tracking-wide">
                                {service.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                                {service.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="pt-4 border-t border-border/40 mt-auto">
                            <Button asChild className="w-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground border-primary/20" variant="outline">
                                <a href="tel:01784434222">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Contact us to book
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-muted-foreground mb-6">
                    Unsure what to book or looking for a specific service?
                </p>
                <Button size="lg" asChild>
                    <a href="tel:01784434222">
                        Call us for pricing
                    </a>
                </Button>
            </div>
        </div>
    );
}
