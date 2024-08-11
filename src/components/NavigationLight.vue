<template>
    <nav>
        <RouterLink to="/" style="text-decoration: none;">
        <div class="logo">
        <img src="/src/assets/images/Korphil logo (icon).png" alt="">
        <h1>Regional Training Center
            <br>
            KorPhil Davao</h1>
        </div>
    </RouterLink>
        <!-- <h1>WELCOME</h1> -->
        <div class="navBtn">
        <button>Contact Us</button>
        <button>About Us</button>
    </div>
    </nav>
</template>
<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
nav{
    position: absolute;
    top: 0;
    padding: 20px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 80px;
            
        }
        h1{
            line-height: 25px;
            color: white;
            margin: 0px 10px;
        }
    }
    button{
        background-color: rgb(238, 238, 238);
        padding: 20px;
        color: navy;
        margin: 0px 10px;
        width: 120px;
        border: none;
        border-radius: 15px;
    }
    
}
</style>