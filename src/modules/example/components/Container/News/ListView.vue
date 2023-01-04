<template>
  <div class="list_view">
    <div class="option_area">
      <div class="list_option_wrap">
        <ul class="list_option">
          <li
            v-for="list in listOption"
            :key="list.id"
            @click="onClickListMenu(list.id)"
            class="option_item"
            :class="{ option_on: list.id == listSelected }"
            :data-cateid="list.cateid">
            <a href="#" class="option" :data-clk="list.clk">{{ list.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="_NM_NEWSSTAND_ARTICLE_CONTAINER" data-clk-sub="*a">
      <div class="news_area _NM_NEWSSTAND_LIST_press_valid" data-pid="957">
        <div class="media_box">
          <a href="http://newsstand.naver.com/957" class="link_media" target="_blank" data-clk="logo">
            <img src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png" height="20" alt="시사위크" />
          </a>
          <span class="time">2022.12.30. 19:03 편집</span>
          <a
            href="#"
            role="button"
            class="btn_close _NM_NEWSSTAND_LIST_unsubscribe_press"
            data-pid="957"
            data-clk="unsub"
            style="display: none"
            ><span class="blind">구독취소</span></a
          >
          <a
            href="#"
            role="button"
            class="btn_plus _NM_NEWSSTAND_LIST_subscribe_press"
            data-pid="957"
            data-clk="sub"
            style=""
            >구독하기</a
          >
        </div>
        <div class="news_box">
          <div class="main_news">
            <a
              href="http://www.sisaweek.com/news/articleView.html?idxno=201764"
              target="_blank"
              class="thumb"
              data-clk="thumb"
              data-pid="957"
              data-gdid="957"
              data-aid="55067891d7afe60f">
              <img
                src="https://s.pstatic.net/static/newsstand/2022/1230/article_img/new_main/9180/191037_001.jpg"
                width="196"
                height="134"
                alt="‘사상 초유’로 점철된 대통령의 첫 해"
                onerror="this.outerHTML = '<div class=\'noimg\'><p class=\'noimg_text\'>이미지 준비중입니다.</p></div>'" /><span
                class="thumb_bd"></span>
            </a>
            <a
              href="http://www.sisaweek.com/news/articleView.html?idxno=201764"
              target="_blank"
              class="title"
              data-clk="thumb"
              data-pid="957"
              data-gdid="957"
              data-aid="55067891d7afe60f"
              >‘사상 초유’로 점철된 대통령의 첫 해</a
            >
          </div>
          <div class="sub_news">
            <ul class="list_news">
              <li v-for="sub in subNews" :key="sub.id" class="news_item">
                <a
                  :href="sub.href"
                  target="_blank"
                  class="news"
                  data-clk="text"
                  data-pid="957"
                  data-gdid="957"
                  :data-aid="sub.aid"
                  >{{ sub.title }}</a
                >
              </li>
            </ul>
            <p class="notice_msg">시사위크 언론사에서 직접 편집한 뉴스입니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./ListView.ts"></script>
<style></style>
