import { ClinicInfo, AyurvedicTreatment, PanchkarmaTherapyStep, PanchkarmaBenefit, Testimonial, GoogleReview, TrustPillar, DoshaQuizQuestion } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: "Dr. Kuldiwar's Ayurveda & Panchkarma Center",
  hindiName: "डीआर. कुलदिवार'स आयुर्वेद & पंचकर्म सेंटर",
  tagline: "Healing Naturally Through Ayurveda & Panchkarma",
  doctorName: "Dr. Kuldiwar",
  doctorTitle: "Senior Ayurvedic Physician & Panchkarma Specialist",
  degrees: "B.A.M.S., C.P.K. (Ayurvedic Medicine & Panchkarma)",
  experienceYears: 12,
  phone: "+91 82375 10466",
  formattedPhone: "+91 82375 10466",
  whatsappPhone: "918237510466",
  email: "drkuldiwar.ayurveda@gmail.com",
  address: {
    line1: "Ground Floor, Besides Maa Kali Medical",
    line2: "Near Bank of Maharashtra, Shivaji Nagar",
    area: "D.G. Tukum",
    city: "Chandrapur",
    state: "Maharashtra",
    pincode: "442401",
    landmarks: "Besides Maa Kali Medical, Near Bank of Maharashtra, Shivaji Nagar, D.G. Tukum"
  },
  timings: {
    days: "Monday – Saturday",
    morning: "10:00 AM – 02:00 PM",
    evening: "05:30 PM – 09:00 PM",
    sunday: "10:00 AM – 01:00 PM (Prior Appointment)"
  },
  googleRating: 5.0,
  reviewsCount: 19
};

