/* ==========================================================================
   ROYAL VILLA - APPLICATION JAVASCRIPT LOGIC
   ========================================================================== */

// --- Villa Database ---
const villasData = {
  'gulmohar': {
    id: 'gulmohar',
    name: 'Gulmohar Villa',
    tagline: 'Boutique Modern Pool Villa with Scenic Mountain Views',
    location: 'Lonavala',
    price: 24999,
    priceDisplay: '₹24,999',
    beds: '3 Bedrooms',
    baths: '4 Bathrooms',
    sqft: '14,000 Sft',
    guests: 'Up to 15 Guests',
    image: 'assets/images/villa-gulmohar.jpg',
    description: 'Gulmohar is an architectural oasis tucked in the tranquil hills of Lonavala. Featuring floor-to-ceiling glass walls, a private crystal turquoise swimming pool, an open-air sun deck, and manicured green lawns, it provides the ultimate luxury retreat. Our in-house chef prepares wholesome, customized regional delicacies while our dedicated caretaker caters to every detail of your stay.',
    amenities: [
      'Private Swimming Pool',
      'Private Chef On-Demand',
      'High-Speed 5G Wi-Fi',
      'Lush Private Lawn & Gazebo',
      'Barbecue & Bonfire Pit',
      'Indoor Carrom & Board Games',
      'Generator Power Backup',
      '24/7 Dedicated Caretaker'
    ]
  },
  'evergreen': {
    id: 'evergreen',
    name: 'Evergreen Escape',
    tagline: 'Sprawling Countryside Estate with Infinity Pool & 2-Acre Lawn',
    location: 'Karjat',
    price: 29999,
    priceDisplay: '₹29,999',
    beds: '4 Bedrooms',
    baths: '5 Bathrooms',
    sqft: '12,000 Sft',
    guests: 'Up to 20 Guests',
    image: 'assets/images/villa-evergreen.jpg',
    description: 'Perched on the rolling hills of Karjat, Evergreen Escape is a 4-bedroom countryside sanctuary surrounded by emerald green valleys. Enjoy peaceful morning swims in the heated infinity pool, relax under the poolside terracotta gazebo, play badminton on the lawn, and gather around a cozy bonfire at night under starry skies.',
    amenities: [
      'Heated Infinity Pool',
      '2-Acre Manicured Lawn',
      'Poolside Covered Gazebo',
      'Outdoor Badminton Court',
      'Live Barbecue Station',
      'Air-Conditioned Master Suites',
      'Fully Equipped Kitchen',
      'Pet Friendly Accommodations'
    ]
  },
  'maison': {
    id: 'maison',
    name: 'Maison Bellevue',
    tagline: 'Architectural Masterpiece with Sunset Sky Lounge & Game Room',
    location: 'Pali',
    price: 38500,
    priceDisplay: '₹38,500',
    beds: '5 Bedrooms',
    baths: '6 Bathrooms',
    sqft: '15,000 Sft',
    guests: 'Up to 22 Guests',
    image: 'assets/images/villa-maison.jpg',
    description: 'Maison Bellevue represents the pinnacle of modern architectural luxury in Pali / Alibaug. With dramatic cantilevered balconies, warm teak wood accents, golden ambient night lighting, and an expansive swimming pool, this estate is engineered for unforgettable family vacations and milestone celebrations.',
    amenities: [
      'Designer Lap Pool & Jacuzzi',
      'Sunset Rooftop Sky Lounge',
      'Full Snooker & Pool Table',
      'Surround Sound Party System',
      'Gourmet Multi-Cuisine Cook',
      'Smart TV in All Rooms',
      'Private Gated Parking (6 Cars)',
      'High-Speed Fibre Wi-Fi'
    ]
  },
  'casa-tropico': {
    id: 'casa-tropico',
    name: 'Casa Tropico',
    tagline: 'Grand Neoclassical Palace Estate with Royal Butler & Lake Panorama',
    location: 'Igatpuri',
    price: 45000,
    priceDisplay: '₹45,000',
    beds: '6 Bedrooms',
    baths: '7 Bathrooms',
    sqft: '18,000 Sft',
    guests: 'Up to 30 Guests',
    image: 'assets/images/villa-mansion-white.jpg',
    description: 'Casa Tropico in Igatpuri is a palatial white mansion overlooking pristine misty mountains and serene lake waters. Designed for royal living, it features classical colonnades, a grand swimming pool, lavish chandeliers, a private dining room, and full butler service for effortless luxury.',
    amenities: [
      'Royal Butler & Housekeeping',
      'Curved Heated Swimming Pool',
      'Private Lake & Mountain Views',
      'Grand Banquet Dining Hall',
      'Cards & Poker Lounge',
      'Rain Shower Suites',
      'Dedicated Event Space',
      '100% Gated & Secure Estate'
    ]
  },
  'nirvana': {
    id: 'nirvana',
    name: 'Nirvana Farm',
    tagline: 'Serene Nature Farmstay with Organic Orchard & Plunge Pool',
    location: 'Karjat',
    price: 27000,
    priceDisplay: '₹27,000',
    beds: '4 Bedrooms',
    baths: '4 Bathrooms',
    sqft: '11,500 Sft',
    guests: 'Up to 18 Guests',
    image: 'assets/images/property-2.jpg',
    description: 'Immerse yourself in tranquil green living at Nirvana Farm in Karjat. Nestled in a working organic mango and guava orchard, this farmhouse villa blends rustic warmth with modern luxury. Perfect for pet parents, family birthdays, and intimate weekend escapes.',
    amenities: [
      'Private Plunge Pool',
      'Organic Fruit Orchard Tour',
      'Outdoor Woodfire Pizza Oven',
      'Pet Friendly Play Area',
      'Traditional Chulha / Village Meals',
      'Spacious Party Patio',
      'Board Games & Carrom',
      '24/7 On-Site Housekeeper'
    ]
  },
  'suite-villa': {
    id: 'suite-villa',
    name: 'Suite Villa',
    tagline: 'Grand Reunion Estate for 25+ Guests with Heated Pool & Karaoke',
    location: 'Lonavala',
    price: 34000,
    priceDisplay: '₹34,000',
    beds: '5 Bedrooms',
    baths: '6 Bathrooms',
    sqft: '16,000 Sft',
    guests: 'Up to 25+ Guests',
    image: 'assets/images/property-1.jpg',
    description: 'Specially designed for big family reunions, college reunions, and corporate offsites, Suite Villa in Lonavala offers 5 massive suites, a rain dance deck, a temperature-controlled pool, professional karaoke setup, and customized catering for 25+ guests.',
    amenities: [
      'Heated Indoor/Outdoor Pool',
      'Rain Dance Deck & Sound System',
      'Professional Karaoke Setup',
      'Accommodates 25+ Guests Comfortably',
      'Live BBQ & Tandoor Station',
      'Large Living & Dining Salons',
      'Generator Power Backup',
      'Round-the-Clock Hospitality Team'
    ]
  }
};

