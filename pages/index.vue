<template>
    <div>

        <section class="welcome-section py-5">
            <div class="row">
                <div :class="appMounted ? 'animate__animated animate__slideInLeft col-lg-6':'col-lg-6'">
                   <b class="fs-large text-center text-md-justify">
                    <span class="text-black">Transform Your</span> <br>
                    <span class="text-primary">Betting Game</span>
                   </b>
    
                   <div class="my-2">
                    <p class="fs-3">
                        Welcome to Zort, an AI-Powered Betting Revolution. The power of AI and data analytics to give you the edge in sports betting. By analyzing real-time odds, historical trends, and market patterns, we turn complex data into actionable insights.
                    </p>
                   </div>
    
                   <div class="mb-2">
      <button type="button" class="btn text-white">Download on the App Store</button>
                   </div>
    
                   <div class="mb-2 d-flex justify-content-center justify-content-lg-between w-50 gap-5 gap-lg-0 mx-auto mx-md-0">
    
                    <div class="border border-grey rounded-2 p-2 d-flex gap-1 text-primary">
                       
                        <span class="align-self-center">4.9</span>
                    
                        <span class="align-self-center d-flex gap-1">
                            <BootstrapIcon name=" bi bi-star-fill" />
                            <BootstrapIcon name=" bi bi-star-fill" />
                            <BootstrapIcon name=" bi bi-star-fill" />
                            <BootstrapIcon name=" bi bi-star-fill" />
                        </span>
                        
                    </div>
                    <div class="d-flex">
                        <span class="text-primary align-self-center">14k+ reviews</span>
                    </div>
                </div>
    
                
               </div>
               <div :class="appMounted ? 'animate__animated animate__slideInRight col-lg-6 d-flex mt-3 mt-lg-0':'col-lg-6 d-flex mt-3 mt-lg-0' ">
                <NuxtImg class="img-fluid align-self-center d-none d-lg-block" src="HerooImage.png" />
             </div>
            </div>
        </section>
        
        <section id="about" class="live-analytics-section py-5">
            <div class="row">
      <div :class=" appMounted ? 'animate__animated animate__slideInLeft col-lg-6 d-flex justify-content-center justify-content-lg-start mb-5 mb-lg-0':'col-lg-6 d-flex justify-content-center justify-content-lg-start mb-5 mb-lg-0'">
        <NuxtImg 
        class="img-fluid align-self-center d-block rounded-2" 
        src="liveanalyis.gif"
        width="498"
        height="575"
        />
          
      </div>
      <div :class=" appMounted ? 'animate__animated animate__slideInRight col-lg-6':' col-lg-6' ">
        <h2 class="text-primary">Live Analysis</h2>

        <p class="fs-5">
          Stay ahead of the game with real-time betting analytics powered by AI. Zort continuously processes live odds, market movements, and in-game statistics, providing instant insights to help you make data-driven betting decisions. With live odds tracking, AI-powered predictions, and market trend analysis, you can spot value opportunities before the lines adjust. Our system monitors team performance, player stats, and key game events in real time, ensuring you have the most up-to-date information at your fingertips. Whether you're a casual bettor or a seasoned pro, Zort’s live analytics gives you the competitive edge needed to make smarter, faster, and more profitable bets.
        </p>
      </div>
            </div>
        </section>

        <section class="track-bets-section py-5">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="text-primary">Track Bets: Stay in Control of Your Wages</h2>
            
                    <p class="fs-5">
                        Manage your bets like a pro with Zort’s advanced bet tracking system. Keep a real-time record of your wagers, monitor performance across different sportsbooks, and analyze historical trends to refine your strategy. Our intelligent tracking tools provide insights into your betting habits, profitability, and risk management, helping you stay disciplined and make data-driven adjustments. With Zort, you’re not just placing bets—you’re optimizing every move for long-term success.
                    </p>
                  </div>
      <div class="col-lg-6 d-flex justify-content-lg-end justify-content-center">
        <NuxtImg 
        class="img-fluid align-self-center d-block rounded-2" 
        src="trackbets.gif"
        width="498"
        height="575"
        />
          
      </div>
            </div>
        </section>

        <section class="live-odds-section py-5">
            <div class="row">
      <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center mb-3 mb-lg-0">
        <NuxtImg 
        class="img-fluid align-self-center d-block rounded-2" 
        src="liveodds.gif"
        width="498"
        height="575"
        />
          
      </div>
      <div class="col-lg-6">
        <h2 class="text-primary">Live Odds: Stay Ahead of the Market</h2>

        <p class="fs-5">
            Bet smarter with real-time odds updates from multiple sportsbooks, all in one place. Zort continuously scans the market, tracking fluctuations and sharp movements to help you spot the best value before the lines shift. Whether odds are drifting due to betting volume, injuries, or last-minute market corrections, our AI-powered system ensures you're always informed. With live odds at your fingertips, you can react instantly, lock in the best prices, and maximize your betting edge.
        </p>
      </div>
            </div>
        </section>

        <section class="py-5 features">
            <h3 class="text-primary fs-5">Features</h3>
            <h2 class="text-black">
  Smart Features for Smart Betting
            </h2>

            <p>
                Powerful, self-serve product and growth analytics to help you use AI to analyze bets and track user bet slips.
            </p>

    <div class="d-lg-flex d-block justify-content-between">
        <div class="mb-2">
            <span class="mb-2 border border-grey rounded-2 d-inline-flex p-2">
            <NuxtImg class="img-fluid" src="shopping-bag-01.png"/>
            </span>
            <p class="text-black">
              <b>Line Shop</b>
            </p>
            <p>
              Shop for the best odds by comparing over 30 sportbooks
            </p>
        </div>

        <div class="mb-2">
            <span class="mb-2 border border-grey rounded-2 d-inline-flex p-2">
                <NuxtImg class="img-fluid" src="route.png"/>
            </span>
            <p class="text-black">
              <b>Live Track</b>
            </p>
            <p>
              Check the status of your live bets with our win probability feature
            </p>
           </div>
        
  
    </div>

    <div class="d-lg-flex d-block justify-content-between">
        <div class="mb-2">
            <span class="mb-2 border border-grey rounded-2 d-inline-flex p-2">
                <NuxtImg class="img-fluid" src="link-04.png"/>
            </span>
            <p class="text-black">
              <b>Sync</b>
            </p>
            <p>
              Track your performance accross all  of your favourite sportsbooks
            </p>
           </div>

   <div class="mb-2">
    <span class="mb-2 border border-grey rounded-2 d-inline-flex p-2">
        <NuxtImg class="img-fluid" src="search-md.png"/>
    </span>
    <p class="text-black">
      <b>Analyze</b>
    </p>
    <p>
      Spot trends in your betting portfolio accross leagues, playrs, and bet types
    </p>
   </div>

    </div>
        </section>
        

        <section class="testimonials-section py-5">
          <h3 class="text-primary fs-5 text-center">Testimonials</h3>
            <h2 class="text-black text-center">
  Hear First Hand from Incredible Customers
            </h2>

            <div>
