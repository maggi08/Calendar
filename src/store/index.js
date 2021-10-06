import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: {
      name: 2021,
      month: {
        name: 2021,
        months: {
          1: {
            name: "Январь",
            events: [],
          },
          2: {
            name: "Февраль",
            events: [],
          },
          3: {
            name: "Март",
            events: [],
          },
          4: {
            name: "Апрель",
            events: [],
          },
          5: {
            name: "Май",
            events: [],
          },
          6: {
            name: "Июнь",
            events: [],
          },
          7: {
            name: "Июль",
            events: [],
          },
          8: {
            name: "Август",
            events: [],
          },
          9: {
            name: "Сентябрь",
            events: [],
          },
          10: {
            name: "Октябрь",
            events: [],
          },
          11: {
            name: "Ноябрь",
            events: [],
          },
          12: {
            name: "Декабрь",
            events: [],
          },
        },
      },
    },
    years: [
      {
        name: 2020,
        months: {
          1: {
            name: "Январь",
            events: [],
          },
          2: {
            name: "Февраль",
            events: [],
          },
          3: {
            name: "Март",
            events: [],
          },
          4: {
            name: "Апрель",
            events: [],
          },
          5: {
            name: "Май",
            events: [],
          },
          6: {
            name: "Июнь",
            events: [],
          },
          7: {
            name: "Июль",
            events: [],
          },
          8: {
            name: "Август",
            events: [],
          },
          9: {
            name: "Сентябрь",
            events: [],
          },
          10: {
            name: "Октябрь",
            events: [],
          },
          11: {
            name: "Ноябрь",
            events: [],
          },
          12: {
            name: "Декабрь",
            events: [],
          },
        },
      },
      {
        name: 2021,
        months: {
          1: {
            name: "Январь",
            events: [],
          },
          2: {
            name: "Февраль",
            events: [],
          },
          3: {
            name: "Март",
            events: [],
          },
          4: {
            name: "Апрель",
            events: [],
          },
          5: {
            name: "Май",
            events: [],
          },
          6: {
            name: "Июнь",
            events: [],
          },
          7: {
            name: "Июль",
            events: [],
          },
          8: {
            name: "Август",
            events: [],
          },
          9: {
            name: "Сентябрь",
            events: [],
          },
          10: {
            name: "Октябрь",
            events: [],
          },
          11: {
            name: "Ноябрь",
            events: [],
          },
          12: {
            name: "Декабрь",
            events: [],
          },
        },
      },
      {
        name: 2022,
        months: {
          1: {
            name: "Январь",
            events: [],
          },
          2: {
            name: "Февраль",
            events: [],
          },
          3: {
            name: "Март",
            events: [],
          },
          4: {
            name: "Апрель",
            events: [],
          },
          5: {
            name: "Май",
            events: [],
          },
          6: {
            name: "Июнь",
            events: [],
          },
          7: {
            name: "Июль",
            events: [],
          },
          8: {
            name: "Август",
            events: [],
          },
          9: {
            name: "Сентябрь",
            events: [],
          },
          10: {
            name: "Октябрь",
            events: [],
          },
          11: {
            name: "Ноябрь",
            events: [],
          },
          12: {
            name: "Декабрь",
            events: [],
          },
        },
      },
    ],
  },
  mutations: {
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
  },
  actions: {
    findCurrentYear({ commit, state }, payload) {
      let findYear = (year) => {
        return year.name == payload;
      };
      let year = state.years.find(findYear);
      if (year) commit("setCurrentYear", year);
    },
    fetchTasks({ state }, payload) {
      return new Promise((resolve, reject) => {
        let findYear = (year) => {
          return year.name == payload.year;
        };
        let year = state.years.find(findYear);
        if (year) {
          let result = year.months[payload.month];
          resolve(result);
        } else reject("error");
      });
    },
    removeEvent({ state }, payload) {
      return new Promise((resolve, reject) => {
        let year = payload.date.split("-")[0];
        let month = parseInt(payload.date.split("-")[1]);
        let findYear = (item) => {
          return item.name == year;
        };
        let year_content = state.years.find(findYear);
        if (year_content) {
          let month_obj = year_content.months[month];
          let events = month_obj.events;
          events.splice(payload.index, 1);
          resolve();
        } else {
          reject("error");
        }
      });
    },
    editEvent({ state }, payload) {
      return new Promise((resolve, reject) => {
        let year = payload.date.split("-")[0];
        let month = parseInt(payload.date.split("-")[1]);
        let findYear = (item) => {
          return item.name == year;
        };
        let year_content = state.years.find(findYear);
        if (year_content) {
          let month_obj = year_content.months[month];
          let events = month_obj.events;
          events[payload.index] = payload;
          resolve();
        } else {
          reject("error");
        }
      });
    },
    postEvent({ state }, payload) {
      return new Promise((resolve, reject) => {
        let year = payload.date.split("-")[0];
        let month = parseInt(payload.date.split("-")[1]);
        let findYear = (item) => {
          return item.name == year;
        };
        let year_content = state.years.find(findYear);
        if (year_content) {
          let month_obj = year_content.months[month];
          let events = month_obj.events;
          events.push(payload);
          resolve();
        } else {
          reject("error");
        }
      });
    },
  },
  modules: {},
  getters: {
    getYears: (state) => {
      return state.years;
    },
    getCurrentYear: (state) => {
      return state.currentYear;
    },
  },
});
