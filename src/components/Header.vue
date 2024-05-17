<template>
    <div class="leftContainer">
        <h1>I Create Success Because I Can</h1>
        <p>Welcome to TESDA Regional Training Center – Korea Philippines Vocational Training Center, Davao</p>
    </div>
    <div class="button-area">
        <div class="timeClock">
            <img src="" alt="">
            <h1>12:12 PM</h1>
            <p>Friday, September 8, 2023</p>
        </div>
        <div class="btn">
            <img src="/src/assets/images/Icons/WhatsNew.png" alt="">
            <p>What's New?</p>
        </div>
        <div class="btn">
            <img src="/src/assets/images/Icons/Inquire.png" alt="">
            <p>Inquiries</p>
        </div>
        <div class="btn">
            <img src="/src/assets/images/Icons/Register.png" alt="">
            <p>Register</p>
        </div>

        <div class="btn">
            <img src="/src/assets/images/Icons/Feedback.png" alt="">
            <p>Feed back</p>
        </div>
    </div>
</template>

<style scoped>
.button-area {
    margin: 50px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px;
    .timeClock {
        grid-column: 1 / span 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 15px;
        line-height: 0;
        color: white;
        background-color: navy;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.296);
        h1{
            font-size: 70px;
        }
    }

    .btn {
    
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 200px;
        height: 200px;
        border-radius: 15px;
        color: navy;
        background-color: rgb(255, 255, 255);
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.296);
        transition: 0.5s;

        &:hover {
            cursor: pointer;
            scale: .98;
        }
        img{
            height: 60px;
        }

        p {
            font-size: 18px;
        }
    }
}

.leftContainer {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    margin: 50px;
    gap: 20px;

    h1 {
        margin: 0;
        font-weight: 900;
        font-size: 70px;
        color: navy;
        width: 700px;
        line-height: 60px;
    }

    p {
        margin-top: -15px;
        width: 500px;
    }
}
</style>