function obfuscatePassword() {
	var plainPassword = GetValueFromInput();
	$.ajax({
		dataType: "json",
		url: "Obfuscate",
		data: { plainPassword: plainPassword },
		success: (data) => {
			showResult(data.result);
		}
	});
}

function DeObfuscatePassword() {
	var obfuscatedPassword = GetValueFromInput();
	$.ajax({
		dataType: "json",
		url: "DeObfuscate",
		data: { obfuscatedPassword: obfuscatedPassword },
		success: (data) => {
			showResult(data.result);
		}
	});
}

function GetValueFromInput()
{
	return $("input[name='password']")[0].value;
}

function showResult(result) {
	$("p[name='result']").text(result);
}