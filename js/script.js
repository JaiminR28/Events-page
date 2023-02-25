"use strict";
const imgCardEl = document.querySelectorAll(".img-card");
const gallaryBtnEl = document.querySelectorAll(".gallary--btn");
const eventsEl = document.querySelector(".Events");
const cardsEl = document.querySelector(".card");
const EventsCardSectionEl = document.getElementById("Cards");

const dance = {
	main: "dance",
	events: [
		[
			"Images/EventImg/Footloose.jpg",
			"Footloose",
			`From Hip-Hop to Contemporary, Salsa to Breakdance, get ready to feel the contagious energy at Synapse '23`,
			`https://drive.google.com/file/d/16yvteN4Ki61OimgfPnKR8PeGt-pf8llu/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSefpnT0HJTmUR4Xh-Xabakqep38ZiWN5mQjdcWy-lWTMnkhYA/viewform`,
		],
		[
			"Images/EventImg/Naach.jpg",
			"Naach",
			`Step into the vibrant world of Indian dance, where every move is a celebration of culture and tradition. Garba, Bhangra,Bharatnatyam, Kathak - it's all here at Naach`,
			`https://docs.google.com/document/d/17OA9xa6-dtHxAT5O6UFzSZYVbcmcVdzx/edit?usp=sharing&ouid=113889786064413533201&rtpof=true&sd=true`,
			`https://docs.google.com/forms/d/e/1FAIpQLScujA6nmSWxLDEw3bJbWCVlEM-MssmAAE1oSVkn1QXrsW7Fvw/viewform?usp=send_form`,
		],
		[
			"Images/EventImg/ShowDown_1.jpg",
			"Showdown",
			`Get ready for some fiercely energetic dance face-offs !! Strike a pose and show the world you’ve got what it takes !!`,
			`https://drive.google.com/file/d/1XpRFX3PCafrGzsf-htH1LJ8vLIebkmRk/view?usp=sharing`,
			`https://forms.gle/4mtfhUiNjpEvaUyp7`,
		],
	],
};
const music = {
	main: "music",
	events: [
		[
			"Images/EventImg/raagaRhapsody.png",
			"Raga Rhapsody",
			"Get into the symphonic ride of traditional, western and bollywood music and instruments. South your soul with various raagas and surs",
			`https://docs.google.com/document/d/1WyFuySAceo8YsAhwfCnI_vrxVV4QdO8q/edit?usp=sharing&ouid=113889786064413533201&rtpof=true&sd=true`,
			`https://docs.google.com/forms/d/e/1FAIpQLSc_iiaabLsQ1VJ3vjA5TXbUsDHfzR2RQZ1dUXkPtehNSnwOjw/formrestricted`,
		],
		[
			"Images/EventImg/Battleofbands.jpg",
			"Battle of Bands",
			`Experience the Thrill of the Battle where Bands Compete for Glory. Who Will be Crowned the Best Band? Find Out at the ultimate "Battle of the Bands!"`,
			`https://drive.google.com/file/d/1dXYsf2gjnGNnZ9D8J8hASZBcRppjW7X6/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSf0IpfkwehvVv8JdDl8mMES7Fc2_IvdjKE9Uny0mjp3R0ZdZw/viewform`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Rap Battle",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1RHv1g5xvM4rJa71f0cdFP3c49DOw281K/view?usp=sharing`,
			`https://forms.gle/fRF5szmqg9LMPPpj7`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Dj Wars",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1Lka2ZjyKAoc_VppwZdy6vdmlzchLRpy_/view?usp=share_link`,
			`https://forms.gle/Mi7x6YLqZi5yCo7i8`,
		],
	],
};

