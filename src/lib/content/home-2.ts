export const img = (file: string) => `/images/home-2/${file}`;

export const announcementItems = [
  "FAST EXPRESS DELIVERY",
  "CUSTOM PRINTED PACKAGING",
  "SAVE ON QUALITY PRINTING",
  "SUBSCRIBE AND GET DISCOUNT",
];

export const navLinks = [
  { label: "HOME", href: "#", hasDropdown: true },
  { label: "BOCPAK", href: "#", hasDropdown: true },
  { label: "SHOP", href: "#", hasDropdown: true },
  { label: "VENDORS", href: "#", hasDropdown: true },
  { label: "SERVICES", href: "#", hasDropdown: true },
  { label: "BLOG", href: "#", hasDropdown: true },
  { label: "PAGES", href: "#", hasDropdown: true },
];

export const heroSlides = [
  {
    id: "custom-boxes",
    bg: "bg-[#F3C8DB]",
    highlightWord: "Create",
    title: "Create custom boxes\u00A0&\u00A0packaging",
    description:
      "Order personalized, high quality custom printed packaging and branded boxes your customers will love all in one place.",
    image: img("h2-slider2.jpg"),
    imageAlt: "Custom printed packaging boxes and jelly vitamin jars",
    badge: "SPECIAL 20%",
  },
  {
    id: "cosmetic-tubes",
    bg: "bg-hero-mint",
    highlightWord: "Cosmetic",
    title: "Cosmetic tube packaging\u00A0suppliers",
    description:
      "Best cosmetic tube packaging suppliers from New York, professional production line, get quotes.",
    image: img("h2-slider4.png"),
    imageAlt: "Green cosmetic tube and jar packaging mockups",
  },
  {
    id: "pet-food",
    bg: "bg-hero-cream",
    highlightWord: "packaging",
    title: "Pet\u00A0food\u00A0packaging pouch\u00A0manufacturer",
    description:
      "Over 20 years of experience in plastic packaging pouch manufacturing",
    image: img("h2-slider6.png"),
    imageAlt: "Pet food stand-up pouch and dropper bottle mockup",
  },
];

export const trustBullets = [
  "FSC & SFI Certified",
  "Verified suppliers",
  "Produced in the EU",
];

export const brandLogos = [
  { src: img("h2-brands-1.svg"), alt: "WeWork" },
  { src: img("h2-brands-2.svg"), alt: "Bagacka" },
  { src: img("h2-brands-3.svg"), alt: "Four Seasons" },
  { src: img("h2-brands-4.svg"), alt: "Abalab" },
  { src: img("h2-brands-5.svg"), alt: "Naohea" },
];

export const ecoStats = [
  {
    value: "60%",
    label: "Reduction in your overall carbon footprint by lowering emissions.",
    icon: img("h2-svg-1.svg"),
  },
  {
    value: "25%",
    label: "Lower shipping cost from material reduction and other optimizations.",
    icon: img("h2-svg-2.svg"),
  },
  {
    value: "40%",
    label: "Increase in sales due to growing consumer demands.",
    icon: img("h2-svg-3.svg"),
  },
];

export const testimonials = [
  {
    quote:
      "Our brand had a mission to deliver 100% sustainable packaging to match our products, and Bocpak effortlessly helped us!",
    name: "Allie Stauss",
    role: "Ceo & Founder",
  },
  {
    quote:
      "Amazing products and content on the entire coffee value chain. looking forward to doing healthy",
    name: "Tonny Butera",
    role: "Co-General Manager",
  },
  {
    quote:
      "High-quality products, accurate production timelines, clear expectations. We've had great experiences working with Bocpak",
    name: "Aaron Probert",
    role: "Assistant Manager",
  },
];

export const categories = [
  { title: "Custom Coffee Bags", count: 2, image: img("h2-category1.png") },
  { title: "Food packaging", count: 1, image: img("h2-category2.png") },
  { title: "Stock packaging", count: 4, image: img("h2-category3.png") },
  { title: "Coffee cups", count: 3, image: img("h2-category8.png") },
  { title: "Pet Treat packaging", count: 3, image: img("h2-category4.png") },
  { title: "Water & Juice", count: 3, image: img("h2-category5.png") },
  { title: "Flexible pouches", count: 0, image: img("h2-category6.png") },
  { title: "Tea packaging", count: 2, image: img("h2-category7.png") },
];

export const whyChooseFeatures = [
  {
    title: "Reliable and innovative",
    description:
      "With a focus on exceptional customer service, helping you showcase your brand and achieve your sustainability goals.",
    icon: "leaf",
  },
  {
    title: "Eco-friendly options",
    description:
      "Committed to reducing our impact on the environment with eco-friendly options like compostable and recyclable materials",
    icon: "truck",
  },
  {
    title: "CO2 neutral supplier",
    description:
      "Committed to reducing our impact on the environment and reducing our carbon footprint.",
    icon: "headset",
  },
];

export const whyChooseImages = [
  { src: img("h2-image-1.png"), alt: "Packaging lifestyle" },
  { src: img("h2-image-2.jpg"), alt: "Food packaging on table" },
  { src: img("h2-image-3.jpg"), alt: "Coffee cups packaging" },
  { src: img("h2-image-4.jpg"), alt: "Custom boxes" },
  { src: img("h2-image-5.jpg"), alt: "Retail packaging display" },
];

