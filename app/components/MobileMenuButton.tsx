interface MobileMenuButtonProps {
    isOpen: boolean
    onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
    return (
        <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            onClick={onClick}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
        >
            <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                aria-hidden="true"
            ></span>
            <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                aria-hidden="true"
            ></span>
            <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                aria-hidden="true"
            ></span>
        </button>
    )
}
