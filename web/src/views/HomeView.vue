<template>
  <nav>
    <img src="../assets/home/1.png" alt="" />
  </nav>
  <main>
    <div class="main1">
      <div class="search">
        <input type="text" />
        <button>搜索</button>
      </div>
      <div class="main2">
        <div class="left">
          <h2 style="margin: 5%">分类</h2>
          <ul>
            <li>
              <div></div>
              <p>女装</p>
              /
              <p>内衣</p>
              /
              <p>奢品</p>
            </li>
            <li>
              <div></div>
              <p>女鞋</p>
              /
              <p>男鞋</p>
              /
              <p>箱包</p>
            </li>
            <li>
              <div></div>
              <p>美妆</p>
              /
              <p>饰品</p>
              /
              <p>洗护</p>
            </li>
            <li>
              <div></div>
              <p>男装</p>
              /
              <p>运动</p>
              /
              <p>百货</p>
            </li>
            <li>
              <div></div>
              <p>手机</p>
              /
              <p>数码</p>
              /
              <p>企业礼品</p>
            </li>
            <li>
              <div></div>
              <p>家装</p>
              /
              <p>电器</p>
              /
              <p>车品</p>
            </li>
            <li>
              <div></div>
              <p>食品</p>
              /
              <p>生鲜</p>
              /
              <p>母婴</p>
            </li>
            <li>
              <div></div>
              <p>医药</p>
              /
              <p>保健</p>
              /
              <p>进口</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="swiper">
            <van-swipe
              class="my-swipe"
              :autoplay="3000"
              indicator-color="orangered"
            >
              <van-swipe-item>
                <img src="../assets/home/swiper1.jpg" alt="">
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/home/swiper2.jpg" alt="">
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/home/swiper3.jpg" alt="">
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/home/swiper4.jpg" alt="">
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/home/swiper5.jpg" alt="">
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
nav {
  width: 100%;
  height: 100px;
  padding: 0;
}
nav > img {
  display: block;
  width: 100%;
  height: 100%;
}
main {
  width: 100%;
  height: 800px;
  background: url("../assets/home/bk.png") no-repeat center / 100% 100%;
}
.main1 {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  overflow: hidden;
}
.search {
  width: 80%;
  height: 40px;
  margin: 5px auto;
  border: 2px solid #ff5000;
  border-radius: 50px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search > input {
  width: 90%;
  height: 90%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 0;
  outline: none;
  padding-left: 2%;
}
.search > button {
  width: 10%;
  height: 90%;
  margin-right: 2px;
  border-radius: 50px;
  border: 0;
  background: #ff5000;
  color: white;
}
.main2 {
  width: 100%;
  height: 400px;
  display: flex;
}
.main2 > .left {
  width: 270px;
  height: 100%;
  overflow: hidden;
  background: rgb(217, 211, 211);
}
.main2 > .left > ul {
  width: 95%;
  height: auto;
  padding: 0;
  margin: 0 auto;
}
.main2 > .left > ul > li {
  list-style: none;
  width: 100%;
  height: 38px;
  margin: 2px;
  display: flex;
  align-items: center;
  color: #666;
  cursor: pointer;
}
.main2 > .left > ul > li > div {
  width: 16px;
  height: 16px;
}
.main2 > .left > ul > li > div {
  background: url("../assets/home/11.png") no-repeat center / 100% 100%;
}
.main2 > .left > ul > li:hover > div {
  background: url("../assets/home/12.png") no-repeat center / 100% 100%;
}
.main2 > .left > ul > li:hover {
  color: #e0620d;
}
.main2 > .left > ul > li > p {
  margin: 0 10px;
  font-size: 14px;
}

.swiper {
  width: 564px;
  height: 315px;
}
.my-swipe .van-swipe-item {
  width: 564px;
  height: 315px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe img{
  display: block;
  width: 100%;
  height: 100%;
}

.main2 > .right {
  width: 80%;
  height: 100%;
  background: blue;
}
</style>