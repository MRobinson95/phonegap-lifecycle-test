    function storage() {
        storeData("Pen", "Red")
		storeData("Book", "Boring")
		storeData("Food", "Haribo")
		storeData("Drink", "Gone")
		storeData("Pen1", "Blue")
		updateDisplay();
    }
	
	function updateDisplay() {
		$("#value").text("Value is: " + window.localStorage.getItem("Book"));
		
	}


    function storeData(storageKey, storageValue) {
		window.localStorage.setItem(storageKey, storageValue);
    }
