<template>
  <div class="paginator">
    <div class="paginator__page">
      <div
        class="paginator__link"
        :class="{ disabled: !pages.hasPrevPage }"
        @click="openPageByNumber(1)"
      >
        &lt;&lt;
      </div>
    </div>
    <div class="paginator__page">
      <div
        class="paginator__link"
        :class="{ disabled: !pages.hasPrevPage }"
        @click="openPageByNumber(pages.currentPage - 1)"
      >
        &lt;
      </div>
    </div>
    <ul class="paginator__page-list">
      <li
        v-for="pageNumber in pageNumbersList"
        :key="pageNumber"
        class="paginator__page"
      >
        <div
          class="paginator__link"
          :class="{ active: pages.currentPage === pageNumber }"
          @click="openPageByNumber(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </li>
    </ul>
    <div class="paginator__page">
      <div
        class="paginator__link"
        :class="{ disabled: !pages.hasNextPage }"
        @click="openPageByNumber(pages.currentPage + 1)"
      >
        &gt;
      </div>
    </div>
    <div class="paginator__page">
      <div
        class="paginator__link"
        :class="{ disabled: !pages.hasNextPage }"
        @click="openPageByNumber(pages.totalNumberOfPages)"
      >
        &gt;&gt;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { pages: Object },

  computed: {
    pageNumbersList() {
      const pageNumbersList = [];

      for (
        let i = this.pages.currentPage - 2;
        i <= this.pages.currentPage + 2;
        i++
      ) {
        pageNumbersList.push(i);
      }

      return pageNumbersList.filter(
        (number) => number > 0 && number <= this.pages.totalNumberOfPages,
      );
    },
  },

  methods: {
    openPageByNumber(number) {
      this.$emit('clickOnPagination', number);
    },
  },
};
</script>

<style lang="scss" scoped>
.paginator {
  display: flex;
  align-items: center;
}

.paginator__page-list {
  display: flex;
  margin: 0 1rem;
}

.paginator__page {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.5rem;
}

.paginator__link {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: currentColor;
  border: 1px solid currentColor;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: wheat;
    color: black;
  }

  &.disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
  }

  &.active {
    pointer-events: none;
    background-color: wheat;
    color: black;
  }
}
</style>
