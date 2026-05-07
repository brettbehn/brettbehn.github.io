var lootBox = document.getElementById("lootbox");
var rollButton = document.getElementById("roll");

// Counter object to track each rarity
var counts = {
    common: 0,
    uncommon: 0,
    rare: 0,
    legendary: 0,
    mythic: 0
};

// Create a counter display div
var counter = document.createElement("div");
counter.id = "counter";
document.body.appendChild(counter);

function updateCounter() {
    counter.innerHTML = `
        <p>Common: ${counts.common}</p>
        <p>Uncommon: ${counts.uncommon}</p>
        <p>Rare: ${counts.rare}</p>
        <p>Legendary: ${counts.legendary}</p>
        <p>Mythic: ${counts.mythic}</p>
    `;
}

function rollLootBox() {
    let number = Math.floor(Math.random() * 100);

    if (number < 50) {
        lootBox.innerHTML = "COMMON";
        lootBox.style.backgroundColor = "white";
        counts.common++;
    }
    else if (number < 75) {
        lootBox.innerHTML = "UNCOMMON";
        lootBox.style.backgroundColor = "blue";
        counts.uncommon++;
    }
    else if (number < 90) {
        lootBox.innerHTML = "RARE";
        lootBox.style.backgroundColor = "gold";
        counts.rare++;
    }
    else if (number < 98) {
        lootBox.innerHTML = "LEGENDARY";
        lootBox.style.backgroundColor = "orange";
        counts.legendary++;
    }
    else {
        lootBox.innerHTML = "MYTHIC";
        lootBox.style.backgroundColor = "pink";
        counts.mythic++;
    }

    updateCounter();
}

// Show zeroed-out counter on load
updateCounter();

rollButton.addEventListener("click", rollLootBox);