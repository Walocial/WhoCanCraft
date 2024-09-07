// Event listener for all dropdowns
$('.equipmentSlot').each(function() {
    if ($(this).find('option').length > 0) {
        $(this).prepend('<option value="" disabled selected></option>');
    }
});

$('.equipmentSlot').change(function () {
    const selectedValue = $(this).val();
    
    if (selectedValue) {
        const [armorType, slot] = selectedValue.split('_');

        const filteredItems = filterItemsBySlotAndArmor(slot, armorType);
        displayResults(filteredItems, armorType, slot);

        $(this).val('');
    }
});

function filterItemsBySlotAndArmor(slot, armorType) {
    return allCraftableItems
        .filter(item => 
            item.slot.toLowerCase() === slot.toLowerCase() && item.armortype.toLowerCase() === armorType.toLowerCase()
        )
        .map(item => ({
            name: item.name,
            quality: item.quality
        }));
}

function displayResults(items, armorType, slot) {
    const resultsContainer = $('#results');
    resultsContainer.empty();
    
    function heading() {
        switch(armorType) {
            case 'misc':
                armorType = '';
            break;
            case '1haxe':
                return armorType = '1-handed axes';
            case '1hsword':
                return armorType = '1-handed swords';
            case '1hmace':
                return armorType = '1-handed maces';
            case '1hwarglaive':
                return armorType = 'warglaives';
            case '1hdagger':
                return armorType = 'daggers';
            case '1hwand':
                return armorType = 'wands';
            case '1hfistweap':
                return armorType = 'fist weapons';
            case '1hbow':
                return armorType = 'bows';
            case '1hgun':
                return armorType = 'guns';
            case '2haxe':
                return armorType = '2-handed axes';
            case '2hsword':
                return armorType = '2-handed swords';
            case '2hmace':
                return armorType = '2-handed maces';
            case '2hpolearm':
                return armorType = 'polearms';
            case '2hstaff':
                return armorType = 'staves';
            case 'heldinoffh':
                return armorType = 'held in off-hands';
            case 'shield':
                return armorType = 'shields';
        }
        switch (slot) {
            case 'head':
                slot = 'helmets';
                break;
            case 'feet':
                slot = 'boots';
                break;
            case 'chest':
                slot = 'chests';
                break;
            case 'belt':
                slot = 'belts';
                break;
            case 'hands':
                slot = 'gloves';
                break;
            case 'cloak':
                return 'cloaks';
            case 'trinkets':
                return 'trinkets';
            case 'necks':
                return 'necks';
            case 'rings':
                return 'rings';
        }
        return `${armorType} ${slot}`;
    }

    if (items.length === 0) {
        resultsContainer.append(`<h2>No items found for ${armorType} ${slot}</h2>`);
    } else {
        resultsContainer.append(`<h2>All ${heading()}</h2>`);
        items.forEach(item => {

            const qualityClass = `item ${item.quality.toLowerCase()}`;
            resultsContainer.append(`<li><span class="${qualityClass}">[${item.name}]</span></li>`);
        });
    }
}
