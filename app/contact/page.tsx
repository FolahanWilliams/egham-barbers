import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Contact Us | Egham Barbers",
    description: "Get in touch with Egham Barbers or drop by our classic barbershop in Surrey.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="mb-6 font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                        Visit <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We operate primarily on a walk-in basis, but you can always give us a call to confirm availability or book a specific service.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3 mb-16">
                    <Card className="bg-card border-border/40 text-center flex flex-col items-center p-6">
                        <CardHeader className="pb-4">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary/20">
                                <Phone className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-heading text-xl uppercase tracking-wide">Call Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">Give us a ring to book ahead or ask about our services.</p>
                            <Button asChild size="lg" className="w-full">
                                <a href="tel:01784434222">01784 434222</a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border/40 text-center flex flex-col items-center p-6">
                        <CardHeader className="pb-4">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary/20">
                                <MapPin className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-heading text-xl uppercase tracking-wide">Location</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                8 Station Road North<br />
                                Egham, Surrey<br />
                                TW20 9LE
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border/40 text-center flex flex-col items-center p-6">
                        <CardHeader className="pb-4">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary/20">
                                <Clock className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-heading text-xl uppercase tracking-wide">Hours</CardTitle>
                        </CardHeader>
                        <CardContent className="w-full">
                            <div className="flex justify-between items-center text-muted-foreground mb-2">
                                <span>Mon - Fri</span>
                                <span className="text-foreground font-medium">9:00 AM - 7:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center text-muted-foreground mb-2">
                                <span>Saturday</span>
                                <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center text-muted-foreground">
                                <span>Sunday</span>
                                <span className="text-primary font-medium">Closed</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="relative h-[500px] w-full overflow-hidden rounded-xl border border-border/40 bg-card">
                    <iframe
                        src="https://maps.google.com/maps?q=8+Station+Road+North,+Egham,+Surrey,+TW20+9LE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 grayscale-[50%] contrast-[1.2]"
                        title="Egham Barbers Map Location"
                    />
                </div>
            </div>
        </div>
    );
}
