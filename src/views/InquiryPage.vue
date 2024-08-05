<script setup>
import NavigationLight from "../components/NavigationLight.vue";
</script>
<template>
  <NavigationLight style="z-index: 10" />

  <!-- DIALOG DATA -->

  <div class="dialogs">
    <dialog id="SeeMoreSection">
      
      <h1>Tutorials</h1>
      <button onclick="SeeMoreSection.close()">close</button>

      <div class="tutorialCard">
        <img
          src="https://i.ytimg.com/an_webp/_psDrS3VUbQ/mqdefault_6s.webp?du=3000&sqp=CNjjwLUG&rs=AOn4CLDFMDa7qhcHLjQTf2o59c1KTUPcUA"
          alt="">
        <div class="details">
          <h1>Online Registration</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus architecto cupiditate vitae!
            Recusandae, quasi! Sit explicabo error voluptate quibusdam vel facere nulla porro odio maxime. Velit
            accusantium fugiat eos.</p>
            <button onclick="OnlineReg.showModal()">
          Play<i class="material-icons">play_circle_outline</i>
        </button>
        </div>
      </div>
      <div class="tutorialCard">
        <img
          src="https://i.ytimg.com/an_webp/6OiPqWZ5OK8/mqdefault_6s.webp?du=3000&sqp=CO2wwLUG&rs=AOn4CLCIl9ouyxJhd0xkQPGpJuZYJtBT9Q"
          alt="">
        <div class="details">
          <h1>Enrollment Process</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus architecto cupiditate vitae!
            Recusandae, quasi! Sit explicabo error voluptate quibusdam vel facere nulla porro odio maxime. Velit
            accusantium fugiat eos.</p>
            <button onclick="EnrollmenProcess.showModal()">
          Play<i class="material-icons">play_circle_outline</i>
        </button>
        </div>
      </div>
      
    </dialog>
    <dialog id="VideoPlayer">
      <div class="contentplayer">
        <h1>Introduction</h1>
        <iframe src="https://www.youtube.com/embed/7Cj8bsys9aY?autoplay=1">
        </iframe>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          distinctio accusantium, quam molestiae veniam dicta aliquam odio
          optio, aspernatur libero assumenda veritatis fugit a itaque ea placeat
          magni modi. Est!
        </p>
        <button onclick="VideoPlayer.close()">close</button>
      </div>
    </dialog>
    <dialog id="EnrollmenProcess">
      <div class="contentplayer">
        <h1>Enrollment Process</h1>
        <iframe src="https://youtube.com/embed/6OiPqWZ5OK8?autoplay=1">
        </iframe>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          distinctio accusantium, quam molestiae veniam dicta aliquam odio
          optio, aspernatur libero assumenda veritatis fugit a itaque ea placeat
          magni modi. Est!
        </p>
        <button onclick="EnrollmenProcess.close()">close</button>
      </div>
    </dialog>
    <dialog id="OnlineReg">
      <div class="contentplayer">
        <h1>Enrollment Process</h1>
        <iframe src="https://youtube.com/embed/_psDrS3VUbQ?autoplay=1">
        </iframe>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          distinctio accusantium, quam molestiae veniam dicta aliquam odio
          optio, aspernatur libero assumenda veritatis fugit a itaque ea placeat
          magni modi. Est!
        </p>
        <button onclick="OnlineReg.close()">close</button>
      </div>
    </dialog>
  </div>

  <!-- DIALOG DATA -->

  <main>
    <div class="leftcontent">
      <div class="playArea">
        <h1>3 year Diploma Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quae
          nemo culpa labore tenetur et maxime alias vel fugiat, provident,
        </p>
        <h3>Introduction</h3>
        <button onclick="VideoPlayer.showModal()">
          Play<i class="material-icons">play_circle_outline</i>
        </button>
        <button>More info<i class="material-icons">info_outline</i></button>
      </div>
    </div>
    <div class="rightcontent">
      <div class="contentArea">
        <h1>WELCOME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cumque
          commodi eum facilis ipsa consequatur quas quos exercitationem sequi
          odit esse voluptatibus explicabo, earum veniam obcaecati officia ex
          atque voluptate?
        </p>
      </div>
    </div>
    <div class="videoLibray">
      <h3>Other Video Tutorial</h3>
      <div class="videos">

        <div class="thumbnail" onclick="OnlineReg.showModal()">
          <img
            src="https://i.ytimg.com/an_webp/_psDrS3VUbQ/mqdefault_6s.webp?du=3000&sqp=CNjjwLUG&rs=AOn4CLDFMDa7qhcHLjQTf2o59c1KTUPcUA"
            alt="" />
          <div class="content">
            <h1>Register Online</h1>
            <p>
            <p>Play Video</p><i class="material-icons">play_circle_outline</i></p>
          </div>
        </div>
        <div class="thumbnail" onclick="EnrollmenProcess.showModal()">
          <img
            src="https://i.ytimg.com/an_webp/6OiPqWZ5OK8/mqdefault_6s.webp?du=3000&sqp=CO2wwLUG&rs=AOn4CLCIl9ouyxJhd0xkQPGpJuZYJtBT9Q"
            alt="" />
          <div class="content">
            <h1>Enrollment Process</h1>
            <p>
            <p>Play Video</p><i class="material-icons">play_circle_outline</i></p>
          </div>
        </div>
        <div class="thumbnail" onclick="EnrollmenProcess.showModal()">
          <img
            src="https://i.ytimg.com/an_webp/6OiPqWZ5OK8/mqdefault_6s.webp?du=3000&sqp=CO2wwLUG&rs=AOn4CLCIl9ouyxJhd0xkQPGpJuZYJtBT9Q"
            alt="" />
          <div class="content">
            <h1>Enrollment Process</h1>
            <p>
            <p>Play Video</p><i class="material-icons">play_circle_outline</i></p>
          </div>
        </div>

        <div class="seeAllbtn">
          <button onclick="SeeMoreSection.showModal()">See All</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
