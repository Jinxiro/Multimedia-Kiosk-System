<script setup>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
</script>
<template>
  <main>
    
    <Navigation />
    <Header />
    

  </main>



</template>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;

}




/* .parent {
    width: 100%;
    height: 100vh;
  position: absolute;
  z-index: -10;
  overflow: hidden;
}

.magicpattern {
  width: 100%;
  height: 100%;
  background-size: cover;
background-position: center;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23acb7ff%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%23e2e3ff%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M931 644.5Q898 789 759 829t-270.5 76Q357 941 264 840T140.5 619.5q-30.5-119.5-10-246t133-190.5q112.5-64 242-81t230 68.5Q836 256 900 378t31 266.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M931 644.5Q898 789 759 829t-270.5 76Q357 941 264 840T140.5 619.5q-30.5-119.5-10-246t133-190.5q112.5-64 242-81t230 68.5Q836 256 900 378t31 266.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
} */
</style>