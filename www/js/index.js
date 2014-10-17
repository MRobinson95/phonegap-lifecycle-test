    var chocoInfo = {"Name": "", "Energy": "", "Carbs": "", "Fat": ""};
	var chocoString = "";
	var getChoco = "";
	var chocoJSON;
	
	function storage() 
	{
        storeData("Pen", "Red")
		storeData("Book", "Boring")
		storeData("Food", "Haribo")
		storeData("Drink", "Gone")
		storeData("Pen1", "Blue")
		chocolate("Mars", "1888", "68.9", "17.1");
		getChoco = window.localStorage.getItem("info");
		chocoJSON = JSON.parse(getChoco);
		updateDisplay();
		
    }
	//DISPLAY
	function updateDisplay() 
	{
		$("#value").text("Name is: " + chocoJSON.Name);
		$("#value1").text("Energy is: " + chocoJSON.Energy);	
		$("#value2").text("Carbs are: " + chocoJSON.Carbs);	
		$("#value3").text("Fat is: " + chocoJSON.Fat);	
	}

	//SIMPLE DATA STORAGE
    function storeData(storageKey, storageValue) 
	{
		window.localStorage.setItem(storageKey, storageValue);
    }
	
	//JSON DATA STORAGE
	function chocolate(Name, Energy, Carbs, Fat)
	{
		chocoInfo.Name = Name;
		chocoInfo.Energy = Energy;
		chocoInfo.Carbs = Carbs;
		chocoInfo.Fat = Fat;
		chocoString = JSON.stringify(chocoInfo);
		window.localStorage.setItem("info", chocoString);
	}
