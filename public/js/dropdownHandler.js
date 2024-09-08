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
        switch (armorType) {
            case 'misc':
                armorType = '';
                break;
            case '1haxe':
                return '1-handed axes';
            case '1hsword':
                return '1-handed swords';
            case '1hmace':
                return '1-handed maces';
            case '1hwarglaive':
                return 'warglaives';
            case '1hdagger':
                return 'daggers';
            case '1hwand':
                return 'wands';
            case '1hfistweap':
                return 'fist weapons';
            case '1hbow':
                return 'bows';
            case '1hgun':
                return 'guns';
            case '2haxe':
                return '2-handed axes';
            case '2hsword':
                return '2-handed swords';
            case '2hmace':
                return '2-handed maces';
            case '2hpolearm':
                return 'polearms';
            case '2hstaff':
                return 'staves';
            case 'heldinoffh':
                return 'held in off-hands';
            case 'shield':
                return 'shields';
        }

        switch (slot) {
            case 'head':
                return 'helmets';
            case 'feet':
                return 'boots';
            case 'chest':
                return 'chests';
            case 'belt':
                return 'belts';
            case 'hands':
                return 'gloves';
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
        resultsContainer.append(`<h2 id="ulHeading">All ${heading()}</h2>`);
        items.forEach(item => {
            const qualityClass = `item ${item.quality.toLowerCase()}`;
            resultsContainer.append(`<li><span class="${qualityClass}" data-item-name="${item.name}">[${item.name}]</span></li>`);
        });
    }
}


$('#results').on('click', '.item', function (event) {
    const clickedItemName = $(this).data('item-name');
    showItemOverlay(clickedItemName, Guild);
});
