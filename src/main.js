import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);

let vue = new Vue({
  el: '#app',
  render: h => h(App),
methods: {
    scrollTop: function(el) {
        var rect = el.getBoundingClientRect();
        var docEl = document.documentElement;
        return rect.top + (window.pageYOffset || docEl.scrollTop || 0);
    },
    addNavigationClass: function(top, elementTop, elements, index) {
        if(top >= elementTop) {
            for(let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("selected");
            }
            elements[index].classList.add("selected");
        } else {
            elements[index].classList.remove("selected");
        }
    },
    scrollDown: function() {
        let element = document.getElementsByTagName("nav")[0];
        let homeTop = this.scrollTop(document.getElementById("home"));
        let aboutMeTop = this.scrollTop(document.getElementById("aboutMe"));
        let youtubeVideosTop = this.scrollTop(document.getElementById("youtubeVideos"));
        let whyWorkWithMeTop = this.scrollTop(document.getElementById("whyWorkWithMe"));
        let contactTop = this.scrollTop(document.getElementById("contact"));
        let menuLis = document.getElementsByClassName("menu-li");

        window.addEventListener("scroll", function() {
            let top = document.documentElement.scrollTop;

            if(top > 0)
                element.classList.add("transparent-black");
            else 
                element.classList.remove("transparent-black");
            
            vue.addNavigationClass(top, homeTop, menuLis, 0);
            vue.addNavigationClass(top, aboutMeTop, menuLis, 1);
            vue.addNavigationClass(top, youtubeVideosTop, menuLis, 2);
            vue.addNavigationClass(top, whyWorkWithMeTop, menuLis, 3);
            vue.addNavigationClass(top, contactTop, menuLis, 4);
        });
    },
    keyPusher: function(key) {
        if(key.classList.contains("white-note")) {
            key.classList.add("white-pushed");
            setTimeout(function() {
                key.classList.remove("white-pushed");
            }, 300);
        } else {
            key.classList.add("black-pushed");
            setTimeout(function() {
                key.classList.remove("black-pushed");
            }, 300);
        }
    },
    playAudio: function(key) {
        let file = key.getAttribute("note");
        var audio = new Audio('src/assets/synth_sounds/' + file);
        audio.play();
        vue.keyPusher(key);
    },
    loadButtons: function() {
        let keys = document.getElementsByClassName("key");

        for(let i = 0; i < keys.length; i++) {
            let noteIndex = i + 1;
            keys[i].setAttribute("note", noteIndex + "_.mp3");
            keys[i].addEventListener("mousedown", function(e) {
                let key = keys[i];
                vue.playAudio(key);
            });
        }
    },
    keyboardToSynth: function() {
        let keys = document.getElementsByClassName("key");
        
        document.addEventListener("keydown", function(e) {
            var audio = new Audio();
            
            switch(e.which) {
                case 226:
                    audio.src = "src/assets/synth_sounds/1_.mp3";
                    audio.play();
                    vue.keyPusher(keys[0]);
                    break;
                case 65:
                    audio.src = "src/assets/synth_sounds/2_.mp3";
                    audio.play();
                    vue.keyPusher(keys[1]);
                    break;
                case 89:
                    audio.src = "src/assets/synth_sounds/3_.mp3";
                    audio.play();
                    vue.keyPusher(keys[2]);
                    break;
                case 83:
                    audio.src = "src/assets/synth_sounds/4_.mp3";
                    audio.play();
                    vue.keyPusher(keys[3]);
                    break;
                case 88:
                    audio.src = "src/assets/synth_sounds/5_.mp3";
                    audio.play();
                    vue.keyPusher(keys[4]);
                    break;
                case 67:
                    audio.src = "src/assets/synth_sounds/6_.mp3";
                    audio.play();
                    vue.keyPusher(keys[5]);
                    break;
                case 70:
                    audio.src = "src/assets/synth_sounds/7_.mp3";
                    audio.play();
                    vue.keyPusher(keys[6]);
                    break;
                case 86:
                    audio.src = "src/assets/synth_sounds/8_.mp3";
                    audio.play();
                    vue.keyPusher(keys[7]);
                    break;
                case 71:
                    audio.src = "src/assets/synth_sounds/9_.mp3";
                    audio.play();
                    vue.keyPusher(keys[8]);
                    break;
                case 66:
                    audio.src = "src/assets/synth_sounds/10_.mp3";
                    audio.play();
                    vue.keyPusher(keys[9]);
                    break; 
                case 72:
                    audio.src = "src/assets/synth_sounds/11_.mp3";
                    audio.play();
                    vue.keyPusher(keys[10]);
                    break;
                case 78:
                    audio.src = "src/assets/synth_sounds/12_.mp3";
                    audio.play();
                    vue.keyPusher(keys[11]);
                    break;
                case 77:
                    audio.src = "src/assets/synth_sounds/13_.mp3";
                    audio.play();
                    vue.keyPusher(keys[12]);
                    break;
                case 75:
                    audio.src = "src/assets/synth_sounds/14_.mp3";
                    audio.play();
                    vue.keyPusher(keys[13]);
                    break;
                case 188:
                    audio.src = "src/assets/synth_sounds/15_.mp3";
                    audio.play();
                    vue.keyPusher(keys[14]);
                    break;
                case 81:
                    audio.src = "src/assets/synth_sounds/13_.mp3";
                    audio.play();
                    vue.keyPusher(keys[12]);
                    break;
                case 50:
                    audio.src = "src/assets/synth_sounds/14_.mp3";
                    audio.play();
                    vue.keyPusher(keys[13]);
                    break;
                case 87:
                    audio.src = "src/assets/synth_sounds/15_.mp3";
                    audio.play();
                    vue.keyPusher(keys[14]);
                    break;
                case 51:
                    audio.src = "src/assets/synth_sounds/16_.mp3";
                    audio.play();
                    vue.keyPusher(keys[15]);
                    break;
                case 69:
                    audio.src = "src/assets/synth_sounds/17_.mp3";
                    audio.play();
                    vue.keyPusher(keys[16]);
                    break;
                case 82:
                    audio.src = "src/assets/synth_sounds/18_.mp3";
                    audio.play();
                    vue.keyPusher(keys[17]);
                    break;
                case 53:
                    audio.src = "src/assets/synth_sounds/19_.mp3";
                    audio.play();
                    vue.keyPusher(keys[18]);
                    break;
                case 84:
                    audio.src = "src/assets/synth_sounds/20_.mp3";
                    audio.play();
                    vue.keyPusher(keys[19]);
                    break;
                case 54:
                    audio.src = "src/assets/synth_sounds/21_.mp3";
                    audio.play();
                    vue.keyPusher(keys[20]);
                    break;
                case 90:
                    audio.src = "src/assets/synth_sounds/22_.mp3";
                    audio.play();
                    vue.keyPusher(keys[21]);
                    break;
                case 55:
                    audio.src = "src/assets/synth_sounds/23_.mp3";
                    audio.play();
                    vue.keyPusher(keys[22]);
                    break;
                case 85:
                    audio.src = "src/assets/synth_sounds/24_.mp3";
                    audio.play();
                    vue.keyPusher(keys[23]);
                    break;
                case 73:
                    audio.src = "src/assets/synth_sounds/25_.mp3";
                    audio.play();
                    vue.keyPusher(keys[24]);
                    break;
            }
        });
    }
},
mounted() {
    this.scrollDown();
    this.loadButtons();
    this.keyboardToSynth();
    let inputs = document.getElementsByClassName("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function(e) {
            e.stopPropagation();
        });
    }
}
})
