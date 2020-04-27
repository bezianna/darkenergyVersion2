<template>
    <div>
      <div class="white-content">
            <div class="content center-text border-bottom" id="home">
                <h1>Latest Music</h1>
                <div class="light-grey" style="text-align:left;">
                    Audio previews from the selected works. 
                </div>

                <hr class="h1_hr">
                <div class="clearfix"></div>
                        
                <iframe width="80%" height="450" scrolling="no" frameborder="no" allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/139558202&color=%232ee4cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </div>

                <div class="content" id="aboutMe">
                            
                <div class="left-text light-grey"> 
                    <div class="clearfix"></div>   
                    <h1>INTRO</h1>
                    <hr class="h1_hr">
                    <div class="clearfix"></div>

                    <div class="fifty-percent-grid transition" ref="downContent">
                        <div class="left-50-percent">
                            <h2>Professional career</h2>
                            <p>An independent, Budapest based composer, entrepreneur, specialized in soundtrack, game 
                            music and sound logo. My niche is the epic hybrid orchestral genre, but I have experience with 
                            composing electronic and symphonic music as well for a wide variety of productions.</p>
                            <p>In my creative activity, uniqueness and smart composition are important to me. Since I 
                            don’t like too schematic, too simple music material, I strive to provide something different
                            compared to the other composers on the market or the template tunes on the music sale sites.
                            For me, composing is not an artisan work, but a real art and this is the reason I am trying
                            to approach it from a creative work perspective.</p>
                            
                        </div>
                        
                        <div class="me-photo">
                            <img src="src/assets/images/composer.jpg">     
                        </div>
                    </div>

                      

                    <!--<div style="width:50%">
                        <button v-on:click="toggleContent" class="read-more" id="read-more">
                            read more <i class="fas fa-chevron-down down-arrow" ref="downArrow"></i>
                        </button>
                    </div>-->

                    <div class="clearfix"></div> 
                    <div class="clearfix"></div>                   

                    <div class="fifty-percent-grid transition" ref="downContent">
        
                        <div class="left-video">
                            <iframe width="480" height="270" src="https://www.youtube.com/embed/7fjvzgB9Mjo" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </div>

                        <div class="right-50-percent">
                            <h2>Professional activity</h2>
                             <p>My previous works include several bigger and smaller budget productions, mobile and video game compositions.</p>
                             In my free time, I work on personal projects and I recompose 
                             music for old movies. You can see my reference 
                            work below. If you like my work, don't hesitate to contact me.       
                            <a class="read-more" href="https://www.imdb.com/name/nm2401302/?ref_=nv_sr_1?ref_=nv_sr_1" target="_blank">
                                Go to IMDb
                                </a>
                        </div>
                        
                    </div>

                <div class="clearfix"></div>  
                </div>

            <div class="clearfix"></div>
            </div>
        </div>
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
    toggleContent: function() {
        if(!this.$refs["downContent"].classList.contains("down")) {
            this.$refs["downContent"].classList.add("down");
        } else {
            this.$refs["downContent"].classList.remove("down");
        }
        this.toggleArrow();
    },
    toggleArrow: function() {
        if(!this.$refs["downArrow"].classList.contains("arrow-flip")) {
            this.$refs["downArrow"].classList.add("arrow-flip");
        } else {
            this.$refs["downArrow"].classList.remove("arrow-flip");
        }
    },
  }
}
</script>