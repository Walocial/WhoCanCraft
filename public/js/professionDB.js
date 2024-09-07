class Profession {
    constructor(name, slots, defaultArmorType = null) {
        this.name = name;
        this.slots = {};
        this.defaultArmorType = defaultArmorType; // Optional default armor type for the profession

        slots.forEach(slot => {
            this.slots[slot] = [];
        });
    }

    addCraftableItem(slot, itemName, quality, armorType = null, professionType = null, bagSlots = null, mainStat = null, isEmbellished = false) {
        if (this.slots[slot]) {
            const item = {
                slot: slot,
                name: itemName,
                quality: quality,
                armortype: armorType || this.defaultArmorType, // Use default armor type if not specified
                isEmbellished: isEmbellished,
            };

            // Add professionType attribute if the slot is 'bags'
            if (slot === 'bags' && professionType && bagSlots) {
                item.professionType = professionType; // Include professionType for bags
                item.bagSlots = bagSlots;
            }

            // Added functionality to distinguish between an agi or int weapon
            if (slot === 'mainHand' && mainStat || slot === 'offHand' && mainStat) {
                item.mainStat = mainStat;
            }

            this.slots[slot].push(item);
        } else {
            console.error(`Invalid slot for ${this.name}: ${slot}`);
        }
    }
}


//Initializing each profession:
let blacksmithing = new Profession('Blacksmithing', ['head', 'shoulders', 'chest', 'wrists', 'hands', 'belt', 'legs', 'feet', 'mainHand', 'offHand'], 'Plate');
let tailoring = new Profession('Tailoring', ['head', 'shoulders', 'chest', 'cloak', 'wrists', 'hands', 'belt', 'legs', 'feet', 'bags'], 'Cloth');
let leatherworking = new Profession('Leatherworking', ['head', 'shoulders', 'chest', 'wrists', 'hands', 'belt', 'legs', 'feet']);
let inscription = new Profession('Inscription', ['mainHand', 'offHand', 'treatises']);
let engineering = new Profession('Engineering', ['mainHand', 'wrists', 'head']);
let jewelcrafting = new Profession('Jewelcrafting', ['necks', 'rings']);
let enchanting = new Profession('Enchanting', ['mainHand', 'crests']);
let alchemy = new Profession('Alchemy', ['trinkets']);


// Add craftable items for Tailoring
// Armor
tailoring.addCraftableItem('head', "Consecrated Hood", 'epic', null);
tailoring.addCraftableItem('head', "Pioneer's Perfected Hood", 'rare', null);
tailoring.addCraftableItem('shoulders', "Consecrated Mantle", 'epic', null);
tailoring.addCraftableItem('shoulders', "Pioneer's Perfected Mantle", 'rare', null);
tailoring.addCraftableItem('cloak', "Consecrated Cloak", 'epic', null);
tailoring.addCraftableItem('cloak', "Pioneer's Perfected Cloak", 'rare', null);
tailoring.addCraftableItem('chest', "Consecrated Robe", 'epic', null);
tailoring.addCraftableItem('chest', "Pioneer's Cloth Robe", 'rare', null);
tailoring.addCraftableItem('wrists', "Warm Sunrise Bracers", 'epic', null);
tailoring.addCraftableItem('wrists', "Cool Sunset Bracers", 'epic', null);
tailoring.addCraftableItem('wrists', "Consecrated Cuffs", 'epic', null);
tailoring.addCraftableItem('wrists', "Pioneer's Cloth Cuffs", 'rare', null);
tailoring.addCraftableItem('hands', "Gloves of the Woven Dawn", 'epic', null, null, null, null, null, true);
tailoring.addCraftableItem('hands', "Gloves of the Woven Dusk", 'epic', null, null, null, null, null, true);
tailoring.addCraftableItem('hands', "Consecrated Gloves", 'epic', null);
tailoring.addCraftableItem('hands', "Pioneer's Perfected Gloves", 'rare', null);
tailoring.addCraftableItem('belt', "Consecrated Cord", 'epic', null);
tailoring.addCraftableItem('belt', "Pioneer's Perfected Cord", 'rare', null);
tailoring.addCraftableItem('legs', "Consecrated Leggings", 'epic', null);
tailoring.addCraftableItem('legs', "Pioneer's Perfected Leggings", 'rare', null);
tailoring.addCraftableItem('feet', "Treads of the Woven Dawn", 'epic', null, null, null, null, null, true);
tailoring.addCraftableItem('feet', "Treads of the Woven Dusk", 'epic', null, null, null, null, null, true);
tailoring.addCraftableItem('feet', "Consecrated Slippers", 'epic', null);
tailoring.addCraftableItem('feet', "Pioneer's Cloth Slippers", 'rare', null);

