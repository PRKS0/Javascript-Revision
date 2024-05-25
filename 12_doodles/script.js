
// script start here


// timelineBox.appendChild(yearBox)
const timelineYears = [1998, 2000, 2000, 2000, 2005, 2010, 2011, 2012, 2018, 2019, 2021]

const cardData = [
    {
        header: "The first Doodle",
        footer: "The very first Doodle was published in 1998 as a quick way for Google founders Larry Page and Sergey Brin to let people know they would be out of office for Burning Man.",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/75/21/0f8b171c4f9f81869c48f9938cfb/1.jpeg"],
            date: ["August 30th, 1998"],
            eventName: ["Burning Man Festival"]
        }
    },
    {
        header: "The first Doodle series",
        footer: "The first Doodle series told a story of aliens encountering the Google logo and hauling it off to Mars.",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/28/5b/1610e5b948b598eb6f2736c58da6/2.gif", "https://www.gstatic.com/marketing-cms/77/30/b411060342e9982db6e619d9ad3b/3.gif", "https://www.gstatic.com/marketing-cms/73/57/654adddd4548986c95144b4c6724/4.gif", "https://www.gstatic.com/marketing-cms/d9/16/a208534c42c9a717b511baa6001d/5.jpeg", "https://www.gstatic.com/marketing-cms/be/a2/be207cdd4ad8a3765438cddf1df4/6.jpeg"],
            date: ['May 01, 2000', 'May 02, 2000', 'May 03, 2000', 'May 04, 2000', 'May 05, 2000'],
            eventName: ['google Aliens 2000 - 1', 'Google Aliens 2000 - 2', 'Google Aliens 2000 - 3', 'Google Aliens 2000 - 4', 'Google Aliens 2000 - 5']

        },
    },
    {
        header: "Doodles go global",
        footer: "In 2000, Google launched the first international Doodle to celebrate Bastille Day in France. Today, there can be many different Doodles live around the world at one time, reflecting local culture, events and histories.",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/be/a2/be207cdd4ad8a3765438cddf1df4/6.jpeg"],
            date: ['Jul 14, 2000'],
            eventName: ['Bastille Day 2000']

        },
    },
    {
        header: "Let's get moving",
        footer: "The Halloween Doodle in 2000 featured a special new element - animation! The O’s disguised as Jack-o-lanterns featured some haunting flashing lights as well as an 8-legged friend. From this moment on, animation would become a key element of Doodle storytelling!",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/e0/3a/e3cf1cda49069699caede8f8427d/halloween-loop.gif"],
            date: ['October 31, 2000'],
            eventName: ['Halloween 2000']

        },
    },
    {
        header: "Doodle for Google is born",
        footer: "The Doodle for Google contest invites K-12 students to try their hand at drawing a Doodle—and compete to see it live on the Google homepage. Now the longest running Google contest, Doodle for Google celebrates young artists and the power of creativity.",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/97/f2/452090124ac4a45e7c2927d19c60/2.jpeg"],
            date: ['Nov 17, 2005'],
            eventName: ['Doodle 4 Google 2005 - UK by Lisa Wainaina']
        },
    },
    {
        header: "The first interactive game Doodle",
        footer: "A celebration of the beloved game Pac-Man and the first interactive Doodle game experience! Play to see if you can get a high score—no quarters needed!",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/bb/ba/e3ca925c4e9b95a2ee59923e807a/3.png"],
            date: ['May 21, 2010'],
            eventName: ['30th Anniversary of PAC-MAN']

        },
    },
    {
        header: "Lights, camera....Doodle!",
        footer: "In 2011, Doodles evolved to full videos telling in depth stories about their subjects. Our first-ever live-action Doodle celebrated Charlie Chaplin's 122nd birthday and featured appearances from the entire Doodle team at the time.",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/40/02/654510714127b2285730420eab62/1.jpeg", "https://www.gstatic.com/marketing-cms/34/93/cb3194c340e08ec76fefa70fc26e/2.jpeg", "https://www.gstatic.com/marketing-cms/34/93/cb3194c340e08ec76fefa70fc26e/2.jpeg"],
            date: ['Sep 05, 2011', 'Apr 16, 2011', 'Aug 06, 2011'],
            eventName: ["Freddie Mercury's 65th Birthday", '122nd Birthday of Charlie Chaplin', "Lucille Ball's 100th Birthday"]
        },
    },
    {
        header: "Making Doodles multimedia",
        footer: "Life’s a garden and so are Doodles (we dig both). To celebrate Earth Day 2012, a handful of dedicated Doodlers rigged a camera to the roof of the building to grow one of our first-ever multimedia (and organic) Doodles.",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/34/93/cb3194c340e08ec76fefa70fc26e/2.jpeg"],
            date: ['Apr 22, 2012'],
            eventName: ['Earth Day 2012']

        },
    },
    {
        header: "The first VR/360 Doodle",
        footer: "In 2018, Doodles jumped off the screen with the first VR enabled/360 video Doodle. This Emmy-nominated Doodle celebrated the pioneering French illusionist and film director Georges Méliès!",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/cc/58/37beda8c411eb2db008769e10354/2.gif"],
            date: ['May 03, 2018'],
            eventName: ['Celebrating Georges Melies']

        },
    },
    {
        header: "The first AI-powered Doodle",
        footer: "The Doodle team partnered with the Google Magenta and Google PAIR teams to create the first AI-powered Doodle celebrating Johann Sebastian Bach. Players are first prompted to compose a two measure melody of their choice. With the press of a button, the Doodle then uses machine learning to harmonize their custom melody into Bach’s signature music style.",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/26/80/e01a695949da8e5b5f9f41872532/3.gif"],
            date: ['Mar 21, 2019'],
            eventName: ['Celebrating Johann Sebastian Bach']

        },
    },
    {
        header: "The largest multiplayer Doodle ever",
        footer: "Doodles Champion Island brought people across the globe together to explore a world filled with sport mini-games, legendary opponents, dozens of daring side quests and more!",
        card: {
            img: ["https://www.gstatic.com/marketing-cms/c2/de/b1ea4f8d4314be89cbd66a6c94d7/4.gif"],
            date: ['Jul 23, 2021'],
            eventName: ['Doodle Champion Island Games Begin!']
        },
    }
]

