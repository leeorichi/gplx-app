var html = "";
var initCurrQS = 1;

$(document).ready(function () {

	$("#view-rs").on("click", function () {
		console.log("các", initCurrQS);
		$(`#tip-${initCurrQS}`).toggleClass('hide')
		// console.log($(`#tip-${initCurrQS}`).parent().find('.right').toggleClass('prs'));
	});

	$("#next-qs").on("click", function () {
		if (initCurrQS <= 600) {
			initCurrQS++;
			resetLoad();
			// console.log(initCurrQS)
		}
	});

	$("#pre-qs").on("click", function () {
		if (initCurrQS > 1) {
			initCurrQS--;
			resetLoad();
			// console.log(initCurrQS)
		}
	});


	$("form").on("submit", function (e) {
		e.preventDefault();

		if (initCurrQS > 0 && initCurrQS < 601 ) {
			initCurrQS = $("input[name=question").val();
			resetLoad();
			// console.log(initCurrQS)
		}
	});


	$.each(originalQuestions, function (key, qs) {
		html += `
		<div class="item hide" id="${++key}">
			<h3 class="question" id="ques-${key}">Câu ${key} : ${qs.text}</h3>
			<span id="tip-${key}" class="hide">${getTipHtml(qs.tip)}</span>
			<p id="img-${key}">${getImgHtml(qs.image)}</p>

			<div class="answer">
				${getAnsHtml(qs.answers)}
			</div>
		</div>
		`;
	});
	$("#content").html(html);
	resetLoad()
});


function getAnsHtml(ans) {
	let anws = ""
	$.each(ans, function (k, a) {
		if (a.correct) {
			anws += `<p class="right prs">${++k}. ${a.text}</p>`;
		} else {
			anws += `<p class="wrong">${++k}. ${a.text}</p>`;
		}
	});
	return anws;
}

function getTipHtml(tip) {
	if (tip != "") {
		return `<span class="tip">*( ${tip})</span>`
	}
	return ""
}

function getImgHtml(img) {
	let url = '//gplx.app/images/questions';
	if (img != "") {
		return `<img class="img" src="${url}/${img}" />`
	}
	return ""
}


function resetLoad() {
	$(".item").addClass('hide');
	$(`#${initCurrQS}`).toggleClass('hide');
	$("input[name=question").attr('value', initCurrQS);
}