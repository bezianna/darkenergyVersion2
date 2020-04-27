<template>
    <div>
        <div class="clearfix"></div>
            <div class="white-content">
                <div class="content" id="whyWorkWithMe">
                    <div class="synth-background">
                        <div class="clearfix"></div>
                            
                        <h1>Services and references</h1>
                        <h4></h4>

                        <div class="synth-grid">
                            <div class="why-me-cube">
                                <h2>Soundtrack</h2>
                                <hr class="h1_hr">
                                <div class="clearfix"></div>
                                Music for movies, documentaries and advertisements...
                                <a class="read-more" href="https://www.imdb.com/name/nm2401302/?ref_=nv_sr_1?ref_=nv_sr_1" target="_blank">
                                Go to IMDb
                                </a>
                            </div>
                            <div class="why-me-cube">
                                <h2>Game music</h2>
                                <hr class="h1_hr">
                                <div class="clearfix"></div>
                                Nowadays, Pc games are often used with film dramaturgy, 
                                they are getting closer to the world of movies...
                            </div>
                            <div class="why-me-cube">
                                <h2>Sound logo</h2>
                                <hr class="h1_hr">
                                <div class="clearfix"></div>
                                A musical motif that belongs to the visual appearance of the logo and helps to form associations with the...
                            </div>
                        </div>
                    </div>
            </div>

            <div class="clearfix"></div>

            <div class="content" id="credits">
                <h1 style="text-align:center;">CREDITS AND TESTIMONIALS</h1>
                <div class="clearfix"></div>

                <div class="fifty-percent-grid transition" ref="downContent">

                    <div class="left-video">
                        <iframe width="480" height="270" src="https://www.youtube.com/embed/SYRifDDtH_w" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen></iframe>
                    </div>

                    <div class="right-50-percent">
                        <div class="quotation">
                            It was great working with Oliver. He is down to earth and committed
                            to provide a quality work. The music he created perfectly matched with the team's expectations. 
                            <h5>Jonas Kiraly</h5>
                            Ubisoft Marketing Manager
                        </div>
                    </div>
                        
                </div>
            </div>

            <div class="clearfix"></div>
            <div class="clearfix"></div>
            <div class="content" id="contact">


                <div class="fifty-percent-grid">
                    <div class="fifty-percent">
                        <h1>It's all about finding the right connection</h1>
                        <hr class="h1_hr">
                        <div class="clearfix"></div>

                        <p>If you find my portfolio interesting, and you believe that my music would suit your
                        new project, feel free to contact me and discuss about further 
                        collaboration.</p> Send me a sample of your movie or game and we can talk about the details. <p>0670 3050928</p><p>music@kovacsoliver.com</p>

                    </div>

                    <div class="fifty-percent blue-background">
                        <h3>*Name</h3>
                        <input type="text" class="input" v-model="name" placeholder="Name">

                        <h3>*Email address</h3>
                        <input type="text" class="input" v-model="email" placeholder="Email address">

                        <h3>Phone number</h3>
                        <input type="text" class="input" v-model="phoneNumber" placeholder="Phone number">

                        <h3>*Message</h3>
                        <textarea class="input message-box" v-model="message" placeholder="type your message"></textarea>

                        <button class="btn btn_hover transition" v-on:click="sendEmail">Send!</button>
                    </div>

                    <div class="clearfix" style="height:50px;"></div>
                </div>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        name:"",
        email:"",
        phoneNumber:"",
        message:""
    }
  },
  methods: {
      sendEmail: function() {
        let emailObj = {
            "email":this.email,
            "message":this.message,
            "name":this.name,
            "phoneNumber":this.phoneNumber
        };

        this.$http.post("http://localhost:3000/email", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
          }
        }, emailObj)
        .then(function(response) {
            console.log(response);
        });
    }
  },
  mounted() {
    let inputs = document.getElementsByClassName("input");
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function(e) {
            e.stopPropagation();
        });
    }
  }
}
</script>