dialog {
  margin: auto;
  padding: 50px;
  width: 1300px;
  border: none;
  border-radius: 15px;

  .contentplayer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      width: 1000px;
    }

    button {
      text-transform: uppercase;
      border: none;
      border-radius: 10px;
      color: white;
      background-color: navy;
      margin: 20px;
      width: 200px;
      padding: 10px;
    }
  }
  &::backdrop {
    backdrop-filter: blur(10px);
  }
  .tutorialCard{
    margin: 10px 0px  ;
    padding: 20px;
    background-color: whitesmoke;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;  
    img{
      padding: 10px;
    }
    button{
      display: flex;
      align-items: center;
      justify-content: space-around;

      margin: 10px 0px;
      border: none;
      width: 150px;
      border-radius:  20px;
      color: white;
      padding: 20px;

      background-color: navy;
    }
  }
}

iframe {
  width: 1200px;
  height: 560px;
  border: none;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px solid black;
}

.videoLibray {
  padding: 50px 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgb(0, 0, 28));
  width: 100%;

  h3 {
    margin: 10px 0px;
  }

  .videos {
    gap: 30px;
    display: grid;
    width: 50%;
    grid-template-columns: auto auto auto auto;

    .seeAllbtn {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        color: white;
        outline: 1px solid white;
        border: none;
        border-radius: 20px;
        background-color: transparent;
        width: 150px;
        padding: 10px 20px;
        transition: 0.5s ease;

        &:hover {
          cursor: pointer;
          background-color: navy;
          outline: none;
        }

      }
    }

    .thumbnail {
      position: relative;
      transition: 0.5s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 5px 5px 10px solid black;

      &:hover {
        scale: 1.05;
      }

      img {
        border-radius: 15px;
        object-fit: cover;
        height: 200px;
        width: 400px;

      }

      .content {
        border-radius: 15px;
        height: 200px;
        width: 400px;
        top: 0;
        left: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        opacity: 0;
        background: rgba(0, 0, 36, 0.835);
        transition: 0.6s;

        p {
          background-color: red;
          padding: 5px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 15px;
        }
      }

      .content:hover {
        opacity: 1;
        cursor: pointer;
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
  background-image: url("https://www.korphildavao.site/wp-content/uploads/2022/03/01-facade.jpg");
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
    background-image: linear-gradient(to right,
        rgb(1, 1, 22),
        rgba(0, 0, 128, 0));

    .playArea {
      width: 700px;
      display: grid;
      gap: 10px;
      grid-template-columns: auto auto;

      a {
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

        &:hover {
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
        grid-column: 1 / span2;
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
    background-image: linear-gradient(to left,
        rgb(1, 1, 22),
        rgba(0, 0, 128, 0));

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
