<template>
    <nav>
        <div class="logo">
        <img src="/src/assets/images/Korphil logo (icon).png" alt="">
        <h1>Regional Training Center
            <br>
            KorPhil Davao</h1>
        </div>
        <!-- <h1>WELCOME</h1> -->
        <div class="navBtn">
        <button>Language</button>
        <button>About Us</button>
    </div>
    </nav>
</template>
<style scoped>
nav{
    padding: 20px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 80px;
            
        }
        h1{
            line-height: 25px;
            color: navy;
            margin: 0px 10px;
        }
    }
    button{
        background-color: navy;
        padding: 20px;
        color: white;
        margin: 0px 10px;
        width: 120px;
        border: none;
        border-radius: 15px;
    }
    
}
</style>