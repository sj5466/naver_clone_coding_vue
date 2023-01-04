<template>
  <div class="thumb_area">
    <div
      v-for="card in cards"
      :key="card.id"
      class="thumb_box _NM_NEWSSTAND_THUMB _NM_NEWSSTAND_THUMB_press_valid"
      :class="{ thumb_hover: card.id === num }"
      @mouseover="onMouseover(card.id)">
      <a href="#" class="thumb">
        <img :src="card.img" height="20" :alt="card.alt" class="news_logo" />
        <span class="thumb_dim"></span
      ></a>
      <div class="popup_wrap">
        <a href="#" role="button" class="btn_popup _NM_NEWSSTAND_THUMB_subscribe_press" data-pid="028" data-clk="sub"
          >구독</a
        >
        <a
          href="#"
          role="button"
          class="btn_popup _NM_NEWSSTAND_THUMB_unsubscribe_press"
          data-pid="028"
          data-clk="unsub"
          style="display: none"
          >해지</a
        >
        <a :href="card.href" target="_blank" class="btn_popup" data-clk="logo" data-pid="028">기사보기</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Card.ts"></script>
<style></style>
