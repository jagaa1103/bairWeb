import{Component} from 'angular2/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './app/navBar/navBar.html'
})

export class NavBar{
    constructor(){
        console.log("NavBar Component is running");
    }
}
