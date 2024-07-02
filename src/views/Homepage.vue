<script setup>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
</script>
<template>
    <main>
    <Navigation />
    <Header />
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,138.7C384,139,480,85,576,64C672,43,768,53,864,80C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> -->
  </main>
  <section>
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
  </section>

    
</template>
<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    body {
        background-color: rgb(252, 148, 148);
        
    }
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
      svg{
        bottom: 0;
        z-index: -10;
        position: absolute;
        display: flex;
      }
    }
    section{
      outline: 1px solid 1px;
      z-index: -99;
      width: 100%;
      overflow: hidden;
      .wave{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: url("/src/assets/images/wave.png");
        background-size: 1000px 200px;
      }
      .wave.wave1{
        width: 100px;
        animation: animate 30s linear infinite;
        z-index: 1000;
        opacity: 1;
        animation-delay: 0s;
        bottom: 0;  
      }
      @keyframes animate {
        0%{
          background-position-x: 0;
        }
        100%{
          background-position-x:  1000px;
        }
      }
    }
    

</style>