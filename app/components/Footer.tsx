'use client'
import Link from "next/link"
import Image from "next/image"
import { navLinks } from "./Navigation"
import { socialLinks } from "./SocialLinks"

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
            <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
                        <div className="lg:col-span-1">
                            <Link
                                href="/"
                                className="inline-block font-medium text-xl md:text-2xl font-sans hover:opacity-80 transition-opacity mb-4"
                                aria-label="Home"
                            >
                                SITE NAME
                            </Link>
                            <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed max-w-xs">
                                Advanced blockchain technology with AI-powered security and unlimited scalability.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-nav text-base font-semibold mb-4 text-white">Navigation</h3>
                            <nav className="flex flex-col gap-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="font-sans text-sm sm:text-base text-white/70 footer-link transition-colors duration-300 w-fit"
                                        onClick={(e) => handleClick(e, link.href)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <h3 className="font-nav text-base font-semibold mb-4 text-white">Contact</h3>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="mailto:contact@serendale.com"
                                    className="font-sans text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-300"
                                >
                                    contact@serendale.com
                                </a>
                                <a
                                    href="tel:+1234567890"
                                    className="font-sans text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-300"
                                >
                                    +1 (234) 567-890
                                </a>
                                <p className="font-sans text-sm sm:text-base text-white/70 mt-2">
                                    123 Blockchain Street<br />
                                    San Francisco, CA 94105
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-nav text-base font-semibold mb-4 text-white">Follow Us</h3>
                            <div className="flex flex-row gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={`${social.alt}-${index}`}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.alt}
                                        className="w-10 h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center hover:border-white/40 hover:bg-black/60 transition-all duration-300"
                                    >
                                        <Image
                                            src={social.icon}
                                            alt={social.alt}
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                            loading="lazy"
                                            draggable={false}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="font-sans text-sm text-white/60 text-center sm:text-left">
                            © {currentYear} SITE NAME. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
                                   <a
                                       href="#"
                                       className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-300"
                                   >
                                       Privacy Policy
                                   </a>
                                   <a
                                       href="#"
                                       className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-300"
                                   >
                                       Terms of Service
                                   </a>
                                   <a
                                       href="#"
                                       className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-300"
                                   >
                                       Cookie Policy
                                   </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