//
const Theatre = {
	main: "theater",
	events: [
		[
			"Images/EventImg/Mime.jpg",
			"Mime",
			`"Let actions speak louder than words" !! MIME OUT LOUD ~ Get ready to see the best art of mime at Synapse '23`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Nukkad Natak",
			"you can access the rule book and register by following the link provided below.",
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Stage Play",
			"you can access the rule book and register by following the link provided below.",
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Monoact",
			"you can access the rule book and register by following the link provided below.",
		],
	],
};
const LifeStyle = {
	main: "lifestyle",
	events: [
		[
			"Images/EventImg/Rampage.jpg",
			"Rampage",
			"Unleashing the Fashionista Within ~ Experience the pinnacle of fashion and creativity at Rampage, the most awaited rampwalk of Synapse '23",
			`https://docs.google.com/document/d/12C98EIs137ALuSZbPZ7iOykDPp2lYgUL/edit?usp=sharing&ouid=113889786064413533201&rtpof=true&sd=true`,
			`https://forms.gle/piMPvowNHXs5cj46A`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Prom Night",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1pGNglMiOgMi49I6VzwWCyNaqq4D47s7L/view?usp=sharing`,
			`#`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Open Mic",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/15WZ-aeSBXFbIOGWFzUXpJCnn-qpDmCby/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSdlZFYtgSOJlVx878g6B-zG1Ba7fVLNkWl1yWLOBGFCVsKNmQ/viewform`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Forage",
			"you can access the rule book and register by following the link provided below.",
		],
	],
};
const PhotoAndArt = {
	main: "PhotoAndArt",
	events: [
		[
			"Images/EventImg/CommingSoon.png",
			"Shailee",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/drive/u/3/folders/16duPLRvVDkMk5iSvIwvfl1D0IFjGqNUe`,
			`https://forms.gle/ESvduqDGohbdkH1h6`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Conceive",
			"you can access the rule book and register by following the link provided below.",
			`https://docs.google.com/forms/d/e/1FAIpQLSfwHwM3uAqvNQEd8D6A1MBwZXf1EZYq-9hTehOa1Of9e3cxhQ/viewform`,
			`https://docs.google.com/forms/d/e/1FAIpQLSfwHwM3uAqvNQEd8D6A1MBwZXf1EZYq-9hTehOa1Of9e3cxhQ/viewform`,
		],
	],
};
const Online = {
	main: "Online",
	events: [
		[
			"Images/EventImg/CommingSoon.png",
			"Googlock Holmes",
			"you can access the rule book and register by following the link provided below.",
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Memenation",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1eg3Fh6esGZff7SHE1itTCTLoeoJkQF4D/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSeCMH31U2mJWkQmrnLOblRVzdQXkvZ85NtNzentXcBMZjCZTA/viewform`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"crazy Math",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1N_lwn36HebbsqVaFN34YfYo8KZ7LkDR-/view?usp=share_link`,
			`https://docs.google.com/forms/d/e/1FAIpQLScF60hOhk1xUP0abRArx5WG3AhJ29LRf9aKU9nZdzlWFCEvKA/viewform?usp=sf_link`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Team Twister",
			"you can access the rule book and register by following the link provided below.",
			`#`,
			`#`,
		],
	],
};
const CepEvent = {
	main: "Cep",
	events: [
		[
			"Images/EventImg/CommingSoon.png",
			"Spelling Bee",
			"you can access the rule book and register by following the link provided below.",
		],
		[
			"Images/EventImg/CommingSoon.png",
			"samvaad",
			"you can access the rule book and register by following the link provided below.",
			`https://docs.google.com/document/d/1-gIhczhougr5zDw-LhrKCOYzN8kXxHuNcxDISVvqhZE/edit?usp=sharing`,
			`https://docs.google.com/spreadsheets/d/1UVoODrIzLlBo2irYiIjv0Ft3Tai-wO1xHXKtImrjCe4/edit?usp=sharing`,
		],
		[
			"Images/EventImg/Synocubix.png",
			"synocubix",
			`Come show off your cubing skills when time is your worst enemy !! ⏱️ Solve one of the toughest puzzles of the Rubik's Cube known to man! 🧩`,
			`https://www.worldcubeassociation.org/regulations/`,
			`https://www.worldcubeassociation.org/competitions/Synocubix2023`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Headrush",
			"you can access the rule book and register by following the link provided below.",
			`#`,
			`#`,
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Research Paper",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/drive/u/3/folders/16duPLRvVDkMk5iSvIwvfl1D0IFjGqNUe`,
			`https://docs.google.com/forms/d/e/1FAIpQLSfp7WXMuTbSRFcJIuN31mU2n9tpSWXsz-hZipRRxjPeO86f8Q/viewform`,
		],
	],
};
const FunEvent = {
	main: "Fun",
	events: [
		[
			"Images/EventImg/CommingSoon.png",
			"DA - rush",
			"you can access the rule book and register by following the link provided below.",
		],
		[
			"Images/EventImg/HungerHikes.png",
			"Hunger Hikes",
			`"Come, eat, conquer!:trophy::hamburger::fries:
Show them when the hunger hikes to what extent you will go to find food and with whom they are messing with :smirk::hamburger::hotdog: " `,
			`https://drive.google.com/file/d/1k9DdQLqyrOMr7GKsHVwh3rRClmSeQiZx/view?usp=share_link`,
			`https://forms.gle/4as3Zpui3RXByvm66`,
		],
	],
};
const Technical = {
	main: "Technical",
	events: [
		[
			"Images/EventImg/CommingSoon.png",
			"Code mutant",
			"you can access the rule book and register by following the link provided below.",
		],
		[
			"Images/EventImg/CommingSoon.png",
			"Battledrome",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1lPdSrtF1BLwy5VldWXAmU_uUMLn9vu7x/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSerQblqUQXxNwl7aqynj7aYEVYUxi2Mgecw_Mh9r-nlWH2Agg/viewform?usp=send_form`,
		],
	],
};

const Events = [
	dance,
	music,
	Theatre,
	LifeStyle,
	PhotoAndArt,
	Online,
	CepEvent,
	FunEvent,
	Technical,
];

imgCardEl.forEach((Element) => {
	Element.addEventListener("mouseover", function (e) {
		e.preventDefault();
		e.stopPropagation();
		// Remove active class
		imgCardEl.forEach((el) => {
			el.classList.remove("active");
			el.classList.add("img-gradient");
		});
		Element.classList.add("active");
		Element.classList.remove("img-gradient");
	});
});

function removeCards() {
	console.log(eventsEl.children);
	console.log(eventsEl.children.length);
	if (eventsEl.children.length > 0) {
		while (eventsEl.hasChildNodes()) {
			eventsEl.removeChild(eventsEl.firstChild);
		}
	}
}

gallaryBtnEl.forEach((btnId) => {
	btnId.addEventListener("click", function (el) {
		el.preventDefault();
		el.stopPropagation();
		removeCards();
		Events.forEach((Event) => {
			if (Event.main === btnId.id) {
				console.log(EventsCardSectionEl.classList.remove("hidden"));
				DisplayCards(Event);
			}
		});
	});
});

function DisplayCards(EventObj) {
	const EventsArr = EventObj.events;
	EventsArr.forEach((el) => {
		// EventEl.children[0].src = el[0];
		// EventEl.children[1].children[0].innerHTML = el[1];
		// EventEl.children[1].children[1].innerHTML = el[2];

		const html = `<article class="card">
  <img
    class="card__background"
    src= ${el[0]}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">${el[1]}</h2>
      <p class="card__description">
        ${el[2]}
      </p>
    </div>
    <div class="cardBtn--flex">
    <a href="${el[3]}" target="_blank">
        <button class="card__button margin--right--1rem">Rule book</button>
    </a>
    <a href="${el[4]}" target="_blank">
     <button class="card__button register--btn" >Register</button>
    </a>
    </div>
  </div>
</article>`;

		eventsEl.innerHTML += html;
		eventsEl.scrollIntoView();
	});
}

// EventEl.addEventListener("click", function () {
// 	console.log(EventEl.children[1].children[1].innerHTML);
// 	EventEl.children[0].src = "Images/img3-min.jpg";
// });
