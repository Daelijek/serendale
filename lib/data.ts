export interface Benefit {
    id: number
    title: string
    description: string
}

export const benefitsData: Benefit[] = [
    {
        id: 1,
        title: "High Performance",
        description: "Our technology performing fast blockchain (120K TPS) with guaranteed AI-based data security."
    },
    {
        id: 2,
        title: "Secure & Reliable",
        description: "Proof of Stake consensus algorithm enables unlimited speeds with maximum security."
    },
    {
        id: 3,
        title: "Lightning Fast",
        description: "Optimized for speed and efficiency, delivering instant transactions and responses."
    },
    {
        id: 4,
        title: "Scalable Solution",
        description: "Built to scale with your needs, supporting unlimited growth and expansion."
    },
    {
        id: 5,
        title: "AI-Powered",
        description: "Advanced AI technology ensures intelligent data processing and security."
    },
    {
        id: 6,
        title: "Global Reach",
        description: "Connect with users worldwide through our distributed network infrastructure."
    }
]

export interface Review {
    id: number
    author: string
    rating: number
    text: string
    date: string
    role?: string
}

export const reviewsData: Review[] = [
    {
        id: 1,
        author: "Alex Johnson",
        rating: 5,
        text: "Incredible performance and security. The blockchain technology is truly next-level. Highly recommend!",
        date: "2024-01-15",
        role: "Blockchain Developer"
    },
    {
        id: 2,
        author: "Sarah Chen",
        rating: 5,
        text: "The AI-powered features make this platform stand out. Fast, reliable, and secure - everything we needed.",
        date: "2024-01-20",
        role: "Tech Lead"
    },
    {
        id: 3,
        author: "Michael Rodriguez",
        rating: 5,
        text: "Best blockchain solution we've used. The scalability is impressive and the support team is excellent.",
        date: "2024-02-01",
        role: "CTO"
    },
    {
        id: 4,
        author: "Emily Watson",
        rating: 5,
        text: "Outstanding platform with cutting-edge technology. The Proof of Stake algorithm works flawlessly.",
        date: "2024-02-10",
        role: "Product Manager"
    }
]
