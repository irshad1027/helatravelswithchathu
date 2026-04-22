// WhatsApp Configuration
const WHATSAPP_NUMBER = '94703259919';

// Tour Data for All Tours
const tourData = {
    sigiriya: {
        id: 'sigiriya',
        title: "Sigiriya Rock & Dambulla Cave Temple Safari",
        duration: "14-16 Hours | Full Day Adventure",
        priceBasic: 60,
        priceAllInclusive: 120,
        shortDesc: "Climb the ancient Lion Rock fortress, explore 2,000-year-old cave temples, then experience a thrilling jeep safari.",
        highlights: [
            "Get stunning views from the rock fortress of Sigiriya",
            "Explore the well-preserved cave temples of Dambulla",
            "Watch traditional craft demonstrations",
            "Wildlife viewing in national park"
        ],
        fullDescription: `Set out from Colombo in the early morning, leaving the city behind as you travel through Sri Lanka's tranquil countryside. The journey north offers a peaceful start to your day, with misty landscapes, green fields, and glimpses of rural life.

Your first major stop is the Dambulla Cave Temple, a UNESCO World Heritage Site. Here, you'll discover a series of ancient rock caves adorned with vivid murals and golden Buddha statues. A short but rewarding climb leads to the temple's entrance.

Next, the adventure continues to the dramatic Sigiriya Lion Rock. This ancient fortress rises above the surrounding plains, challenging you to ascend its 1,200 steps. Along the way, you'll pass intricate frescoes and the famous Lion's Paws carved into the stone.

After exploring Sigiriya, you have the choice to unwind with a leisurely lunch or dive deeper into local culture. Opt for a village experience or choose a wildlife safari in one of the region's renowned national parks.`,
        includes: [
            "Hotel pickup and drop-off",
            "Transportation in an air-conditioned vehicle",
            "English-speaking driver",
            "Guide assistance at Sigiriya Lion Rock (English, German, French, Spanish)",
            "Sigiriya Lion Rock and Cave Temple entry fees (if all-inclusive option selected)",
            "Optional National Park Jeep safari (if all-inclusive option selected)",
            "King coconut",
            "Bottled water"
        ],
        notSuitable: [
            "Pregnant women",
            "People with back problems",
            "Wheelchair users"
        ],
        whatToBring: [
            "Passport or ID card",
            "Comfortable shoes",
            "Sunglasses",
            "Sun hat",
            "Sunscream"
        ],
        knowBeforeGo: [
            "If you haven't chosen the all-inclusive option, entry fees for Sigiriya Lion Rock (approx $36) and Dambulla Cave Temple (approx $10) must be paid in Sri Lankan Rupees on the tour day",
            "Wear comfortable walking shoes, as the tour involves a climb of 1,250 steps at Sigiriya",
            "When visiting temples, remove shoes and hats, cover shoulders and knees",
            "Transfer times may vary depending on traffic",
            "Pick-up is available only within Colombo city limits"
        ],
        itinerary: [
            { time: "Pickup", title: "Pickup from your location", description: "10 pickup location options available", locations: ["Negombo", "Colombo"], icon: "fas fa-map-marker-alt" },
            { time: "2.25 hours", title: "Scenic Drive to Dambulla", description: "Travel by comfortable air-conditioned vehicle through Sri Lanka's countryside", icon: "fas fa-car" },
            { time: "20 minutes", title: "Break at Local Restaurant", description: "Enjoy coffee, tea, breakfast, and local snacks", icon: "fas fa-utensils" },
            { time: "105 minutes", title: "Dambulla Royal Cave Temple & Golden Temple", description: "Visit the UNESCO World Heritage site. Explore ancient cave paintings and golden Buddha statues.", icon: "fas fa-landmark", extraFee: true },
            { time: "30 minutes", title: "Drive to Sigiriya", description: "Short scenic drive to the Lion Rock fortress", icon: "fas fa-road" },
            { time: "120 minutes", title: "Sigiriya Lion Rock", description: "Guided tour to the top of the ancient rock fortress. Climb 1,210 steps", icon: "fas fa-mountain", extraFee: true },
            { time: "1.5 hours", title: "Hiriwadunna Village Experience", description: "Break time, photo stop, lunch, guided tour, sightseeing, walk, local snacks", icon: "fas fa-tree", optional: true, extraFee: true },
            { time: "2 hours", title: "Wildlife Safari", description: "Exciting jeep safari through national park. Spot elephants and wildlife", icon: "fas fa-paw", optional: true, extraFee: true },
            { time: "3.5 hours", title: "Return Drive", description: "Scenic drive back to your drop-off location", icon: "fas fa-car" },
            { time: "Dropoff", title: "Dropoff at your location", description: "10 drop-off locations available", locations: ["Colombo", "Negombo"], icon: "fas fa-flag-checkered" }
        ]
    },
    kandy: {
        id: 'kandy',
        title: "Kandy Cultural Tour & Tea Plantation Experience",
        duration: "11 Hours | Full Day Journey",
        priceBasic: 60,
        priceAllInclusive: 100,
        shortDesc: "Visit the sacred Temple of the Tooth, explore Peradeniya Botanical Gardens, and tour a working tea factory.",
        highlights: [
            "See the sacred Tooth Relic of Buddha at the Temple of the Tooth",
            "Explore the beautiful Peradeniya Botanical Gardens with its orchids",
            "Enjoy panoramic views from Kandy View Point",
            "Visit a traditional Ceylon tea factory and taste freshly brewed tea",
            "Discover Sri Lanka's craftsmanship at silk, batik, wood-carving workshops"
        ],
        fullDescription: `Start your journey with a convenient hotel pickup from your Colombo hotel in a comfortable, air-conditioned vehicle and travel through scenic countryside to the cultural capital of Sri Lanka, Kandy.

Your first major highlight is a visit to the sacred Temple of the Tooth, one of the most important Buddhist pilgrimage sites in the world. Continue to the renowned Peradeniya Botanical Gardens, Sri Lanka's largest botanical garden.

The tour also includes a visit to a traditional Ceylon tea factory and plantation, where you will learn about the tea-making process and enjoy a fresh cup of world-famous Ceylon tea.`,
        includes: [
            "Hotel pickup and drop-off from Colombo",
            "Transportation in a comfortable, air-conditioned vehicle",
            "English-speaking driver-guide",
            "Visit to Temple of the Tooth",
            "Visit to Gem Museum",
            "Visit to Peradeniya Botanical Gardens",
            "Tea factory and plantation visit with tea tasting",
            "Stop at Kandy View Point",
            "Bottled drinking water"
        ],
        notSuitable: [
            "People with mobility issues",
            "Wheelchair users"
        ],
        whatToBring: [
            "Comfortable shoes",
            "Sunglasses",
            "Sun hat",
            "Sunscream",
            "Camera",
            "Cash for entrance fees"
        ],
        knowBeforeGo: [
            "When entering the temple, knees and shoulders should be covered",
            "When entering Buddhist temples, shoes and slippers must be removed",
            "Please don't stand with your back toward a Buddha statue",
            "Bring cash for optional tours and lunch",
            "Entrance fee to Temple of the Tooth – approx $8 per person",
            "Entrance fee to Peradeniya Botanical Gardens – approx $18 per person"
        ],
        itinerary: [
            { time: "Pickup", title: "Pickup from your location", description: "Pickup locations: Negombo, Colombo", locations: ["Negombo", "Colombo"], icon: "fas fa-map-marker-alt" },
            { time: "2 hours", title: "Scenic Drive to Mawanella", description: "Travel through scenic countryside", icon: "fas fa-car" },
            { time: "30 minutes", title: "Breakfast at Mawanella", description: "Enjoy breakfast at a local restaurant", icon: "fas fa-utensils", extraFee: true },
            { time: "1.5 hours", title: "Drive to Kandy", description: "Continue journey to the cultural capital", icon: "fas fa-road" },
            { time: "1 hour", title: "Temple of the Sacred Tooth Relic", description: "Visit the most sacred Buddhist site in Sri Lanka", icon: "fas fa-landmark", extraFee: true },
            { time: "20 minutes", title: "Kandy View Point", description: "Enjoy breathtaking panoramic views of Kandy city", icon: "fas fa-mountain" },
            { time: "45 minutes", title: "Gem Museum", description: "Discover Sri Lanka's precious gemstones including sapphires and rubies. Learn about gem cutting and certification", icon: "fas fa-gem", extraFee: true },
            { time: "1 hour", title: "Royal Botanic Gardens", description: "Explore Sri Lanka's largest botanical garden", icon: "fas fa-tree", extraFee: true },
            { time: "1 hour", title: "Lunch in Kandy", description: "Enjoy authentic Sri Lankan lunch", icon: "fas fa-utensils", extraFee: true },
            { time: "1 hour", title: "Pilimathalawa Tea Factory", description: "Visit a traditional Ceylon tea factory", icon: "fas fa-coffee" },
            { time: "Optional", title: "Artisan Workshops", description: "Optional visits to silk, batik, and gem museum", icon: "fas fa-gem", optional: true, extraFee: true },
            { time: "2 hours", title: "Return Drive", description: "Scenic drive back", icon: "fas fa-car" },
            { time: "Dropoff", title: "Dropoff at your location", description: "Dropoff locations: Negombo, Colombo", locations: ["Negombo", "Colombo"], icon: "fas fa-flag-checkered" }
        ]
    },
    galle: {
        id: 'galle',
        title: "Galle Dutch Fort & Bentota Beach Escape",
        duration: "10-12 Hours | Full Day Coastal Tour",
        priceBasic: 50,
        priceAllInclusive: 90,
        shortDesc: "Experience Madu River boat safari, visit turtle hatchery, and explore historic Galle Fort.",
        highlights: [
            "Experience the Madu River on a boat safari through mangrove forests",
            "Visit a local cinnamon garden on Cinnamon Island",
            "Learn about local wildlife at a Sea Turtle Hatchery",
            "Explore the historic Galle Fort, a UNESCO World Heritage Site",
            "Walk along the Galle Fort ramparts and visit the iconic lighthouse"
        ],
        fullDescription: `You will be picked up from your hotel in Colombo and begin your journey toward Galle, heading down the scenic southern coastal road. Your first stop will be at Bentota Beach, then visit a Sea Turtle Hatchery, followed by a Madu Ganga River boat safari through mangrove forests. After lunch, explore the historic Galle Fort, a UNESCO World Heritage Site.`,
        includes: [
            "Hotel pickup and drop-off",
            "English-speaking chauffeur/guide",
            "Bottled water"
        ],
        notSuitable: [
            "Pregnant women",
            "Wheelchair users"
        ],
        whatToBring: [
            "Comfortable shoes",
            "Sunglasses",
            "Sun hat",
            "Camera",
            "Cash for entrance fees"
        ],
        knowBeforeGo: [
            "Madu River Boat Ride: $30 solo / $25 per person for groups",
            "Turtle Hatchery entrance fee: $10 per person",
            "Moderate amount of walking",
            "Group tour pickup time depends on hotel location"
        ],
        itinerary: [
            { time: "Pickup", title: "Pickup from your location", description: "7 pickup locations available", locations: ["Negombo", "Colombo"], icon: "fas fa-map-marker-alt" },
            { time: "1 hour", title: "Scenic Coastal Drive", description: "Travel down the scenic southern coastal road", icon: "fas fa-car" },
            { time: "10 minutes", title: "Bentota Beach", description: "Quick photo opportunity", icon: "fas fa-camera" },
            { time: "30 minutes", title: "Drive to Kosgoda", description: "Continue along the coastal road", icon: "fas fa-road" },
            { time: "45 minutes", title: "Sea Turtle Conservation", description: "Visit a Sea Turtle Hatchery, see baby turtles", icon: "fas fa-water", extraFee: true },
            { time: "25 minutes", title: "Drive to Madu Ganga", description: "Short drive to the Madu River", icon: "fas fa-car" },
            { time: "105 minutes", title: "Madu Ganga Boat Safari", description: "Mangrove boat safari and Cinnamon Island visit", icon: "fas fa-sailboat", extraFee: true },
            { time: "20 minutes", title: "Drive to Hikkaduwa", description: "Continue for lunch", icon: "fas fa-car" },
            { time: "1 hour", title: "Lunch at Hikkaduwa", description: "Enjoy Sri Lankan cuisine", icon: "fas fa-utensils", extraFee: true },
            { time: "30 minutes", title: "Drive to Galle", description: "Continue to historic Galle", icon: "fas fa-car" },
            { time: "1 hour", title: "Galle Fort", description: "Explore historic Galle Fort, walk along ramparts", icon: "fas fa-building" },
            { time: "2.25 hours", title: "Return Drive", description: "Return via Southern Expressway", icon: "fas fa-car" },
            { time: "Dropoff", title: "Dropoff at your location", description: "7 drop-off locations available", locations: ["Negombo", "Colombo"], icon: "fas fa-flag-checkered" }
        ]
    },
    'colombo-fruit': {
        id: 'colombo-fruit',
        title: "Colombo City Explorer with Tropical Fruit Experience",
        duration: "3 Hours | Half Day Tour",
        priceBasic: 40,
        priceAllInclusive: 55,
        shortDesc: "Discover Colombo's highlights including Independence Square, Gangaramaya Temple, and taste exotic Sri Lankan fruits.",
        highlights: [
            "Discover the best of Colombo's architecture",
            "Admire panoramic views of the city from Lotus Tower",
            "Immerse yourself in the Sri Lankan way of life",
            "Visit the famous Gangaramaya Temple",
            "Explore Independence Memorial Hall"
        ],
        fullDescription: `Pick-up from your hotel in Colombo. Your chauffeur guide will welcome you and begin the drive through Sri Lanka's bustling commercial capital. Visit Independence Square, BMICH, Viharamahadevi Park, Gangaramaya Temple, and Hindu Temple. End with a drive through Pettah Market and the Red Mosque.`,
        includes: [
            "Bottled water",
            "English-speaking driver",
            "Hotel pickup and drop-off",
            "Air-conditioned transportation",
            "Exotic fruit tasting"
        ],
        notSuitable: [
            "People with mobility impairments",
            "People with heart problems"
        ],
        whatToBring: [
            "Passport or ID card",
            "Comfortable shoes",
            "Sunglasses",
            "Sun hat",
            "Camera"
        ],
        knowBeforeGo: [
            "Remove footwear and cover shoulders/knees in temples",
            "Valid passport required",
            "Entrance fees not included",
            "Gangaramaya Temple entrance fee applies"
        ],
        itinerary: [
            { time: "Pickup", title: "Pickup from your location", description: "Pickup available from Colombo city zone", locations: ["Colombo"], icon: "fas fa-map-marker-alt" },
            { time: "10 minutes", title: "Drive to BMICH", description: "Short drive through Colombo", icon: "fas fa-car" },
            { time: "10 minutes", title: "BMICH", description: "External photo stop", icon: "fas fa-building" },
            { time: "10 minutes", title: "Drive to Independence Square", description: "Short drive", icon: "fas fa-car" },
            { time: "20 minutes", title: "Independence Square", description: "Visit Independence Memorial Hall", icon: "fas fa-landmark" },
            { time: "10 minutes", title: "Drive to Viharamahadevi Park", description: "Short drive", icon: "fas fa-car" },
            { time: "10 minutes", title: "Viharamahadevi Park", description: "Relaxing walk in Colombo's largest park", icon: "fas fa-tree" },
            { time: "5 minutes", title: "Drive to Gangaramaya Temple", description: "Short drive", icon: "fas fa-car" },
            { time: "45 minutes", title: "Gangaramaya Temple", description: "Explore important Buddhist temple", icon: "fas fa-landmark", extraFee: true },
            { time: "30 minutes", title: "Lak Medura Shopping", description: "Optional shopping stop", icon: "fas fa-shopping-bag", optional: true },
            { time: "10 minutes", title: "Sri Kaileswaram Temple", description: "External photo stop", icon: "fas fa-landmark" },
            { time: "5 minutes", title: "Drive to Lotus Tower", description: "Short drive", icon: "fas fa-car" },
            { time: "10 minutes", title: "Colombo Lotus Tower", description: "Photo stop at South Asia's tallest structure", icon: "fas fa-building", extraFee: true, optional: true },
            { time: "Pass by", title: "Red Mosque & Fort Station", description: "Drive past landmarks", icon: "fas fa-landmark" },
            { time: "5 minutes", title: "Colombo Lighthouse", description: "Quick photo stop", icon: "fas fa-lightbulb" },
            { time: "15 minutes", title: "Return Drive", description: "Drive back through Colombo", icon: "fas fa-car" },
            { time: "Dropoff", title: "Dropoff at your location", description: "Return to your hotel", locations: ["Colombo"], icon: "fas fa-flag-checkered" }
        ]
    },
    tuktuk: {
        id: 'tuktuk',
        title: "Authentic Tuk Tuk Adventure Through Colombo",
        duration: "3 Hours | Half Day Local Experience",
        priceBasic: 35,
        priceAllInclusive: 45,
        shortDesc: "Explore Colombo on a city sightseeing trip by tuk-tuk.",
        highlights: [
            "Explore vibrant Colombo streets in a tuk-tuk",
            "See colonial buildings and famous attractions",
            "Visit Sambodhi Chaithya and Red Mosque",
            "Admire Town Hall and Independence Square",
            "Enjoy street food and shopping"
        ],
        fullDescription: `Discover Colombo on a tuk-tuk. Visit Old Parliament, BMICH, Sambodhi Chaithya, Red Mosque, Town Hall, and Independence Square. Option to shop for souvenirs and try local street food.`,
        includes: [
            "Tuk-tuk pickup and drop-off",
            "Tuk-tuk tour",
            "Bottled water",
            "Street food tasting"
        ],
        notSuitable: [
            "Pregnant women",
            "People with heart problems",
            "People with back problems"
        ],
        whatToBring: [
            "Camera",
            "Cash for entry fees",
            "Charged smartphone"
        ],
        knowBeforeGo: [
            "Moderate walking required",
            "Cover shoulders/knees in temples",
            "Remove shoes in temples",
            "Gangaramaya Temple entrance: 400 Rupees"
        ],
        itinerary: [
            { time: "Pickup", title: "Pickup from your location", description: "Pickup from Colombo hotel or cruise port", locations: ["Colombo City", "Cruise Port"], icon: "fas fa-map-marker-alt" },
            { time: "15 minutes", title: "Drive to Old Parliament", description: "Exciting tuk-tuk ride", icon: "fas fa-motorcycle" },
            { time: "15 minutes", title: "Old Parliament", description: "View colonial-era building", icon: "fas fa-landmark" },
            { time: "10 minutes", title: "Residential Areas", description: "Explore affluent neighborhoods", icon: "fas fa-road" },
            { time: "10 minutes", title: "BMICH", description: "See the conference hall", icon: "fas fa-building" },
            { time: "15 minutes", title: "Sambodhi Chaithya", description: "Visit unique Buddhist shrine", icon: "fas fa-landmark" },
            { time: "10 minutes", title: "Colombo Lighthouse", description: "Quick photo stop", icon: "fas fa-lightbulb" },
            { time: "20 minutes", title: "Red Mosque", description: "Admire red and white minarets", icon: "fas fa-landmark" },
            { time: "10 minutes", title: "Drive to Town Hall", description: "Scenic tuk-tuk ride", icon: "fas fa-motorcycle" },
            { time: "15 minutes", title: "Town Hall & Independence Square", description: "Visit national monument", icon: "fas fa-landmark" },
            { time: "20 minutes", title: "Gangaramaya Temple", description: "Optional temple visit", icon: "fas fa-landmark", optional: true, extraFee: true },
            { time: "20 minutes", title: "Handicrafts Emporium", description: "Optional shopping", icon: "fas fa-shopping-bag", optional: true },
            { time: "10 minutes", title: "Street Food", description: "Local food tasting", icon: "fas fa-utensils" },
            { time: "15 minutes", title: "Return Ride", description: "Back to hotel", icon: "fas fa-motorcycle" },
            { time: "Dropoff", title: "Dropoff at your location", description: "Return to your hotel", locations: ["Colombo City", "Cruise Port"], icon: "fas fa-flag-checkered" }
        ]
    },
    scooter: {
        id: 'scooter',
        title: "Freedom on Two Wheels - Self-Drive Scooter Tour",
        duration: "3 Hours | Half Day Solo Adventure",
        priceBasic: 30,
        priceAllInclusive: 40,
        shortDesc: "Self-drive adventure. Explore Colombo at your own pace on a scooter.",
        highlights: [
            "Self-drive scooter experience",
            "Explore at your own pace",
            "See colonial architecture and temples",
            "Perfect freedom for solo travelers",
            "Visit Red Mosque and Independence Square"
        ],
        fullDescription: `Get your own scooter and explore Colombo at your own pace. This self-drive tour gives you freedom to stop anywhere. Visit Old Parliament, BMICH, Sambodhi Chaithya, Red Mosque, Town Hall, and Independence Square.`,
        includes: [
            "Scooter rental for 3 hours",
            "Helmet",
            "Route map",
            "Mobile phone holder",
            "Emergency contact",
            "Bottled water"
        ],
        notSuitable: [
            "People without valid license",
            "First-time riders",
            "Pregnant women"
        ],
        whatToBring: [
            "Valid driver's license (MANDATORY)",
            "Passport or ID",
            "Credit card for deposit",
            "Camera",
            "Cash for entry fees"
        ],
        knowBeforeGo: [
            "Valid driver's license is MANDATORY",
            "Security deposit required",
            "Fuel not included",
            "Solo travelers only",
            "Gangaramaya Temple entrance: 400 Rupees"
        ],
        itinerary: [
            { time: "Pickup", title: "Scooter Pickup", description: "Pick up scooter, helmet, and route map", locations: ["Colombo City Center"], icon: "fas fa-motorcycle" },
            { time: "5 minutes", title: "Safety Check", description: "Setup GPS and test scooter", icon: "fas fa-check-circle" },
            { time: "10 minutes", title: "Ride to Old Parliament", description: "Self-drive through Colombo", icon: "fas fa-road" },
            { time: "10 minutes", title: "Old Parliament", description: "Stop at colonial building", icon: "fas fa-landmark" },
            { time: "5 minutes", title: "Residential Areas", description: "Explore neighborhoods", icon: "fas fa-motorcycle" },
            { time: "5 minutes", title: "BMICH", description: "Photo stop", icon: "fas fa-building" },
            { time: "10 minutes", title: "Sambodhi Chaithya", description: "Stop at Buddhist shrine", icon: "fas fa-landmark" },
            { time: "5 minutes", title: "Colombo Lighthouse", description: "Quick photo", icon: "fas fa-lightbulb" },
            { time: "15 minutes", title: "Red Mosque", description: "Admire landmark", icon: "fas fa-landmark" },
            { time: "10 minutes", title: "Ride to Town Hall", description: "Self-drive", icon: "fas fa-road" },
            { time: "10 minutes", title: "Town Hall & Independence Square", description: "Visit monument", icon: "fas fa-landmark" },
            { time: "15 minutes", title: "Gangaramaya Temple", description: "Optional temple visit", icon: "fas fa-landmark", optional: true, extraFee: true },
            { time: "15 minutes", title: "Free Time", description: "Shopping or food", icon: "fas fa-shopping-bag", optional: true },
            { time: "15 minutes", title: "Return Ride", description: "Back to drop-off", icon: "fas fa-motorcycle" },
            { time: "Dropoff", title: "Scooter Return", description: "Return scooter and helmet", locations: ["Colombo City Center"], icon: "fas fa-flag-checkered" }
        ]
    }
};

