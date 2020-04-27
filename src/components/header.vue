<template>
    <div>
      <div class="mobile-menu" v-on:click="hamburgerMenu"></div>
            <nav class="transition">
                <div class="ul-holder">
                    <div class="logo">Olivér Kovács 
                        <span style="color:#2EE4CC;">composer</span>
                    </div>

                    <ul>
                        <li v-on:click="hamburgerMenu" class="menu-li"><a href="#home" class="transition">Home</a></li>
                        <li v-on:click="hamburgerMenu" class="menu-li"><a href="#aboutMe" class="transition">Intro</a></li>
                        <li v-on:click="hamburgerMenu" class="menu-li"><a href="#youtubeVideos" class="transition">Videos</a></li>
                        <li v-on:click="hamburgerMenu" class="menu-li"><a href="#whyWorkWithMe" class="transition">Services</a></li>
                        <li v-on:click="hamburgerMenu" class="menu-li"><a href="#contact" class="transition">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <header>
                <div class="veil">
                    <!--<video id="video1" width="420" autoplay>
                        <source src="../assets/images/reactive-soundwave.mp4" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>-->
                </div>

                <div class="social-media">
                    <ul>
                        <li class="transition">
                            <a href="https://www.facebook.com/darkenergy.art" target="_blank">
                                <div class="social-text">Facebook</div> 
                                <div class="social-round transition">
                                    <img src="../assets/images/facebook.png">
                                </div>
                            </a>
                        </li>
                        <li class="transition">
                            <a href="https://www.youtube.com/channel/UCRbyJVzf363KPfKPlqFcFcg"
                            target="_blank">
                                <div class="social-text">Youtube</div>
                                <div class="social-round transition">
                                    <img src="../assets/images/youtube.png">
                                </div>
                            </a>
                        </li>
                        <li class="transition">
                            <a href="https://www.patreon.com/darkenergyart" target="_blank">
                                <div class="social-text">Patreon</div>
                                <div class="social-round transition">
                                    <img src="../assets/images/patreon.png">
                                </div>
                            </a>
                        </li>
                        <li class="transition">
                            <a href="https://soundcloud.com/mardumusix" target="_blank">
                                <div class="social-text">Soundcloud</div>
                                <div class="social-round transition">
                                    <img src="../assets/images/soundcloud.png">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="services">
                    <div class="service">Soundtrack</div>
                    <div class="service service-border">Game music</div>
                    <div class="service">Sound logo</div>
                </div>
                <div class="epic-music">
                    Epic Hybrid Orchestral Music Composer
                </div>
                <div class="keyboard">
                    <ul>
                        <!--first octave-->
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key"></li>
                        <li class="white-note key black_note_margin"></li>
                        <!--second octave-->
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key black_note_margin"></li>
                        <li class="black-note key black_note_margin"></li>
                        <li class="white-note key"></li>
                        <li class="white-note key black_note_margin"></li>
                    </ul>
                </div>
            </header>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      hamburgerMenu: function() {
        let nav = document.getElementsByTagName("nav")[0];

        if(nav.classList.contains("nav-height"))
            nav.classList.remove("nav-height");
        else 
            nav.classList.add("nav-height");
    }
  }
}
</script>