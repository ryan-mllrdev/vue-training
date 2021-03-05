import { ISampleData } from "@/core/interfaces/ISampleData";
import axios from "axios";
import { defineComponent } from "vue";

interface DataObject {
  results: ISampleData[];
  filteredResults: ISampleData[];
  searchKeyword: string;
}

export default defineComponent({
  name: "SearchBar",
  props: {
    searchButtonText: String,
    searchBarTitle: String,
  },
  data(): DataObject {
    return {
      results: [],
      filteredResults: [],
      searchKeyword: "",
    };
  },
  methods: {
    getSampleResults() {
      axios.get("https://reqres.in/api/users").then((response) => {
        this.filteredResults = this.results = response.data.data;
        this.onResultsUpdated(this.filteredResults);
      });
    },
    onSearch() {
      const contains = (value: string, keyword: string) => {
        return value.toLowerCase().includes(keyword.toLocaleLowerCase());
      };
      this.filteredResults = this.results.filter((result) => {
        return (
          contains(result.first_name, this.searchKeyword) ||
          contains(result.last_name, this.searchKeyword) ||
          contains(result.email, this.searchKeyword) ||
          this.searchKeyword === ""
        );
      });
      this.onResultsUpdated(this.filteredResults);
    },
    onResultsUpdated(newResults: ISampleData[]) {
      this.$emit("onSearch", newResults);
    }
  },
  mounted() {
    this.getSampleResults();
  },
});
