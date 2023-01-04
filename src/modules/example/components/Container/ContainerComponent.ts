import { Component, Vue } from 'vue-property-decorator';
import ShowcaseComponent from './ShowcaseComponent.vue';
import News from './News/News.vue';

@Component({
  components: {
    ShowcaseComponent,
    News,
  },
})
export default class ContainerComponent extends Vue {}
