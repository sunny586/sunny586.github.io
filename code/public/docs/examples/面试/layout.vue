<template>
  <!--浮动布局  -->
  <section class="layout float">
    <h1>浮动解决方案</h1>
    <article class="left-right-center">
      <div class="left"></div>
      <div class="right"></div>
      <div class="center">
        <h2>浮动解决方案</h2>
        1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
        3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
        5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
      </div>
    </article>
  </section>

  <!-- 绝对布局 -->
  <section class="layout absolute">
    <h1>绝对定位解决方案</h1>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h2>绝对定位解决方案</h2>
        1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
        3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
        5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
      </div>
      <div class="right"></div>
    </article>
  </section>

  <!-- flexbox布局 -->
  <section class="layout flexbox">
    <h1>flexbox解决方案</h1>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h2>flexbox解决方案</h2>
        1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
        3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
        5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
      </div>
      <div class="right"></div>
    </article>
  </section>

  <!-- 表格布局 -->
  <section class="layout table">
    <h1>表格布局解决方案</h1>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h2>表格布局解决方案</h2>
        1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
        3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
        5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
      </div>
      <div class="right"></div>
    </article>
  </section>

  <!-- 网格布局 -->
  <section class="layout grid">
    <h1>网格布局解决方案</h1>
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h2>网格布局解决方案</h2>
        1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
        3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
        5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
      </div>
      <div class="right"></div>
    </article>
  </section>
</template>

<style>
html * {
  padding: 0;
  margin: 0;
}
.layout article div {
  height: 100px;
  overflow: hidden;
}

/**  浮动布局 */
.layout.float .left {
  float: left;
  width: 300px;
  background: red;
}
.layout.float .center {
  background: yellow;
}
.layout.float .right {
  float: right;
  width: 300px;
  background: blue;
}

/** absolute 布局*/
.layout.absolute .left-center-right {
  position: relative;
}

.layout.absolute .left-center-right > div {
  position: absolute;
}

.layout.absolute .left {
  left: 0;
  width: 300px;
  background: red;
}
.layout.absolute .center {
  left: 300px;
  right: 300px;
  background: yellow;
}
.layout.absolute .right {
  right: 0;
  width: 300px;
  background: blue;
}

/** flex */
.layout.flexbox {
  margin-top: 140px;
}
.layout.flexbox .left-center-right {
  display: flex;
}
.layout.flexbox .left {
  width: 300px;
  background: red;
}
.layout.flexbox .center {
  flex: 1;
  background: yellow;
}
.layout.flexbox .right {
  width: 300px;
  background: blue;
}

/** table */
.layout.table .left-center-right {
  width: 100%;
  height: 100px;
  display: table;
}
.layout.table .left-center-right > div {
  display: table-cell;
}
.layout.table .left {
  width: 300px;
  background: red;
}
.layout.table .center {
  background: yellow;
}
.layout.table .right {
  width: 300px;
  background: blue;
}

/** grid */
.layout.grid .left-center-right {
  width: 100%;
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: 300px auto 300px;
}
/* .layout.grid .left-center-right > div {
} */
.layout.grid .left {
  width: 300px;
  background: red;
}
.layout.grid .center {
  background: yellow;
}
.layout.grid .right {
  background: blue;
}
</style>
