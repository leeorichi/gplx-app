var html = "";
$(document).ready(function() {
	$.each(originalQuestions, function(key, qs) {
		html += `
		<div class="item" id="${++key}">
			<h3 class="question" id="ques-${key}">Câu ${key} : ${qs.text}</h3>

			<span id="tip-${key}">			${getTipHtml(qs.tip)}			</span>
			<p id="img-${key}">			${getImgHtml(qs.image)}			</p>

			<div class="answer">
				${getAnsHtml(qs.answers)}
			</div>
		</div>
		<hr>`;
	});
	$("#content").html(html);
});


function getAnsHtml(ans) {
	let anws = ""
	$.each(ans, function(k, a) {
		if (a.correct) {
			anws +=  `<p class="right">${++k}. ${a.text}</p>`;
		}else{
			anws +=  `<p class="wrong">${++k}. ${a.text}</p>`;
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
