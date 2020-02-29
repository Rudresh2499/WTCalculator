function inputFieldDisplay(num1)
{
	document.getElementById('inputField').value=document.getElementById('inputField').value+num1
}

function clr()
{
	document.getElementById('inputField').value=""
}

function getInputField()
{
	var x = document.getElementById('inputField').value
	return(x)
}

function solution()
{
	let y = getInputField()
	let sol = eval(y)
	clr()
	document.getElementById('inputField').value = document.getElementById('inputField').value+sol
}
