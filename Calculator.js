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

function changeToDarkMode()
{
	var cssLink = document.getElementsByTagName("link").item(0)
	cssLink.setAttribute("href","Calculator.css")
	document.getElementsByTagName("head").item(0).replaceChild(cssLink)
}

function changeToLightMode()
{
	var cssLink = document.getElementsByTagName("link").item(0)
	cssLink.setAttribute("href","CalculatorLight.css")
	document.getElementsByTagName("head").item(0).replaceChild(cssLink)
}