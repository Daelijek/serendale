import Image from "next/image"
import Button from "./ui/Button"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 overflow-hidden pt-20 pb-8 sm:pt-24 md:pt-0">
            {/* Glowing Ellipses */}
            <div className="hero-glow-ellipse hero-glow-left"></div>
            <div className="hero-glow-ellipse hero-glow-center"></div>
            <div className="hero-glow-ellipse hero-glow-right"></div>

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-10">
                <div className="absolute bottom-0 left-0 right-0 w-full h-[50%] sm:h-[55%] md:h-[60%] lg:h-[65%] flex items-end justify-center">
                    <Image
                        src="/images/hero-image.webp"
                        alt="Hero background"
                        width={1605}
                        height={619}
                        className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[1605px] h-auto object-contain object-bottom"
                        priority
                        quality={90}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, (max-width: 1440px) 90vw, 1605px"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col gap-1 sm:gap-2">
                    <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center text-gradient leading-tight">
                        THE BEST WEBSITE EVER
                    </h1>
                    <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center leading-tight">
                        Scalable.
                    </h1>
                </div>
                <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-normal text-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-2 sm:px-0">
                    Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center items-stretch sm:items-center px-4 sm:px-0">
                    <Button label="Get started" />
                    <Button label="Read more" />
                </div>
            </div>
        </section>
    )
}