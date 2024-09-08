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
let member1 = new GuildMember('Huntste', DEFAULTREALM, 'Hunter', leatherworking, alchemy);
let member2 = new GuildMember('Curris', DEFAULTREALM, 'Evoker', leatherworking, enchanting);
let member2_1 = new GuildMember('Currism', DEFAULTREALM, 'Mage', inscription, null)
let member3 = new GuildMember('Azogal', DEFAULTREALM, 'Warrior', blacksmithing, null);
let member4 = new GuildMember('Zckr', DEFAULTREALM, 'Rogue', leatherworking, null);
let member5 = new GuildMember('Namirin', DEFAULTREALM, 'Rogue', leatherworking, null);
let member6 = new GuildMember('Faovoker', DEFAULTREALM, 'Evoker', jewelcrafting, null);
let member7 = new GuildMember('Cheekyvaffel', DEFAULTREALM, 'Priest', jewelcrafting, null);
let member8 = new GuildMember('Dieza', 'Draenor', 'Warlock', tailoring, null);
let member8_1 = new GuildMember('Lildieza', DEFAULTREALM, 'Priest', enchanting, null);
let member9 = new GuildMember('Kvitdrage', DEFAULTREALM, 'Evoker', enchanting, null);
let member10 = new GuildMember('Hinabel', DEFAULTREALM, 'Monk', enchanting, null);

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

member0.addCraftableItem(engineering, 'mainHand', "4UT0-41M3R", true);
member0.addCraftableItem(engineering, 'mainHand', "P.O.W. x2", true);


//Huntste
member1.addCraftableItem(leatherworking, 'feet', "Glyph-Etched Stompers", true);
member1.addCraftableItem(leatherworking, 'feet', "Tracker's Chitin Galoshes", true);
member1.addCraftableItem(leatherworking, 'hands', "Glyph-Etched Gauntlets", true);
member1.addCraftableItem(leatherworking, 'hands', "Tracker's Toughened Handguards", true);

//Curris
member2.addCraftableItem(leatherworking, 'wrists', "Glyph-Etched Vambraces", true);
member2.addCraftableItem(leatherworking, 'wrists', "Tracker's Chitin Cuffs", true);
member2.addCraftableItem(leatherworking, 'belt', "Glyph-Etched Binding", true);
member2.addCraftableItem(leatherworking, 'belt', "Tracker's Toughened Girdle", true);
member2.addCraftableItem(leatherworking, 'legs', "Glyph-Etched Cuisses", true);
member2.addCraftableItem(leatherworking, 'legs', "Tracker's Toughened Links", true);
member2.addCraftableItem(enchanting, 'crests', "Enchanted Weathered Harbinger Crest", true);
member2.addCraftableItem(enchanting, 'crests', "Enchanted Runed Harbinger Crest", true);
member2.addCraftableItem(enchanting, 'crests', "Enchanted Gilded Harbinger Crest", true);
//Currism
member2_1.addCraftableItem(inscription, 'mainHand', "Vagabond's Careful Crutch", true);
member2_1.addCraftableItem(inscription, 'mainHand', "Vagabond's Bounding Baton", true);
member2_1.addCraftableItem(inscription, 'mainHand', "Inquisitor's Crutch", true);   
member2_1.addCraftableItem(inscription, 'mainHand', "Inquisitor's Baton", true);
member2_1.addCraftableItem(inscription, 'offHand', "Vagabond's Torch", true);
member2_1.addCraftableItem(inscription, 'offHand', "Inquisitor's Torch", true);

//Azogal
member3.addCraftableItem(blacksmithing, 'mainHand', "Charged Slicer", true);
member3.addCraftableItem(blacksmithing, 'mainHand', "Charged Runeaxe", true);
member3.addCraftableItem(blacksmithing, 'mainHand', "Ironclaw Axe", true);

//Zckr
member4.addCraftableItem(leatherworking, 'belt', "Rune-Branded Waistband", true);
member4.addCraftableItem(leatherworking, 'belt', "Spelunker's Practiced Sash", true);
member4.addCraftableItem(leatherworking, 'hands', "Rune-Branded Grasps", true);
member4.addCraftableItem(leatherworking, 'hands', "Spelunker's Practiced Mitts", true);
member4.addCraftableItem(leatherworking, 'legs', "Rune-Branded Legwraps", true);
member4.addCraftableItem(leatherworking, 'legs', "Spelunker's Practiced Britches", true);

//Namirin
member5.addCraftableItem(leatherworking, 'wrists', "Rune-Branded Armbands", true);
member5.addCraftableItem(leatherworking, 'wrists', "Spelunker's Leather Bands", true);
member5.addCraftableItem(leatherworking, 'feet', "Rune-Branded Kickers", true);
member5.addCraftableItem(leatherworking, 'feet', "Spelunker's Leather Footpads", true);

//Faovoker
member6.addCraftableItem(jewelcrafting, 'necks', "Amulet of Earthen Craftsmanship", true);
member6.addCraftableItem(jewelcrafting, 'necks', "Malleable Pendant", true);
member6.addCraftableItem(jewelcrafting, 'rings', "Ring of Earthen Craftsmanship", true);
member6.addCraftableItem(jewelcrafting, 'rings', "Malleable Band", true);

//Cheekyvaffel
member7.addCraftableItem(jewelcrafting, 'necks', "Amulet of Earthen Craftsmanship", true);
member7.addCraftableItem(jewelcrafting, 'necks', "Malleable Pendant", true);
member7.addCraftableItem(jewelcrafting, 'rings', "Ring of Earthen Craftsmanship", true);
member7.addCraftableItem(jewelcrafting, 'rings', "Malleable Band", true);

//Dieza
member8.addCraftableItem(tailoring, 'wrists', "Consecrated Cuffs", true);
member8.addCraftableItem(tailoring, 'wrists', "Pioneer's Cloth Cuffs", true);
member8.addCraftableItem(tailoring, 'belt', "Consecrated Cord", true);
member8.addCraftableItem(tailoring, 'belt', "Pioneer's Perfected Cord", true);
//Lildieza
member8_1.addCraftableItem(enchanting, 'crests', "Enchanted Weathered Harbinger Crest", true);
member8_1.addCraftableItem(enchanting, 'crests', "Enchanted Runed Harbinger Crest", true);
member8_1.addCraftableItem(enchanting, 'crests', "Enchanted Gilded Harbinger Crest", true);

//Kvitdrage
member9.addCraftableItem(enchanting, 'crests', "Enchanted Weathered Harbinger Crest", true);
member9.addCraftableItem(enchanting, 'crests', "Enchanted Runed Harbinger Crest", true);
member9.addCraftableItem(enchanting, 'crests', "Enchanted Gilded Harbinger Crest", true);

//Hinabel
member10.addCraftableItem(enchanting, 'crests', "Enchanted Weathered Harbinger Crest", true);
member10.addCraftableItem(enchanting, 'crests', "Enchanted Runed Harbinger Crest", true);
member10.addCraftableItem(enchanting, 'crests', "Enchanted Gilded Harbinger Crest", true);

const Guild = [member0, member1, member2, member2_1, member3, member4, member5, member6, member7, member8, member8_1, member9, member10];
console.log(Guild);