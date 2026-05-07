var lootBox = document.getElementById("lootbox");
var rollButton = document.getElementById("roll");

function rollLootBox() {
    number = Math.floor(Math.random() * 100);
    if (number < 50) {
        lootBox.innerHTML = "COMMON";
        lootBox.style.backgroundColor = "white";
        
    }
    else if (number < 75) {
        lootBox.innerHTML = "UNCOMMON";
        lootBox.style.backgroundColor = "blue";
    }
    else if (number < 90) {
        lootBox.innerHTML = "RARE";
        lootBox.style.backgroundColor = "GOLD";
    }

    else if (number < 99) {
        lootBox.innerHTML = "LEGENDARY";
        lootBox.style.backgroundColor = "ORANGE";
    }

    else {
        lootBox.innerHTML = "MYTHIC";
        lootBox.style.backgroundColor = "pink";
    }
}

rollButton.addEventListener("click", rollLootBox);