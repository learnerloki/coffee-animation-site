export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    image: string;
}

export const products: Product[] = [
    {
        id: "1",
        title: "Ethiopian Yirgacheffe",
        description: "Light roast with bright citrus notes, jasmine floral aroma, and a clean tea-like finish. Grown at 2000m.",
        price: 24.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Colombian Supremo",
        description: "Medium roast delivering a smooth, well-balanced cup with notes of milk chocolate, caramel, and sweet orange.",
        price: 21.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Sumatra Mandheling",
        description: "Dark, full-bodied roast famous for its earthy, herbal profile with low acidity and rich dark chocolate undertones.",
        price: 22.50,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "Costa Rica Tarrazu",
        description: "Vibrant medium roast featuring honey-like sweetness, crisp apple acidity, and a smooth, buttery finish.",
        price: 23.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop"
    }
];
