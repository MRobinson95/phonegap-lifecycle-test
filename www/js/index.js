    function storage() {
        storeData("Pen", "Red")
		updateDisplay();
    }
	
	function updateDisplay() {
		$("#value").text("Value is: " + window.localStorage.getItem("Pen"));
		
	}


    function storeData(storageKey, storageValue) {
		window.localStorage.setItem(storageKey, storageValue);
    }
