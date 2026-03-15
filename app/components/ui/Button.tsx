export default function Button({ label }: { label: string }) {
    return (
        <button className="py-3 px-6 sm:py-4 sm:px-7 md:py-6 md:px-8 border-2 border-white rounded-full font-normal text-base sm:text-lg md:text-xl font-nav btn-gradient-border w-full sm:w-auto">
            {label}
        </button>
    )
}