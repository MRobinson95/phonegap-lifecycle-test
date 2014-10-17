    function storage() {
        storeData("Pen", "Red")
		storeData("Book", "Boring")
		storeData("Food", "Haribo")
		storeData("Drink", "Gone")
		storeData("Pen1", "Blue")
		updateDisplay();
    }
	
	function updateDisplay() {
		$("#value").text("Value is: " + window.localStorage.getItem("Pen"));
		$("#value1").text("Value is: " + window.localStorage.getItem("Book"));
		$("#value2").text("Value is: " + window.localStorage.getItem("Food"));
		$("#value3").text("Value is: " + window.localStorage.getItem("Drink"));
		$("#value4").text("Value is: " + window.localStorage.getItem("Pen1"));
	}


    function storeData(storageKey, storageValue) {
		window.localStorage.setItem(storageKey, storageValue);
    }
