<template>
    <div>
        <div class="blue-content" id="youtubeVideos">
            <div class="content">
                <h1>Earlier work</h1>
                <div class="clearfix"></div>

                <div class="point-holder" ref="pointHolder">
                    <div class="video-point"></div>
                    <div class="video-point"></div>
                    <div class="video-point"></div>
                    <div class="video-point"></div>
                </div>

                 <div class="youtube-slider">
                    <div class="prev transition" v-on:click="prevVideo"></div>
                    <div class="youtube-video">
                        <iframe width="100%" height="100%" ref="videosIframe"
                        src="https://www.youtube.com/embed/-oxAsA8g-OM" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                    <div class="next transition" v-on:click="nextVideo"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        videos:[
            "-oxAsA8g-OM",
            "Z0J42HxcU_g", 
            "O5K7lE33NA0", 
            "MWJLAS2a8Uk", 
            "eIyDWEltwvE"
        ],
        videoCounter:0,
      }
  },
  methods: {
    videoPointsGenerator: function() {
        this.$refs["pointHolder"].innerHTML = "";
        let elements = '';
        for(let i = 0; i < this.videos.length; i++) {
            elements += '<div class="video-point"></div>';
        }

        this.$refs["pointHolder"].innerHTML = elements;
        this.$refs["pointHolder"].children[0].style = "background-color:white;";
    },
    videoPoints: function() {
        for(let i = 0; i < this.videos.length; i++) {
            this.$refs["pointHolder"].children[i].style = "background-color:#8b8b8b;";
        }
        this.$refs["pointHolder"].children[this.videoCounter].style = "background-color:white;";
    },
    nextVideo: function() {
        this.videoCounter++;
    
        if(this.videoCounter >= this.videos.length) {
            this.videoCounter = 0;
        }
        this.videoPoints();

        let link = "https://youtube.com/embed/" + this.videos[this.videoCounter];
        this.$refs["videosIframe"].setAttribute("src", link);
        
    },
    prevVideo: function() {
        this.videoCounter--;

        if(this.videoCounter < 0)
            this.videoCounter = this.videos.length -1;

        this.videoPoints();
        
        let link = "https://youtube.com/embed/" + this.videos[this.videoCounter];

        this.$refs["videosIframe"].setAttribute("src", link);
    },
  },
  mounted() {
      this.videoPointsGenerator();
      this.videoPoints();
  }
}
</script>