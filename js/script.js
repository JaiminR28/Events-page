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
			"./Images/EventImg/Footloose.jpg",
			"Footloose",
			`From Hip-Hop to Contemporary, Salsa to Breakdance, get ready to feel the contagious energy at Synapse '23`,
			`https://drive.google.com/file/d/16yvteN4Ki61OimgfPnKR8PeGt-pf8llu/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSefpnT0HJTmUR4Xh-Xabakqep38ZiWN5mQjdcWy-lWTMnkhYA/viewform`,
		],
		[
			"./Images/EventImg/Naach.jpg",
			"Naach",
			`Step into the vibrant world of Indian dance, where every move is a celebration of culture and tradition. Garba, Bhangra,Bharatnatyam, Kathak - it's all here at Naach`,
			`https://docs.google.com/document/d/17OA9xa6-dtHxAT5O6UFzSZYVbcmcVdzx/edit?usp=sharing&ouid=113889786064413533201&rtpof=true&sd=true`,
			`https://docs.google.com/forms/d/e/1FAIpQLScujA6nmSWxLDEw3bJbWCVlEM-MssmAAE1oSVkn1QXrsW7Fvw/viewform?usp=send_form`,
		],
		[
			"./Images/EventImg/ShowDown_1.jpg",
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
			"./Images/EventImg/raagaRhapsody.png",
			"Raaga & Rhapsody",
			"Get into the symphonic ride of traditional, western and bollywood music and instruments. South your soul with various raagas and surs",
			`https://docs.google.com/document/d/1WyFuySAceo8YsAhwfCnI_vrxVV4QdO8q/edit?usp=sharing&ouid=113889786064413533201&rtpof=true&sd=true`,
			`https://docs.google.com/forms/d/e/1FAIpQLSc_iiaabLsQ1VJ3vjA5TXbUsDHfzR2RQZ1dUXkPtehNSnwOjw/formrestricted`,
		],
		[
			"./Images/EventImg/Battleofbands.jpg",
			"Battle of Bands",
			`Experience the Thrill of the Battle where Bands Compete for Glory. Who Will be Crowned the Best Band? Find Out at the ultimate "Battle of the Bands!"`,
			`https://drive.google.com/file/d/1dXYsf2gjnGNnZ9D8J8hASZBcRppjW7X6/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSf0IpfkwehvVv8JdDl8mMES7Fc2_IvdjKE9Uny0mjp3R0ZdZw/viewform`,
		],
		[
			"./Images/EventImg/RapBattle.jpg",
			"Rap Battle",
			"Use your frustration, thoughts, and feelings as a weapon and lay it out through an open rap battle challenge, for the first time in DAIICT.",
			`https://drive.google.com/file/d/1RHv1g5xvM4rJa71f0cdFP3c49DOw281K/view?usp=sharing`,
			`https://forms.gle/fRF5szmqg9LMPPpj7`,
		],
		[
			"./Images/EventImg/DJWars.png",
			"DJ Wars",
			"Mix the music, and make the world dance to your beats.",
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
			"./Images/EventImg/Mime.jpg",
			"Mime-out-loud",
			`"Let actions speak louder than words" !! MIME OUT LOUD ~ Get ready to see the best art of mime at Synapse '23`,
			`https://drive.google.com/file/d/1oWBum6QWPnMnQ4oH2XlX7rwCuATFcz9J/view?usp=sharing`,
			`https://forms.gle/W5wUKiEFBcocqQsv5`,
		],
		[
			"./Images/EventImg/nukkadNaatak.png",
			"Nukkad Natak",
			"Witness the conventional street play, a bold portrayal of the stigmas of society. Add fire to your nerve and put up a stand with courage and fervor.",
			`https://drive.google.com/file/d/1oWBum6QWPnMnQ4oH2XlX7rwCuATFcz9J/view?usp=sharing`,
			`https://forms.gle/kdv39Tdf2Y2xbuEu9`,
		],
		[
			"./Images/EventImg/StagePlay.jpg",
			"Stage Play",
			"Set the stage alive at the stage play event",
			`https://drive.google.com/file/d/1oWBum6QWPnMnQ4oH2XlX7rwCuATFcz9J/view?usp=sharing`,
			`https://forms.gle/PnoQVsmq467fpmeL7`,
		],
		[
			"./Images/EventImg/MonoActe.jpg",
			"MonoActe",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1oWBum6QWPnMnQ4oH2XlX7rwCuATFcz9J/view?usp=sharing`,
			`https://forms.gle/gvvnjjFDyggfUxjCA`,
		],
	],
};
const LifeStyle = {
	main: "lifestyle",
	events: [
		[
			"./Images/EventImg/Rampage.jpg",
			"Rampage",
			"Unleashing the Fashionista Within ~ Experience the pinnacle of fashion and creativity at Rampage, the most awaited rampwalk of Synapse '23",
			`https://docs.google.com/document/d/12C98EIs137ALuSZbPZ7iOykDPp2lYgUL/edit?usp=sharing&ouid=113889786064413533201&rtpof=true&sd=true`,
			`https://forms.gle/piMPvowNHXs5cj46A`,
		],
		[
			"./Images/EventImg/CommingSoon.png",
			"Prom Night",
			"Get those dashing shirts and elegant dresses out and grove to your favorite romances with your partners. This is one of those quintessentially iconic events you have to experience at least once.",
			`https://drive.google.com/file/d/1pGNglMiOgMi49I6VzwWCyNaqq4D47s7L/view?usp=sharing`,
			``,
		],
		[
			"./Images/EventImg/OpenMic.jpg",
			"Open Mic",
			"Tired of daily doses of classes? The Beacon Night brings you some sizzling trivia and open mic opportunities in this sizzling weather of cold. It can be a poem recital, song play , story recital or stand-up any talent you want to showcase.",
			`https://drive.google.com/file/d/15WZ-aeSBXFbIOGWFzUXpJCnn-qpDmCby/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSdlZFYtgSOJlVx878g6B-zG1Ba7fVLNkWl1yWLOBGFCVsKNmQ/viewform`,
		],
	],
};
const PhotoAndArt = {
	main: "PhotoAndArt",
	events: [
		[
			"./Images/EventImg/conceive.png",
			"Conceive",
			"Bring out your creative flair, put those editing tools to use, and showcase your photography, short films, and posters making skills.",
			`https://docs.google.com/forms/d/e/1FAIpQLSfwHwM3uAqvNQEd8D6A1MBwZXf1EZYq-9hTehOa1Of9e3cxhQ/viewform`,
			`https://docs.google.com/forms/d/e/1FAIpQLSfwHwM3uAqvNQEd8D6A1MBwZXf1EZYq-9hTehOa1Of9e3cxhQ/viewform`,
		],
		[
			"./Images/EventImg/StrokeOfGenius.jpg",
			"Stroke of Genius",
			"Grab your brushes and paint down your thoughts and imaginations on some piece of merchs",
			`https://drive.google.com/drive/u/3/folders/16duPLRvVDkMk5iSvIwvfl1D0IFjGqNUe`,
			`https://docs.google.com/forms/d/e/1FAIpQLSdIEMKzrug3OKsGdhCOW7TflZGHr-urmTYxDPqkNTKdodK2gQ/viewform`,
		],
		[
			"./Images/EventImg/Grafittie.jpg",
			"Graffiti",
			"Let's make the drab walls of the campus a little more dynamic and artistic in nature through abstract artwork based on some theme",
			`https://drive.google.com/drive/u/3/folders/16duPLRvVDkMk5iSvIwvfl1D0IFjGqNUe`,
			`https://docs.google.com/forms/d/e/1FAIpQLScjcTCroJ3wLuGT-JOcItQmXZLZCPTD87U6ItsFaT9m1g43kw/formrestricted`,
		],
	],
};
const InformalEvents = {
	main: "InformalEvents",
	events: [
		[
			"./Images/EventImg/Synocubix.png",
			"Synocubix",
			`Come show off your cubing skills when time is your worst enemy !! ⏱️ Solve one of the toughest puzzles of the Rubik's Cube known to man! 🧩`,
			`https://www.worldcubeassociation.org/regulations/`,
			`https://www.worldcubeassociation.org/competitions/Synocubix2023`,
		],
		[
			"./Images/EventImg/Shailee.png",
			"Shailee",
			"Prove that the pen is mightier than the sword and joins this literary feast. Get a chance to meet authors and participate in spelling bees and captivating workshops.",
			`https://drive.google.com/drive/u/3/folders/16duPLRvVDkMk5iSvIwvfl1D0IFjGqNUe`,
			`https://forms.gle/ESvduqDGohbdkH1h6`,
		],
		[
			"./Images/EventImg/Samwaad.png",
			"Samwaad",
			"A great platform for the debaters with varied political preferences, perspectives, and personalities out there to display.",
			`https://docs.google.com/document/d/1-gIhczhougr5zDw-LhrKCOYzN8kXxHuNcxDISVvqhZE/edit?usp=sharing`,
			`https://docs.google.com/spreadsheets/d/1UVoODrIzLlBo2irYiIjv0Ft3Tai-wO1xHXKtImrjCe4/edit?usp=sharing`,
		],
		[
			"./Images/EventImg/QuizAPalloza.png",
			"Quiz-A-Palooza",
			"Boost your knowledge and logic with tailored quizzes, and meet top participants from India's best universities at Gujarat's best quizzing events!",
			`https://docs.google.com/document/d/1-oj_0s_HB5QEAJOPgewn57DuNI-ZpVIVJYV-GzAM4B4/edit?usp=sharing`,
			`https://forms.gle/rYAtQiCHMo5ZvJZt7`,
		],
	],
};
const FunEvent = {
	main: "Fun",
	events: [
		[
			"./Images/EventImg/battleDrome.png",
			"Battledrome",
			"You are never too old for video games. Bring out the controllers, keep your thumbs rested, and join the showdown for ultimate glory....",
			`https://drive.google.com/file/d/1lPdSrtF1BLwy5VldWXAmU_uUMLn9vu7x/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSerQblqUQXxNwl7aqynj7aYEVYUxi2Mgecw_Mh9r-nlWH2Agg/viewform?usp=send_form`,
		],
		[
			"./Images/EventImg/HungerHikes.png",
			"Hunger Hikes",
			`"Come,eat,conquer!:trophy::hamburger::fries: Show them when the hunger hikes to what extent you will go to find food and with whom they are messing with:smirk:: hamburger::hotdog" `,
			`https://drive.google.com/file/d/1k9DdQLqyrOMr7GKsHVwh3rRClmSeQiZx/view?usp=share_link`,
			`https://forms.gle/4as3Zpui3RXByvm66`,
		],
		[
			"./Images/EventImg/CrimeAndClue.png",
			"Crimes & Clues",
			`Borrow Sherlock Holmes’ hat and solve some of the trickiest riddles with Google by your side. `,
			`https://drive.google.com/file/d/1oscZQ4zWBipC0qNjQKF5FXy9C45-mPld/view?usp=sharing`,
			`https://forms.gle/75yV2amKx2yRZdwW6`,
		],
		[
			"./Images/EventImg/Memenation.png",
			"Memenation",
			"The current online generation is all about being updated and the one with the best sense of humor will be the King of MemeNation.",
			`https://drive.google.com/file/d/	1eg3Fh6esGZff7SHE1itTCTLoeoJkQF4D/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSeCMH31U2mJWkQmrnLOblRVzdQXkvZ85NtNzentXcBMZjCZTA/viewform`,
		],
		[
			"./Images/EventImg/reelMainFeel.png",
			"Reel-mein-feel",
			"Capture the best moments of Synapse’23 on your phone and showcase your talented and creative minds to make a reel out of it.",
			`https://drive.google.com/file/d/1FIfzUSjiN6325g0EVIzeAN2lCNUbeeLY/view?usp=sharing`,
			`https://docs.google.com/forms/d/e/1FAIpQLSeCMH31U2mJWkQmrnLOblRVzdQXkvZ85NtNzentXcBMZjCZTA/viewform`,
		],
	],
};
const Technical = {
	main: "Technical",
	events: [
		[
			"./Images/EventImg/codeMutant.png",
			"Code Mutants",
			"Show off your programming skills, work as quickly as you can beat the dock, and solve as many problems as you can. This competitive coding contest will challenge your speed and accuracy",
		],
		[
			"./Images/EventImg/techHunt.png",
			"Tech Hunt",
			"you can access the rule book and register by following the link provided below.",
			`https://drive.google.com/file/d/1e2WU1bPy4hWo3akTfQ_wueBdE2IBTHle/view?usp=share_link`,
			`https://docs.google.com/forms/d/e/1FAIpQLScpGlXAauAPBCVxBBZk2XII7C54JZ55b0Bn_mmxf52KQftvHw/viewform`,
		],
		[
			"./Images/EventImg/CommingSoon.png",
			"DA TANK",
			"With an imagination that goes far beyond convention, a dream bigger than just money-build the next financial empire. If you think you are the next Steve Jobs or Bill Gates, this is the place to be. Dazzle the panel with your business skills and planning to pave the road to the next big startup.",
			`https://drive.google.com/file/d/1PxN5rpcSw_BunusQXcDcXH5YAwlViUaW/view`,
			`https://forms.gle/2iXkZ24mxK2Fz4mi7`,
		],
		[
			"./Images/EventImg/Anweshan.png",
			"Anweshan",
			"Leverage the latest technology to tackle societal challenges and impress fellow researchers with your innovative findings!",
			`https://drive.google.com/file/d/1OLnQFIkyzrQQF3T2JYGxX0eHsZZK2Jzv/view`,
			`https://docs.google.com/forms/d/e/1FAIpQLSfp7WXMuTbSRFcJIuN31mU2n9tpSWXsz-hZipRRxjPeO86f8Q/viewform`,
		],
		[
			"./Images/EventImg/CrazyMath.png",
			"Crazy Math",
			"Solve the nuttiest of problems math has to offer and bring out the geek in you.",
			`https://drive.google.com/file/d/1N_lwn36HebbsqVaFN34YfYo8KZ7LkDR-/view?usp=share_link`,
			`https://docs.google.com/forms/d/e/1FAIpQLScF60hOhk1xUP0abRArx5WG3AhJ29LRf9aKU9nZdzlWFCEvKA/viewform?usp=sf_link`,
		],
	],
};

const Events = [
	dance,
	music,
	Theatre,
	LifeStyle,
	PhotoAndArt,
	InformalEvents,
	FunEvent,
	Technical,
];

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
// 	EventEl.children[0].src = "./Images/img3-min.jpg";
// });

// TEST MEDIA QUERIES

function myFunction(x) {
	if (x.matches) {
		// If media query matches
		imgCardEl.forEach((el) => {
			el.classList.add("active");
			el.classList.remove("img-gradient");
		});
	} else {
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
	}
}

const x = window.matchMedia("(max-width: 1215px)");
myFunction(x); // Call listener function at run time
x.addEventListener(myFunction); // Attach listener function on state changes