export const AYURVEDIC_TREATMENTS: AyurvedicTreatment[] = [
  {
    id: "panchkarma-therapy",
    title: "Panchkarma Therapy",
    sanskritName: "पंचकर्म चिकित्सा",
    shortDesc: "Comprehensive 5-step classical bio-cleansing & cellular rejuvenation therapy.",
    fullDesc: "Panchkarma is the cornerstone of classical Ayurvedic medicine. It eliminates deep-rooted toxins (Ama), balances the tri-doshas (Vata, Pitta, Kapha), and resets your body's innate self-healing intelligence through customized Vamana, Virechana, Basti, Nasya, and Raktamokshana protocols.",
    iconName: "Sparkles",
    category: "panchkarma",
    benefits: [
      "Eliminates cellular toxins & metabolic waste",
      "Restores hormonal and digestive balance",
      "Boosts immunity (Ojas) & mental clarity",
      "Reverses chronic lifestyle stagnation"
    ],
    keyHerbs: ["Guggulu", "Triphala", "Dashamoola", "Ksheerabala Taila", "Eranda Sneha"],
    conditionsTreated: ["Metabolic disorders", "Autoimmune conditions", "Chronic fatigue", "Toxin buildup", "Premature aging"],
    duration: "7 to 21 Days custom course",
    suitableFor: "All adults seeking complete root-cause rejuvenation and chronic disease remission.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    badge: "Core Specialty"
  },
  {
    id: "shirodhara-therapy",
    title: "Shirodhara Therapy",
    sanskritName: "शिरोधारा चिकित्सा",
    shortDesc: "Continuous rhythmic stream of warm medicated herbal oil on the third eye (Ajna Chakra).",
    fullDesc: "An exquisitely soothing classical procedure where a continuous, rhythmic flow of warm herb-infused oils or medicated buttermilk (Takradhara) is poured across the forehead. It gently calms the central nervous system, stabilizes brain waves (Alpha state), and clears mental exhaustion.",
    iconName: "Droplets",
    category: "panchkarma",
    benefits: [
      "Deep relief from stress, anxiety, and panic",
      "Cures chronic insomnia and promotes restful sleep",
      "Alleviates severe migraines & tension headaches",
      "Improves memory, focus, and emotional harmony"
    ],
    keyHerbs: ["Brahmi Taila", "Chandanadi Taila", "Ashwagandha", "Jatamansi", "Shankhpushpi"],
    conditionsTreated: ["Chronic Insomnia", "Anxiety & Burnout", "Migraines", "Hypertension", "Memory weakness"],
    duration: "45 to 60 Mins per session (7-14 days package)",
    suitableFor: "Individuals experiencing high stress, sleep disorders, neurological strain, and mental fatigue.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop",
    badge: "Popular Therapy"
  },
  {
    id: "digestive-disorder",
    title: "Digestive Disorder Treatment",
    sanskritName: "अग्निदीपन & जठराग्नि चिकित्सा",
    shortDesc: "Root-cause healing for IBS, hyperacidity, chronic constipation, GERD & gut inflammation.",
    fullDesc: "According to Ayurveda, all diseases originate from impaired digestive fire (Mandagni) leading to toxic metabolic residue (Ama). Dr. Kuldiwar provides targeted herbal remedies, dietary correction (Pathya-Apathya), and specialized gut cleansing to restore microflora and gut integrity naturally.",
    iconName: "Activity",
    category: "chronic",
    benefits: [
      "Heals gut lining and reduces acidity naturally",
      "Normalizes bowel movements and ends constipation",
      "Eliminates bloating, gas, and abdominal cramps",
      "Improves nutrient absorption and metabolic vitality"
    ],
    keyHerbs: ["Avipattikar Churna", "Kutajarishta", "Bilva", "Hingwashtak Churna", "Sunthi"],
    conditionsTreated: ["Irritable Bowel Syndrome (IBS)", "Hyperacidity & GERD", "Ulcerative Colitis", "Chronic Constipation", "Indigestion"],
    duration: "2 to 8 Weeks personalized protocol",
    suitableFor: "Anyone with recurrent gastrointestinal distress or chronic digestive discomfort.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "skin-disease",
    title: "Skin Disease Treatment",
    sanskritName: "कुष्ठ & त्वचा रोग चिकित्सा",
    shortDesc: "Holistic blood purification (Rakta Shodhana) for psoriasis, eczema, acne & vitiligo.",
    fullDesc: "Skin conditions in Ayurveda are reflections of deeper Rakta (blood) and Pitta dosha imbalances. Our treatment combines potent blood-purifying herbal decoctions, therapeutic detoxification (Virechana & Raktamokshana), and specialized herbal lepams (poultices) to clear skin from within without steroidal side effects.",
    iconName: "Sun",
    category: "chronic",
    benefits: [
      "Cleanses toxins from blood and lymphatic channels",
      "Stops chronic itching, scaling, and inflammation",
      "Promotes healthy melanin production and cellular repair",
      "Prevents recurring seasonal flare-ups"
    ],
    keyHerbs: ["Manjistha", "Neem", "Khadira", "Sariva", "Mahatiktaka Ghrita"],
    conditionsTreated: ["Psoriasis", "Eczema (Vicharchika)", "Chronic Acne & Blemishes", "Urticaria (Sheetapitta)", "Vitiligo / Leukoderma"],
    duration: "4 to 12 Weeks phased recovery",
    suitableFor: "Patients struggling with recurring or steroid-resistant skin issues.",
    image: "https://images.unsplash.com/photo-1512290900672-1f55a1532057?q=80&w=800&auto=format&fit=crop",
    badge: "100% Herbal"
  },
  {
    id: "joint-pain",
    title: "Joint Pain Management",
    sanskritName: "संधिवात & आमवात निवारण",
    shortDesc: "Targeted Ayurvedic therapies for Osteoarthritis, Rheumatoid Arthritis, and chronic stiffness.",
    fullDesc: "Relieve debilitating joint inflammation and rebuild synovial fluid (Shleshaka Kapha) using time-tested Janu Basti, Patra Pinda Sweda (herbal bolus steam), and anti-inflammatory Guggulu formulations. Non-surgical approach that restores natural mobility and lubricates joints.",
    iconName: "ShieldCheck",
    category: "chronic",
    benefits: [
      "Rapid relief from joint inflammation & stiffness",
      "Nourishes cartilage and replenishes joint fluid",
      "Improves flexibility, range of motion, and walking comfort",
      "Avoids long-term reliance on painkiller medications"
    ],
    keyHerbs: ["Shallaki (Boswellia)", "Yograj Guggulu", "Mahanarayana Taila", "Rasna", "Ashwagandha"],
    conditionsTreated: ["Knee Osteoarthritis", "Rheumatoid Arthritis (Amavata)", "Gout (Vatarakta)", "Frozen Shoulder", "Ankylosing Spondylitis"],
    duration: "7 to 14 Days localized therapies + oral rasayanas",
    suitableFor: "Elderly, athletes, and anyone suffering from chronic knee, shoulder, or multi-joint agony.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "back-pain-disc",
    title: "Back Pain & Disc Bulge Care",
    sanskritName: "कटिबस्ति & मेरुदण्ड चिकित्सा",
    shortDesc: "Specialized Kati Basti, spine traction oils & nerve rejuvenation for slip disc & sciatica.",
    fullDesc: "Spinal compression, herniated/bulging discs, and sciatica (Gridhrasi) respond exceptionally well to authentic Kati Basti—where warm medicated herbal oil is held over the lumbosacral region in a herbal paste dam. This deeply nourishes intervertebral discs, relieves pinched nerves, and strengthens spinal musculature.",
    iconName: "HeartPulse",
    category: "specialized",
    benefits: [
      "Relieves sharp radiating sciatic nerve pain",
      "Decompresses herniated & bulging lumbar/cervical discs",
      "Restores spinal muscle elasticity and strength",
      "Non-invasive, highly effective alternative to surgery"
    ],
    keyHerbs: ["Karpasastyadi Taila", "Murivenna", "Sahacharadi Kashayam", "Gokshuradi Guggulu", "Nirgundi"],
    conditionsTreated: ["Lumbar Disc Herniation / Bulge", "Sciatica (Gridhrasi)", "Cervical Spondylosis", "Chronic Lower Back Ache", "Spinal Stenosis"],
    duration: "7 to 15 Days intensive therapy",
    suitableFor: "Desk workers, drivers, heavy lifters, and anyone with MRI-diagnosed spine and disc issues.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    badge: "Specialized Care"
  },
  {
    id: "womens-health",
    title: "Women's Health & Postpartum Care",
    sanskritName: "स्त्रीरोग & सूतिका परिचर्या",
    shortDesc: "Holistic herbal care for PCOD/PCOS, menstrual irregularities, menopause & postpartum recovery.",
    fullDesc: "Ayurveda honors the sacred phases of womanhood. Dr. Kuldiwar provides dedicated herbal protocols for balancing reproductive hormones (Artava Dhatu), reversing PCOD/PCOS, alleviating severe menstrual cramps, easing menopausal transitions, and traditional Sutika Paricharya for complete post-pregnancy recovery.",
    iconName: "Heart",
    category: "specialized",
    benefits: [
      "Regulates irregular periods & natural ovulation",
      "Reduces ovarian cysts and reverses PCOS symptoms",
      "Speeds up post-delivery tissue healing & stamina",
      "Promotes healthy lactation and emotional equilibrium"
    ],
    keyHerbs: ["Shatavari", "Ashoka", "Lodhra", "Kumaryasava", "Dhanwantharam Taila"],
    conditionsTreated: ["PCOD / PCOS", "Infertility & Anovulation", "Dysmenorrhea & Heavy Bleeding", "Postpartum Fatigue & Recovery", "Menopausal Syndrome"],
    duration: "Customized monthly cycles",
    suitableFor: "Women of all life stages seeking gentle, natural, hormone-free wellness.",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "stress-anxiety",
    title: "Stress & Anxiety Management",
    sanskritName: "मनोविकार & मेध्य रसायन",
    shortDesc: "Soma-calming herbal nootropics, Medhya Rasayana, and nervous system rebalancing.",
    fullDesc: "Modern chronic stress elevates cortisol, disturbs Vata dosha (Prana Vayu), and leads to burnout, brain fog, and chronic panic. We combine Shirodhara, Nasya (nasal medicated oils for the brain), and revered Medhya herbs to stabilize neurotransmitters, sharpen cognitive power, and bring deep inner peace.",
    iconName: "Feather",
    category: "lifestyle",
    benefits: [
      "Soothes hyperactive sympathetic nervous system",
      "Clears brain fog and enhances concentration",
      "Promotes deep restorative sleep without sedation",
      "Restores emotional resilience and mood balance"
    ],
    keyHerbs: ["Brahmi", "Ashwagandha", "Jatamansi", "Tagara", "Saraswatarishta"],
    conditionsTreated: ["Chronic Generalized Anxiety", "Depressive States", "Panic & Palpitations", "Executive Burnout", "Sleep Apnea & Insomnia"],
    duration: "4 to 8 Weeks program",
    suitableFor: "Professionals, students, and caregivers experiencing high psychological stress.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "detox-rejuvenation",
    title: "Detox & Rejuvenation Programs",
    sanskritName: "रसायन & कायाकल्प चिकित्सा",
    shortDesc: "Age-defying Rasayana Chikitsa to restore youthfulness, cellular energy & longevity.",
    fullDesc: "Rejuvenate your tissues at the deepest cellular level (Dhatu Poshana). After a preliminary gentle metabolic cleanse, nourishing Rasayana tonics and herbal elixirs are administered to enhance vitality (Bala), slow biological aging, and cultivate radiant complexion and long-lasting strength.",
    iconName: "Flame",
    category: "lifestyle",
    benefits: [
      "Slows premature cellular aging and organ wear",
      "Multiplies daily physical stamina and mental vigor",
      "Improves skin luster, hair health, and eyesight",
      "Enhances autoimmune resistance and defense"
    ],
    keyHerbs: ["Chyawanprash Awaleha", "Amalaki", "Shilajit", "Suvarna Bhasma (Gold Elixir)", "Guduchi"],
    conditionsTreated: ["Post-illness weakness", "Premature aging", "Low stamina", "Weak immunity", "Chronic lethargy"],
    duration: "14 to 30 Days rejuvenation schedule",
    suitableFor: "Anyone desiring peak physical vitality, youthfulness, and disease prevention.",
    image: "https://images.unsplash.com/photo-1512290903022-b91c10753065?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "lifestyle-disorder",
    title: "Lifestyle Disorder Treatment",
    sanskritName: "प्रमेह & स्थौल्य चिकित्सा",
    shortDesc: "Comprehensive reversal protocols for Diabetes (Prameha), Hypertension & Weight Management.",
    fullDesc: "Sedentary living and refined diets create metabolic syndrome (Santarpanottha Vikara). Dr. Kuldiwar designs an integrative protocol combining herbal insulin sensitizers, lipid-clearing decoctions (Lekhana Basti), customized Ayurvedic diet plans (Pathya), and lifestyle routines (Dinacharya) to control blood sugar and shed visceral fat naturally.",
    iconName: "Zap",
    category: "lifestyle",
    benefits: [
      "Assists in healthy blood sugar & HbA1c control",
      "Enhances metabolic rate and burns stubborn abdominal fat",
      "Lowers elevated cholesterol and triglycerides",
      "Stabilizes arterial blood pressure naturally"
    ],
    keyHerbs: ["Vijaysar", "Gurmar (Gymnema)", "Vrikshamla (Garcinia)", "Nisha-Amalaki", "Triphala Guggulu"],
    conditionsTreated: ["Type 2 Diabetes (Prameha)", "Obesity & Metabolic Sluggishness (Sthoulya)", "Dyslipidemia / Cholesterol", "Fatty Liver", "Hypertension"],
    duration: "3 to 6 Months guided journey",
    suitableFor: "Individuals battling metabolic disorders seeking natural lifestyle reversal.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop"
  }
];

