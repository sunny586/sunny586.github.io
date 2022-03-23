<template>
  <div class="navibar">
    <div class="left">
      <div class="mylogo" @click="goto('首页')">Leoyi-blog</div>
      <div class="nav-btn" @click="goto('文章搜索')">文章搜索</div>
    </div>
    <div class="right">
      <div v-if="!isLogin" class="nav-btn" @click="goto('登录')">登录</div>
      <div v-if="isLogin" class="nav-drop">
        {{ userName }} <span class="drop-symbol">^</span>
        <div class="drop-items">
          <div class="item" @click="goto('新文章')">新文章</div>
          <div class="item" @click="goto('文章管理')">文章管理</div>
          <div class="item" @click="logout()">登出</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";
@Options({
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["isLogin", "userName"]),
  },
  methods: {
    goto(place: string) {
      switch (place) {
        case "首页":
          this.$router.push({ path: "/" });
          break;
        case "文章搜索":
          this.$router.push({ path: "/search" });
          break;
        case "新文章":
          this.$router.push({ path: "/article/create" });
          break;
        case "文章管理":
          this.$router.push({ path: "/article/manage" });
          break;
        case "登录":
          window.location.href =
            "https://sso.leoyiblog.cn/?redirect=leoyiblog.cn";
          // "https://sso.leoyiblog.cn/?redirect=localhost:8080";
          break;
        default:
          break;
      }
    },
    ...mapActions("user", ["logout"]),
  },
})
export default class NaviBar extends Vue {}
</script>
<style lang="scss" scoped>
div.navibar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  background-image: linear-gradient(to right bottom, #333333, #444444);
  .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .left,
  .right {
    .nav-btn {
      user-select: none;
      line-height: 60px;
      padding-left: 10px;
      padding-right: 10px;
      width: 150px;
      text-align: center;
      color: white;
      // font-size: 18px;
      font-size: 1.2em;
      // font-weight: bold;
      // text-shadow: 4px 4px 0 #1c1c1c;
      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .nav-drop {
      line-height: 60px;
      padding-left: 10px;
      padding-right: 10px;
      width: 150px;
      text-align: center;
      color: white;
      z-index: 10;
      // font-size: 18px;
      font-size: 1.2em;
      // font-weight: bold;
      position: relative;
      // text-shadow: 4px 4px 0 #1c1c1c;
      &:hover {
        .drop-symbol {
          transform: rotate(360deg) scale(1.4, 1) translateY(4px);
        }
        .drop-items {
          .item {
            height: 60px;
          }
        }
      }
      .drop-symbol {
        line-height: 60px;
        display: inline-block;
        transform: rotate(180deg) scale(1.4, 1) translateY(4px);
        color: white;
        // position: relative;
        transition: all 0.2s;
      }
      .drop-items {
        position: absolute;
        display: flex;
        width: 150px;
        top: 60px;
        left: 0px;
        flex-direction: column;
        background-color: #444444;
        color: white;
        .item {
          height: 0px;
          overflow: hidden;
          user-select: none;
          transition: all 0.2s;
          &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
}

// 下面是logo部分的样式，使用compase compile
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
@import url(https://fonts.googleapis.com/css?family=Lobster+Two:700italic);
/* line 6, ../sass/logo.scss */
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
/* line 10, ../sass/logo.scss */
.atari {
  font-family: "press start 2p";
  font-size: 10px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0.1em 0 #000;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjMiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjMiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g");
  background-size: 100%;
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, rgba(0, 0, 0, 0.3)),
    color-stop(50%, rgba(0, 0, 0, 0.3)),
    color-stop(50%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0))
  );
  background-image: -moz-linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -webkit-linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-repeat: repeat;
  background-size: 20px 10px;
}
/* line 24, ../sass/logo.scss */
.mylogo {
  padding-left: 30px;
  padding-right: 30px;
  font-family: lobster two;
  color: #ffa801;
  text-shadow: 0 8px 0 #1c1c1c;
  // font-size: 40px;
  font-size: 2.8em;
  cursor: default;
  &:hover {
    cursor: pointer;
  }
}
</style>