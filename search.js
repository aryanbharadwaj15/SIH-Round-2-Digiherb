// Sample plant data
const plants = [
    {
        name: "Tulsi",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/51iIZ1n-lJL_large.jpg?v=1598874255",
        location: "India, Southeast Asia",
        diseases: "Cough, Cold, Inflammation",
        features: "Rich in antioxidants, used in teas and herbal remedies.",
        plantAdditionalInfo:"Ocimum tenuiflorum, commonly known as holy basil, tulsi or tulasi, is an aromatic perennial plant in the family Lamiaceae. It is widely cultivated throughout the Southeast Asian tropics. It is native to tropical and subtropical regions of Asia, Australia and the western Pacific. This plant has escaped from cultivation and has naturalized in many tropical regions of the Americas. It is an agricultural and environmental weed."
    },
    {
        name: "Neem",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/71RCY17l3CL._SX425_480x480.jpg?v=1601299144",
        location: "India, Africa, Southeast Asia",
        diseases: "Skin conditions, Digestive issues, Antimicrobial properties",
        features: "",
        plantAdditionalInfo: "Azadirachta indica, commonly known as neem, margosa, nimtree or Indian lilac,[3] is a tree in the mahogany family Meliaceae. It is one of the two species in the genus Azadirachta. It is native to the Indian subcontinent and to parts of Southeast Asia, but is naturalized and grown around the world in tropical and subtropical areas. Its fruits and seeds are the source of neem oil."
    },
    {
        name: "Chamomile",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/2017-11-11-15-44-10_480x480.jpg?v=1601033349",
        location: "Germany, Egypt, United States",
        diseases: "Anxiety, Digestive issues, Insomnia",
        features: "Aromatic, Small white flowers, Used in teas",
        plantAdditionalInfo: "Chamomile (also spelled camomile) is a common name for several daisy-like plants of the family Asteraceae, commonly used to make herbal tea. Two of the most commonly used types are German chamomile (Matricaria chamomilla) and Roman chamomile (Chamaemelum nobile). The name is derived from the Greek word 'chamaimēlon,' meaning 'earth apple,' which refers to the apple-like scent of the plant."
    },
    {
        name: "Aloe Vera",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/aloe-vera-herbs-of-zaytuna_large.jpg?v=1598854093",
        location: "Mexico, India, United States",
        diseases: "Skin conditions, Digestive issues, Wound healing",
        features: "Succulent, Thick, fleshy leaves, Gel used in skincare",
        plantAdditionalInfo: "Aloe vera is a succulent plant species of the genus Aloe. The leaves of the plant are thick and fleshy, often used to soothe burns and other skin conditions. Aloe vera is widely used in cosmetic products and has a long history of medicinal use. It is known for its gel-like substance inside the leaves, which is used in skincare and wellness products."
    },
    {
        name: "Eucalyptus",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/eucalyptus-400x533_480x480.jpg?v=1601097648",
        location: "Australia, Brazil, South Africa",
        diseases: "Respiratory issues, Inflammation, Pain relief",
        features: "Evergreen tree, Aromatic leaves, Used in essential oils",
        plantAdditionalInfo: "Eucalyptus is a diverse genus of flowering trees and shrubs in the myrtle family, Myrtaceae. Native primarily to Australia, the genus includes more than 700 species of eucalyptus trees and shrubs, which are commonly known for their aromatic leaves. Eucalyptus trees are widely cultivated for their oil and wood, and they have various uses in landscaping and traditional medicine."
    },
    {
        name: "Ashwagandha",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/MP3632-600x600_1_large.jpg?v=1598856431",
        location: "India, Nepal, Sri Lanka",
        diseases: "Stress relief, Anxiety, Immune support",
        features: "Adaptogenic herb, Small red fruit, Used in Ayurvedic medicine",
        plantAdditionalInfo: "Ashwagandha (Withania somnifera) is an adaptogenic herb commonly used in traditional Indian medicine, particularly Ayurveda. It is also known as Indian ginseng or winter cherry. Ashwagandha is renowned for its stress-relieving properties and has been used for thousands of years to support overall health and well-being. The plant produces small red berries and is known for its potential benefits in reducing anxiety and improving stamina."
    },
    {
        name: "Lavender",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-lavender-flower_seeds_480x480.jpg?v=1601296946",
        location: "France, Spain, United States",
        diseases: "Anxiety, Insomnia, Skin conditions",
        features: "Fragrant flowers, Purple spikes, Used in aromatherapy",
        plantAdditionalInfo: "Lavender is a genus of flowering plants in the mint family, Lamiaceae, known for its fragrant flowers. The most common species is Lavandula angustifolia, often used in aromatherapy and perfumery. Lavender is native to the Mediterranean region but is now widely cultivated around the world. The plant produces spikes of small purple flowers and is valued for its calming and soothing properties."
    },
    {
        name: "Basil",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaAPhKZ_ASFYAP1bdsLlfvj36i_in0QYpLGz13zS3FS-zQgeuV",
        location: "India, Italy, Thailand",
        diseases: "Digestive issues, Inflammation, Respiratory problems",
        features: "Aromatic leaves, Various varieties, Used in cooking",
        plantAdditionalInfo: "Basil is a culinary herb belonging to the mint family, Lamiaceae. It is known for its aromatic leaves, which are commonly used in cooking and as a garnish. The plant has various varieties, including sweet basil, Thai basil, and lemon basil, each with unique flavors and uses. Basil is native to tropical regions and is widely cultivated around the world for its distinctive taste and fragrance."
    },
    {
        name: "Turmeric",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/turmeric-plant-and-root-inga-spence_480x480.jpg?v=1601799295",
        location: "India, Indonesia, Sri Lanka",
        diseases: "Inflammation, Digestive disorders, Joint pain",
        features: "Bright orange-yellow root, Used as a spice, Anti-inflammatory properties",
        plantAdditionalInfo: "Turmeric (Curcuma longa) is a flowering plant in the ginger family, Zingiberaceae. It is native to Southeast Asia and is best known for its bright orange-yellow rhizome, which is used as a spice and coloring agent in food. Turmeric has been used in traditional medicine for centuries and is known for its anti-inflammatory and antioxidant properties. The rhizome is ground into a powder and is a key ingredient in many curries and other dishes"
    },
    {
        name: "Ginger",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/HS10_480x480.jpg?v=1601282992",
        location: "India, China, Nigeria",
        diseases: "Digestive issues, Nausea, Inflammation",
        features: "Knobby, fibrous root, Spicy flavor, Used in cooking and medicine",
        plantAdditionalInfo: "Ginger (Zingiber officinale) is a flowering plant whose rhizome, commonly known as ginger root, is widely used as a spice and for its medicinal properties. Native to Southeast Asia, ginger has a knobby, fibrous root that has a spicy, pungent flavor. It is a popular ingredient in cooking, especially in Asian cuisine, and is also used in traditional medicine to treat various ailments such as nausea and digestive issues."
    },
    {
        name: "Tea tree",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/150970199-569fef1b3df78cafda9f228c_480x480.jpg?v=1601801178",
        location: "Australia, New Zealand, South Africa",
        diseases: "Skin conditions, Fungal infections, Respiratory issues",
        features: "Aromatic leaves, Essential oil with antimicrobial properties, Used in skincare",
        plantAdditionalInfo: "The tea tree (Melaleuca alternifolia) is a plant native to Australia, known for its aromatic leaves and essential oil, which has antimicrobial and antifungal properties. The oil is commonly used in skincare and personal care products to treat various conditions such as acne and fungal infections. The tea tree is an evergreen shrub or small tree, and its leaves are harvested to produce the valuable essential oil."
    },
    {
        name: "Calendula",
        image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/shutterstock_579020941-850x525_480x480.jpg?v=1601298122",
        location: "United States, Mediterranean region, India",
        diseases: "Skin conditions, Wound healing, Inflammation",
        features: "Bright orange or yellow flowers, Used in skincare, Edible petals",
        plantAdditionalInfo: "Calendula (Calendula officinalis), commonly known as marigold, is a flowering plant in the family Asteraceae. It is native to the Mediterranean region but is now widely cultivated around the world. The plant is known for its bright orange or yellow flowers, which are used in skincare products for their soothing and anti-inflammatory properties. Calendula petals are also edible and used in salads and culinary dishes."
    },
];

