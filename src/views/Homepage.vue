<script setup>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
</script>
<template>
    <main>
    <Navigation />
    <Header />
    <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
</div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,138.7C384,139,480,85,576,64C672,43,768,53,864,80C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> -->
</main>
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
        min-height: 95vh;
      svg{
        bottom: 0;
        z-index: -10;
        position: absolute;
        display: flex;
      }
    }
    
html, body { height: 100%; }
body {
  background:radial-gradient(ellipse at center, rgb(255, 242, 0) 0%, rgba(255,254,234,1) 35%, #000000 100%);
  overflow-y: none;
}

.ocean { 
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #ffffff;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -198px;
  width: 5000px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
</style>