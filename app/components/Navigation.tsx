'use client'

export interface NavLink {
    href: string
    label: string
}

export const navLinks: NavLink[] = [
    { href: '#hero', label: 'Home' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
]

interface NavigationProps {
    links: NavLink[]
    variant?: 'desktop' | 'mobile'
    onLinkClick?: () => void
}

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onLinkClick?: () => void) => {
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
    onLinkClick?.()
}

export default function Navigation({ links, variant = 'desktop', onLinkClick }: NavigationProps) {
    const baseClasses = variant === 'desktop'
        ? "hidden lg:flex flex-row gap-8 xl:gap-10 font-normal text-base xl:text-lg"
        : "lg:hidden flex flex-col gap-4 font-normal text-lg my-8"

    return (
        <nav className={baseClasses} aria-label={variant === 'desktop' ? 'Main navigation' : 'Mobile navigation'}>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="font-nav nav-link cursor-pointer"
                    onClick={(e) => handleClick(e, link.href, onLinkClick)}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    )
}
