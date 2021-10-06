<template>
  <div class="tasks container">
    <BreadCrumbs :links="links" />
    <div class="tasks-header d-flex align-center justify-space-between">
      <h1 class="tasks-header__title">{{ title }}</h1>
      <button @click="addEvent" class="tasks-header__btn">
        Добавить событие
      </button>
    </div>

    <div class="tasks-box">
      <div
        class="tasks-box__item event"
        v-for="(item, index) in events"
        :key="index"
      >
        <div class="event-info d-flex align-center justify-space-between">
          <div class="event-info__time">
            <div class="event-info__time__div d-flex align-center">
              <svg
                class="event-info__time__div__svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.7935 1C16.2075 1 16.5435 1.336 16.5435 1.75L16.544 2.59781C18.0041 2.69792 19.2167 3.19805 20.075 4.0581C21.012 4.9991 21.505 6.3521 21.5 7.9751V17.0981C21.5 20.4301 19.384 22.5001 15.979 22.5001H7.521C4.116 22.5001 2 20.4011 2 17.0221V7.9731C2 4.83029 3.88706 2.81294 6.96469 2.59815L6.9653 1.75C6.9653 1.336 7.3013 1 7.7153 1C8.1293 1 8.4653 1.336 8.4653 1.75L8.465 2.579H15.043L15.0435 1.75C15.0435 1.336 15.3795 1 15.7935 1ZM20 9.904H3.5V17.0221C3.5 19.5881 4.928 21.0001 7.521 21.0001H15.979C18.572 21.0001 20 19.6141 20 17.0981L20 9.904ZM16.2012 16.1963C16.6152 16.1963 16.9512 16.5323 16.9512 16.9463C16.9512 17.3603 16.6152 17.6963 16.2012 17.6963C15.7872 17.6963 15.4472 17.3603 15.4472 16.9463C15.4472 16.5323 15.7782 16.1963 16.1922 16.1963H16.2012ZM11.7637 16.1963C12.1777 16.1963 12.5137 16.5323 12.5137 16.9463C12.5137 17.3603 12.1777 17.6963 11.7637 17.6963C11.3497 17.6963 11.0097 17.3603 11.0097 16.9463C11.0097 16.5323 11.3407 16.1963 11.7547 16.1963H11.7637ZM7.3169 16.1963C7.7309 16.1963 8.0669 16.5323 8.0669 16.9463C8.0669 17.3603 7.7309 17.6963 7.3169 17.6963C6.9029 17.6963 6.5619 17.3603 6.5619 16.9463C6.5619 16.5323 6.8939 16.1963 7.3079 16.1963H7.3169ZM16.2012 12.3096C16.6152 12.3096 16.9512 12.6456 16.9512 13.0596C16.9512 13.4736 16.6152 13.8096 16.2012 13.8096C15.7872 13.8096 15.4472 13.4736 15.4472 13.0596C15.4472 12.6456 15.7782 12.3096 16.1922 12.3096H16.2012ZM11.7637 12.3096C12.1777 12.3096 12.5137 12.6456 12.5137 13.0596C12.5137 13.4736 12.1777 13.8096 11.7637 13.8096C11.3497 13.8096 11.0097 13.4736 11.0097 13.0596C11.0097 12.6456 11.3407 12.3096 11.7547 12.3096H11.7637ZM7.3169 12.3096C7.7309 12.3096 8.0669 12.6456 8.0669 13.0596C8.0669 13.4736 7.7309 13.8096 7.3169 13.8096C6.9029 13.8096 6.5619 13.4736 6.5619 13.0596C6.5619 12.6456 6.8939 12.3096 7.3079 12.3096H7.3169ZM15.043 4.079H8.465L8.4653 5.041C8.4653 5.455 8.1293 5.791 7.7153 5.791C7.3013 5.791 6.9653 5.455 6.9653 5.041L6.96477 4.1017C4.72454 4.28989 3.5 5.64786 3.5 7.9731V8.404H20L20 7.9731C20.004 6.7381 19.672 5.7781 19.013 5.1181C18.4345 4.53791 17.5889 4.1914 16.5444 4.10218L16.5435 5.041C16.5435 5.455 16.2075 5.791 15.7935 5.791C15.3795 5.791 15.0435 5.455 15.0435 5.041L15.043 4.079Z"
                  fill="#F36E21"
                />
              </svg>
              {{ getDate(item.date) }}
            </div>
            <div class="event-info__time__div d-flex align-center">
              <svg
                class="event-info__time__div__svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM11.6612 7.0954C12.0762 7.0954 12.4112 7.4314 12.4112 7.8454V12.2674L15.8162 14.2974C16.1712 14.5104 16.2882 14.9704 16.0762 15.3264C15.9352 15.5614 15.6862 15.6924 15.4312 15.6924C15.3002 15.6924 15.1682 15.6584 15.0472 15.5874L11.2772 13.3384C11.0512 13.2024 10.9112 12.9574 10.9112 12.6934V7.8454C10.9112 7.4314 11.2472 7.0954 11.6612 7.0954Z"
                  fill="#F36E21"
                />
              </svg>

              {{ getTime(item.date) }}
            </div>
          </div>
          <div>
            <svg
              @click="editIt(item, index)"
              class="event-info__icons"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7505 20.4395C21.1645 20.4395 21.5005 20.7755 21.5005 21.1895C21.5005 21.6035 21.1645 21.9395 20.7505 21.9395H13.4975C13.0835 21.9395 12.7475 21.6035 12.7475 21.1895C12.7475 20.7755 13.0835 20.4395 13.4975 20.4395H20.7505ZM16.1163 3.65364C16.1663 3.69264 17.8393 4.99264 17.8393 4.99264C18.4473 5.35464 18.9223 6.00164 19.1023 6.76764C19.2813 7.52564 19.1513 8.30764 18.7343 8.96864C18.7315 8.97305 18.7287 8.97741 18.7191 8.99037L18.7115 9.00038C18.6439 9.08958 18.3496 9.46164 16.8646 11.3222C16.8508 11.3466 16.8351 11.3695 16.8181 11.3916C16.793 11.4244 16.7658 11.4544 16.7367 11.4818C16.6354 11.6093 16.5284 11.7433 16.4159 11.8842L16.188 12.1697C15.7177 12.7587 15.1599 13.4571 14.4981 14.2855L14.1584 14.7106C12.8807 16.3097 11.2444 18.3572 9.14827 20.9796C8.68927 21.5516 8.00127 21.8846 7.26227 21.8936L3.62327 21.9396H3.61327C3.26627 21.9396 2.96427 21.7016 2.88327 21.3626L2.06427 17.8916C1.89527 17.1726 2.06327 16.4306 2.52427 15.8546L11.9443 4.07264C11.9483 4.06864 11.9513 4.06364 11.9553 4.05964C12.9883 2.82464 14.8563 2.64264 16.1163 3.65364ZM10.894 7.787L3.69527 16.7916C3.52427 17.0056 3.46127 17.2816 3.52427 17.5466L4.20527 20.4316L7.24427 20.3936C7.53327 20.3906 7.80027 20.2616 7.97727 20.0416C8.88876 18.9012 10.0343 17.4679 11.2121 15.994L11.6288 15.4726L12.0462 14.9502C13.1508 13.5679 14.2421 12.2021 15.1551 11.0589L10.894 7.787ZM13.1103 5.01664L11.831 6.615L16.0918 9.88593C16.9119 8.8587 17.4514 8.18214 17.5013 8.11764C17.6653 7.85164 17.7293 7.47564 17.6433 7.11364C17.5553 6.74264 17.3243 6.42764 16.9913 6.22664C16.9203 6.17764 15.2353 4.86964 15.1833 4.82864C14.5493 4.32064 13.6243 4.40864 13.1103 5.01664Z"
                fill="#BDC0C4"
              />
            </svg>

            <svg
              @click="deleteIt(item, index)"
              class="event-info__icons"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3846 8.72001C19.7976 8.75401 20.1056 9.11501 20.0726 9.52801C20.0666 9.59601 19.5246 16.307 19.2126 19.122C19.0186 20.869 17.8646 21.932 16.1226 21.964C14.7896 21.987 13.5036 22 12.2466 22C10.8916 22 9.5706 21.985 8.2636 21.958C6.5916 21.925 5.4346 20.841 5.2456 19.129C4.9306 16.289 4.3916 9.59501 4.3866 9.52801C4.3526 9.11501 4.6606 8.75301 5.0736 8.72001C5.4806 8.70901 5.8486 8.99501 5.8816 9.40701C5.88479 9.45041 6.10514 12.184 6.34526 14.8887L6.39349 15.4285C6.51443 16.7728 6.63703 18.0646 6.7366 18.964C6.8436 19.937 7.3686 20.439 8.2946 20.458C10.7946 20.511 13.3456 20.514 16.0956 20.464C17.0796 20.445 17.6116 19.953 17.7216 18.957C18.0316 16.163 18.5716 9.47501 18.5776 9.40701C18.6106 8.99501 18.9756 8.70701 19.3846 8.72001ZM14.3454 2.00031C15.2634 2.00031 16.0704 2.61931 16.3074 3.50631L16.5614 4.76731C16.6435 5.18068 17.0062 5.48256 17.4263 5.48919L20.708 5.48931C21.122 5.48931 21.458 5.82531 21.458 6.23931C21.458 6.65331 21.122 6.98931 20.708 6.98931L17.4556 6.98915C17.4505 6.98926 17.4455 6.98931 17.4404 6.98931L17.416 6.98831L7.04162 6.98918C7.03355 6.98926 7.02548 6.98931 7.0174 6.98931L7.002 6.98831L3.75 6.98931C3.336 6.98931 3 6.65331 3 6.23931C3 5.82531 3.336 5.48931 3.75 5.48931L7.031 5.48831L7.13202 5.48191C7.50831 5.43309 7.82104 5.14731 7.8974 4.76731L8.1404 3.55131C8.3874 2.61931 9.1944 2.00031 10.1124 2.00031H14.3454ZM14.3454 3.50031H10.1124C9.8724 3.50031 9.6614 3.66131 9.6004 3.89231L9.3674 5.06231C9.33779 5.2105 9.29467 5.35332 9.23948 5.48957H15.2186C15.1634 5.35332 15.1201 5.2105 15.0904 5.06231L14.8474 3.84631C14.7964 3.66131 14.5854 3.50031 14.3454 3.50031Z"
                fill="#BDC0C4"
              />
            </svg>
          </div>
        </div>
        <h2 class="event-title">{{ item.name }}</h2>
        <h2 class="event-title">{{ item.description }}</h2>
      </div>
      <h1 v-if="events.length < 1" class="tasks-header__title">Нет событии</h1>
    </div>

    <div v-if="add_modal" class="modal">
      <div class="modal-container">
        <div class="modal-container__close">
          <svg
            @click="closeModal"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Iconly/Light-Outline/Close-Square"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Close-Square"
                transform="translate(2.000000, 2.000000)"
                fill="#f36e21"
              >
                <path
                  d="M14.334,0 C17.723,0 20,2.378 20,5.916 L20,14.084 C20,17.622 17.723,20 14.333,20 L5.665,20 C2.276,20 0,17.622 0,14.084 L0,5.916 C0,2.378 2.276,0 5.665,0 L14.334,0 Z M14.334,1.5 L5.665,1.5 C3.135,1.5 1.5,3.233 1.5,5.916 L1.5,14.084 C1.5,16.767 3.135,18.5 5.665,18.5 L14.333,18.5 C16.864,18.5 18.5,16.767 18.5,14.084 L18.5,5.916 C18.5,3.233 16.864,1.5 14.334,1.5 Z M8.1305,7.0626 L9.998,8.93 L11.8645,7.0647 C12.1575,6.7717 12.6315,6.7717 12.9245,7.0647 C13.2175,7.3577 13.2175,7.8317 12.9245,8.1247 L11.058,9.99 L12.9265,11.8596 C13.2195,12.1526 13.2195,12.6266 12.9265,12.9196 C12.7805,13.0666 12.5875,13.1396 12.3965,13.1396 C12.2045,13.1396 12.0125,13.0666 11.8665,12.9196 L9.998,11.05 L8.1325,12.9167 C7.9865,13.0637 7.7945,13.1367 7.6025,13.1367 C7.4105,13.1367 7.2185,13.0637 7.0725,12.9167 C6.7795,12.6237 6.7795,12.1497 7.0725,11.8567 L8.938,9.99 L7.0705,8.1226 C6.7775,7.8296 6.7775,7.3556 7.0705,7.0626 C7.3645,6.7696 7.8385,6.7696 8.1305,7.0626 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </g>
          </svg>
        </div>

        <h1 class="modal-container__title">Добавить событие</h1>

        <form
          ref="form"
          @submit.prevent="submitEvent"
          class="modal-container__form form"
        >
          <p class="form-label">Введите название</p>
          <input
            class="form-input"
            v-model="form.name"
            placeholder="Название"
            type="text"
            required
          />

          <p class="form-label">Дата и время события</p>

          <input
            class="form-input"
            v-model="form.date"
            placeholder="Дата и время"
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            :min="minDate"
            :max="maxDate"
            required
          />

          <p class="form-label">Введите описание</p>
          <textarea
            class="form-input form-textarea"
            v-model="form.description"
            placeholder="Описание"
            type="text"
            required
          />

          <button class="form-btn">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs";
