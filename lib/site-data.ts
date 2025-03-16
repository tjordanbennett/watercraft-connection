/**
 * SITE DATA
 *
 * This file contains all the content for the website.
 * Update text and image paths here to easily manage site content.
 */

// Company Information
export const companyInfo = {
    name: "The Watercraft Connection",
    shortName: "Watercraft Connection",
    tagline: "Jet Ski & Kayak Rentals in Oahu",
    description:
      "Experience ultimate freedom and immersion with our world-class team of watercraft experts on the beautiful North Shore of Oahu, Hawaii.",
    year: new Date().getFullYear(),
    designCredit: {
      text: "Website Design by",
      company: "SiteSprint",
      url: "https://www.sitesprint.dev/",
    },
  
    // Contact Information
    contact: {
      phone: "+18086378006",
      phoneFormatted: "+1 (808) 637-8006",
      email: "hello@jetskihawaii.com",
      address: "66-105 Haleiwa Rd, Haleiwa, HI 96712",
      addressDetails: "Located at Haleiwa Harbor, North Shore",
      hours: "Monday - Sunday: 9:00 AM - 5:00 PM",
      hoursNote: "Last rental at 3:30 PM",
    },
  
    // Social Media Links
    social: {
      facebook: "https://www.facebook.com/Jetskishawaii/",
      instagram: "https://www.instagram.com/jetskihawaii/",
      yelp: "https://www.yelp.com/biz/the-watercraft-connection-haleiwa-3",
    },
  }
  
  // Hero Section
  export const heroContent = {
    heading1: "H A W A I I ' s",
    heading2: "Watercraft", // This is styled with the logo-text class
    heading3: "C O N N E C T I O N",
    mainHeading: "North Shore Jet Ski & Kayak Rentals",
    subheading: "Experience Ultimate Freedom and Immersion With Our World Class Team.",
    backgroundImage: "/hero.webp", // Replace with actual image path
    ctaButtons: [
      // {
      //   text: "LEARN MORE",
      //   href: "#services",
      //   isPrimary: false,
      // },
      {
        text: "BOOK NOW",
        href: "/booking",
        isPrimary: true,
      },
    ],
  }
  
  // Services Section
  export const servicesContent = {
    heading: "Experience Adventure",
    subheading:
      "Choose from our premium watercraft experiences and create unforgettable memories on Oahu's beautiful waters.",
  
    // Main services
    services: [
      {
        id: "jet-ski",
        title: "Jet Skiing",
        tagline: "PREMIUM RENTALS",
        description: "Experience the thrill of riding the waves",
        image: "/placeholder.svg?height=400&width=600", // Replace with actual image path
        features: [
          { icon: "Clock", text: "45-minute adventure" },
          { icon: "Users", text: "Single or double riders" },
          { icon: "ShieldCheck", text: "Professional instruction included" },
        ],
        learnMoreLink: "#learn-more-jet-ski",
        bookingLink: "/booking",
      },
      {
        id: "kayak",
        title: "Kayaking",
        tagline: "SCENIC TOURS",
        description: "Explore the serene waters of Oahu",
        image: "/placeholder.svg?height=400&width=600", // Replace with actual image path
        features: [
          { icon: "Clock", text: "Flexible duration" },
          { icon: "Users", text: "Single and tandem kayaks" },
          { icon: "Anchor", text: "Guided tours available" },
        ],
        learnMoreLink: "#learn-more-kayak",
        bookingLink: "/booking",
      },
    ],
  
    // Additional service
    additionalService: {
      title: "Private Charters",
      tagline: "Also Available",
      description:
        "For special events and family outings, connect with our experienced team to create a custom adventure.",
      learnMoreLink: "/contact",
    },
  }
  
  // Testimonials Section
  export const testimonialsContent = {
    heading: "Our Customers Love Us",
    subheading:
      "Read real reviews by our customers telling why they love The Watercraft Connection and why you should choose us for your next ocean adventure experience.",
  
    testimonials: [
      {
        platform: {
          name: "Yelp",
          logo: "/placeholder.svg?height=40&width=80", // Replace with actual logo
        },
        title: "Amazing Jet Ski Experience!",
        text: '"The crew were super nice and genuinely wanted us to have a great time. I was nervous and they were patient and encouraging! My 16 year old son was also nervous but they took care of us all! We had an amazing time and I totally recommend them! They are fantastic and a must for anyone who loves nature and the ocean!"',
        author: "Alexis R.",
        rating: 5,
      },
      {
        platform: {
          name: "TripAdvisor",
          logo: "/placeholder.svg?height=40&width=80", // Replace with actual logo
        },
        title: "Wow!",
        text: '"AMAZING experience! Kayaking on the Anahulu River was so peaceful and I could check it all! The crew was chill, funny, and most importantly made me feel safe the entire time. Highly recommended!"',
        author: "Daisy B.",
        rating: 5,
      },
      {
        platform: {
          name: "Facebook",
          logo: "/placeholder.svg?height=40&width=80", // Replace with actual logo
        },
        title: "We Had An Amazing Time",
        text: '"The instructor was patient with us since it was our first time doing this. We were able to see the beautiful North Shore up close. It was such an exciting experience. We will definitely be doing this again when we go back to Oahu."',
        author: "Dria Rene",
        rating: 5,
      },
    ],
  
    ctaButton: {
      text: "SEE MORE REVIEWS",
      href: "https://www.yelp.com/biz/the-watercraft-connection-haleiwa-3",
    },
  }
  
  // Gallery Section
  export const galleryContent = {
    heading: "Watercraft Adventure Photo Gallery",
    tagline: "EXPERIENCE THE NORTH SHORE",
    description:
      "Get a glimpse of what you can expect from a Watercraft Adventure with The Watercraft Connection as well as the quality of the photos taken by our amazing team.",
  
    // Gallery images - replace with actual images
    images: [
      // Replace these placeholder URLs with your actual image URLs
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Jet ski adventure on North Shore",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Kayaking in crystal clear waters",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Family enjoying watercraft adventure",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Scenic ocean views from jet ski",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Instructor demonstrating jet ski operation",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Sunset watercraft tour",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Group jet ski adventure",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Exploring Oahu's coastline",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Watercraft adventure with mountain backdrop",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Jet ski splashing through waves",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Tandem kayaking experience",
      },
      {
        src: "/placeholder.svg?height=800&width=1600", // Replace with actual image path
        alt: "Aerial view of jet skis on water",
      },
      // If you have fewer than 12 images, you can remove entries
      // If you have more than 12 images, you can add more entries following the same pattern
    ],
  }
  
  // Features Section
  export const featuresContent = {
    heading: "The Watercraft Experience",
    subheading:
      "Each rental includes professional instruction, premium equipment, and unforgettable memories. No prior experience required — just bring your sense of adventure.",
  
    // Main features (first row)
    mainFeatures: [
      {
        icon: "Clock",
        title: "45 Minutes",
        description: "Total rental time for jet skis, with time for safety briefing and setup.",
      },
      {
        icon: "ShieldCheck",
        title: "Safe",
        description: "Expert safety provided by licensed Captains & Watercraft Masters.",
      },
      {
        icon: "Anchor",
        title: "Natural Beauty",
        description: "Experience stunning views. Bring your camera or rent a waterproof bag.",
      },
      {
        icon: "Users",
        title: "Beginner Friendly",
        description: "All you need is an adventurous spirit. We'll handle the rest!",
      },
    ],
  
    // Additional features (second row)
    additionalFeatures: [
      {
        icon: "Users",
        title: "Small Groups",
        description: "Our tours have a minimum of 2 and a maximum of 6 patrons.",
      },
      {
        icon: "Wildlife", // Custom icon
        title: "Wildlife",
        description: "Encounter sea turtles and other marine creatures during your adventure.",
      },
      {
        icon: "MapPin",
        title: "Prime Location",
        description: "Located at Haleiwa Small Boat Harbor, minutes from famous beaches.",
      },
      {
        icon: "Trending", // Custom icon
        title: "Be Inspired",
        description: "Discover a deeper understanding of the ocean and its inhabitants.",
      },
    ],
  
    // Amenities section
    amenities: {
      heading: "Everything You Need",
      subheading: "We've thought of everything to make your adventure safe, comfortable, and memorable.",
      list: [
        "Services provided in English",
        "Free parking at dock",
        "Waterproof bags available",
        "Kama'aina & military discounts",
        "Learn about Hawaii's marine life",
        "No experience necessary",
      ],
      ctaButton: {
        text: "Book Your Adventure",
        href: "/booking",
      },
    },
  }
  
  // Call to Action Section
  export const ctaContent = {
    heading: "Ready for Your Ocean Adventure?",
    subheading: "Book your watercraft adventure today and create memories that will last a lifetime.",
    buttons: [
      {
        text: "BOOK NOW",
        href: "/booking",
        isPrimary: true,
      },
      {
        text: "CONTACT US",
        href: "/contact",
        isPrimary: false,
      },
    ],
  }
  
  // About Page Content
  export const aboutContent = {
    heading: "About Us",
  
    // Main story section
    story: {
      tagline: "OUR STORY",
      heading: "Passionate About Ocean Adventures",
      content: [
        "Founded in 2015, The Watercraft Connection was born from a deep love for the ocean and a desire to share the beauty of Oahu's North Shore with visitors and locals alike. What started as a small operation with just two jet skis has grown into the island's premier watercraft rental service.",
        "Our team consists of experienced watermen and women who are not only experts in operating watercraft but are also knowledgeable about the local marine environment. We take pride in providing safe, educational, and unforgettable experiences on the water.",
        "At The Watercraft Connection, we believe that everyone should have the opportunity to experience the thrill and freedom of exploring the ocean. Whether you're a first-time rider or an experienced enthusiast, our team is dedicated to ensuring you have the best possible experience.",
        "We are committed to responsible tourism and environmental stewardship. Our operations follow strict guidelines to minimize our impact on the delicate marine ecosystem, and we actively participate in local conservation efforts.",
      ],
      image: "/placeholder.svg?height=500&width=600", // Replace with actual image
    },
  
    // Values section
    values: {
      tagline: "OUR VALUES",
      heading: "What Drives Us",
      list: [
        {
          title: "Safety First",
          description:
            "We prioritize your safety above all else. Our equipment is meticulously maintained, and our staff is trained in emergency procedures.",
        },
        {
          title: "Exceptional Service",
          description:
            "We go above and beyond to ensure your experience exceeds expectations, from booking to the end of your adventure.",
        },
        {
          title: "Environmental Respect",
          description:
            "We are committed to preserving Hawaii's natural beauty through sustainable practices and education.",
        },
      ],
    },
  
    // Team section
    team: {
      tagline: "OUR TEAM",
      heading: "Meet Our Watercraft Experts",
      members: [
        {
          name: "Kai Johnson",
          title: "Founder & Lead Instructor",
          image: "/placeholder.svg?height=256&width=256", // Replace with actual image
        },
        {
          name: "Leilani Wong",
          title: "Operations Manager",
          image: "/placeholder.svg?height=256&width=256", // Replace with actual image
        },
        {
          name: "Makoa Silva",
          title: "Senior Instructor",
          image: "/placeholder.svg?height=256&width=256", // Replace with actual image
        },
      ],
    },
  
    // CTA section
    cta: {
      heading: "Ready for your adventure?",
      buttons: [
        {
          text: "Book Now",
          href: "/booking",
          isPrimary: true,
        },
        {
          text: "View FAQs",
          href: "/faq",
          isPrimary: false,
        },
        {
          text: "Return Home",
          href: "/",
          isOutline: true,
        },
      ],
    },
  }
  
  // FAQ Page Content
  export const faqContent = {
    heading: "Frequently Asked Questions",
  
    faqs: [
      {
        question: "I've never been on a Jet Ski before. Is it difficult to operate?",
        answer: [
          "Many of our customers are first-time riders, and we're here to make sure you feel confident before hitting the water. When you rent a jet ski from us, one of our friendly instructors will provide a full safety briefing and go over everything you need to know.",
          "Jet skis are easy to operate and extremely safe! They're powered by a jet of water instead of an exposed propeller. We provide a mandatory U.S. Coast Guard-approved life jacket. If you happen to fall off, the life jacket will keep you afloat regardless of your swimming ability.",
          "The ignition key is attached to the driver, ensuring the jet ski automatically stops until you remount. Goggles are available for rent at just $5 per person! Get ready for an exciting and worry-free ride!",
        ],
      },
      {
        question: "Can I bring a passenger?",
        answer: ["Yes, you can bring a passenger! Double your fun for an extra $50 per passenger."],
      },
      {
        question: "Is there an age limit to ride a Jet Ski?",
        answer: [
          "There is no specific age limit for passengers. As long as the passenger can hold onto the driver and the driver is comfortable with taking a young child with them, everyone can have fun!",
        ],
      },
      {
        question: "What is the riding area like?",
        answer: [
          "Our riding area is located half a mile to a mile out from the beautiful shores of Haleiwa Beach Park and the Haleiwa Boat Harbor. We allow an open-ocean experience within our specified permitted area.",
        ],
      },
      {
        question: "Can I bring a camera with me?",
        answer: [
          "We suggest that if you want to take photos on the water, you bring a waterproof camera. Even on days that seem like there is no wind, small particles of water can spray into your camera and damage it. If you'd like to bring your phone or other devices to take photos/videos, there is a small compartment on the watercraft where you can store them. We recommend renting one of our waterproof bags and being very careful when bringing expensive tech out on the water. We are not liable for what happens if it is lost or damaged. Our instructor can also take some pictures of you, but please be sure to tip them!",
        ],
      },
      {
        question: "Is there somewhere safe I can store my belongings whilst I am on the water?",
        answer: [
          "There is always someone at our Kiosk to ensure that your personal items are safe and sound. We also offer waterproof bags to rent for you to take any personal items you might want to have with you on the water. We are not liable for items lost or damaged, so be careful!",
        ],
      },
      {
        question: "Do I need to make a reservation?",
        answer: [
          "Yes, we require reservations ahead of time. In this business, we have to work with Mother Nature because the weather and tides on the North Shore are often unpredictable, so if we need to cancel you will be contacted.",
        ],
      },
      {
        question: "Is there parking at the harbor?",
        answer: ["Yes, there is plenty of free parking available at the harbor."],
      },
    ],
  
    // Help section
    helpSection: {
      heading: "Need assistance or have a special request?",
      text: "We're happy to help! Contact us using the phone or email icons at the top of the page.",
      buttons: [
        {
          text: "Contact Us",
          href: "/contact",
          isPrimary: true,
        },
        {
          text: "Book Now",
          href: "/booking",
          isPrimary: false,
        },
      ],
    },
  }
  
  // Contact Page Content
  export const contactContent = {
    heading: "Contact Us",
    intro:
      "We're here to help you plan your perfect watercraft adventure on the beautiful North Shore of Oahu. Whether you have questions about our rentals, need assistance with a booking, or want to inquire about custom experiences, our friendly team is ready to assist you.",
  
    // Contact sections
    sections: {
      phone: {
        title: "Phone",
        value: companyInfo.contact.phoneFormatted,
        note: "Available daily from 9:00 AM to 5:00 PM HST",
      },
      email: {
        title: "Email",
        value: companyInfo.contact.email,
        note: "We typically respond within 24 hours",
      },
      location: {
        title: "Location",
        value: companyInfo.contact.address,
        note: companyInfo.contact.addressDetails,
      },
      hours: {
        title: "Hours of Operation",
        value: companyInfo.contact.hours,
        note: companyInfo.contact.hoursNote,
      },
      social: {
        title: "Connect With Us",
      },
    },
  
    // Map placeholder text (replace with actual Google Maps embed)
    mapPlaceholder: {
      title: "Google Maps Embed",
      description:
        "To embed an actual Google Map, you'll need to replace this placeholder with an iframe from Google Maps.",
      example:
        '<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    },
  
    // CTA section
    cta: {
      heading: "Ready for your adventure?",
      buttons: [
        {
          text: "Book Now",
          href: "/booking",
          isPrimary: false,
        },
        {
          text: "View FAQs",
          href: "/faq",
          isPrimary: true,
        },
        {
          text: "Return Home",
          href: "/",
          isOutline: true,
        },
      ],
    },
  }
  
  // Booking Page Content
  export const bookingContent = {
    heading: "Book Your Adventure",
    intro:
      "Select your preferred watercraft experience, date, and time using our online booking system below. Our team will confirm your reservation and provide any additional details you need for your adventure.",
  
    // Important information
    importantInfo: {
      heading: "Important Information",
      items: [
        "Reservations are required in advance",
        "Please arrive 15 minutes before your scheduled time",
        "Cancellations must be made 24 hours in advance for a full refund",
        "Weather-related cancellations will be rescheduled or refunded",
        "Free parking is available at the harbor",
        "All equipment and safety gear is provided",
        "No experience necessary - we'll teach you everything you need to know",
      ],
  
      // Questions section
      questions: {
        heading: "Questions?",
        text: "If you have any questions about your booking or need assistance, please don't hesitate to contact us.",
      },
    },
  
    // Booking iframe placeholder
    bookingIframe: {
      heading: "Acuity Scheduling Iframe",
      description: "Insert your Acuity Scheduling iframe code here. The iframe will replace this placeholder.",
    },
  }
  
  