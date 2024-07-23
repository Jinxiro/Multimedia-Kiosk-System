<script setup>
import NavigationLight from '../components/NavigationLight.vue'
</script>
<template>
    <NavigationLight style="z-index: 10;" />
    <dialog id="VideoPlayer">
        <div class="contentplayer">

            <iframe width="1000" height="500" src="https://www.youtube.com/embed/7Cj8bsys9aY?autoplay=1">
    </iframe>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio accusantium, quam molestiae veniam dicta aliquam odio optio, aspernatur libero assumenda veritatis fugit a itaque ea placeat magni modi. Est!</p>
        </div>
    </dialog>
    <main>
        
        <div class="leftcontent">
            <div class="playArea">

                <h1>3 year Diploma Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae nemo culpa labore tenetur et
                    maxime alias vel fugiat, provident, praesentium doloribus veniam nam in deserunt non, corrupti atque
                    eius.</p>
                <h3>Video Tutorial #1</h3>
                <button onclick="VideoPlayer.showModal()">Play<i class="material-icons">play_circle_outline</i></button>
                <button>More info<i class="material-icons">info_outline</i></button>
            </div>
        </div>
        <div class="rightcontent">
            <div class="contentArea">

                <h1>DIT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cumque commodi eum facilis ipsa
                    consequatur quas quos exercitationem sequi odit esse voluptatibus explicabo, earum veniam obcaecati
                    officia ex atque voluptate?</p>
            </div>
        </div>
        <div class="videoLibray">
            <h3>Other Video Tutorial</h3>
            <div class="videos">
                <img src="https://www.korphildavao.site/wp-content/uploads/2022/03/01-CCR.jpg" alt="">
                <img src="https://www.korphildavao.site/wp-content/uploads/2022/03/01-DAT-eqpt.jpg" alt="">
                <img src="https://www.korphildavao.site/wp-content/uploads/2022/03/01-DABET-eqpt.jpg" alt="">
                <img src="https://www.korphildavao.site/wp-content/uploads/2022/03/01-FP-eqpt2.jpg" alt="">
            </div>
        </div>
    </main>
</template>

<style scoped>
dialog{
    margin: auto;
    padding: 20px;
    width: 1200px;
    border: none;
    .contentplayer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
.videoLibray{
    padding: 50px 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: right;
    flex-direction: column;
    h3{
        margin: 10px 0px;
    }
    .videos{
        gap: 20px;
        display: grid; 
        grid-template-columns: auto auto auto auto;
        img{
            height: 170px;
            transition: 0.5s ease;
            &:hover{
                scale: 1.05;
            }
        }
    }
}
main {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgb(57, 57, 57);
    z-index: -10;
    background-image: url("https://www.korphildavao.site/wp-content/uploads/2022/03/01-facade.jpg") ;
    background-blend-mode: overlay;

    .leftcontent {
        padding: 20px;
        position: absolute;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        min-height: 100vh;
        background-image: linear-gradient(to right,  rgb(1, 1, 22), rgba(0, 0, 128, 0));

        .playArea {
            width: 700px;
            display: grid;
            gap: 10px;
            grid-template-columns: auto auto;
            a{
                    font-weight: 500;
                    text-decoration: none;
                }
            button {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                background-color: rgb(255, 255, 255);
                border: none;
                border-radius: 5px;
                width: 120px;
                padding: 10px 10px;
                transition: 0.5s ease;
                &:hover{
                    scale: 1.05;
                    background-color: rgb(225, 225, 255);
                }
               
            }

            h1 {
                line-height: 80px;
                font-size: 70px;
            }

            p {
                font-size: 18px;
            }

            h1,
            p,
            h3 {
                grid-column: 1/ span2;
            }

        }
    }

    .rightcontent {
        padding: 20px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        right: 0;
        min-height: 100vh;
        background-image: linear-gradient(to left, rgb(1, 1, 22), rgba(0, 0, 128, 0));

        .contentArea {
            width: 350px;
            h1 {
                text-align: right;
                font-size: 80px;
            }

            p {
                font-size: 20px;
                text-align: right;
            }
        }
    }
}
</style>