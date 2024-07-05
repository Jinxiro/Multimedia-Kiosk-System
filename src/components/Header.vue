<template>
    <dialog id="registerModal">
        <div class="headmodal">
            <h1>Courses Offered</h1>
            <button onclick="registerModal.close()">Cancel</button>
        </div>
        <div class="registerModal">
            <div class="contentCard">
                <h3>3-Year Diploma Courses</h3>
                <p>Pursuant to Executive Order No. 83 Series of 2012 also known as the Philippine Qualifications Framework (PQF), the Center is now piloting 3-Year Diploma programs in Level 5 category (based on PQF 8-Level Descriptors) considering RTC-KorPhil Davao as the Center of Excellence for TVET in Mindanao.</p>
                <button><a href="https://enroll.korphildavao.site/register">Continue</a></button>
            </div>
            <div class="contentCard">
                <h3>Short-Term / Skills Upgrading Programs</h3>
                <p>Courses designed to accommodate workers, for life-long training, and for those who did not avail the 3-Year Diploma programs. Qualifications (courses with TESDA Training Regulations or TR) in diploma programs are also offered individually in separate schedules.</p>
            <button><a href="https://enroll.korphildavao.site/register">Continue</a></button>
        </div>
        <div class="contentCard">
            <h3>Community-Based Skills Training</h3>
                <p>In cooperation with Community Leaders (like political, church, or organization leaders) skills trainings are brought to the community to reach out the grassroots. Venues and schedules are depending on the stipulations in the Memorandum of Agreement (MOA) between the Center & the sponsoring partner.</p>
            <button><a href="https://enroll.korphildavao.site/register">Continue</a></button>
        </div>
        </div>
    </dialog>
<dialog id="feedBackForm">
    <form action="" method="dialog">
        <h3>Send Us Feedback</h3>
        <div class="fullname">
            <div>
                <p>Name</p>
                <input type="text">
            </div>
            <div>
                <p>Middle Name</p>
                <input type="text">
            </div>
            <div>
                <p>Last Name</p>
                <input type="text">
            </div>
        </div>
        <div class="feedBackbox">
            <p>Name</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your feedback or Recommendations"></textarea>
        </div>
    </form>
</dialog>
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
        <div class="btn" onclick="registerModal.showModal()">
            <img src="/src/assets/images/Icons/Register.png" alt="">
            <p>Register</p>
        </div>

        <div class="btn" onclick="feedBackForm.showModal()">
            <img src="/src/assets/images/Icons/Feedback.png" alt="">
            <p>Feed back</p>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped>

#registerModal {
    margin: auto;
    border: none;
    border-radius: 15px;
    width: 70%;
    &::backdrop{
        backdrop-filter: blur(5px);
    }
    .headmodal{
        margin: auto;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            margin: 5px 0px;
            
            padding: 10px;
            width: 100px;
            background-color: rgb(207, 207, 207);
            border: none;
            border-radius: 5px;
            transition: 0.5s;
        }
    }

    .registerModal {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .contentCard{
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.151);
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            padding: 10px;
            background-color: rgb(242, 245, 255);
            width: 320px;
            height: 500px;
            margin: 20px;
            h3{
                width: 250px;
            }
            p{
                width: 250px;
            }
            button {
            margin: 5px 10px;
            padding: 20px;
            width: 200px;
            background-color: navy;
            border: none;
            border-radius: 5px;
            transition: 0.5s;

            &:hover {
                cursor: pointer;
                scale: 1.01;
            }

            a {
                text-decoration: none;
                color: white;
            }
        }
        }
        
    }
}
#feedBackForm{
    margin: auto;
    border: none;
    border-radius: 15px;
    width: 50%;
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .fullname{
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                margin: 10px;
                input{
                    width: 220px;
                    padding: 10px 10px;
                    border-radius: 5px;
                    border: .5px solid;
                }
            }
        }
        .feedBackbox{
            
            textarea{
                resize: none;
      
            }
        }
    }
}
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

        h1 {
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

        img {
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