// Elements
const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions');
const plantInfoBox = document.getElementById('plant-info-box');
const plantNameElement = document.getElementById('plant-name');
const plantImageElement = document.getElementById('plant-image');
const plantLocationElement = document.getElementById('plant-location');
const plantDiseasesElement = document.getElementById('plant-diseases');
const plantFeaturesElement = document.getElementById('plant-features');
const plantAdditionalInfo = document.getElementById('plant-additional-info');
const backBtn = document.getElementById('back-btn');

// Show suggestions as user types
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (searchTerm) {
        const matchedPlants = plants.filter(plant =>
            plant.name.toLowerCase().includes(searchTerm)
        );

        matchedPlants.forEach(plant => {
            const suggestion = document.createElement('div');
            suggestion.textContent = plant.name;
            suggestion.addEventListener('click', () => showPlantInfo(plant));
            suggestionsBox.appendChild(suggestion);
        });
    }
});

// Show plant information box when a suggestion is clicked
function showPlantInfo(plant) {
    // Hide suggestions and search bar
    suggestionsBox.innerHTML = '';
    searchInput.value = '';

    // Populate info box
    plantNameElement.textContent = plant.name;
    plantImageElement.src = plant.image;
    plantLocationElement.textContent = plant.location;
    plantDiseasesElement.textContent = plant.diseases;
    plantFeaturesElement.textContent = plant.features;
    plantAdditionalInfo.textContent = plant.plantAdditionalInfo;

    // Show and animate info box
    plantInfoBox.classList.remove('hidden');
    plantInfoBox.classList.add('open');
}

// Close the info box by clicking outside
document.addEventListener('click', (event) => {
    if (plantInfoBox.classList.contains('open') && !plantInfoBox.contains(event.target) && !searchInput.contains(event.target)) {
        closePlantInfoBox();
    }
});

// Close plant info box function
function closePlantInfoBox() {
    plantInfoBox.classList.remove('open');
    plantInfoBox.classList.add('hidden');
}

// Back button logic
backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});