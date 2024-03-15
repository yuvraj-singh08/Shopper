import { features } from "process";

const mobiles = [
    {
        name: 'REDMI 12 5G (Pastel Blue, 128 GB)  (6 GB RAM)',
        rating: 4.5,
        reviews: '20,978 Ratings & 1,381 Reviews',
        features: [
            "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "17.25 cm (6.79 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Snapdragon 4 Gen 2 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70',
        logo: 0
    },
    {
        name: 'SAMSUNG Galaxy M13 (Aqua Green, 128 GB)',
        rating: 3.5,
        reviews: '1,586 Ratings & 80 Reviews',
        features: [
            "6 GB RAM 128 GB ROM",
            "16.76 cm (6.6 inch) Display",
            "50MP Rear Camera",
            "6000 mAh Battery",
            "12 Months Warranty",
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/0/o/-original-imagghc2rfwf6q9j.jpeg?q=70',
        logo: 1
    },
    {
        name: 'SAMSUNG Galaxy M13 (Aqua Green, 128 GB)',
        rating: 3.5,
        reviews: '1,586 Ratings & 80 Reviews',
        features: [
            "6 GB RAM 128 GB ROM",
            "16.76 cm (6.6 inch) Display",
            "50MP Rear Camera",
            "6000 mAh Battery",
            "12 Months Warranty",
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/0/o/-original-imagghc2rfwf6q9j.jpeg?q=70',
        logo: 1
    },
    {
        name: 'REDMI 12 5G (Pastel Blue, 128 GB)  (6 GB RAM)',
        rating: 4.5,
        reviews: '20,978 Ratings & 1,381 Reviews',
        features: [
            "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "17.25 cm (6.79 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Snapdragon 4 Gen 2 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70',
        logo: 0
    },
    {
        name: 'REDMI 12 5G (Pastel Blue, 128 GB)  (6 GB RAM)',
        rating: 4.5,
        reviews: '20,978 Ratings & 1,381 Reviews',
        features: [
            "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "17.25 cm (6.79 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Snapdragon 4 Gen 2 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70',
        logo: 0
    },
    {
        name: 'REDMI 12 5G (Pastel Blue, 128 GB)  (6 GB RAM)',
        rating: 4.5,
        reviews: '20,978 Ratings & 1,381 Reviews',
        features: [
            "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "17.25 cm (6.79 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Snapdragon 4 Gen 2 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70',
        logo: 0
    },
    {
        name: 'REDMI 12 5G (Pastel Blue, 128 GB)  (6 GB RAM)',
        rating: 4.5,
        reviews: '20,978 Ratings & 1,381 Reviews',
        features: [
            "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "17.25 cm (6.79 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Snapdragon 4 Gen 2 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70',
        logo: 0
    },
    {
        name: 'REDMI 12 5G (Pastel Blue, 128 GB)  (6 GB RAM)',
        rating: 4.5,
        reviews: '20,978 Ratings & 1,381 Reviews',
        features: [
            "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "17.25 cm (6.79 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Snapdragon 4 Gen 2 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70',
        logo: 0
    },
    {
        name: 'REDMI 12 5G (Pastel Blue, 128 GB)  (6 GB RAM)',
        rating: 4.5,
        reviews: '20,978 Ratings & 1,381 Reviews',
        features: [
            "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            "17.25 cm (6.79 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Snapdragon 4 Gen 2 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ],
        price: '₹13,499',
        trivial: ['Free delivery by 2nd Mar',
            'Save extra with combo offers',
            'Upto 8,300 Off on Exchange'],
        imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70',
        logo: 0
    },
]

export {mobiles}