<template>
  <div class="footer">
    <span>Leoyi-个人博客</span>
    <span class="block">|</span>
    <span title="邮箱:  leoyi255@126.com">联系方式</span>
    <span class="block">|</span>
    <a class="link" href="https://beian.miit.gov.cn/" target="_blank"
      >赣ICP备2021011285号-1</a
    >
    <span class="block">|</span>
    <div class="beian">
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36090202000125"
        class="link"
      >
        <img class="beian-logo" src="../assets/beian_logo.png" />
        <div>赣公网安备 36090202000125号</div>
      </a>
    </div>
  </div>
</template>
<script lang='ts'>
import { Options, Vue } from "vue-class-component";
@Options({
  props: {},
  methods: {},
})
export default class FooterBar extends Vue {}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  background-image: linear-gradient(to right bottom, #333333, #444444);
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 60px;
  color: grey;
  .block {
    margin-left: 5px;
    margin-right: 5px;
  }
  .link {
    color: grey;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: white;
    }
  }
  .beian {
    .link {
      display: flex;
      flex-direction: row;
      align-items: center;
      .beian-logo{
        margin-right: 5px;
      }
    }
  }
}
</style>