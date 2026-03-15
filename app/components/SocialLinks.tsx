import Image from "next/image"
import Link from "next/link"

export interface SocialLink {
    href: string
    icon: string
    alt: string
}

export const socialLinks: SocialLink[] = [
    { href: 'https://github.com/Daelijek', icon: '/icons/mdi_github.webp', alt: 'Github' },
    { href: '/', icon: '/icons/mdi_discord.webp', alt: 'Discord' },
    { href: '/', icon: '/icons/mdi_reddit.webp', alt: 'Reddit' },
    { href: '/', icon: '/icons/mdi_twitter.webp', alt: 'Twitter' },
]

interface SocialLinksProps {
    links: SocialLink[]
    variant?: 'desktop' | 'mobile'
}

export default function SocialLinks({ links, variant = 'desktop' }: SocialLinksProps) {
    const baseClasses = variant === 'desktop'
        ? "hidden lg:flex flex-row gap-3 xl:gap-4"
        : "lg:hidden flex flex-row gap-4"

    return (
        <div className={baseClasses} aria-label="Social links">
            {links.map((social, index) => (
                <Link
                    key={`${social.alt}-${index}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.alt}
                    className="hover:opacity-70 transition-opacity"
                >
                    <Image
                        src={social.icon}
                        alt={social.alt}
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </Link>
            ))}
        </div>
    )
}
