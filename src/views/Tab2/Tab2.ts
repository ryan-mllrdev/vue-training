import { ISampleData } from "@/core/interfaces/ISampleData";
import { defineComponent } from "vue";
import SearchBar from "../../components/SearchBar/SearchBar.vue";

interface DataObject {
  prices: ISampleData[];
}

export default defineComponent({
  components: {
    SearchBar,
  },
  name: "Tab2",
  data(): DataObject {
    return {
      prices: [],
    };
  },
  methods: {
    onSearch(prices: ISampleData[]) {
      this.prices = prices;
    },
  },
});
