/**
 * Shutter 2000 International (Pvt) Ltd - Data Layer & Persistence Engine
 * 100% Local Self-Contained High-Res Sri Lankan Images & Elcardo Architecture
 * 100% Client-Side Editable via LocalStorage
 */

const STORAGE_KEY = 'shutter2000_v5_elcardo_exact_nav';
const PIN_STORAGE_KEY = 'shutter2000_admin_pin';
const DEFAULT_PIN = '2000';

const DEFAULT_DATA = {
    topBar: {
        address: "61/24 Sri Sumangala Road, Ratmalana, Sri Lanka",
        phone: "+94 77 440 2271",
        phoneRaw: "+94774402271",
        email: "info@shutter2000.lk",
        workingHours: "Mon - Sat: 8.00 AM - 6.00 PM | 24/7 Breakdown Dispatch",
        notice: "🔥 Islandwide Delivery & Free On-Site Measurement Service Available Across All 9 Provinces!",
        socialLinks: {
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            youtube: "https://youtube.com",
            linkedin: "https://linkedin.com",
            whatsapp: "https://wa.me/94774402271"
        }
    },
    branding: {
        companyName: "Shutter 2000 International (Pvt) Ltd",
        shortName: "SHUTTER 2000",
        tagline: "Total Door Solutions & Industrial Fabrication",
        subtagline: "Sri Lanka's Premier Importers, Fabricators & Installers of Automated Roller Doors, Retractable Gates & Smart Control Systems",
        hotlineTitle: "24/7 Emergency Hotline",
        hotlinePhone: "+94 77 440 2271",
        hotlineRaw: "94774402271",
        headOffice: "Ratmalana Main Engineering Complex",
        estYear: "2000",
        projectsDelivered: "4,800+",
        warrantyYears: "10 Years Panel / 5 Years Motor",
        satisfactionRate: "99.8%"
    },
    navMenu: [
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
        { label: "Subsidiaries", link: "#factory" },
        { 
            label: "Products", 
            link: "#products",
            hasDropdown: true,
            children: [
                { label: "Zinc-Alum Automated Roller Doors", link: "#products" },
                { label: "Heavy Industrial Roller Shutters", link: "#products" },
                { label: "Polycarbonate Transparent Doors", link: "#products" },
                { label: "Retractable Security Gates (SS 304)", link: "#products" },
                { label: "High-Speed Rapid PVC Doors", link: "#products" },
                { label: "Smart Wi-Fi / GSM Mobile App Hubs", link: "#products" },
                { label: "Colorbond Architectural Palette", link: "#colors" },
                { label: "Direct-Drive Motors & Spare Parts", link: "#products" }
            ]
        },
        { label: "Projects", link: "#gallery" },
        { label: "Branches", link: "#branches" },
        { label: "Support", link: "#estimator" },
        { label: "Careers", link: "#factory" },
        { label: "Contact", link: "#contact" }
    ],
    heroSlides: [
        {
            id: "slide-1",
            badge: "WITH GUARANTEED BEST QUALITY",
            title: "SHUTTER 2000\nROLLER DOOR",
            subtitle: "BEST ROLLER DOOR IN SRI LANKA suitable for any domestic & industrial use",
            description: "We are the leading Company that manufactures Best Roller Doors using Australian Technology. Thus our Products conform to International Standards.",
            bgImage: "images/hero_slide1.jpg",
            cta1Text: "Explore More",
            cta1Link: "#products",
            cta2Text: "Get In Touch",
            cta2Link: "#contact"
        },
        {
            id: "slide-2",
            badge: "MAXIMUM SECURITY & RELIABILITY",
            title: "MOTORIZED\nSECURITY GATES",
            subtitle: "HEAVY-DUTY STAINLESS STEEL & ALUMINIUM EXPANDABLE SYSTEMS",
            description: "Engineered with anti-collision infrared obstacle detection, trackless magnetic guidance, and heavy-duty remote control drive systems.",
            bgImage: "images/hero_slide2.jpg",
            cta1Text: "Explore More",
            cta1Link: "#products",
            cta2Text: "Get In Touch",
            cta2Link: "https://wa.me/94774402271"
        },
        {
            id: "slide-3",
            badge: "COMMERCIAL & LOGISTICS AUTOMATION",
            title: "HIGH-SPEED RAPID\nROLLUP DOORS",
            subtitle: "HIGH TRAFFIC PVC & TRANSPARENT POLYCARBONATE DOORS",
            description: "Energy-saving rapid clean-room barriers and crystal clear showroom shutters custom fabricated to exact architectural specifications.",
            bgImage: "images/hero_slide3.jpg",
            cta1Text: "Explore More",
            cta1Link: "#products",
            cta2Text: "Get In Touch",
            cta2Link: "#estimator"
        },
        {
            id: "slide-4",
            badge: "NEXT-GEN SMART HOME INTEGRATION",
            title: "SMART WI-FI\nAPP CONTROLLER",
            subtitle: "OPERATE YOUR ROLLER DOORS FROM ANYWHERE IN THE WORLD",
            description: "Upgrade any existing or new roller shutter to open via iOS/Android smartphone app, GSM call, RFID cards, or voice assistants.",
            bgImage: "images/luxury_villa_installed.jpg",
            cta1Text: "Explore More",
            cta1Link: "#products",
            cta2Text: "Get In Touch",
            cta2Link: "#contact"
        }
    ],
    trustBadges: [
        {
            icon: "fa-solid fa-shield-halved",
            title: "10-Year Panel Warranty",
            subtitle: "High-tensile Zinc-Alum with anti-corrosion protection"
        },
        {
            icon: "fa-solid fa-bolt",
            title: "Smartphone & Wi-Fi Ready",
            subtitle: "Open/close your shutters from anywhere in the world"
        },
        {
            icon: "fa-solid fa-volume-xmark",
            title: "Whisper-Quiet Operation",
            subtitle: "Equipped with silent nylon side-webbing and precision motors"
        },
        {
            icon: "fa-solid fa-truck-fast",
            title: "Islandwide Service Fleet",
            subtitle: "24/7 Mobile technicians across all 9 provinces"
        }
    ],
    about: {
        badge: "Fabrication Excellence Since 2000",
        title: "Engineering Total Entrance & Security Solutions Across Sri Lanka",
        subtitle: "Delivering unmatched craftsmanship, structural durability, and next-generation smart automation.",
        desc1: "Established in the year 2000, Shutter 2000 International (Pvt) Ltd has grown into one of Sri Lanka's foremost engineering fabricators and direct importers of motorized entrance systems. Operating from our state-of-the-art manufacturing plant in Ratmalana, we deliver robust solutions engineered to withstand tropical coastal humidity and heavy industrial usage.",
        desc2: "From commercial showroom transparent polycarbonate roller doors to heavy industrial steel sectional gates, every product is rigorously tested for wind load, cycle endurance, and automated emergency safety overrides.",
        experienceYears: "24+",
        experienceText: "Years of Engineering & Industrial Fabrication",
        certBadge: "ISO 9001 Certified Manufacturing Standards",
        image1: "images/factory_plant.jpg",
        image2: "images/installation_crew.jpg",
        checklist: [
            "Australian Standard 0.50mm / 0.60mm High-Tensile Zinc-Alum Slats",
            "Heavy-Duty Direct-Drive Center Motors & Tubular Motor Systems",
            "Auto-Stop & Auto-Reverse Infrared Safety Sensor Technology",
            "Manual Chain / Keyed Emergency Override in Case of Power Loss",
            "Custom Powder Coating in Over 15 Architectural RAL Colors",
            "Islandwide Certified Installation & 24/7 Rapid Repair Fleet"
        ]
    },
    categories: [
        { id: "all", name: "All Solutions" },
        { id: "roller-doors", name: "Roller Doors & Shutters" },
        { id: "retractable-gates", name: "Retractable & Sliding Gates" },
        { id: "high-speed-doors", name: "High-Speed Rapid Doors" },
        { id: "smart-automation", name: "Smart Access & IoT" },
        { id: "spare-parts", name: "Motors & Spare Parts" }
    ],
    products: [
        {
            id: "prod-1",
            code: "S2K-RD-01",
            name: "Zinc-Alum Motorized Automated Roller Door",
            category: "roller-doors",
            categoryName: "Roller Doors",
            badge: "Bestseller",
            image: "images/roller_door_standard.jpg",
            description: "Sri Lanka's leading high-grade 0.50mm / 0.60mm Zinc-Alum continuous sheet or interlocking slats with nylon webbing for noiseless rolling. Ideal for residential villas, commercial showrooms, and garages.",
            warranty: "10-Year Panel / 5-Year Motor",
            motorSpecs: "Heavy Duty Center Motor / Tubular Motor with Remote & Manual Disconnect",
            features: [
                "Soundless Nylon Webbing",
                "Infrared Obstacle Safety Auto-Reverse",
                "Keyed Manual Lock Override",
                "Available in 12+ Colors"
            ]
        },
        {
            id: "prod-2",
            code: "S2K-RD-02",
            name: "Heavy-Duty Galvanised Industrial Roller Shutter",
            category: "roller-doors",
            categoryName: "Roller Doors",
            badge: "Industrial Grade",
            image: "images/industrial_shutter.jpg",
            description: "Heavy-gauge electro-galvanised interlocking curved slats engineered for massive warehouse loading bays, factories, and high-wind coastal environments.",
            warranty: "10-Year Slat / 5-Year Motor",
            motorSpecs: "Heavy-Duty Side Motor with Chain Hoist Override (300kg - 1500kg)",
            features: [
                "High Wind-Load Resistance",
                "Heavy-Duty Guide Channels",
                "Manual Chain Hoist Backup",
                "Three-Phase & Single-Phase Options"
            ]
        },
        {
            id: "prod-3",
            code: "S2K-RD-03",
            name: "Polycarbonate Transparent Crystal Roller Door",
            category: "roller-doors",
            categoryName: "Roller Doors",
            badge: "Luxury Showrooms",
            image: "images/polycarbonate_door.jpg",
            description: "Impact-resistant, UV-stabilized crystal polycarbonate panels interlinked with heavy-duty anodized aluminium ribs. Perfect for shopping mall storefronts, bank entrances, and luxury boutiques.",
            warranty: "5-Year Polycarbonate / 5-Year Motor",
            motorSpecs: "Silent Tubular Motor with Integrated Wireless Receiver",
            features: [
                "Unbreakable Polycarbonate",
                "Crystal Clear 95% Transparency",
                "UV & Weather Resistant",
                "Modern Architectural Look"
            ]
        },
        {
            id: "prod-4",
            code: "S2K-RD-04",
            name: "Perforated / Security Grill Roller Shutter",
            category: "roller-doors",
            categoryName: "Roller Doors",
            badge: "Showroom Security",
            image: "images/perforated_shutter.jpg",
            description: "Precision-punched micro-perforated steel or diamond grill pattern providing 70% interior showroom visibility and continuous ventilation while maintaining maximum intrusion protection.",
            warranty: "10-Year Panel / 5-Year Motor",
            motorSpecs: "Heavy Duty Motor with Remote Keyfob and Manual Release",
            features: [
                "70% Airflow & Visibility",
                "Electro-Galvanized Finish",
                "Anti-Pry Heavy Channels",
                "Push-Button & Remote Control"
            ]
        },
        {
            id: "prod-5",
            code: "S2K-GT-01",
            name: "Motorized Retractable Security Gate (Stainless Steel 304)",
            category: "retractable-gates",
            categoryName: "Retractable Gates",
            badge: "High Security",
            image: "images/retractable_gate.jpg",
            description: "Heavy-duty Grade 304 Stainless Steel motorized expandable gate. Features trackless magnetic navigation or rail-guided movement with infrared anti-collision sensors and scrolling LED display.",
            warranty: "5-Year Structural / 3-Year Motor",
            motorSpecs: "Dual Motor Intelligent Smart Drive with Remote Range 50m",
            features: [
                "Trackless Magnetic Navigation",
                "Infrared Anti-Collision Sensor",
                "LED Warning Display Screen",
                "Wind-Resistant Structure"
            ]
        },
        {
            id: "prod-6",
            code: "S2K-GT-02",
            name: "Heavy-Duty Automated Sliding & Cantilever Gates",
            category: "retractable-gates",
            categoryName: "Retractable Gates",
            badge: "Industrial & Villa",
            image: "images/sliding_gate.jpg",
            description: "Custom forged sliding gates and trackless cantilever systems engineered for factories, estates, and private residences. Smooth, frictionless glide even under heavy wind load.",
            warranty: "10-Year Gate / 3-Year Motor",
            motorSpecs: "Oil-Bath Gear Rack Motor up to 2000kg Capacity",
            features: [
                "Up to 2,000kg Gate Capacity",
                "Heavy-Duty Steel Gear Rack",
                "Photocell Safety Beam",
                "Auto-Close Timer Function"
            ]
        },
        {
            id: "prod-7",
            code: "S2K-HSD-01",
            name: "High-Speed Rapid Rollup PVC Industrial Door",
            category: "high-speed-doors",
            categoryName: "High-Speed Doors",
            badge: "Cold Storage & Pharma",
            image: "images/high_speed_door.jpg",
            description: "Ultra-rapid opening speed (up to 1.5m/s) PVC fabric roll-up doors with transparent vision windows. Engineered for cold storage, pharmaceutical clean rooms, and logistics warehouses.",
            warranty: "3-Year System / 2-Year Motor",
            motorSpecs: "Servo Motor with Digital Frequency Inverter Drive",
            features: [
                "Speed up to 1.5 meters/second",
                "Self-Repairing Zipper Mechanism",
                "Radar & Magnetic Loop Sensor",
                "Thermal & Dust Barrier"
            ]
        },
        {
            id: "prod-8",
            code: "S2K-SM-01",
            name: "Smartphone Wi-Fi / GSM Smart Control Hub",
            category: "smart-automation",
            categoryName: "Smart Automation",
            badge: "IoT Smart Home",
            image: "images/smart_controller.jpg",
            description: "Convert any existing or new roller shutter or gate to open via iOS / Android Mobile App, GSM Phone Call, RFID Card, or Voice Assistants (Google Assistant & Alexa).",
            warranty: "2-Year Electronics Warranty",
            motorSpecs: "Universal Wi-Fi & 4G/GSM Dual Communication Module",
            features: [
                "Control from Anywhere in the World",
                "Real-Time Open/Close Status Alerts",
                "Multi-User Family & Staff Sharing",
                "Scheduled Auto-Close Timers"
            ]
        },
        {
            id: "prod-9",
            code: "S2K-SP-01",
            name: "Direct-Drive Motors, Tubular Motors & Slat Accessories",
            category: "spare-parts",
            categoryName: "Spare Parts",
            badge: "Genuine Imports",
            image: "images/motors_accessories.jpg",
            description: "Comprehensive replacement parts inventory: 100% pure copper coil motors, wireless remote controls, heavy-duty torsion springs, guide channels, and bottom aluminium rails.",
            warranty: "2-Year Motor Replacement Warranty",
            motorSpecs: "Single Phase & Three Phase 300kg - 1500kg Load Ratings",
            features: [
                "100% Copper Coil Motors",
                "Rolling Code Anti-Clone Remotes",
                "Universal Compatibility",
                "Immediate Islandwide Delivery"
            ]
        }
    ],
    colorSelector: {
        title: "Zinc-Alum & Colorbond Architectural Color Palette",
        subtitle: "Choose from our factory-finished, UV-resistant oven-baked colorbond finishes designed to match your building facade.",
        colors: [
            { name: "Caulfield / Dark Green", code: "RAL-6005", hex: "#1e3f20", swatchImg: "images/swatch_green.jpg" },
            { name: "Lazurite Blue", code: "RAL-5002", hex: "#16325c", swatchImg: "images/swatch_blue.jpg" },
            { name: "Teak Woodgrain Texture", code: "WOOD-01", hex: "#5c3a21", swatchImg: "images/swatch_teak.jpg" },
            { name: "Mahogany Wood Finish", code: "WOOD-02", hex: "#4a1c14", swatchImg: "images/swatch_mahogany.jpg" },
            { name: "Slate Grey", code: "RAL-7016", hex: "#373e44", swatchImg: "images/swatch_grey.jpg" },
            { name: "Off White / Pearl", code: "RAL-9002", hex: "#e5e3dc", swatchImg: "images/swatch_white.jpg" },
            { name: "Silver Zinc-Alum", code: "ZN-01", hex: "#c0c0c0", swatchImg: "images/swatch_silver.jpg" },
            { name: "Matte Jet Black", code: "RAL-9005", hex: "#1a1a1a", swatchImg: "images/swatch_black.jpg" }
        ]
    },
    factoryStandards: {
        badge: "Industrial Quality & Engineering Rigor",
        title: "Ratmalana Manufacturing Complex & Direct Import Standards",
        description: "Our dedicated 15,000 sq.ft fabrication workshop houses state-of-the-art roll forming lines, automated powder coating booths, and advanced motor dynamometer test benches.",
        features: [
            {
                icon: "fa-solid fa-award",
                title: "Certified Australian Steel",
                desc: "High-yield strength AZ150 Zinc-Alum coating resisting tropical sea-spray corrosion."
            },
            {
                icon: "fa-solid fa-microchip",
                title: "Smart Electronic Testing",
                desc: "Every remote module and smart controller is 100% tested through 1,000+ cycle simulations."
            },
            {
                icon: "fa-solid fa-wrench",
                title: "Custom In-House Metal Fabrication",
                desc: "CNC plasma cutting and precision TIG/MIG welding for custom brackets and heavy steel structures."
            },
            {
                icon: "fa-solid fa-truck-pickup",
                title: "Rapid Field Response Fleet",
                desc: "Equipped mobile workshops ready for 24/7 on-site emergency repair and installation."
            }
        ]
    },
    branches: [
        {
            name: "Ratmalana Main Engineering Complex (Head Office)",
            address: "61/24 Sri Sumangala Road, Ratmalana",
            phone: "+94 77 440 2271",
            email: "info@shutter2000.lk",
            hours: "Always Open / 24-Hour Breakdown Hub",
            isHeadOffice: true
        },
        {
            name: "Colombo & Western Province Regional Branch",
            address: "Narahenpita & Nawala Road, Colombo Area",
            phone: "+94 77 440 2271",
            email: "colombo@shutter2000.lk",
            hours: "Mon - Sat: 8.30 AM - 5.30 PM",
            isHeadOffice: false
        },
        {
            name: "Central Province Service Hub (Kandy)",
            address: "William Gopallawa Mawatha, Kandy",
            phone: "+94 77 440 2271",
            email: "kandy@shutter2000.lk",
            hours: "Mon - Sat: 8.30 AM - 5.30 PM",
            isHeadOffice: false
        },
        {
            name: "Southern Province Hub (Galle & Matara)",
            address: "Colombo Road, Galle",
            phone: "+94 77 440 2271",
            email: "southern@shutter2000.lk",
            hours: "Mon - Sat: 8.30 AM - 5.30 PM",
            isHeadOffice: false
        }
    ],
    gallery: [
        {
            id: "gal-1",
            title: "Modern Residential Smart Roller Garage - Sri Lankan Luxury Villa",
            category: "Residential",
            location: "Colombo 07 & Ratmalana",
            image: "images/hero_slide1.jpg"
        },
        {
            id: "gal-2",
            title: "Heavy-Duty Retractable Gate - Industrial Zone Biyagama",
            category: "Industrial",
            location: "Biyagama Export Processing Zone",
            image: "images/retractable_gate.jpg"
        },
        {
            id: "gal-3",
            title: "Commercial Showroom Roller Shutter - Port City Colombo",
            category: "Commercial",
            location: "Colombo Port City Complex",
            image: "images/hero_slide3.jpg"
        },
        {
            id: "gal-4",
            title: "Clean Room High-Speed PVC Door - Pharmaceutical Plant Horana",
            category: "Industrial",
            location: "Horana Industrial Complex",
            image: "images/high_speed_door.jpg"
        },
        {
            id: "gal-5",
            title: "Automated Sliding Gate & Villa Barrier System",
            category: "Residential",
            location: "Rajagiriya Residential Estate",
            image: "images/sliding_gate.jpg"
        },
        {
            id: "gal-6",
            title: "Factory Roll-Forming & Slat Production Line",
            category: "Industrial",
            location: "Ratmalana Engineering Workshop",
            image: "images/factory_plant.jpg"
        },
        {
            id: "gal-7",
            title: "Crystal Polycarbonate Transparent Mall Shutter",
            category: "Commercial",
            location: "Kandy City Centre Storefront",
            image: "images/polycarbonate_door.jpg"
        },
        {
            id: "gal-8",
            title: "Heavy-Duty Zinc-Alum Motorized Industrial Bay Shutter",
            category: "Industrial",
            location: "Katunayake Free Trade Zone",
            image: "images/industrial_shutter.jpg"
        },
        {
            id: "gal-9",
            title: "Perforated Airflow Security Shutter for Auto Showroom",
            category: "Commercial",
            location: "Galle Road Automotive Dealership",
            image: "images/perforated_shutter.jpg"
        }
    ],
    testimonials: [
        {
            name: "Eng. Samantha Perera",
            role: "Project Director, Prime Construction LK",
            comment: "Shutter 2000 delivered 18 automated industrial shutters for our logistics hub on time and within budget. The motor reliability, quiet operation, and after-sales support are peerless.",
            rating: 5
        },
        {
            name: "Dilan Wickramasinghe",
            role: "Property Owner, Colombo 07",
            comment: "Upgraded our residence gate with their Wi-Fi smart control system. Opening the gate from anywhere via smartphone gives our family immense peace of mind.",
            rating: 5
        },
        {
            name: "Nirosha Jayawardena",
            role: "Operations Manager, Retail Mart Chain",
            comment: "Their Ratmalana fabrication workshop custom-built 4 heavy-duty retractable gates for our retail entrances. Flawless workmanship and solid safety features.",
            rating: 5
        }
    ],
    ctaBanner: {
        title: "Ready to Upgrade Your Property With Sri Lanka's Most Reliable Roller Doors?",
        subtitle: "Contact our senior engineering team today for a free on-site physical measurement, structural consultation, and formal quotation.",
        buttonText: "Request Free Site Measurement",
        buttonLink: "#contact",
        phone: "+94 77 440 2271"
    },
    contact: {
        address: "61/24 Sri Sumangala Road, Ratmalana, Sri Lanka",
        phone: "+94 77 440 2271",
        phoneRaw: "+94774402271",
        whatsapp: "+94 77 440 2271",
        whatsappRaw: "94774402271",
        email: "info@shutter2000.lk",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.530349487777!2d79.8808!3d6.8268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMzYuNSJOIDc5wrA1Mic1MC45IkU!5e0!3m2!1sen!2slk!4v1600000000000"
    }
};