export const PANCHKARMA_STEPS: PanchkarmaTherapyStep[] = [
  {
    stepNumber: 1,
    name: "Vamana Karma",
    sanskritName: "वमन कर्म (Therapeutic Emesis)",
    shortTag: "Kapha Elimination",
    description: "Controlled therapeutic emesis specifically targeted to purge excess Kapha dosha lodged in the respiratory tract, stomach, and lymphatic system.",
    action: "Purges deep chest congestion, chronic skin allergens, and bronchial mucus.",
    targetOrgans: "Upper GI Tract, Lungs, Sinuses, Lymphatics",
    benefits: ["Clears chronic asthma & bronchitis", "Dramatically improves psoriasis & eczema", "Relieves metabolic sluggishness"],
    herbalFormulations: ["Madanaphala", "Yashtimadhu Phanta", "Vacha", "Pippali"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
  },
  {
    stepNumber: 2,
    name: "Virechana Karma",
    sanskritName: "विरेचन कर्म (Therapeutic Purgation)",
    shortTag: "Pitta Detoxification",
    description: "Therapeutic purgation aimed at expelling morbid Pitta dosha and toxic bile accumulated in the liver, gallbladder, and small intestine.",
    action: "Flushes hepatic toxins, cools excess internal heat, and purifies the bloodstream.",
    targetOrgans: "Liver, Gallbladder, Small Intestine, Blood Tissue (Rakta)",
    benefits: ["Heals severe hyperacidity & chronic gastritis", "Clears blood toxins and stubborn acne", "Normalizes liver enzymes and digestion"],
    herbalFormulations: ["Trivrit Lehyam", "Avipattikar Churna", "Kasturi Haritaki", "Eranda Taila"],
    image: "https://images.unsplash.com/photo-1512290900672-1f55a1532057?q=80&w=600&auto=format&fit=crop"
  },
  {
    stepNumber: 3,
    name: "Basti Karma",
    sanskritName: "बस्ति कर्म (Medicated Enema Therapy)",
    shortTag: "Vata Master Therapy",
    description: "Considered the mother of all Panchkarma therapies (Ardha Chikitsa). Administers herbal decoctions (Niruha) and medicated oils (Anuvasana) into the colon to master Vata.",
    action: "Deeply lubricates, cleanses the enteric nervous system, and nourishes bone marrow and joints.",
    targetOrgans: "Colon (Pakwashaya), Nervous System, Lumbar Spine, Bones (Asthi)",
    benefits: ["Exceptional for Sciatica, Slip Disc, and Back Pain", "Reverses Osteoarthritis & Paralysis symptoms", "Cures chronic constipation and colon toxicity"],
    herbalFormulations: ["Dashamoola Kashayam", "Sahacharadi Taila", "Ksheerabala 101", "Gokshuradi Kwath"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
  },
  {
    stepNumber: 4,
    name: "Nasya Karma",
    sanskritName: "नस्य कर्म (Nasal Bio-Administration)",
    shortTag: "Cranial & Sensory Cleansing",
    description: "Administration of customized medicated oils, herbal juices, or fine powders through the nasal passages—the gateway to the brain and consciousness.",
    action: "Opens micro-channels in the head, stimulates the pituitary gland, and cleanses the five senses.",
    targetOrgans: "Nasal Passages, Sinus Cavities, Brain, Eyes, Cervical Spine",
    benefits: ["Relieves chronic Sinusitis & Migraines", "Improves memory, vision, and voice clarity", "Alleviates Cervical Spondylosis & Frozen Shoulder"],
    herbalFormulations: ["Anu Taila", "Shadbindu Taila", "Ksheerabala 101", "Ghee infused with Brahmi"],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop"
  },
  {
    stepNumber: 5,
    name: "Raktamokshana",
    sanskritName: "रक्तमोक्षण (Therapeutic Blood Cleansing)",
    shortTag: "Micro-Circulation Detox",
    description: "Classical blood purification using authentic Jalaukavacharana (medicinal leech therapy) or Siravyadha to relieve localized toxic blood congestion.",
    action: "Extracts stagnant impure venous blood, introduces natural enzymes, and relieves intense inflammation.",
    targetOrgans: "Localized Dermal & Vascular Beds, Deep Micro-Capillaries",
    benefits: ["Instant relief from severe joint swelling & Gout", "Rapid resolution of varicose veins & non-healing ulcers", "Accelerates stubborn psoriasis clearance"],
    herbalFormulations: ["Medicinal Hirudo (Jalauka)", "Triphala Wash", "Haridra Lepa"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
  }
];

export const PANCHKARMA_BENEFITS: PanchkarmaBenefit[] = [
  {
    id: "detox",
    title: "Complete Cellular Detox",
    subtitle: "Ama Nirharana",
    description: "Dislodges stubborn environmental, chemical, and metabolic toxins stored inside deep tissues for years.",
    icon: "Sparkles"
  },
  {
    id: "digestion",
    title: "Revitalized Digestion",
    subtitle: "Agni Deepana",
    description: "Rekindles the biological digestive fire (Jatharagni), optimizing nutrient assimilation and gut microbiome.",
    icon: "Activity"
  },
  {
    id: "sleep",
    title: "Restorative Deep Sleep",
    subtitle: "Nidra Sukham",
    description: "Calms hyperactive nervous firing, restores circadian rhythm, and relieves chronic insomnia naturally.",
    icon: "Moon"
  },
  {
    id: "stress",
    title: "Total Stress Reduction",
    subtitle: "Manas Shanti",
    description: "Balances neuro-hormones, dissipates mental tension, and fosters profound emotional equanimity.",
    icon: "Smile"
  },
  {
    id: "immunity",
    title: "Enhanced Immunity (Ojas)",
    subtitle: "Vyadhikshamatva",
    description: "Fortifies the body's primary protective shield (Ojas) against recurrent seasonal infections and auto-immune threats.",
    icon: "Shield"
  },
  {
    id: "rejuvenation",
    title: "Tissue Rejuvenation",
    subtitle: "Dhatu Poshana",
    description: "Renews cellular youthfulness, increases physical stamina, and imparts a natural luminous skin glow.",
    icon: "Flame"
  }
];

export const WHY_CHOOSE_US: TrustPillar[] = [
  {
    id: "natural-healing",
    title: "Natural Ayurvedic Healing",
    subtitle: "100% Pure Herbal Therapies",
    description: "Every formulation and oil is prepared strictly according to classical Ayurvedic texts using certified herbs, free from synthetic chemicals or steroids.",
    icon: "Leaf",
    stat: "100% Pure Herbs"
  },
  {
    id: "personalized-approach",
    title: "Personalized Treatment Approach",
    subtitle: "Prakriti & Dosha Specific",
    description: "No generic prescriptions. Dr. Kuldiwar performs comprehensive pulse assessment (Nadi Pariksha) and constitution analysis to design your exact regimen.",
    icon: "UserCheck",
    stat: "100% Personalized"
  },
  {
    id: "panchkarma-expertise",
    title: "Panchkarma Expertise",
    subtitle: "Authentic Classical Facilities",
    description: "Equipped with traditional wooden Droni massage tables, brass Shirodhara vessels, and experienced therapists following authentic Kerala & Vedic methods.",
    icon: "Award",
    stat: "Specialized Center"
  },
  {
    id: "holistic-focus",
    title: "Holistic Wellness Focus",
    subtitle: "Diet, Lifestyle & Mind Harmony",
    description: "Healing is incomplete without lifestyle guidance. We provide detailed diet charts (Ahara), daily routines (Dinacharya), and yogic breathwork advice.",
    icon: "Sun",
    stat: "Mind-Body Balance"
  },
  {
    id: "patient-centered",
    title: "Patient-Centered Compassionate Care",
    subtitle: "Unhurried, Attentive Consultations",
    description: "We listen deeply to your health journey. Dr. Kuldiwar ensures all your questions are answered and guides you patiently through every recovery step.",
    icon: "HeartHandshake",
    stat: "5.0 ★ Patient Rating"
  },
  {
    id: "proven-results",
    title: "Proven Long-Term Results",
    subtitle: "Root Cause Resolution",
    description: "We focus on eliminating the foundational root cause of diseases so you achieve sustained relief without permanent dependency on medications.",
    icon: "TrendingUp",
    stat: "Root Cause Focus"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Pooja Deshmukh",
    location: "Civil Lines, Chandrapur",
    treatmentTaken: "Shirodhara & Stress Therapy",
    rating: 5,
    date: "2 weeks ago",
    content: "The Shirodhara treatment was incredibly relaxing and professionally handled. The experience was truly transformative. My severe migraine and sleep issues have completely resolved. Dr. Kuldiwar is extremely patient and knowledgeable.",
    verified: true
  },
  {
    id: "test-2",
    author: "Snehal Wandhare",
    location: "Shivaji Nagar, Chandrapur",
    treatmentTaken: "Women's Health & Postpartum Care",
    rating: 5,
    date: "1 month ago",
    content: "After my postpartum recovery challenges, Dr. Kuldiwar's guidance helped me regain my health naturally. The Ayurvedic herbs and personalized diet plan restored my energy and back strength remarkably without any side effects.",
    verified: true
  },
  {
    id: "test-3",
    author: "Rajeshwar Patil",
    location: "Tukum, Chandrapur",
    treatmentTaken: "Kati Basti & Back Pain Care",
    rating: 5,
    date: "3 months ago",
    content: "I was suffering from disc bulge pain and found significant relief through Ayurvedic treatment focused on the root cause. The Kati Basti therapy did wonders for my radiating sciatic pain. I can walk comfortably again without surgery!",
    verified: true
  },
  {
    id: "test-4",
    author: "Anandita Roy",
    location: "Ramnagar, Chandrapur",
    treatmentTaken: "Skin Disease Treatment (Eczema)",
    rating: 5,
    date: "2 months ago",
    content: "I had chronic eczema on both hands for over 3 years. After just 4 weeks of blood purifying herbal remedies and dietary corrections from Dr. Kuldiwar, my skin is completely clear. 100% recommended for authentic Ayurveda in Chandrapur.",
    verified: true
  },
  {
    id: "test-5",
    author: "Vikas Choudhary",
    location: "Ballarpur Road, Chandrapur",
    treatmentTaken: "Digestive Disorder & Detox Program",
    rating: 5,
    date: "3 weeks ago",
    content: "Suffering from severe acidity and IBS for years. Dr. Kuldiwar diagnosed my Pitta imbalance precisely and prescribed a customized cleanse. My stomach feels calm and energetic for the first time in 5 years.",
    verified: true
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "g-1",
    author: "Amit Gedam",
    rating: 5,
    timeAgo: "1 month ago",
    content: "Best Ayurvedic doctor in Chandrapur! The clinic atmosphere is very peaceful and Panchkarma facilities are top class. Very genuine consultation and affordable treatments.",
    avatarColor: "bg-emerald-600",
    verifiedBadge: true,
    treatment: "Panchkarma Detox"
  },
  {
    id: "g-2",
    author: "Sunita Bawankar",
    rating: 5,
    timeAgo: "2 months ago",
    content: "Dr. Kuldiwar Sir provides excellent treatment for joint pain and arthritis. My mother was having difficulty climbing stairs and now she is feeling 90% better within 15 days.",
    avatarColor: "bg-amber-600",
    verifiedBadge: true,
    treatment: "Joint Pain Management"
  },
  {
    id: "g-3",
    author: "Rohan Kulkarni",
    rating: 5,
    timeAgo: "3 months ago",
    content: "Authentic Ayurveda practice. No false promises. He took 30 minutes to understand my full history and gave simple lifestyle changes along with herbal medicines that worked wonders.",
    avatarColor: "bg-teal-700",
    verifiedBadge: true,
    treatment: "Digestive Care"
  },
  {
    id: "g-4",
    author: "Kalyani Meshram",
    rating: 5,
    timeAgo: "4 months ago",
    content: "Superb Shirodhara setup! The warmth of medicated oil and peaceful environment took away all my work stress. 5 stars for the cleanliness and doctor's humble attitude.",
    avatarColor: "bg-emerald-700",
    verifiedBadge: true,
    treatment: "Shirodhara Therapy"
  },
  {
    id: "g-5",
    author: "Nilesh Thakre",
    rating: 5,
    timeAgo: "5 months ago",
    content: "Located conveniently near Bank of Maharashtra in Shivaji Nagar, Chandrapur. Clean Panchkarma rooms and highly skilled staff. Great experience!",
    avatarColor: "bg-green-700",
    verifiedBadge: true,
    treatment: "General Consultation"
  },
  {
    id: "g-6",
    author: "Pravin Mohurle",
    rating: 5,
    timeAgo: "6 months ago",
    content: "Very effective medicine for chronic skin allergy. I visited multiple clinics before, but Dr. Kuldiwar's root-cause approach finally solved my problem permanently.",
    avatarColor: "bg-amber-700",
    verifiedBadge: true,
    treatment: "Skin Disease Care"
  }
];

export const DOSHA_QUIZ: DoshaQuizQuestion[] = [
  {
    id: 1,
    question: "How would you describe your body frame and energy level?",
    options: [
      { text: "Slender, light frame, quick energy that depletes quickly (Vata)", dosha: "vata" },
      { text: "Medium, athletic build, strong digestion, sharp focus (Pitta)", dosha: "pitta" },
      { text: "Solid, broad build, steady endurance, gains weight easily (Kapha)", dosha: "kapha" }
    ]
  },
  {
    id: 2,
    question: "How does your digestion and appetite usually behave?",
    options: [
      { text: "Irregular appetite, prone to bloating, gas, or dry constipation (Vata)", dosha: "vata" },
      { text: "Very strong appetite, easily irritable if meals are delayed, prone to acidity (Pitta)", dosha: "pitta" },
      { text: "Slow but steady digestion, can skip meals easily, prone to heaviness (Kapha)", dosha: "kapha" }
    ]
  },
  {
    id: 3,
    question: "How do you respond to stress and emotional challenges?",
    options: [
      { text: "Worry, anxiety, racing thoughts, restless sleep (Vata)", dosha: "vata" },
      { text: "Irritability, impatience, intense perfectionism, anger (Pitta)", dosha: "pitta" },
      { text: "Withdrawal, resistance to change, lethargy, emotional eating (Kapha)", dosha: "kapha" }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    q: "What makes Panchkarma different from ordinary massage?",
    a: "Panchkarma is not a cosmetic massage; it is a clinical, physician-guided bio-purification and cellular detoxification protocol. It mobilizes deep metabolic toxins (Ama) from tissues and systematically expels them from the body through 5 classical cleansing routes."
  },
  {
    q: "Are the herbal medicines safe and free from chemicals or steroids?",
    a: "Yes, 100%. All medicines and medicated oils prescribed by Dr. Kuldiwar are prepared strictly from classical Ayurvedic pharmacopeia using pure, lab-tested herbal ingredients and traditional decoction techniques."
  },
  {
    q: "How many days does Panchkarma therapy take?",
    a: "Depending on your condition, treatments range from 7 days, 14 days, up to 21 days. A preliminary consultation helps Dr. Kuldiwar evaluate your Prakriti and recommend the ideal duration."
  },
  {
    q: "Can Ayurveda help with chronic back pain and slip disc without surgery?",
    a: "Yes. Therapies such as Kati Basti, Patra Pinda Sweda, and specialized herbal anti-inflammatories decompress spinal discs, relieve sciatic nerve irritation, and strengthen surrounding ligaments effectively."
  },
  {
    q: "Do I need prior appointment before visiting the clinic in Chandrapur?",
    a: "While walk-ins are accepted during clinic hours, we strongly recommend booking an appointment in advance to minimize waiting time and guarantee unhurried consultation with Dr. Kuldiwar."
  }
];