// Bags
tailoring.addCraftableItem('bags', "The Severed Satchel", 'epic', 'misc', 'Tailoring', 36);
tailoring.addCraftableItem('bags', "Prodigy's Toolbox", 'epic', 'misc', 'Engineering', 36);
tailoring.addCraftableItem('bags', 'Magically "Infinite" Messenger', 'epic', 'misc', 'Enchanting', 36);
tailoring.addCraftableItem('bags', "Jeweler's Purse", 'epic', 'misc', 'Jewelcrafting', 36);
tailoring.addCraftableItem('bags', "Ignition Satchel", 'epic', 'misc', 'Blacksmithing', 36);
tailoring.addCraftableItem('bags', "Hideshaper's Workbag", 'epic', 'misc', 'Leatherworking', 36);
tailoring.addCraftableItem('bags', "Gardener's Seed Satchel", 'epic', 'misc', 'Herbalism', 36);
tailoring.addCraftableItem('bags', "Excavator's Haversack", 'epic', 'misc', 'Mining', 36);
tailoring.addCraftableItem('bags', "Darkmoon Duffle", 'epic', 'misc', 'Incsription', 36);
tailoring.addCraftableItem('bags', "Concoctor's Clutch", 'epic', 'misc', 'Alchemy', 36);


// Add craftable items for Blacksmithing
// Main Hands
blacksmithing.addCraftableItem('mainHand', "Charged Slicer", 'epic', '1haxe', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Charged Runeaxe", 'epic', '1haxe', null, null, 'Intellect');
blacksmithing.addCraftableItem('mainHand', "Ironclaw Axe", 'rare', '1haxe', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Everforged Mace", 'epic', '1hmace', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Everforged Longsword", 'epic', '1hsword', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Charged Hexsword", 'epic', '1hsword', null, null, 'Intellect');
blacksmithing.addCraftableItem('mainHand', "Ironclaw Sword", 'rare', '1hsword', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Everforged Warglaive", 'epic', '1hwarglaive', null, null, 'Agility');
blacksmithing.addCraftableItem('mainHand', "Siphoning Stiletto", 'epic', '1hdagger', null, null, 'Agility', true);
blacksmithing.addCraftableItem('mainHand', "Everforged Stabber", 'epic', '1hdagger', null, null, 'Agility');
blacksmithing.addCraftableItem('mainHand', "Everforged Dagger", 'epic', '1hdagger', null, null, 'Intellect');
blacksmithing.addCraftableItem('mainHand', "Ironclaw Stiletto", 'rare', '1hdagger', null, null, 'Intellect');
blacksmithing.addCraftableItem('mainHand', "Ironclaw Dirk", 'rare', '1hdagger', null, null, 'Agility');
blacksmithing.addCraftableItem('mainHand', "Charged Facesmasher", 'epic', '1hfistweap', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Ironclaw Knuckles", 'rare', '1hfistweap', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Everforged Greataxe", 'epic', '2haxe', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Ironclaw Great Axe", 'rare', '2haxe', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Charged Invoker", 'epic', '2hmace', null, null, 'Intellect');
blacksmithing.addCraftableItem('mainHand', "Charged Crusher", 'epic', '2hmace', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Ironclaw Great Mace", 'rare', '2hmace', null, null, 'Agility/Strength');
blacksmithing.addCraftableItem('mainHand', "Charged Claymore", 'epic', '2hsword', null, null, 'Strength');
blacksmithing.addCraftableItem('mainHand', "Charged Halberd", 'epic', '2hpolearm', null, null, 'Agility/Strength');

// Off Hands
blacksmithing.addCraftableItem('offHand', "Everforged Defender", 'epic', 'Shield', null, null, 'Intellect/Strength');
blacksmithing.addCraftableItem('offHand', "Beledar's Bulwark", 'epic', 'Shield', null, null, 'Intellect/Strength', true);
blacksmithing.addCraftableItem('offHand', "Dedger's Developed Defender", 'rare', 'Shield', null, null, 'Intellect/Strength');

// Armor
blacksmithing.addCraftableItem('head', "Everforged Helm", 'epic', null);
blacksmithing.addCraftableItem('head', "Dredger's Developed Helm", 'rare', null);
blacksmithing.addCraftableItem('shoulders', "Everforged Pauldrons", 'epic', null);
blacksmithing.addCraftableItem('shoulders', "Dredger's Developed Pauldrons", 'rare', null);
blacksmithing.addCraftableItem('chest', "Everforged Breastplate", 'epic', null);
blacksmithing.addCraftableItem('chest', "Dredger's Plate Breastplate", 'rare', null);
blacksmithing.addCraftableItem('wrists', "Everforged Vambraces", 'epic', null);
blacksmithing.addCraftableItem('wrists', "Dredger's Plate Vambraces", 'rare', null);
blacksmithing.addCraftableItem('hands', "Everforged Gauntlets", 'epic', null);
blacksmithing.addCraftableItem('hands', "Dredger's Plate Gauntlets", 'rare', null);
blacksmithing.addCraftableItem('belt', "Everforged Greatbelt", 'epic', null);
blacksmithing.addCraftableItem('belt', "Dredger's Plate Greatbelt", 'rare', null);
blacksmithing.addCraftableItem('legs', "Everforged Legplates", 'epic', null);
blacksmithing.addCraftableItem('legs', "Dredger's Plate Legplates", 'rare', null);
blacksmithing.addCraftableItem('feet', "Everforged Steps", 'epic', null, null, null, null, true);
blacksmithing.addCraftableItem('feet', "Everforged Sabatons", 'epic', null);
blacksmithing.addCraftableItem('feet', "Dredger's Plate Sabatons", 'rare', null);


// Add craftable items for Leatherworking
// Armor
leatherworking.addCraftableItem('head', "Rune-Branded Hood", 'epic', 'Leather');
leatherworking.addCraftableItem('head', "Spelunker's Practiced Hat", 'rare', 'Leather');
leatherworking.addCraftableItem('shoulders', "Rune-Branded Mantle", 'epic', 'Leather');
leatherworking.addCraftableItem('shoulders', "Spelunker's Practiced Shoulders", 'rare', 'Leather');
leatherworking.addCraftableItem('chest', "Weathered Stormfront Vest", 'epic', 'Leather', null, null, null, true)
leatherworking.addCraftableItem('chest', "Rune-Branded Tunic", 'epic', 'Leather');
leatherworking.addCraftableItem('chest', "Spelunker's Leather Jerkin", 'rare', 'Leather');
leatherworking.addCraftableItem('wrists', "Rook Feather Wristwraps", 'epic', 'Leather', null, null, null, true);
leatherworking.addCraftableItem('wrists', "Rune-Branded Armbands", 'epic', 'Leather');
leatherworking.addCraftableItem('wrists', "Spelunker's Leather Bands", 'rare', 'Leather');
leatherworking.addCraftableItem('hands', "Roiling Thunderstrike Talons", 'epic', 'Leather', null, null, null, true);
leatherworking.addCraftableItem('hands', "Rune-Branded Grasps", 'epic', 'Leather');
leatherworking.addCraftableItem('hands', "Spelunker's Practiced Mitts", 'rare', 'Leather');
leatherworking.addCraftableItem('belt', "Adrenal Surge Clasp", 'epic', 'Leather', null, null, null, true);
leatherworking.addCraftableItem('belt', "Rune-Branded Waistband", 'epic', 'Leather');
leatherworking.addCraftableItem('belt', "Spelunker's Practiced Sash", 'rare', 'Leather');
leatherworking.addCraftableItem('legs', "Rune-Branded Legwraps", 'epic', 'Leather');
leatherworking.addCraftableItem('legs', "Spelunker's Practiced Britches", 'rare', 'Leather');
leatherworking.addCraftableItem('feet', "Waders of the Unifying Flame", 'epic', 'Leather', null, null, null, true);
leatherworking.addCraftableItem('feet', "Rune-Branded Kickers", 'epic', 'Leather');
leatherworking.addCraftableItem('feet', "Spelunker's Leather Footpads", 'rare', 'Leather');

leatherworking.addCraftableItem('head', "Glyph-Etched Guise", 'epic', 'Mail');
leatherworking.addCraftableItem('head', "Tracker's Toughened Headgear", 'rare', 'Mail');
leatherworking.addCraftableItem('shoulders', "Glyph-Etched Epaulets", 'epic', 'Mail');
leatherworking.addCraftableItem('shoulders', "Tracker's Toughened Shoulderguards", 'rare', 'Mail');
leatherworking.addCraftableItem('chest', "Smoldering Pollen Hauberk", 'epic', 'Mail', null, null, null, true);
leatherworking.addCraftableItem('chest', "Glyph-Etched Breastplate", 'epic', 'Mail');
leatherworking.addCraftableItem('chest', "Tracker's Chitin Hauberk", 'rare', 'Mail');
leatherworking.addCraftableItem('wrists', "Vambraces of Deepening Darkness", 'epic', 'Mail', null, null, null, true);
leatherworking.addCraftableItem('wrists', "Glyph-Etched Vambraces", 'epic', 'Mail');
leatherworking.addCraftableItem('wrists', "Tracker's Chitin Cuffs", 'rare', 'Mail');
leatherworking.addCraftableItem('hands', "Sanctified Torchbearer's Grips", 'epic', 'Mail', null, null, null, true);
leatherworking.addCraftableItem('hands', "Glyph-Etched Gauntlets", 'epic', 'Mail');
leatherworking.addCraftableItem('hands', "Tracker's Toughened Handguards", 'rare', 'Mail');
leatherworking.addCraftableItem('belt', "Busy Bee's Buckle", 'epic', 'Mail', null, null, null, true);
leatherworking.addCraftableItem('belt', "Glyph-Etched Binding", 'epic', 'Mail');
leatherworking.addCraftableItem('belt', "Tracker's Toughened Girdle", 'rare', 'Mail');
leatherworking.addCraftableItem('legs', "Glyph-Etched Cuisses", 'epic', 'Mail');
leatherworking.addCraftableItem('legs', "Tracker's Toughened Links", 'rare', 'Mail');
leatherworking.addCraftableItem('feet', "Reinforced Setae Flyers", 'epic', 'Mail', null, null, null, true);
leatherworking.addCraftableItem('feet', "Glyph-Etched Stompers", 'epic', 'Mail');
leatherworking.addCraftableItem('feet', "Tracker's Chitin Galoshes", 'rare', 'Mail');


// Add craftable items for Jewelcrafting
// Armor
jewelcrafting.addCraftableItem('necks', "Fractured Gemstone Locket", 'epic', 'neck', null, null, null, true);
jewelcrafting.addCraftableItem('necks', "Amulet of Earthen Craftsmanship", 'epic', 'neck');
jewelcrafting.addCraftableItem('necks', "Malleable Pendant", 'rare', 'neck');
jewelcrafting.addCraftableItem('rings', "Binding of Binding", 'epic', 'Ring', null, null, null, true);
jewelcrafting.addCraftableItem('rings', "Ring of Earthen Craftsmanship", 'epic', 'Ring');
jewelcrafting.addCraftableItem('rings', "Malleable Band", 'rare', 'Ring');


// Add craftable items for Engineering
// Main Hands
engineering.addCraftableItem('mainHand', "P.O.W. x2", 'epic', '1hgun', null, null, 'Agility');
engineering.addCraftableItem('mainHand', "4UT0-41M3R", 'rare', '1hgun', null, null, 'Agility');

// Armor
engineering.addCraftableItem('head', "Studious Brilliance Expeditor", 'epic', 'Cloth');
engineering.addCraftableItem('head', "Acolyte's Goggles", 'rare', 'Cloth');
engineering.addCraftableItem('head', "Overclocked Idea Generator", 'epic', 'Leather');
engineering.addCraftableItem('head', "Spelunker's Goggles", 'rare', 'Leather');
engineering.addCraftableItem('head', "Supercharged Thought Enhancer", 'epic', 'Mail');
engineering.addCraftableItem('head', "Tracker's Toughened Headgear", 'rare', 'Mail');
engineering.addCraftableItem('head', "Dangerous Distraction Inhibitor", 'epic', 'Plate');
engineering.addCraftableItem('head', "Dredger's Goggles", 'rare', 'Plate');
engineering.addCraftableItem('wrists', "Blasting Bracers", 'epic', 'Cloth');
engineering.addCraftableItem('wrists', "Venting Vambraces", 'epic', 'Leather');
engineering.addCraftableItem('wrists', "Whirring Wristwraps", 'epic', 'Mail');
engineering.addCraftableItem('wrists', "Clanking Cuffs", 'epic', 'Plate');


// Add craftable items for Inscription
// Main Hands
inscription.addCraftableItem('mainHand', "Vagabond's Careful Crutch", 'epic', '2hstaff', null, null, 'Agility');
inscription.addCraftableItem('mainHand', "Vagabond's Bounding Baton", 'epic', '2hstaff', null, null, 'Intellect');
inscription.addCraftableItem('mainHand', "Inquisitor's Crutch", 'rare', '2hstaff', null, null, 'Agility');
inscription.addCraftableItem('mainHand', "Inquisitor's Baton", 'rare', '2hstaff', null, null, 'Intellect');

// Off Hands
inscription.addCraftableItem('offHand', "Vagabond's Torch", 'epic', 'heldinoffh');
inscription.addCraftableItem('offHand', "Inquisitor's Torch", 'rare', 'heldinoffh');

// Treatises
inscription.addCraftableItem('treatises', "Algari Treatise on Tailoring", 'rare', 'misc', 'Tailoring');
inscription.addCraftableItem('treatises', "Algari Treatise on Skinning", 'rare', 'misc', 'Skinning');
inscription.addCraftableItem('treatises', "Algari Treatise on Mining", 'rare', 'misc', 'Mining');
inscription.addCraftableItem('treatises', "Algari Treatise on Leatherworking", 'rare', 'misc', 'Leatherworking');
inscription.addCraftableItem('treatises', "Algari Treatise on Jewelcrafting", 'rare', 'misc', 'Jewelcrafting');
inscription.addCraftableItem('treatises', "Algari Treatise on Inscription", 'rare', 'misc', 'Inscription');
inscription.addCraftableItem('treatises', "Algari Treatise on Herbalism", 'rare', 'misc', 'Herbalism');
inscription.addCraftableItem('treatises', "Algari Treatise on Engineering", 'rare', 'misc', 'Engineering');
inscription.addCraftableItem('treatises', "Algari Treatise on Enchanting", 'rare', 'misc', 'Enchanting');
inscription.addCraftableItem('treatises', "Algari Treatise on Blacksmithing", 'rare', 'misc', 'Blacksmithing');
inscription.addCraftableItem('treatises', "Algari Treatise on Alchemy", 'rare', 'misc', 'Alchemy');


// Add craftable items for Enchanting
// Crests
enchanting.addCraftableItem('crests', "Enchanted Weathered Harbinger Crest", 'epic', 'misc');
enchanting.addCraftableItem('crests', "Enchanted Runed Harbinger Crest", 'epic', 'misc');
enchanting.addCraftableItem('crests', "Enchanted Gilded Harbinger Crest", 'epic', 'misc');
enchanting.addCraftableItem('mainHand', "Scepter of Radiant Magics", 'epic', '1hwand');
enchanting.addCraftableItem('mainHand', "Enchanted Spearwood Wand", 'rare', '1hwand');


// Add craftable items for Alchemy
// Trinkets
alchemy.addCraftableItem('trinkets', "Algari Alchemist Stone", 'epic', 'Trinket');


// Aggregating all craftable items from all professions into a single array
let professions = [blacksmithing, tailoring, leatherworking, inscription, engineering, jewelcrafting, enchanting, alchemy];
let allCraftableItems = [];
professions.forEach(profession => {
    Object.keys(profession.slots).forEach(slot => {
        allCraftableItems.push(...profession.slots[slot]);
    });
});

console.log(allCraftableItems);