let currentTour = null;
let selectedPriceOption = 'basic';

// Open Modal
function openModal(tourId) {
    console.log("openModal called for:", tourId);
    
    currentTour = tourId;
    const modal = document.getElementById('tourModal');
    const modalBody = document.getElementById('modalBody');
    
    console.log("modal found:", modal);
    console.log("modalBody found:", modalBody);
    
    const tour = tourData[tourId];
    if (!tour) {
        console.error("Tour not found:", tourId);
        return;
    }
    
    // Build itinerary HTML
    let itineraryHTML = '';
    if (tour.itinerary) {
        itineraryHTML = `
            <div class="info-section">
                <h4><i class="fas fa-clock"></i> Itinerary</h4>
                <div class="itinerary-timeline">
                    ${tour.itinerary.map((item, index) => `
                        <div class="itinerary-item">
                            <div class="itinerary-icon">
                                <i class="${item.icon}"></i>
                            </div>
                            <div class="itinerary-content">
                                <div class="itinerary-time">${item.time}</div>
                                <div class="itinerary-title">${item.title}</div>
                                <div class="itinerary-description">${item.description}</div>
                                ${item.locations ? `
                                    <div class="itinerary-locations">
                                        <strong><i class="fas fa-location-dot"></i> Locations:</strong> ${item.locations.join(', ')}
                                    </div>
                                ` : ''}
                                <div class="itinerary-badges">
                                    ${item.optional ? '<span class="itinerary-badge optional"><i class="fas fa-star"></i> Optional</span>' : ''}
                                    ${item.extraFee ? '<span class="itinerary-badge extra-fee"><i class="fas fa-tag"></i> Extra Fee</span>' : ''}
                                </div>
                            </div>
                        </div>
                        ${index < tour.itinerary.length - 1 ? '<div class="itinerary-line"></div>' : ''}
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Clear and set new content
    modalBody.innerHTML = `
        <h2 class="modal-title">${tour.title}</h2>
        <div class="modal-duration"><i class="far fa-clock"></i> ${tour.duration}</div>
        
        <div class="price-options">
            <h4 style="margin-bottom: 12px;"><i class="fas fa-tag"></i> Select Your Package</h4>
            <div class="price-option ${selectedPriceOption === 'basic' ? 'selected' : ''}" onclick="selectPriceOption('basic')">
                <span class="price-option-name"><i class="fas fa-ticket-alt"></i> Standard Package</span>
                <span class="price-option-price">$${tour.priceBasic} <small>/ person</small></span>
            </div>
            <div class="price-option ${selectedPriceOption === 'all-inclusive' ? 'selected' : ''}" onclick="selectPriceOption('all-inclusive')">
                <span class="price-option-name"><i class="fas fa-gem"></i> All-Inclusive Package</span>
                <span class="price-option-price">$${tour.priceAllInclusive} <small>/ person</small></span>
            </div>
        </div>
        
        <div class="info-section">
            <h4><i class="fas fa-info-circle"></i> About This Activity</h4>
            <ul class="info-list">
                <li><i class="fas fa-check-circle"></i> Free cancellation - Cancel up to 24 hours in advance</li>
                <li><i class="fas fa-check-circle"></i> Reserve now & pay later</li>
                <li><i class="fas fa-check-circle"></i> Duration: ${tour.duration}</li>
                <li><i class="fas fa-check-circle"></i> Live tour guide - English, Tamil, Sinhalese</li>
                <li><i class="fas fa-check-circle"></i> Private or small groups available</li>
                <li><i class="fas fa-check-circle"></i> Pickup included</li>
            </ul>
        </div>
        
        ${itineraryHTML}
        
        <div class="info-section">
            <h4><i class="fas fa-star"></i> Highlights</h4>
            <div class="highlights">
                ${tour.highlights.map(h => `<span class="highlight-item"><i class="fas fa-award"></i> ${h}</span>`).join('')}
            </div>
        </div>
        
        <div class="info-section">
            <h4><i class="fas fa-book-open"></i> Full Description</h4>
            <p>${tour.fullDescription}</p>
        </div>
        
        <div class="info-section">
            <h4><i class="fas fa-check-double"></i> Includes</h4>
            <ul class="info-list">
                ${tour.includes.map(i => `<li><i class="fas fa-check"></i> ${i}</li>`).join('')}
            </ul>
        </div>
        
        <div class="info-section">
            <h4><i class="fas fa-ban"></i> Not Suitable For</h4>
            <ul class="info-list">
                ${tour.notSuitable.map(i => `<li class="not-allowed"><i class="fas fa-times-circle"></i> ${i}</li>`).join('')}
            </ul>
        </div>
        
        <div class="info-section">
            <h4><i class="fas fa-bag-shopping"></i> What to Bring</h4>
            <ul class="info-list">
                ${tour.whatToBring.map(i => `<li><i class="fas fa-check"></i> ${i}</li>`).join('')}
            </ul>
        </div>
        
        <div class="info-section">
            <h4><i class="fas fa-shield-alt"></i> Know Before You Go</h4>
            <ul class="info-list">
                ${tour.knowBeforeGo.map(i => `<li><i class="fas fa-info-circle"></i> ${i}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-booking">
            <h4 style="margin-bottom: 15px;"><i class="fas fa-calendar-alt"></i> Book This Tour</h4>
            <label><i class="fas fa-calendar-day"></i> Select your date</label>
            <input type="date" id="modalDate" class="tour-date" min="${new Date().toISOString().split('T')[0]}">
            <label><i class="fas fa-users"></i> Number of travelers</label>
            <select id="modalPeople">
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6+ people</option>
            </select>
            <button class="modal-whatsapp-btn" onclick="bookFromModal()">
                <i class="fab fa-whatsapp"></i> Book via WhatsApp
            </button>
        </div>
    `;
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    console.log("Modal should now be visible");
}

// Select price option
function selectPriceOption(option) {
    selectedPriceOption = option;
    if (currentTour) {
        openModal(currentTour);
    }
}

// Book from modal
function bookFromModal() {
    const date = document.getElementById('modalDate').value;
    const people = document.getElementById('modalPeople').value;
    const tour = tourData[currentTour];
    
    if (!date) {
        alert('Please select a date');
        return;
    }
    
    const price = selectedPriceOption === 'basic' ? tour.priceBasic : tour.priceAllInclusive;
    const packageType = selectedPriceOption === 'basic' ? 'Standard Package' : 'All-Inclusive Package';
    
    const message = `Hello Chathu! I want to book the "${tour.title}" tour on ${date} for ${people}. Package: ${packageType} ($${price}/person). Please confirm availability and total price. Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappLink, '_blank');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('tourModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Add Explore More buttons to tour cards
function addExploreMoreButtons() {
    const tourCards = document.querySelectorAll('.tour-card');
    
    tourCards.forEach((card) => {
        const tourId = card.getAttribute('data-tour');
        if (!tourId) return;
        
        const bookingBox = card.querySelector('.booking-box');
        if (!bookingBox) return;
        
        // Check if button already exists
        if (bookingBox.querySelector('.explore-more-btn')) return;
        
        const exploreBtn = document.createElement('button');
        exploreBtn.className = 'whatsapp-book-btn explore-more-btn';
        exploreBtn.style.background = 'var(--accent-gold)';
        exploreBtn.style.marginTop = '10px';
        exploreBtn.innerHTML = '<i class="fas fa-book-open"></i> Explore More Details';
        exploreBtn.onclick = () => openModal(tourId);
        
        bookingBox.appendChild(exploreBtn);
    });
}

// Build gallery with slide-from-bottom animation
// Build gallery - Equal size for all images
function buildGallery() {
    const gallery = document.getElementById('galleryGrid');
    if (!gallery) return;
    
    const images = [
        'memory1.jpeg', 'memory2.jpeg', 'memory3.jpeg',
        'memory4.jpeg', 'memory5.jpeg', 'memory6.jpeg',
        'memory7.jpeg', 'memory8.jpeg', 'memory9.jpeg',
        'memory10.jpeg', 'memory11.jpeg', 'memory12.jpeg'
    ];
    
    gallery.innerHTML = '';
    
    images.forEach((img) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <a href="memories/${img}" target="_blank">
                <img src="memories/${img}" alt="Travel memory">
            </a>
        `;
        gallery.appendChild(card);
    });
}

// Book tour from card
window.bookTour = function(tourName, dateId, peopleId) {
    const date = document.getElementById(dateId).value;
    const people = document.getElementById(peopleId).value;
    if (!date) return alert('Please select a date');
    const msg = encodeURIComponent(`Hello Chathu! I want to book ${tourName} on ${date} for ${people}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
};

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    new Swiper('.heroSwiper', {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
        effect: 'fade'
    });
    
    // Build gallery
    buildGallery();
    
    // Add Explore More buttons to tour cards
    addExploreMoreButtons();
    
    // WhatsApp buttons (excluding googleReviewsLink)
    const msg = encodeURIComponent("Hello Chathu! I saw your website and I'm interested in booking a tour.");
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    document.querySelectorAll('#headerWhatsappBtn, #footerWhatsappBtn').forEach(btn => {
        if(btn) { btn.href = waLink; btn.target = '_blank'; }
    });
    
    // Set minimum dates for date inputs
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('.tour-date').forEach(input => input.min = today);
    
    // Modal close functionality
    const modal = document.getElementById('tourModal');
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
});

// Make functions global for onclick handlers
window.selectPriceOption = selectPriceOption;
window.bookFromModal = bookFromModal;
window.openModal = openModal;