import { benefitsData } from "@/lib/data"

export default function Benefits() {
    return (
        <section id="benefits" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-4 text-gradient">
                        Our Advantages
                    </h2>
                    <p className="font-sans text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto opacity-80">
                        Discover what makes our platform unique and powerful
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {benefitsData.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="relative p-8 sm:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF3BFF]/5 via-[#5D6EF3]/5 to-[#8593E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative mb-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/40 group-hover:border-white/40 transition-all duration-300">
                                    <span className="font-nav text-xl font-semibold text-white">
                                        {benefit.id}
                                    </span>
                                </div>
                            </div>

                            <h3 className="relative font-sans text-xl sm:text-2xl font-medium mb-4 group-hover:text-gradient transition-colors duration-300">
                                {benefit.title}
                            </h3>

                            <p className="relative font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                                {benefit.description}
                            </p>

                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF3BFF] via-[#5D6EF3] to-[#8593E8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
