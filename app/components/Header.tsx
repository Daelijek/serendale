'use client'
import Link from "next/link"
import { useState } from "react"
import Navigation, { navLinks } from "./Navigation"
import SocialLinks, { socialLinks } from "./SocialLinks"
import MobileMenuButton from "./MobileMenuButton"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeMenu()
        }
    }

    return (
        <header className="absolute top-0 left-0 right-0 w-full px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-48 pt-6 md:pt-8 lg:pt-12 z-50">
            <div className="flex flex-row justify-between items-center">
                <Link
                    href="/"
                    className="font-medium text-xl md:text-2xl font-sans hover:opacity-80 transition-opacity"
                    aria-label="Home"
                >
                    SITE NAME
                </Link>

                <Navigation links={navLinks} variant="desktop" />
                <SocialLinks links={socialLinks} variant="desktop" />
                <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
                        onClick={handleBackdropClick}
                        aria-hidden="true"
                    />
                    <div className="lg:hidden relative z-50">
                        <Navigation links={navLinks} variant="mobile" onLinkClick={closeMenu} />
                        <SocialLinks links={socialLinks} variant="mobile" />
                    </div>
                </>
            )}
        </header>
    )
}