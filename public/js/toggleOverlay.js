function showItemOverlay(itemName, guild) {
    const overlay = $('#itemOverlay');
    const itemNameElement = $('#item_Name');
    const itemDetailsElement = $('#item_Details');
    const crafterListElement = $('#crafter_List');

    const item = allCraftableItems.find(i => i.name === itemName);
    
    // Set the item name and apply the quality class
    itemNameElement.text(`[${itemName}]`);
    const qualityClass = `${item.quality.toLowerCase()}`;
    itemNameElement.attr('class', qualityClass);

    // Use the heading function to get formatted armor type and slot
    const armorType = item.armortype.toLowerCase();
    const slot = item.slot.toLowerCase();

    function heading() {
        switch (armorType) {
            case 'misc': return '';
            case '1haxe': return '1-handed axe';
            case '1hsword': return '1-handed sword';
            case '1hmace': return '1-handed mace';
            case '1hwarglaive': return 'Warglaive';
            case '1hdagger': return 'Dagger';
            case '1hwand': return 'Wand';
            case '1hfistweap': return 'Fist weapon';
            case '1hbow': return 'Bow';
            case '1hgun': return 'Gun';
            case '2haxe': return '2-handed axe';
            case '2hsword': return '2-handed sword';
            case '2hmace': return '2-handed mace';
            case '2hpolearm': return 'Polearm';
            case '2hstaff': return 'Staff';
            case 'heldinoffh': return 'Held in off-hand';
            case 'shield': return 'Shield';
        }

        switch (slot) {
            case 'head': return `${capitalizeFirstLetter(armorType)} helm`;
            case 'feet': return `${capitalizeFirstLetter(armorType)} boots`;
            case 'chest': return `${capitalizeFirstLetter(armorType)} chest`;
            case 'belt': return `${capitalizeFirstLetter(armorType)} belt`;
            case 'hands': return `${capitalizeFirstLetter(armorType)} gloves`;
            case 'cloak': return 'Cloak';
            case 'trinkets': return 'Trinket';
            case 'necks': return 'Nekc';
            case 'rings': return 'Ring';
            default: return `${armorType} ${slot}`;
        }
    }

    // Set the formatted armor type and slot
    itemDetailsElement.text(heading());

    // Clear previous crafter list
    crafterListElement.empty();

    // Find crafters who can craft the item
    const crafters = guild.filter(member =>
        member.canCraftAtMaxRank(member.profession1, item.slot, itemName) ||
        (member.profession2 && member.canCraftAtMaxRank(member.profession2, item.slot, itemName))
    );



    // Populate crafter list
    if (crafters.length > 0) {
        crafters.forEach(member => {
            function showRealmIfNotDefault() {
                if(member.realm != DEFAULTREALM){
                    return member.realm;
                }
                return '';
            }
            crafterListElement.append(`<li><span class="playerClass ${member.playerClass}">${member.name}</span> ${showRealmIfNotDefault()}</li>`);
        });
    } else {
        crafterListElement.append('<li>No guild members can craft this item yet</li>');
    }

    // Color the outline based on item quality
    overlay.css('outline-color', `var(--${qualityClass}-color)`);
    overlay.removeClass('hidden');
}

function hideItemOverlay() {
    $('#itemOverlay').addClass('hidden');
}

$('#closeOverlay').on('click', hideItemOverlay);

$('.equipmentSlot').on('click', function () {
    hideItemOverlay();
});
