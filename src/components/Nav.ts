import { defineComponent } from "vue";

export default defineComponent({
  name: "Nav",
  props: {
    msg: String,
    msg2: String,
  },
  data() {
    return {
      todos: [
        { id: 1, text: "T1" },
        { id: 2, text: "T2" },
        { id: 3, text: "T3" },
        { id: 4, text: "T4" },
        { id: 5, text: "T5" },
      ],
    };
  },
});