let i = 0;
for (const data of cardData ){

    let timeline = document.querySelector(".timeline")

    let timelineBox = document.createElement("div")
    timelineBox.className = ("timeline-box")

    let yearBox = document.createElement("div")
    yearBox.className = ("year-box")
    yearBox.textContent = timelineYears[i]
    yearBox.id = `year-box-${i+1}`

    let miniTimelineBox = document.createElement("div")
    miniTimelineBox.className = "mini-timeline-box"

    // adding header 
    let title = document.createElement('header')
    title.textContent = data.header
    miniTimelineBox.appendChild(title)

    // adding card
    let cardArea = document.createElement('div')
    cardArea.className = "card-area"
    let card;
    let j = 0;
    for (const img_url of data.card.img) {
        card = document.createElement("div")
        card.className = "card"

        let box1 = document.createElement("div")
        box1.className = "box1"
        box1.innerHTML = `<img src=${img_url} alt="">`
        card.appendChild(box1)

        let box2 = document.createElement("div")
        box2.className = "box2"
        box2.innerHTML = `<div class="date">${data.card.date[j]}</div>
        <div class="event">${data.card.eventName[j]}</div>`
        card.appendChild(box2)

        cardArea.appendChild(card)
    }

    miniTimelineBox.appendChild(cardArea)

    // adding footer
    let footer = document.createElement('footer')
    footer.innerText = data.footer
    
    miniTimelineBox.appendChild(footer)
    
    let timelineHeading = document.createElement('h3')
    miniTimelineBox.appendChild(timelineHeading)
    
    timelineBox.appendChild(yearBox)
    timelineBox.appendChild(miniTimelineBox)
    timeline.appendChild(timelineBox)
    
    
    i++
}


const yearBoxList = (document.querySelectorAll(".year-box"));
for (const box of yearBoxList) {
    let yearBoxClicked = false;
    box.addEventListener("click", function (event) {
        let miniTimelineBox = event.target.nextElementSibling;
        yearBoxClicked = !yearBoxClicked;
        if (yearBoxClicked) {
            miniTimelineBox.setAttribute("data-original-content", miniTimelineBox.innerHTML);
            miniTimelineBox.innerHTML = "expand to see details";
        } else {
            miniTimelineBox.innerHTML = miniTimelineBox.getAttribute("data-original-content");
        }
    });
}



