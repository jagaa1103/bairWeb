import{Component} from 'angular2/core';
import{NavBar} from './navBar/navBar.component';

@Component({
    selector: 'my-app',
    template: '<nav-bar></nav-bar>',
    directives: [NavBar]
})

export class AppComponent{
    constructor(){
        console.log("App Component is running");
    }
}
