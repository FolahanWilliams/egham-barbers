import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, MapPin } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex flex-col items-start gap-0.5">
                    <span className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
                        Egham<span className="text-primary">Barbers</span>
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        Est. 1997
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden gap-8 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <Button asChild className="hidden sm:flex" variant="default">
                        <a href="tel:01784434222">
                            <Phone className="mr-2 h-4 w-4" />
                            01784 434222
                        </a>
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                                aria-label="Toggle Menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col border-border/40 bg-background">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <nav className="mt-8 flex flex-col gap-6">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="font-heading text-2xl font-medium uppercase tracking-wider transition-colors hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-auto flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span>8 Station Road North, Egham</span>
                                </div>
                                <Button asChild className="w-full" size="lg">
                                    <a href="tel:01784434222">
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call to Book
                                    </a>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
