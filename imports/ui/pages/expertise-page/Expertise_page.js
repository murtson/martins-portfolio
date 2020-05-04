import "./Expertise_page.html"
import "./Expertise_page.css"

import "/imports/ui/components/card-expertise/Card_expertise.js"


const expertiseData = [{
        title: 'Web Development',
        text: "Fullstack Development. Front-end and Back-end, start to finish.",
        icon: "fas fa-laptop-code"
    },
    {
        title: 'App Development',
        text: "Developent of Web Based Apps. Will learn Swift in the future.",
        icon: "fab fa-app-store"
    },
    {
        title: 'UI/UX Design',
        text: "Prototyping, Landing Pages, User Flow, Animations.",
        icon: "fas fa-paint-brush"
    },
]

Template.Expertise_page.helpers({
    expertise_data: () => expertiseData
})