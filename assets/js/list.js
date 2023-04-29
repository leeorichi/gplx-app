$(document).ready(function () {
    let listQsWrong = $.cookie('listQsWrong');
    let arrFromCookie = listQsWrong ? JSON.parse(listQsWrong) : [];
    console.log(arrFromCookie);
    let html = '';
    arrFromCookie.forEach(qsn => {
        qs = originalQuestions[qsn]
        key = qsn;
        html += `
		<div class="item">
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
});


function getAnsHtml(ans) {
    let anws = ""
    $.each(ans, function (k, a) {
        idx = ++k;
        if (a.correct) {
            anws += `<p class="ans-radio right">⭕️ ${idx}. ${a.text}</p>`;
        } else {
            anws += `<p class="ans-radio wrong">⭕️ ${idx}. ${a.text}</p>`;
        }
        anws += "<hr>";
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




