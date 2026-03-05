export interface MenuItem {
    id: string;
    title: string;
    description: string;
    price: number;
    category: 'hot' | 'cold' | 'frappe';
    image: string;
}

export const menuItems: MenuItem[] = [
    {
        id: "m_1",
        title: "Caffè Latte",
        description: "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
        price: 4.50,
        category: "hot",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_2",
        title: "Cappuccino",
        description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        price: 4.75,
        category: "hot",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_3",
        title: "Iced Caramel Macchiato",
        description: "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with a caramel drizzle for an oh-so-sweet finish.",
        price: 5.25,
        category: "cold",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_4",
        title: "Vanilla Bean Frappuccino",
        description: "This rich and creamy blend of vanilla bean, milk and ice topped with whipped cream takes vanilla flavor to another level.",
        price: 5.50,
        category: "frappe",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_5",
        title: "Nitro Cold Brew",
        description: "Our small-batch cold brew—slow-steeped for a super-smooth taste—gets even better. We're infusing it with nitrogen to create a sweet flavor without sugar.",
        price: 4.95,
        category: "cold",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_6",
        title: "Mocha Frappuccino",
        description: "Roast coffee, mocha sauce and Frappuccino chips blended with milk and ice, layered on top of whipped cream and chocolate cookie crumble.",
        price: 5.75,
        category: "frappe",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_7",
        title: "Flat White",
        description: "Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor.",
        price: 4.85,
        category: "hot",
        image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_8",
        title: "Iced Shaken Espresso",
        description: "Rich, full-bodied espresso shaken with classic syrup, ice and oatmilk to add a touch of sweetness and craft a wonderfully balanced cold beverage.",
        price: 5.45,
        category: "cold",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_9",
        title: "White Chocolate Mocha",
        description: "Our signature espresso meets white chocolate sauce and steamed milk, then is finished off with sweetened whipped cream.",
        price: 5.50,
        category: "hot",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_10",
        title: "Caramel Ribbon Crunch Frappuccino",
        description: "Roast coffee, dark caramel sauce, milk and ice are blended, then layered with whipped cream, caramel sauce and crunch topping.",
        price: 5.95,
        category: "frappe",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_11",
        title: "Cold Brew with Cold Foam",
        description: "Our slow-steeped custom blend cold brew topped with a float of house-made vanilla sweet cream cold foam. Deliciously sweet and creamy.",
        price: 5.15,
        category: "cold",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "m_12",
        title: "Espresso Macchiato",
        description: "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.",
        price: 3.45,
        category: "hot",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop"
    }
];