<TestimonialSection/>
            </div>
        </section> 


        <section class="numbers-section py-5">
          <h3 class="text-primary fs-5 text-center">Our Numbers</h3>
          <h2 class="text-black text-center">
Facts you need to put your trust in us
          </h2>

          <div class="d-md-flex d-block gap-3 justify-content-center my-5">
          <div class="card bg-light rounded-3 p-5 border-0 mb-3 mb-lg-0">
            <div class="card-body text-center">
              <h1 class="text-primary">10K</h1>
              <h5 class="card-title text-black">Global Downloads</h5>
  
          </div>
          </div>

          <div class="card bg-light rounded-3 p-5 border-0">
            <div class="card-body text-center">
              <h1 class="text-primary">600%</h1>
              <h5 class="card-title text-black">Return on Investment</h5>
              <p>We've helped build over 400 projects with great companies.</p>
  
          </div>
          </div>
        </div>

        <div class="d-md-flex d-block gap-3 mb-5 justify-content-center">
          <div class="card bg-light rounded-3 p-5 border-0 mb-3 mb-lg-0">
            <div class="card-body text-center">
              <h1 class="text-primary">200+</h1>
              <h5 class="card-title text-black">5-star reviews</h5>
  
          </div>
          </div>

          <div class="card bg-light rounded-3 p-5 border-0">
            <div class="card-body text-center">
              <h1 class="text-primary">400+</h1>
              <h5 class="card-title text-black">Accurate sport predictions</h5>
          </div>
          </div>
        </div>

        <div>
          <button class="btn text-white w-100">Get Started</button>
        </div>
        </section>

    </div>
</template>
<script>
import TestimonialSection from '~/components/TestimonialSection.vue'
export default {
    name:'HomePage',
    components:{
      TestimonialSection
    },
    data(){
      return{
        appMounted: false
      }
    },

    mounted()
    {
      this.appMounted = true;
    }
  
    

}
</script>
<style lang="">
    
</style>