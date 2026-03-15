import Link from "next/link"

export interface NavLink {
    href: string
    label: string
}

export const navLinks: NavLink[] = [
    { href: '/smart-contracts', label: 'Smart Contracts' },
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/whitepaper', label: 'Whitepaper' },
]

interface NavigationProps {
    links: NavLink[]
    variant?: 'desktop' | 'mobile'
    onLinkClick?: () => void
}

export default function Navigation({ links, variant = 'desktop', onLinkClick }: NavigationProps) {
    const baseClasses = variant === 'desktop'
        ? "hidden lg:flex flex-row gap-8 xl:gap-10 font-normal text-base xl:text-lg"
        : "lg:hidden flex flex-col gap-4 font-normal text-lg my-8"

    return (
        <nav className={baseClasses} aria-label={variant === 'desktop' ? 'Main navigation' : 'Mobile navigation'}>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="font-nav nav-link"
                    onClick={onLinkClick}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}
