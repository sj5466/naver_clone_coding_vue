<template>
  <div class="_NM_UI_PAGE_CONTAINER" style="height: 100%; overflow: hidden" data-clk-sub="*p">
    <div v-for="page in pages" :key="page.id" style="width: 750px; float: left; display: block">
      <div class="tile_view">
        <div class="frame_area">
          <i class="line to_right1"></i>
          <i class="line to_right2"></i>
          <i class="line to_right3"></i>
          <i class="line to_bottom1"></i>
          <i class="line to_bottom2"></i>
          <i class="line to_bottom3"></i>
          <i class="line to_bottom4"></i>
          <i class="line to_bottom5"></i>
        </div>
        <!-- thumb_area -->
        <Card :cards="page.cards" />
        <!-- //thumb_area -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Page.ts"></script>
<style></style>
