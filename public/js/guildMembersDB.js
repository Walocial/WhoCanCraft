class GuildMember {
    constructor(name, realm, playerClass, profession1, profession2) {
        this.name = name;
        this.realm = realm;
        this.playerClass = playerClass;
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

const DEFAULTREALM = 'Silvermoon';

// Create a guild member
let member0 = new GuildMember('Walocial', DEFAULTREALM, 'Warlock', tailoring, engineering);
let member1 = new GuildMember('Huntste', DEFAULTREALM, 'Warlock', alchemy, leatherworking);
let member2 = new GuildMember('Curris', DEFAULTREALM, 'Warlock', alchemy, leatherworking);
let member3 = new GuildMember('Azogal', DEFAULTREALM, 'Warlock', alchemy, leatherworking);
let member4 = new GuildMember('Zckr', DEFAULTREALM, 'Warlock', alchemy, leatherworking);
let member5 = new GuildMember('Namirin', DEFAULTREALM, 'Warlock', alchemy, leatherworking);
let member6 = new GuildMember('Faovoker', DEFAULTREALM, 'Warlock', alchemy, leatherworking);
let member7 = new GuildMember('Cheekyvaffel', DEFAULTREALM, 'Warlock', alchemy, leatherworking);
let member8 = new GuildMember('Dieza', 'Draenor', 'Warlock', tailoring, null);

//Walocial
member0.addCraftableItem(tailoring, 'head', "Consecrated Hood", true);
member0.addCraftableItem(tailoring, 'head', "Pioneer's Perfected Hood", true);
member0.addCraftableItem(tailoring, 'hands', "Consecrated Gloves", true);
member0.addCraftableItem(tailoring, 'hands', "Pioneer's Perfected Gloves", true);
member0.addCraftableItem(tailoring, 'feet', "Consecrated Slippers", true);
member0.addCraftableItem(tailoring, 'feet', "Pioneer's Cloth Slippers", true);
member0.addCraftableItem(tailoring, 'cloak', "Consecrated Cloak", true);
member0.addCraftableItem(tailoring, 'cloak', "Pioneer's Perfected Cloak", true);
member0.addCraftableItem(tailoring, 'bags', "Prodigy's Toolbox", true);
member0.addCraftableItem(tailoring, 'bags', "Jeweler's Purse", true);
member0.addCraftableItem(tailoring, 'bags', "Ignition Satchel", true);
member0.addCraftableItem(tailoring, 'bags', "Hideshaper's Tote", true);

member0.addCraftableItem(engineering, 'mainHand', '4UT0-41M3R', true);

// Check if the member can craft specific items
console.log(member0.name, member0.canCraftAtMaxRank(tailoring, 'head', "Consecrated Hood"));
console.log(member0.name, member0.canCraftAtMaxRank(engineering, 'mainHand', '4UT0-41M3R'));

const Guild = [member0, member1, member2, member3, member4, member5, member6, member7, member8];
console.log(Guild);