import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-card py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div className="flex flex-col items-start gap-4">
                        <Link href="/" className="flex flex-col items-start gap-0.5">
                            <span className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
                                Egham<span className="text-primary">Barbers</span>
                            </span>
                        </Link>
                        <p className="max-w-[280px] text-sm leading-relaxed text-muted-foreground">
                            Premium barbershop in the heart of Egham. Delivering sharp cuts, classic fades, and traditional hot towel shaves.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-heading text-lg font-medium tracking-wide text-foreground">
                            Contact
                        </h3>
                        <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                                <span>8 Station Road North, Egham,<br />Surrey, TW20 9LE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 shrink-0 text-primary" />
                                <a href="tel:01784434222" className="hover:text-primary transition-colors">
                                    01784 434222
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-heading text-lg font-medium tracking-wide text-foreground">
                            Hours
                        </h3>
                        <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <li className="flex items-center justify-between border-b border-border/40 pb-2">
                                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Mon &ndash; Fri</span>
                                <span className="font-medium text-foreground">9:00 AM &ndash; 7:00 PM</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-border/40 pb-2">
                                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Saturday</span>
                                <span className="font-medium text-foreground">8:00 AM &ndash; 6:00 PM</span>
                            </li>
                            <li className="flex items-center justify-between pb-2">
                                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Sunday</span>
                                <span className="font-medium text-primary">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Egham Barbers. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs font-medium text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
