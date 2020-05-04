// set up all routes in the app

//layout imports
import "/imports/ui/layouts/Main_layout.js"



FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('Main_layout');
    }
});