// --- Guide Articles Database ---
const articlesData = {
  1: {
    title: 'Luxury 5BHK Villa in Lonavala with Private Pool | Royal Villa',
    subtitle: 'Your Ultimate Guide to the Perfect Weekend Staycation',
    image: 'assets/images/villa-maison.jpg',
    content: `
      <p>Lonavala has long been Mumbai and Pune's favorite weekend retreat, but staying at a crowded hotel often dilutes the peaceful escape you crave. That’s where private pool villas by Royal Villa redefine your holiday experience.</p>
      <p>With private heated swimming pools, dedicated chef service, and expansive sunset decks, our 5BHK estates accommodate large families without compromising privacy. Discover top sunset points like Lion's Point and Tiger's Leap, or simply lounge poolside with hot chai and fresh pakoras prepared by your personal cook.</p>
      <p><strong>Highlights of booking with Royal Villa:</strong></p>
      <ul>
        <li>Zero sharing with strangers — 100% exclusive private property</li>
        <li>Custom food menus cooked to your family's taste preferences</li>
        <li>Fast 2-hour drive from Mumbai via the Mumbai-Pune Expressway</li>
      </ul>
    `
  },
  2: {
    title: 'Mansion Villa in Lonavala | Private Pool by Royal Villa',
    subtitle: 'Experience Palatial Comfort Amidst Misty Hills',
    image: 'assets/images/villa-mansion-white.jpg',
    content: `
      <p>Step into grand neoclassical architecture with soaring ceilings, marble floors, and sweeping mountain panoramas. Casa Tropico and our premier Lonavala Mansions are crafted for milestone celebrations — 50th birthdays, golden anniversaries, and pre-wedding getaways.</p>
      <p>Our concierge team coordinates every detail, from floral balloon decorations and live barbecue counters to customized DJ sound systems and bonfire evenings under the stars.</p>
    `
  },
  3: {
    title: 'Top Riverfront Spots & Scenic Trekking Routes in Karjat',
    subtitle: 'Explore Rivers, Waterfalls, and Organic Farm Stays',
    image: 'assets/images/villa-evergreen.jpg',
    content: `
      <p>Karjat is a nature lover's paradise. Located less than 90 minutes from Mumbai, Karjat offers scenic river trails along the Pej River, Kondana Caves exploration, and verdant farmsteads.</p>
      <p>Staying at Evergreen Escape or Nirvana Farm allows you to experience organic orchard walks, fresh fruit harvesting, and refreshing dips in your private infinity pool with views of misty Sahyadri ridges.</p>
    `
  },
  4: {
    title: 'Why Private Pool Villas Are the Ultimate Weekend Therapy',
    subtitle: 'Rediscover Quality Time with Your Loved Ones',
    image: 'assets/images/villa-gulmohar.jpg',
    content: `
      <p>Modern routine is busy and fast-paced. A weekend getaway to a private luxury villa allows you to slow down, disconnect from screen noise, and reconnect with grandparents, kids, and friends in a stress-free, private environment.</p>
      <p>At Royal Villa, our motto is "Just show up and unwind." From check-in to check-out, our caretakers handle housekeeping, meal prep, and poolside maintenance so you can make memories that last a lifetime.</p>
    `
  }
};