/**
 * Retrieve current site data from localStorage or seed initial data
 */
function getSiteData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            saveSiteData(DEFAULT_DATA);
            return JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
        return JSON.parse(stored);
    } catch (e) {
        console.error("Error reading site data from localStorage:", e);
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
}

/**
 * Persist site data into localStorage
 */
function saveSiteData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error("Error saving site data to localStorage:", e);
        return false;
    }
}

/**
 * Reset data back to default data
 */
function resetSiteData() {
    return saveSiteData(DEFAULT_DATA);
}

/**
 * Admin Security PIN Management
 */
function getAdminPin() {
    return localStorage.getItem(PIN_STORAGE_KEY) || DEFAULT_PIN;
}

function verifyAdminPin(enteredPin) {
    const currentPin = getAdminPin();
    return String(enteredPin).trim() === String(currentPin).trim();
}

function updateAdminPin(newPin) {
    if (!newPin || String(newPin).trim().length < 4) {
        return { success: false, message: "PIN must be at least 4 characters long." };
    }
    localStorage.setItem(PIN_STORAGE_KEY, String(newPin).trim());
    return { success: true, message: "Security PIN updated successfully." };
}

/**
 * Format a WhatsApp link with predefined text
 */
function getWhatsAppUrl(phoneRaw, message) {
    const cleanPhone = (phoneRaw || "94774402271").replace(/[^0-9]/g, '');
    const encodedMsg = encodeURIComponent(message || "Hello Shutter 2000, I would like to inquire about your products and services.");
    return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}
