import "./Competence_education_page.html"
import "./Competence_education_page.css"

import "/imports/ui/components/competence-block/Competence_block.js"


const competenceData = [{
        title: "LANGUAGES",
        list_items: ["JavaScript", "HTML", "CSS", "Python", "C++"],
        icons: ["fab fa-js-square", "fab fa-html5", "fab fa-css3-alt", "fab fa-python"],
        color: "purple"
    },
    {
        title: "FRAMEWORKS",
        list_items: ["React.js", "Meteor.js", "Node.js", "MongoDB", "D3.js", "Bootstrap", "Materialize"],
        icons: ["fab fa-react", "fas fa-meteor", "fab fa-node", "fab fa-bootstrap"],
        color: "red"
    },
    {
        title: "TECHNIQUES",
        list_items: ["Firebase", "Github", "NPM", "CSS Grid", "Adobe XD"],
        icons: ["fab fa-github", "fab fa-npm"],
        color: "green"
    }
]

Template.Competence_education_page.helpers({
    competenceData: () => competenceData

})