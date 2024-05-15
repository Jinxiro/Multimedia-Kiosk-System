<template>
    <div class="leftContainer">
        <div class="clock a">
            <h1>12:12 PM</h1>
            <p>Friday, March 01, 2024</p>
        </div>
        <div class="whatsNew">
            <h1>What's New</h1>
            <p>Latest news and updates at Tesda RTC-KPVTC Davao </p>
        </div>
    </div>
    <div class="button-area">
    <div class="btn">
        <img src="" alt="">
        <p>Inquiries</p>
    </div>
    <div class="btn">
        <img src="" alt="">
        <p>Register</p>
    </div>
    <div class="btn">
        <img src="" alt="">
        <p>Categories</p>
    </div>
    <div class="btn">
        <img src="" alt="">
        <p>Contact Us</p>
    </div>
</div>
</template>

<style scoped>
    .button-area{
        margin: 50px;
        display: grid;
        grid-template-columns: auto auto;
        .btn {
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            border-radius: 5px;
            color: white;
            background-color: navy;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.296);
            p{
                font-size: 18px;
            }
        }
    }
    .leftContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 50px;
        gap: 20px;
        .clock{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 200px;
            width: 500px;
            line-height: 5px;
            border-radius: 5px;
            background-color: navy;
            h1{
                color: white;
                font-size: 50px;
            }
            p{
                color: white;
                font-size: 18px;
            }
        }
        .whatsNew{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 200px;
            width: 500px;
            line-height: 5px;
            border-radius: 5px;
            background-color: rgb(171, 0, 0);
            h1{
                color: white;
                font-size: 50px;
            }
            p{  
                text-align: center;
                color: white;
                font-size: 15px;
            }
        }
    }
    </style>