import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab1",
  data() {
    return {
      keyword: "",
      topPanel: {
        title: "I am a top panel",
      },
      leftPanel: {
        title: "I am a left panel",
      },
      middlePanel: {
        title: "I am a middle panel",
      },
      rightPanel: {
        title: "I am a right panel",
      },
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
