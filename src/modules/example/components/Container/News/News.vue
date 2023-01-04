<template>
  <div id="newsstand" class="sc_newscast">
    <h2 class="blind">뉴스스탠드</h2>
    <div id="NM_NEWSSTAND_HEADER" class="group_issue" data-clk-prefix="ncy">
      <div class="issue_area">
        <a
          class="link_media"
          href="https://news.naver.com/main/list.naver?mode=LPOD&amp;mid=sec&amp;sid1=001&amp;sid2=140&amp;oid=001&amp;isYeonhapFlash=Y"
          data-clk="newsflash"
          >연합뉴스</a
        >
        <div id="NM_ONELINE_ROLLING" class="list_issue" data-nm-ui="rolling">
          <!-- style="
              position: relative;
              z-index: 0;
              overflow: hidden;
              min-width: 100%;
              height: 100%;
              touch-action: pan-x;
              user-select: none;
              -webkit-user-drag: none;
              width: 310px;
            " -->
          <div class="eg-flick-viewport">
            <div
              class="eg-flick-camera"
              style="width: 100%; height: 100%; will-change: transform; transform: translate3d(0px, 0px, 0px)">
              <div class="eg-flick-panel" style="position: absolute; top: 0px">
                <a
                  href="https://news.naver.com/main/list.naver?mode=LPOD&amp;mid=sec&amp;sid1=001&amp;sid2=140&amp;oid=001&amp;isYeonhapFlash=Y&amp;aid=0013675619"
                  class="issue"
                  data-clk="quickarticle"
                  >오늘부터 모든 중국발 입국자 PCR 검사…입국전 검사는 5일부터</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="direct_area">
        <a href="http://news.naver.com/" class="link_news" data-clk="newshome">뉴스홈</a>
        <a href="http://entertain.naver.com/home" class="link_direct" data-clk="entertainment">연예</a>
        <a href="http://sports.news.naver.com/" class="link_direct" data-clk="sports">스포츠</a>
        <a
          href="http://news.naver.com/main/main.naver?mode=LSD&amp;mid=shm&amp;sid1=101"
          class="link_direct"
          data-clk="economy"
          >경제</a
        >
      </div>
    </div>
    <div id="NM_NEWSSTAND_TITLE" class="group_title" data-clk-prefix="nsd">
      <a href="http://newsstand.naver.com/" class="link_newsstand" data-clk="title" target="_blank">뉴스스탠드</a>
      <div id="NM_NEWSSTAND_data_buttons" class="sort_area" role="tablist">
        <a
          href="#"
          role="tab"
          data-type="my"
          data-clk="my"
          class="btn_sort"
          aria-controls="NM_NEWSSTAND_MY_LIST"
          aria-selected="false"
          >구독한 언론사</a
        >
        <a
          href="#"
          role="tab"
          data-type="all"
          data-clk="all"
          class="btn_sort"
          aria-controls="NM_NEWSSTAND_DEFAULT_THUMB"
          aria-selected="true"
          >전체언론사</a
        >
      </div>
      <div id="NM_NEWSSTAND_view_buttons" class="set_area" role="tablist">
        <a
          v-for="news in newsStans"
          :key="news.id"
          :href="news.href"
          :target="news.target"
          role="tab"
          :data-type="news.type"
          :data-clk="news.clk"
          class="btn_set"
          :aria-controls="news.controls"
          :aria-selected="news.id === num ? true : false"
          @click="onClickNewsMenu(news.id, $event)">
          <i :class="news.icon">
            <span class="blind">{{ news.title }}</span>
          </i>
        </a>
      </div>
    </div>
    <div id="NM_NEWSSTAND_VIEW_CONTAINER" style="position: relative">
      <div
        id="NM_NEWSSTAND_DEFAULT_LIST"
        class="group_news"
        role="tabpanel"
        :style="num ? 'display: none' : 'display: block'"
        data-clk-prefix="nsd_all">
        <a href="#" role="button" class="pm_btn_prev_l _NM_NEWSSTAND_LIST_prev_btn" data-clk-custom="prev"
          ><i class="ico_btn"> <span class="blind">이전</span></i></a
        >
        <a href="#" role="button" class="pm_btn_next_l _NM_NEWSSTAND_LIST_next_btn" data-clk-custom="next">
          <i class="ico_btn">
            <span class="blind">다음</span>
          </i>
        </a>
        <!-- list_view -->
        <ListView />
        <!-- // list_view -->
        <div class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_invalid" style="display: none" data-clk-sub="*a">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE">
            <i class="ico_close"></i>
            <span class="blind">닫기</span>
          </a>
          <p class="popup_msg">해당 언론사 사정으로 접근이 제한됩니다.</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE">확인</a>
          </div>
        </div>
        <div
          class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_undescribe_confirm"
          style="display: none"
          data-clk-sub="*a">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE" data-clk="usclose">
            <i class="ico_close"></i>
            <span class="blind">닫기</span>
          </a>
          <p class="popup_msg"><strong class="NM_NEWSSTAND_POPUP_PNAME"></strong>을(를)<br />구독해지 하시겠습니까?</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CONFIRM" data-clk="usdone">확인</a>
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE" data-clk="uscancel">취소</a>
          </div>
        </div>
        <div class="ly_toast NM_NEWSSTAND_TOAST" style="display: none">
          <p class="toast_msg">구독한 언론사에 추가되었습니다.</p>
        </div>
      </div>
      <div
        id="NM_NEWSSTAND_DEFAULT_THUMB"
        class="group_news"
        role="tabpanel"
        :style="num ? 'display: block' : 'display: none'"
        data-clk-prefix="nsd_all"
        data-nm-ui="page_simple">
        <a href="#" role="button" class="pm_btn_prev_l _NM_UI_PAGE_PREV" data-clk-custom="prev" style="">
          <i class="ico_btn" @click="onClickPrev(1)">
            <span class="blind">이전</span>
          </i>
        </a>
        <a href="#" role="button" class="pm_btn_next_l _NM_UI_PAGE_NEXT" data-clk-custom="next" style="display: none">
          <i class="ico_btn">
            <span class="blind">다음</span>
          </i>
        </a>
        <!-- _NM_UI_PAGE_CONTAINER -->
        <Page :pages="pages" ref="direction" />
        <!-- //_NM_UI_PAGE_CONTAINER -->
        <div class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_invalid" style="display: none">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE"
            ><i class="ico_close"></i><span class="blind">닫기</span></a
          >
          <p class="popup_msg">해당 언론사 사정으로 접근이 제한됩니다.</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE">확인</a>
          </div>
        </div>
        <div
          class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_undescribe_confirm"
          style="display: none"
          data-clk-sub="*a">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE" data-clk="usclose"
            ><i class="ico_close"></i><span class="blind">닫기</span></a
          >
          <p class="popup_msg"><strong class="NM_NEWSSTAND_POPUP_PNAME"></strong>을(를)<br />구독해지 하시겠습니까?</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CONFIRM" data-clk="usdone">확인</a>
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE" data-clk="uscancel">취소</a>
          </div>
        </div>
        <div class="ly_toast NM_NEWSSTAND_TOAST" style="display: none">
          <p class="toast_msg">구독한 언론사에 추가되었습니다.</p>
        </div>
      </div>
      <div id="NM_NEWSSTAND_MY_LIST" class="group_news" role="tabpanel" style="display: none" data-clk-prefix="nsd_myn">
        <a href="#" role="button" class="pm_btn_prev_l _NM_NEWSSTAND_LIST_prev_btn" data-clk-custom="prev"
          ><i class="ico_btn"></i><span class="blind">이전</span></a
        >
        <a href="#" role="button" class="pm_btn_next_l _NM_NEWSSTAND_LIST_next_btn" data-clk-custom="next"
          ><i class="ico_btn"></i><span class="blind">다음</span><span class="blind">다음</span></a
        >
        <div class="list_view">
          <div class="option_area">
            <div class="list_option_wrap">
              <ul class="list_option _NM_NEWSSTAND_MY_presslist">
                <!-- nvpaperlist:empty -->
              </ul>
            </div>
          </div>
          <div class="_NM_NEWSSTAND_ARTICLE_CONTAINER" data-clk-sub="*a"></div>
        </div>
        <div class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_invalid" style="display: none">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE"
            ><i class="ico_close"></i><span class="blind">닫기</span></a
          >
          <p class="popup_msg">해당 언론사 사정으로 접근이 일시 제한됩니다.</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE">확인</a>
          </div>
        </div>
        <div
          class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_undescribe_confirm"
          style="display: none"
          data-clk-sub="*a">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE" data-clk="usclose"
            ><i class="ico_close"></i><span class="blind">닫기</span></a
          >
          <p class="popup_msg"><strong class="NM_NEWSSTAND_POPUP_PNAME"></strong>을(를)<br />구독해지 하시겠습니까?</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CONFIRM" data-clk="usdone">확인</a>
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE" data-clk="uscancel">취소</a>
          </div>
        </div>
      </div>
      <div
        id="NM_NEWSSTAND_MY_THUMB"
        class="group_news"
        role="tabpanel"
        style="display: none"
        data-clk-prefix="nsd_myn">
        <a href="#" role="button" class="pm_btn_prev_l _NM_UI_PAGE_PREV" data-clk-custom="prev"
          ><i class="ico_btn"><span class="blind">이전</span></i></a
        >
        <a href="#" role="button" class="pm_btn_next_l _NM_UI_PAGE_NEXT" data-clk-custom="next"
          ><i class="ico_btn"><span class="blind">다음</span></i></a
        >
        <div class="_NM_UI_PAGE_CONTAINER" data-clk-sub="*p"></div>
        <div class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_invalid" style="display: none">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE"
            ><i class="ico_close"></i><span class="blind">닫기</span></a
          >
          <p class="popup_msg">해당 언론사 사정으로 접근이 제한됩니다.</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE">확인</a>
          </div>
        </div>
        <div
          class="ly_popup NM_NEWSSTAND_POPUP NM_NEWSSTAND_undescribe_confirm"
          style="display: none"
          data-clk-sub="*a">
          <a href="#" role="button" class="btn_close NM_NEWSSTAND_POPUP_CLOSE" data-clk="usclose"
            ><i class="ico_close"></i><span class="blind">닫기</span></a
          >
          <p class="popup_msg"><strong class="NM_NEWSSTAND_POPUP_PNAME"></strong>을(를)<br />구독해지 하시겠습니까?</p>
          <div class="popup_btn">
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CONFIRM" data-clk="usdone">확인</a>
            <a href="#" role="button" class="btn_confirm NM_NEWSSTAND_POPUP_CLOSE" data-clk="uscancel">취소</a>
          </div>
        </div>
      </div>
      <div id="NM_NEWSSTAND_MY_EMPTY" class="group_news" role="tabpanel" style="display: none">
        <div class="error_view">
          <div class="error_area">
            <strong class="error_msg">구독한 언론사가 없습니다.</strong>
            <p class="dsc_msg">
              언론사 구독 설정에서 관심있는 언론사를 구독하시면<br />언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로
              보실 수 있습니다.
            </p>
            <a href="http://newsstand.naver.com/config.html" class="link_redirect" target="_blank"
              >언론사 구독 설정하기</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./News.ts"></script>
<style></style>
