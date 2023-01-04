import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ListView from './ListView.vue';
import Page from './Page.vue';
// import newsData from '@/assets/News.json';

export interface NM_NEWSSTAND_DATA {
  id: number;
  href: string;
  target: string | null;
  type: string | null;
  clk: string;
  controls: string | null;
  icon: string;
  title: string;
}
export interface pagesData {
  id: number;
  cards: Array<cardData>;
}
export interface cardData {
  id: number;
  img: string;
  alt: string;
  href: string;
}
@Component({
  components: {
    ListView,
    Page,
  },
})
export default class NewsComponent extends Vue {
  num: number | null = 0; // newsstans.id를 인덱스 번호를 인식하는 변수

  //뉴스스탠스 메뉴 아이콘 객체
  newsStans: Array<NM_NEWSSTAND_DATA> = [
    {
      id: 0,
      href: '#',
      target: null,
      type: 'list',
      clk: 'articleview',
      controls: 'NM_NEWSSTAND_DEFAULT_LIST',
      icon: 'ico_list',
      title: '리스트형',
    },
    {
      id: 1,
      href: '#',
      target: null,
      type: 'thumb',
      clk: 'pressview',
      controls: 'NM_NEWSSTAND_DEFAULT_THUMB',
      icon: 'ico_tile',
      title: '썸네일형',
    },
    {
      id: 2,
      href: 'http://newsstand.naver.com/config.html',
      target: '_blank',
      type: null,
      clk: 'set',
      controls: null,
      icon: 'ico_set',
      title: '설정',
    },
  ];

  onClickNewsMenu(idx: number, e: Event) {
    /*idx 파라미터로 받은 인자를 this.num에 할당
    aria-selected 부분에 삼항연산자로 newsstans객체 id 와 num 같으면 값을 true로 전환 아니면 false*/
    this.num = idx;

    /*설정버튼은 prevnet가 걸리면 링크가 뜨지 않기 때문에 조건문 사용*/
    if (idx === 0 || idx === 1) {
      e.preventDefault();
    }
  }

  created() {
    this.pushData();
  }

  pushData() {
    for (let i = 0; i < 3; i++) {
      this.pages.push({
        id: i,
        cards: [],
      });
    }
  }

  pages: Array<pagesData> = [
    {
      id: 0,
      cards: [
        {
          id: 0,
          img: 'https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png',
          alt: '스포츠서울',
          href: 'https://newsstand.naver.com/?list=&pcode=073',
        },
        {
          id: 1,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png',
          alt: '프레시안',
          href: 'https://newsstand.naver.com/?list=&pcode=002',
        },
        {
          id: 2,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png',
          alt: '중앙데일리',
          href: 'https://newsstand.naver.com/?list=&pcode=330',
        },
        {
          id: 3,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png',
          alt: 'YTN',
          href: 'https://newsstand.naver.com/?list=&pcode=052',
        },
        {
          id: 4,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/376.png',
          alt: '지지통신',
          href: 'https://newsstand.naver.com/?list=&pcode=376',
        },
        {
          id: 5,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/030.png',
          alt: '전자신문',
          href: 'https://newsstand.naver.com/?list=&pcode=030',
        },
        {
          id: 6,
          img: 'https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png',
          alt: '중앙일보',
          href: 'https://newsstand.naver.com/?list=&pcode=025',
        },
        {
          id: 7,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png',
          alt: '연합뉴스TV',
          href: 'https://newsstand.naver.com/?list=&pcode=422',
        },
        {
          id: 8,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png',
          alt: '미디어오늘',
          href: 'https://newsstand.naver.com/?list=&pcode=006',
        },
        {
          id: 9,
          img: 'https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png',
          alt: '서울신문',
          href: 'https://newsstand.naver.com/?list=&pcode=081',
        },
        {
          id: 10,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png',
          alt: '아시아경제',
          href: 'https://newsstand.naver.com/?list=&pcode=277',
        },
        {
          id: 11,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png',
          alt: '뉴데일리',
          href: 'https://newsstand.naver.com/?list=&pcode=327',
        },
        {
          id: 12,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/076.png',
          alt: '스포츠조선',
          href: 'https://newsstand.naver.com/?list=&pcode=076',
        },
        {
          id: 13,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png',
          alt: 'MBC',
          href: 'https://newsstand.naver.com/?list=&pcode=214',
        },
        {
          id: 14,
          img: 'https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png',
          alt: 'OSEN',
          href: 'https://newsstand.naver.com/?list=&pcode=109',
        },
        {
          id: 15,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/988.png',
          alt: '이웃집과학자',
          href: 'https://newsstand.naver.com/?list=&pcode=988',
        },
        {
          id: 16,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/991.png',
          alt: '데일리NK',
          href: 'https://newsstand.naver.com/?list=&pcode=991',
        },
        {
          id: 17,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/965.png',
          alt: '전기신문',
          href: 'https://newsstand.naver.com/?list=&pcode=965',
        },
        {
          id: 18,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/928.png',
          alt: '컴퓨터월드',
          href: 'https://newsstand.naver.com/?list=&pcode=928',
        },
        {
          id: 19,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/328.png',
          alt: '컴퓨터월드',
          href: 'https://newsstand.naver.com/?list=&pcode=328',
        },
        {
          id: 20,
          img: 'https://s.pstatic.net/static/newsstand/up/2022/0315/nsd181452869.png',
          alt: '한국농어촌방송',
          href: 'https://newsstand.naver.com/?list=&pcode=811',
        },
        {
          id: 21,
          img: 'https://s.pstatic.net/static/newsstand/up/2020/1228/nsd1681569.png',
          alt: 'SBS연예뉴스',
          href: 'https://newsstand.naver.com/?list=&pcode=416',
        },
        {
          id: 22,
          img: 'https://s.pstatic.net/static/newsstand/up/2022/1103/nsd124326426.png',
          alt: '법률신문',
          href: 'https://newsstand.naver.com/?list=&pcode=122',
        },
        {
          id: 23,
          img: 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/296.png',
          alt: '코메디닷컴',
          href: 'https://newsstand.naver.com/?list=&pcode=296',
        },
      ],
    },
  ];

  onClickPrev(item: number) {}
}
