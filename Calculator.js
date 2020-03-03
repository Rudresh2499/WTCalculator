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
	let expression = getInputField()
	var sol
	try
	{
		sol = eval(expression)
	}
	catch(error)
	{
		switch(error.name)
		{
			case 'SyntaxError': while(expression.charAt(expression.length-1)==='+'||expression.charAt(expression.length-1)==='-'||expression.charAt(expression.length-1)==='*'||expression.charAt(expression.length-1)==='/')
								{
									let newExpression=expression.substring(0,expression.length-1)
									expression = newExpression
								}
								sol=eval(expression)
								break;
			
			case 'ReferenceError': 	sol='Invalid Reference used'
									break;

			case 'RangeError': 	sol='Solution out of range'
								break;

			case 'EvalError': 	sol='Internal Error'
								break;

			default : 	sol='Some Error Occured'
						break;
		}
	}
	clr()
	document.getElementById('inputField').value=document.getElementById('inputField').value+sol
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