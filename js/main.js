$(document).keyup(function(event)
{
	if(event.keyCode == 13)
	document.getElementById("okButton").click();
});
$(document).ready(function()
{ 
	$(".removeAllButton").hide();
});
function addtask()
{
	var inputText = document.getElementById("input").value;
	if(inputText === "")
	{
		alert("Bitte keine leere Eingabe!");
		return false;
	}
	var table = document.getElementById("mainTable");
	var currentRow = document.getElementById("mainTable").rows.length;
	var row = table.insertRow(currentRow);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "&rArr; " + inputText;
	var button = document.createElement('BUTTON');
	button.className = "removeButton";
	button.id = currentRow;
	button.innerHTML = "X";
	cell2.appendChild(button);
	var parentRow = button.parentNode.parentNode;
	$(button).click(function()
	{
		$(parentRow).animate( {opacity: '0.0'} , 1000 , function(){ $(parentRow).remove(); } );
	});
	document.getElementById("input").value = "";
	$(row).css("font-size" , "0.1em");
	$(row).animate({fontSize:'1em'}, "3000");
	$(".removeAllButton").show();
}
function nixDa()
{
	$(".removeButton").click();
}
