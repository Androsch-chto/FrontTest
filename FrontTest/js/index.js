$(function () {
	$("form").submit(function (e) {
		var $form = $(this);
		$.ajax({
			type: 'POST',
			url: 'https://60376bfd5435040017722533.mockapi.io/form',
			dataType: "html",
			data: $form.serialize(),
		})
			.done(function () {
				$($form).find(".form-inputs").val("");
				console.log("Succ");
				alert("Данные отправлен.");
			})
			.fail(function () {
				console.log("Err");
				alert("Сервер не отвечает.");
			});
		e.preventDefault();
	});
});
$(document).ready(function () {
	$("#phoneInput").mask("+7 (999)-99-99-999");
});