let currentModalVillaId = 'gulmohar';
let currentSlide = 0;
let slideInterval = null;
let currentGuideIndex = 0;

// --- DOM Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  initHeaderScroll();
  initHeroSlider();
  initBookingDefaults();
});

// --- Header Scroll Listener ---
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Mobile Drawer ---
const mobileDrawer = document.getElementById('mobile-drawer');
const menuToggle = document.getElementById('menu-toggle');
const drawerClose = document.getElementById('drawer-close');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
  });
}

if (drawerClose) {
  drawerClose.addEventListener('click', () => {
    closeDrawer();
  });
}

function closeDrawer() {
  if (mobileDrawer) {
    mobileDrawer.classList.remove('open');
  }
}

// --- Hero Carousel Auto-Rotation ---
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  if (!slides.length) return;

  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateHeroSlide(currentSlide);
  }, 6000);
}

function goToSlide(index) {
  if (slideInterval) clearInterval(slideInterval);
  currentSlide = index;
  updateHeroSlide(index);
  initHeroSlider();
}

function updateHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// --- Destination & Villa Filter ---
function filterVillas(location, btnElement) {
  const cards = document.querySelectorAll('.luxury-villa-card');
  const filterPills = document.querySelectorAll('.filter-pill');

  // Update button active states
  if (btnElement) {
    filterPills.forEach(pill => pill.classList.remove('active'));
    btnElement.classList.add('active');
  } else {
    filterPills.forEach(pill => {
      if (location === 'ALL' && pill.innerText.includes('All')) {
        pill.classList.add('active');
      } else if (pill.innerText.toLowerCase().includes(location.toLowerCase())) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // Filter Villa Cards
  let visibleCount = 0;
  cards.forEach(card => {
    const cardLoc = card.getAttribute('data-location');
    if (location === 'ALL' || cardLoc.toLowerCase().includes(location.toLowerCase())) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Smooth scroll to villas section if triggered from header / destination cards
  if (!btnElement || !btnElement.classList.contains('filter-pill')) {
    const villasSec = document.getElementById('villas');
    if (villasSec) {
      villasSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  showToast(`Showing ${visibleCount} villas in ${location === 'ALL' ? 'all locations' : location}`);
}

// --- Wishlist Toggle ---
function toggleWishlist(villaName, btn) {
  btn.classList.toggle('liked');
  const isLiked = btn.classList.contains('liked');
  if (isLiked) {
    showToast(`❤️ Saved ${villaName} to your wishlist!`);
  } else {
    showToast(`Removed ${villaName} from wishlist.`);
  }
}

// --- Share Villa ---
function shareVilla(name, location, price) {
  const text = `Check out ${name} in ${location} (${price}) on Royal Villa: ${window.location.href}`;
  if (navigator.share) {
    navigator.share({
      title: `${name} | Royal Villa`,
      text: text,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`🔗 Link for ${name} copied to clipboard!`);
    });
  }
}

// --- Villa Details Modal ---
function openVillaModal(villaId) {
  const villa = villasData[villaId];
  if (!villa) return;

  currentModalVillaId = villaId;
  document.getElementById('vmodal-location').innerText = villa.location.toUpperCase();
  document.getElementById('vmodal-title').innerText = villa.name;
  document.getElementById('vmodal-main-img').src = villa.image;
  document.getElementById('vmodal-beds').innerText = villa.beds;
  document.getElementById('vmodal-baths').innerText = villa.baths;
  document.getElementById('vmodal-sqft').innerText = villa.sqft;
  document.getElementById('vmodal-guests').innerText = villa.guests;
  document.getElementById('vmodal-desc').innerText = villa.description;
  document.getElementById('vmodal-price').innerText = villa.priceDisplay;

  // Render Amenities Chips
  const amenContainer = document.getElementById('vmodal-amenities');
  amenContainer.innerHTML = villa.amenities.map(am => `
    <span class="amenity-chip"><i data-lucide="check"></i> ${am}</span>
  `).join('');

  if (window.lucide) lucide.createIcons();

  document.getElementById('villa-modal').classList.add('active');
}

function closeVillaModal() {
  document.getElementById('villa-modal').classList.remove('active');
}

function bookCurrentModalVilla() {
  closeVillaModal();
  const villa = villasData[currentModalVillaId];
  if (villa) {
    openBookingModal(villa.name, villa.location);
  }
}

// --- Quick Book from Card ---
function quickBookVilla(name, location, price) {
  openBookingModal(name, location);
}

// --- Booking Modal & Calculator ---
function initBookingDefaults() {
  const checkin = document.getElementById('book-checkin');
  const checkout = document.getElementById('book-checkout');

  if (checkin && checkout) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    checkin.value = today.toISOString().split('T')[0];
    checkout.value = tomorrow.toISOString().split('T')[0];
    checkin.min = today.toISOString().split('T')[0];
    checkout.min = today.toISOString().split('T')[0];
  }
}

function openBookingModal(preselectedVilla = null, preselectedLocation = null) {
  const modal = document.getElementById('booking-modal');
  const villaSelect = document.getElementById('book-villa');
  const locSelect = document.getElementById('book-location');

  if (preselectedLocation && locSelect) {
    locSelect.value = preselectedLocation;
  }

  if (preselectedVilla && villaSelect) {
    for (let opt of villaSelect.options) {
      if (opt.value.toLowerCase().includes(preselectedVilla.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }

  updateBookingEstimate();
  modal.classList.add('active');
}

function closeBookingModal() {
  document.getElementById('booking-modal').classList.remove('active');
}

function onLocationChange(loc) {
  const villaSelect = document.getElementById('book-villa');
  // Auto select appropriate villa for location
  if (loc === 'Lonavala') villaSelect.value = 'Gulmohar';
  else if (loc === 'Karjat') villaSelect.value = 'Evergreen Escape';
  else if (loc === 'Pali') villaSelect.value = 'Maison Bellevue';
  else if (loc === 'Igatpuri') villaSelect.value = 'Casa Tropico';
  updateBookingEstimate();
}

function updateBookingEstimate() {
  const checkinVal = document.getElementById('book-checkin')?.value;
  const checkoutVal = document.getElementById('book-checkout')?.value;
  const villaSelect = document.getElementById('book-villa');
  
  if (!villaSelect) return;
  const selectedOpt = villaSelect.options[villaSelect.selectedIndex];
  const rate = parseInt(selectedOpt?.getAttribute('data-price') || 24999);

  let nights = 1;
  if (checkinVal && checkoutVal) {
    const d1 = new Date(checkinVal);
    const d2 = new Date(checkoutVal);
    const diffTime = d2 - d1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      nights = diffDays;
    }
  }

  const total = rate * nights;

  document.getElementById('est-nights').innerText = `${nights} Night${nights > 1 ? 's' : ''}`;
  document.getElementById('est-rate').innerText = `₹${rate.toLocaleString('en-IN')} / night`;
  document.getElementById('est-total').innerText = `₹${total.toLocaleString('en-IN')}`;
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const villa = document.getElementById('book-villa').value;
  const location = document.getElementById('book-location').value;
  const checkin = document.getElementById('book-checkin').value;
  const checkout = document.getElementById('book-checkout').value;
  const guests = document.getElementById('book-guests').value;
  const phone = document.getElementById('book-phone').value;
  const estTotal = document.getElementById('est-total').innerText;

  const msg = `*Royal Villa Inquiry - Direct Booking*\n\n` +
    `🏰 *Villa:* ${villa} (${location})\n` +
    `📅 *Dates:* ${checkin} to ${checkout}\n` +
    `👥 *Guests:* ${guests}\n` +
    `💰 *Estimated Total:* ${estTotal}\n` +
    `📞 *Guest Phone:* ${phone}\n\n` +
    `_Hello Royal Villa Team, please confirm availability for these dates!_`;

  const waUrl = `https://api.whatsapp.com/send?phone=918010947110&text=${encodeURIComponent(msg)}`;
  
  closeBookingModal();
  showToast('Redirecting to WhatsApp with your reservation details...');
  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 700);
}

// --- List Your Property Modal ---
function openPropertyModal() {
  document.getElementById('property-modal').classList.add('active');
}

function closePropertyModal() {
  document.getElementById('property-modal').classList.remove('active');
}

function handlePropertySubmit(e) {
  e.preventDefault();
  closePropertyModal();
  showToast('🎉 Thank you! Our onboarding team will contact you within 24 hours.');
}

// --- Guide Carousel ---
function nextGuideSlide() {
  const track = document.getElementById('guides-track');
  if (!track) return;
  const cardWidth = track.querySelector('.guide-article-card')?.offsetWidth || 300;
  track.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
}

function prevGuideSlide() {
  const track = document.getElementById('guides-track');
  if (!track) return;
  const cardWidth = track.querySelector('.guide-article-card')?.offsetWidth || 300;
  track.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
}

function setGuideSlide(index) {
  const track = document.getElementById('guides-track');
  const dots = document.querySelectorAll('.guides-dots .g-dot');
  if (!track) return;

  const cardWidth = track.querySelector('.guide-article-card')?.offsetWidth || 300;
  track.scrollTo({ left: index * (cardWidth + 20), behavior: 'smooth' });

  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

// --- Article Reader Modal ---
function openArticleModal(id) {
  const article = articlesData[id];
  if (!article) return;

  document.getElementById('article-title').innerText = article.title;
  document.getElementById('article-content').innerHTML = `
    <div style="margin-bottom: 20px; border-radius: 12px; overflow: hidden; height: 260px;">
      <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 12px; color: var(--color-dark-main);">${article.subtitle}</h4>
    <div style="font-size: 0.92rem; line-height: 1.7; color: var(--color-text-body);">
      ${article.content}
    </div>
    <div style="margin-top: 24px; text-align: center;">
      <button class="btn-book-gold" onclick="closeArticleModal(); openBookingModal();">Book a Villa for This Trip</button>
    </div>
  `;

  document.getElementById('article-modal').classList.add('active');
}

function closeArticleModal() {
  document.getElementById('article-modal').classList.remove('active');
}

function openBlogListModal() {
  openArticleModal(1);
}

// --- FAQ Accordion Toggle ---
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const icon = button.querySelector('.faq-icon');
  const isActive = item.classList.contains('active');

  // Close all other items
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
    const ic = el.querySelector('.faq-icon');
    if (ic) ic.innerHTML = '<i data-lucide="plus"></i>';
  });

  if (!isActive) {
    item.classList.add('active');
    icon.innerHTML = '<i data-lucide="minus"></i>';
  }

  if (window.lucide) lucide.createIcons();
}

// --- Toast Notification ---
let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.innerText = msg;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Close modals when clicking backdrop
document.querySelectorAll('.modal-backdrop').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
