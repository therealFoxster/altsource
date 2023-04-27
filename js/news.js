addNavigationBar("All News");

function main(json) {
	document.title = `News - ${json.name}`;

	json.news.sort((a, b) => (new Date(b.date)).valueOf() - (new Date(a.date)).valueOf());
	json.news.forEach(news =>
		document.getElementById("news").insertAdjacentHTML("beforeend", newsItemHTML(news, json.apps))
	);
}