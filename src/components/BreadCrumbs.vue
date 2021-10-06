<template>
  <div class="bread">
    <router-link
      class="bread-link"
      :to="`${item.path}`"
      v-for="(item, index) in links"
      :key="index"
    >
      {{ item.name }}
      <span v-if="index + 1 < links.length" class="bread-link__span"> > </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: { links: Array },
};
</script>

<style lang="scss" scoped>
.bread {
  &-link {
    margin-left: 10px;
    font-size: 16px;
    line-height: 20px;
    color: #bbc2d0;
    text-decoration: none;
    &__span {
      font-size: 16px;
      line-height: 20px;
      color: #bbc2d0;
      text-decoration: none;
      margin-left: 10px;
    }
    &:last-child {
      color: #f36e21;
    }
  }
}
</style>
