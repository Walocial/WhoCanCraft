class Profession {
    constructor(name, slots, defaultArmorType = null) {
        this.name = name;
        this.slots = {};
        this.defaultArmorType = defaultArmorType; // Optional default armor type for the profession

        slots.forEach(slot => {
            this.slots[slot] = [];
        });
    }

    addCraftableItem(slot, itemName, quality, armorType = null) {
        if (this.slots[slot]) {
            const item = {
                name: itemName,
                quality: quality,
                armortype: armorType || this.defaultArmorType // Use default armor type if not specified
            };
            this.slots[slot].push(item);
        } else {
            console.error(`Invalid slot for ${this.name}: ${slot}`);
        }
    }
}


//Initializing each profession:
let tailoring = new Profession('Tailoring', ['head', 'shoulders', 'chest', 'cloak', 'wrists', 'hands', 'belt', 'legs', 'feet', 'bags'], 'Cloth');
let blacksmithing = new Profession('Blacksmithing', ['head', 'shoulders', 'chest', 'cloak', 'wrists', 'hands', 'belt', 'legs', 'feet', 'mainHand', 'offHand'], 'Plate');
let leatherworking = new Profession('Leatherworking', ['head', 'shoulders', 'chest', 'belt', 'legs', 'feet']);
let engineering = new Profession('Engineering', ['mainHand', 'wrists', 'head'])

// Add craftable items for Tailoring
tailoring.addCraftableItem('head', "Consecrated Hood", 'epic', null)
tailoring.addCraftableItem('head', "Pioneer's Perfected Hood", 'rare', null)

tailoring.addCraftableItem('shoulders', "Consecrated Mantle", 'epic', null)
tailoring.addCraftableItem('shoulders', "Pioneer's Perfected Mantle", 'rare', null)

tailoring.addCraftableItem('cloak', "Consecrated Cloak", 'epic', 'all')
tailoring.addCraftableItem('cloak', "Pioneer's Perfected Cloak", 'rare', 'all')

tailoring.addCraftableItem('chest', "Consecrated Robe", 'epic', null)
tailoring.addCraftableItem('chest', "Pioneer's Cloth Robe", 'rare', null)

tailoring.addCraftableItem('wrists', "Consecrated Cuffs", 'epic', null)
tailoring.addCraftableItem('wrists', "Pioneer's Cloth Cuffs", 'rare', null)

tailoring.addCraftableItem('hands', "Consecrated Gloves", 'epic', null)
tailoring.addCraftableItem('hands', "Pioneer's Perfected Gloves", 'rare', null)

tailoring.addCraftableItem('belt', "Consecrated Cord", 'epic', null)
tailoring.addCraftableItem('belt', "Pioneer's Perfected Cord", 'rare', null)

tailoring.addCraftableItem('legs', "Consecrated Leggings", 'epic', null)
tailoring.addCraftableItem('legs', "Pioneer's Perfected Leggings", 'rare', null)

tailoring.addCraftableItem('feet', "Consecrated Slippers", 'epic', null)
tailoring.addCraftableItem('feet', "Pioneer's Cloth Slippers", 'rare', null)

tailoring.addCraftableItem('bags', "Pioneer's Cloth Robe", 'rare', null)

// Add craftable items for Blacksmithing
blacksmithing.addCraftableItem('mainHand', "Sword of Valor", true, 3);
blacksmithing.addCraftableItem('mainHand', "Axe of Fury", false, null);


engineering.addCraftableItem('mainHand', "P.O.W. x2", 'epic', 'Gun')
engineering.addCraftableItem('mainHand', "4UT0-41M3R", 'rare', 'Gun')

console.log(tailoring);