export default {
  data: () => ({
    form: {},
    add_modal: false,
    title: "",
    events: [],
    months: {
      Январь: 1,
      Февраль: 2,
      Март: 3,
      Апрель: 4,
      Май: 5,
      Июнь: 6,
      Июль: 7,
      Август: 8,
      Сентябрь: 9,
      Октябрь: 10,
      Ноябрь: 11,
    },
    links: [
      {
        path: "/",
        name: "Главная",
      },
      {
        path: "/",
        name: "2021",
      },
    ],
  }),
  components: {
    BreadCrumbs,
  },
  computed: {
    year() {
      return this.$route.params.year.split("-")[0];
    },
    month() {
      return this.months[this.$route.params.year.split("-")[1]];
    },
    minDate() {
      let month = this.month.length == 2 ? this.month : `0${this.month}`;
      let result = `${this.year}-${month}-01T00:00`;
      return result;
    },
    maxDate() {
      let last_day = "" + new Date(this.year, this.month, 0).getDate();
      let month = this.month.length == 2 ? this.month : `0${this.month}`;
      last_day = last_day.length == 2 ? last_day : `0${last_day}`;
      let result = `${this.year}-${month}-${last_day}T23:59`;
      return result;
    },
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    getTime(date) {
      return date.split("T")[1];
    },
    getDate(date) {
      return date.split("T")[0];
    },
    closeModal() {
      this.add_modal = false;
    },
    addEvent() {
      this.form = {};
      this.add_modal = true;
      this.isEdit = false;
    },
    async submitEvent() {
      let api = "postEvent";
      if (this.isEdit) api = "editEvent";
      await this.$store
        .dispatch(api, this.form)
        .then(() => {
          this.closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteIt(item, index) {
      this.form = item;
      this.form.index = index;
      await this.$store
        .dispatch("removeEvent", this.form)
        .then(() => {
          this.closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async editIt(item, index) {
      this.form = item;
      this.form.index = index;
      this.add_modal = true;
      this.isEdit = true;
    },
    setLinks() {
      this.links[1].path = `${this.$route.path}`;
      this.links[1].name = this.$route.params.year;
    },
    async fetchTasks() {
      try {
        let tasks = await this.$store.dispatch("fetchTasks", {
          year: this.year,
          month: this.month,
        });
        this.title = tasks.name;
        this.events = tasks.events;
        console.log(this.events);
        this.setLinks();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tasks {
  margin: 40px auto;
  &-header {
    margin-top: 30px;
    &__title {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
    &__btn {
      width: 200px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      background: #f36e21;
      border: 1px solid transparent;
      transition: 0.22s;

      &:hover {
        background: #fff;
        color: #222222;
        border: 1px solid #f36e21;
      }
    }
  }

  &-box {
    margin-top: 40px;
    min-height: 100%;
    background: #ffffff;
    border-radius: 16px;
    padding: 40px;

    .event {
      padding: 22px;
      background: #f3f5f8;
      border-radius: 16px;
      margin-bottom: 20px;

      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      &:last-child {
        margin-bottom: 0;
      }
      &-info {
        &__time {
          display: flex;
          align-items: center;
        }
        &__time__div {
          margin-right: 80px;
          &__svg {
            margin-right: 12px;
          }
        }
        &__icons {
          margin-left: 20px;
          cursor: pointer;
        }
      }

      &-title {
        margin-top: 17px;
      }
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;

  &-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    max-width: 680px;
    padding: 40px;
    background: #fff;
    border-radius: 16px;
    height: 554px;

    &__close {
      position: absolute;
      right: 30px;
      top: 30px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    &__title {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }

    &__form {
      margin-top: 40px;
    }
  }
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-label {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;
  }
  &-input {
    height: 50px;
    padding: 0 20px;
    background: #f3f5f8;
    border-radius: 16px;
    margin-bottom: 20px;
    margin-top: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-textarea {
    padding: 14px 20px;
    height: 80px;
    resize: none;
  }

  &-btn {
    width: 100%;
    height: 50px;
    background: #f36e21;
    box-shadow: 0px 10px 30px rgba(138, 149, 158, 0.1);
    border-radius: 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.22s;
    margin-top: 40px;
    color: #fff;
    &:hover {
      background: #fff;
      border: 1px solid #f36e21;
      color: #f36e21;
      cursor: pointer;
    }
  }
}
</style>
