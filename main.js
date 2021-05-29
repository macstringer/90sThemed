/*
 * An example of transforming an uploaded image pixel by pixel.
 *
 * Basic implementatin of a solarization filter in which pixels are iniverted based on a given thrershold.
 * This mimics a physical phenomenon where parts of the image are wholly or partially reversed in tone based
 * on extreme overexposure or chemical exposure. 
 *
 * @author Robert C. Duvall, and Mac Stringer
 */

 Vue.component('nav-bar', {
     template: `
     <div id="myHeader"> 
        <div class="bluebar"> 
            <img id="computer" src="jean_victor_balin_icon_host.svg" height="50">
            <span class="vertCent">welcometomacspace.html</span>
        </div>
        <nav>
            <span class="navLink"><a href="./index.html">Home</a></span>
            <span class="navLink"><a href="./hobby.html">Hobby</a></span>
            <span class="navLink"><a href="./picEdit/picedit.html">Pic Editor</a></span>
            <span class="navLink"><a href="./wordGame/wordgame.html">Word Game!</a></span>
            <span class="navLink"><a href="./plotter/plotter.html">Graphics Plotter</a></span>
            <span class="navLink"><a href="./trello/trello1.html">Trello</a></span>
            <span class="navLink"><a href="./data-list/frontend/dist/index.html">Data List</a></span>
            <span class="navLink"><a href="./chess/chess_frontend/dist/index.html">Final Project</a></span>
            <span class="navLink"><a href="http://www2.cs.duke.edu/courses/compsci290/spring21/"> 290 Course Homepage</a></span>
        </nav>
    </div>
        `
 })

 new Vue({
     el: '#app',
     data:{
         title: "Hello!"
     }
 });

 app.$mount('#app');




