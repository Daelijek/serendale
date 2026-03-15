'use client'
import { reviewsData } from "@/lib/data"

export default function Reviews() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Serendale Platform",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": reviewsData.length.toString()
        },
        "review": reviewsData.map((review) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "datePublished": review.date,
            "reviewBody": review.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5"
            }
        }))
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <span
                key={index}
                className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-white/20'}`}
            >
                ★
            </span>
        ))
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section id="reviews" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-4 text-gradient">
                            What Our Users Say
                        </h2>
                        <p className="font-sans text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto opacity-80">
                            Trusted by thousands of developers and businesses worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        {reviewsData.map((review) => (
                            <div
                                key={review.id}
                                className="relative p-8 sm:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3BFF]/5 via-[#5D6EF3]/5 to-[#8593E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative mb-4 flex items-center gap-2">
                                    {renderStars(review.rating)}
                                </div>

                                <p className="relative font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6 italic">
                                    "{review.text}"
                                </p>

                                <div className="relative flex items-center justify-between">
                                    <div>
                                        <h4 className="font-sans text-base sm:text-lg font-medium mb-1">
                                            {review.author}
                                        </h4>
                                        {review.role && (
                                            <p className="font-sans text-sm text-white/60">
                                                {review.role}
                                            </p>
                                        )}
                                    </div>
                                    <p className="font-sans text-sm text-white/60">
                                        {new Date(review.date).toLocaleDateString('en-US', { 
                                            month: 'short', 
                                            year: 'numeric' 
                                        })}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF3BFF] via-[#5D6EF3] to-[#8593E8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
