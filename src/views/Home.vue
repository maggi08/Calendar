<template>
  <div class="home container">
    <div class="home-title d-flex align-center">
      <svg
        class="home-title__icon"
        @click="getPrevYear"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="30" rx="6" fill="#F36E21" />
        <path
          d="M18.0227 9.35225C18.2224 9.55195 18.2406 9.86445 18.0772 10.0847L18.0227 10.1477L13.1707 15L18.0227 19.8523C18.2224 20.052 18.2406 20.3645 18.0772 20.5847L18.0227 20.6477C17.823 20.8474 17.5105 20.8656 17.2903 20.7022L17.2273 20.6477L11.9773 15.3977C11.7776 15.198 11.7594 14.8856 11.9228 14.6653L11.9773 14.6023L17.2273 9.35225C17.4469 9.13258 17.8031 9.13258 18.0227 9.35225Z"
          fill="white"
        />
      </svg>
      <h1 class="home-title__name">{{ getCurrentYear.name }}</h1>
      <svg
        class="home-title__icon"
        @click="getNextYear"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="30"
          y="30"
          width="30"
          height="30"
          rx="6"
          transform="rotate(-180 30 30)"
          fill="#F36E21"
        />
        <path
          d="M11.9773 20.6477C11.7776 20.448 11.7594 20.1355 11.9228 19.9153L11.9773 19.8523L16.8293 15L11.9773 10.1477C11.7776 9.94805 11.7594 9.63555 11.9228 9.41534L11.9773 9.35225C12.177 9.15255 12.4895 9.1344 12.7097 9.29779L12.7727 9.35225L18.0227 14.6023C18.2224 14.802 18.2406 15.1144 18.0772 15.3347L18.0227 15.3977L12.7727 20.6477C12.5531 20.8674 12.1969 20.8674 11.9773 20.6477Z"
          fill="white"
        />
      </svg>
    </div>

    <div class="home-box">
      <div
        class="home-box__item"
        v-for="(item, index) in getCurrentYear.months"
        :key="index"
      >
        <div class="d-flex align-end">
          <h2 class="home-box__month">{{ item.name }}</h2>

          <svg
            @click="goToPage(item)"
            class="home-box__addbtn"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="29.5"
              y="29.5"
              width="29"
              height="29"
              rx="5.5"
              transform="rotate(-180 29.5 29.5)"
              stroke="#F36E21"
            />
            <g clip-path="url(#clip0)">
              <path
                d="M22.2 14.2H15.8V7.79995C15.8 7.35845 15.4416 7 15 7C14.5584 7 14.2 7.35845 14.2 7.79995V14.2H7.79995C7.35845 14.2 7 14.5584 7 15C7 15.4416 7.35845 15.8 7.79995 15.8H14.2V22.2C14.2 22.6416 14.5584 23 15 23C15.4416 23 15.8 22.6416 15.8 22.2V15.8H22.2C22.6416 15.8 23 15.4416 23 15C23 14.5584 22.6416 14.2 22.2 14.2Z"
                fill="#F36E21"
              />
            </g>
          </svg>
        </div>
        <p class="home-box__events">
          {{
            item.events.length > 0
              ? `${item.events.length} событий`
              : `Нет событий`
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},

  mounted() {
    this.toDay();
  },
  computed: {
    ...mapGetters(["getYears", "getCurrentYear"]),
  },
  methods: {
    getPrevYear() {
      let prev_year = this.getCurrentYear.name - 1;
      this.$store.dispatch("findCurrentYear", prev_year);
    },
    getNextYear() {
      let next_year = this.getCurrentYear.name + 1;
      this.$store.dispatch("findCurrentYear", next_year);
    },
    toDay() {
      let year = new Date().getFullYear();
      this.$store.dispatch("findCurrentYear", year);
    },
    goToPage(item) {
      this.$router.push(`/${this.getCurrentYear.name}-${item.name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 40px auto;
  &-title {
    &__icon {
      transition: 0.22s;
      cursor: pointer;
      &:hover {
        rect {
          fill: white;
        }
        path {
          fill: #f36e21;
        }
      }
    }
    &__name {
      width: 80px;
      text-align: center;
      font-weight: 600;
      font-size: 36px;
      line-height: 43px;
      margin: 0 20px;
    }
  }
  &-box {
    margin-top: 40px;
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }
    &__item {
      height: 125px;
      padding: 30px;
      border-radius: 16px;
      background: #ffffff;
      box-shadow: 0px 10px 30px rgba(138, 149, 158, 0.1);
    }
    &__month {
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      color: #f36e21;
      margin-right: auto;
    }
    &__events {
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #222222;
      margin-top: 20px;
    }
    &__addbtn {
      transition: 0.22s;
      cursor: pointer;
      &:hover {
        fill: #f36e21;
        rect {
          stroke: #fff;
        }
        path {
          fill: #fff;
        }
      }
    }
  }
}
</style>
