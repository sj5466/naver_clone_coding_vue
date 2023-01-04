import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from './Card.vue';
import { pagesData } from './News';

@Component({
  components: {
    Card,
  },
})
export default class Page extends Vue {
  @Prop() pages!: Array<pagesData>;
}