import img1 from "../../../public/images/home-2/imgi_40_h2-services-image1.jpeg";
import img2 from "../../../public/images/home-2/imgi_41_h2-services-image2.jpeg";
import img3 from "../../../public/images/home-2/imgi_42_h2-services-image3.jpeg";
import img4 from "../../../public/images/home-2/imgi_43_h2-services-image4.jpeg";
import img5 from "../../../public/images/home-2/imgi_44_h2-services-image5.jpeg";
import img6 from "../../../public/images/home-2/imgi_39_h2-services-image6.jpeg";

export const services = [
  {
    title: "Structural Engineering",
    description:
      "Our packaging experts design and engineer innovative structures tailored to your product and branding.",
    color: "bg-[#F865DC]",
    image: img1,
  },
  {
    title: "Digital Printing",
    description:
      "Custom printed packages help attract the attention of customers, and tell them everything they need to...",
    color: "bg-primary",
    image: img2,
  },
  {
    title: "Custom Printed Bags",
    description:
      "Packaging is an incredibly important identity asset, which can have enormous brand building capabilities.",
    color: "bg-[#F5C842]",
    image: img3,
  },
  {
    title: "Custom Mailer Box",
    description:
      "Our custom coffee mailer boxes are the perfect solution to engage customers and protect your roasted coffee during shipping.",
    color: "bg-[#8D82C4]",
    image: img4,
  },
  {
    title: "Custom Roll Stock",
    description:
      "Our fully customisable roll stock features high-quality images and a design that keeps even the smallest details crisp and...",
    color: "bg-[#05A66B]",
    image: img5,
  },
  {
    title: "Samples & Prototyping",
    description:
      "Create physical samples and 3D interactive prototypes final product packaging before making a final decision.",
    color: "bg-[#F278B8]",
    image: img6,
  },
];

const productExcerpt =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat…";

export const products = [
  {
    title: "Water & juice Packaging",
    price: "$19.67",
    rating: 3.33,
    reviews: 3,
    image: img("product-15-1.jpg"),
    categories: ["Cosmetic Packaging", "Water & Juice"],
    cta: "Read more",
    shortDescription: productExcerpt,
  },
  {
    title: "Baby food bags",
    price: "$4.90",
    originalPrice: "$5.60",
    sale: true,
    salePercent: "-13%",
    rating: 3.33,
    reviews: 3,
    image: img("product-16-1.jpg"),
    categories: ["Cosmetic Packaging"],
    cta: "Add to cart",
    shortDescription: productExcerpt,
  },
  {
    title: "Taco with meat and vegetables",
    price: "$13.00",
    rating: 4.0,
    reviews: 3,
    image: img("product-17-1.jpg"),
    categories: ["Pet Treat packaging"],
    cta: "Add to cart",
    shortDescription: productExcerpt,
  },
  {
    title: "Pet food packaging",
    price: "$100.65",
    rating: 4.0,
    reviews: 3,
    image: img("product-18-1.jpg"),
    categories: ["Stock packaging", "Wine Pouch"],
    cta: "Add to cart",
    shortDescription: productExcerpt,
  },
  {
    title: "Gourmet Beef Sosaties Per kg",
    price: "$215.20",
    rating: 3.0,
    reviews: 3,
    image: img("product-19-1.jpg"),
    categories: ["Cosmetic Packaging"],
    cta: "Add to cart",
    shortDescription: productExcerpt,
  },
  {
    title: "Frozen Angelfish Per kg",
    price: "$11.81",
    rating: 4.33,
    reviews: 3,
    image: img("product-20-1.jpg"),
    categories: ["Custom Coffee Bags"],
    cta: "Add to cart",
    shortDescription: productExcerpt,
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Create your order",
    description:
      "You can also customize your products using our online model generators, which consider factors such as service location",
    bg: "bg-[#E8F5E9]",
    image: img("work-image-1.png"),
  },
  {
    step: "02",
    title: "Make it print ready",
    description:
      "After placing an order, you will receive a sample for inspection. If you are satisfied with the product, you can publish it on your store.",
    bg: "bg-[#FDE7EF]",
    image: img("work-image-2.png"),
  },
  {
    step: "03",
    title: "Ship it for you",
    description:
      "Your customers will receive their products. We provide a streamlined service that maximizes your profits with minimal effort.",
    bg: "bg-[#FFF3E0]",
    image: img("work-image-3.png"),
  },
];

export const galleryImages = [
  img("h2-image-gallery-1.jpg"),
  img("h2-image-gallery-2.jpg"),
  img("h2-image-gallery-3.jpg"),
  img("h2-image-gallery-4.jpg"),
  img("h2-image-gallery-5.jpg"),
  img("h2-image-gallery-6.jpg"),
];

export const footerColumns = [
  {
    title: "Information",
    links: ["Help Center", "Shipping", "Returns", "Policies", "Gift Cards"],
  },
  {
    title: "Useful links",
    links: [
      "My Account",
      "Order Tracking",
      "All Products",
      "All Services",
      "Service Detail",
    ],
  },
  {
    title: "About Us",
    links: [
      "Our story",
      "Contacts",
      "Affiliate Program",
      "Referral Program",
      "Careers",
    ],
  },
  {
    title: "Our category",
    links: [
      "Custom Coffee Bags",
      "Food Packaging",
      "Coffee Cups",
      "Stock Packaging",
      "Pet Treat Packaging",
    ],
  },
];
