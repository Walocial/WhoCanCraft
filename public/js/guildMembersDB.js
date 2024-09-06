class GuildMember {
    constructor(name, realm, profession1, profession2) {
        this.name = name;
        this.realm = realm;
        this.profession1 = profession1;
        this.profession2 = profession2;
        this.craftableItems = {}; // To store what the member can craft and at max rank or not
    }

    // Add a craftable item for this guild member
    addCraftableItem(profession, slot, itemName, atMaxRank = false) {
        if (!this.craftableItems[profession.name]) {
            this.craftableItems[profession.name] = {};
        }

        if (!this.craftableItems[profession.name][slot]) {
            this.craftableItems[profession.name][slot] = [];
        }

        const professionSlotItems = profession.slots[slot];
        const item = professionSlotItems.find(i => i.name === itemName);

        if (item) {
            this.craftableItems[profession.name][slot].push({
                itemName: itemName,
                atMaxRank: atMaxRank // Store whether the member can craft it at max rank
            });
        } else {
            console.error(`Item ${itemName} not found in ${profession.name} for slot ${slot}`);
        }
    }

    // Check if the member can craft a particular item
    canCraft(profession, slot, itemName) {
        const slotItems = this.craftableItems[profession.name]?.[slot] || [];
        return slotItems.some(item => item.itemName === itemName);
    }

    // Check if the member can craft the item at max rank
    canCraftAtMaxRank(profession, slot, itemName) {
        const slotItems = this.craftableItems[profession.name]?.[slot] || [];
        const item = slotItems.find(i => i.itemName === itemName);
        return item ? item.atMaxRank : false;
    }
}


// Create a guild member
let member1 = new GuildMember('Walocial', 'Silvermoon', tailoring, engineering);
let member2 = new GuildMember('Huntste', 'Silvermoon', alchemy, leatherworking);

// Assign what the member can craft and whether they can craft it at max rank
member1.addCraftableItem(tailoring, 'shoulders', "Pioneer's Perfected Mantle", true); // Can craft at max rank
member1.addCraftableItem(engineering, 'mainHand', '4UT0-41M3R', true); // Cannot craft at max rank

// Check if the member can craft specific items
console.log(member1.canCraft(tailoring, 'shoulders', "Pioneer's Perfected Mantle")); // true
console.log(member1.canCraftAtMaxRank(tailoring, 'shoulders', "Pioneer's Perfected Mantle")); // true
console.log(member1.canCraftAtMaxRank(engineering, 'mainHand', '4UT0-41M3R')); // false

// Output
console.log(member1);