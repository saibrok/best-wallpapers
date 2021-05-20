<template>
  <div class="galery">
    <header class="galery__header">
      <h1 class="galery__title">Галерея фотографий</h1>
      <a
        class="card__current-screen-download-link link"
        href=""
        ref="randomPhotoLink"
        target="_blank"
        @click.prevent="openRandomPhoto"
      >
        I'll be lucky
      </a>
    </header>
    <ul class="galery__list photo-list">
      <li class="photo-item" v-for="photo in photoList" :key="photo.id">
        <PhotoCard :photo="photo" :currentPage="pages.currentPage" />
      </li>
    </ul>
    <BasePaginator
      :pages="pages"
      class="paginator"
      @clickOnPagination="changePage"
    />
  </div>
</template>

<script>
import BasePaginator from '@/components/BasePaginator.vue';
import PhotoCard from '@/components/PhotoCard.vue';

import PhotoService from '@/services/PhotoService.js';

export default {
  components: {
    PhotoCard,
    BasePaginator,
  },

  props: ['number'],

  data() {
    return {
      photoList: [],
      pages: {
        hasPrevPage: false,
        hasNextPage: false,
        totalNumberOfPages: 0,
        currentPage: parseInt(this.number),
        photoLimitPerPage: 12,
      },
      show: true,
    };
  },

  methods: {
    openRandomPhoto() {
      open(
        `https://picsum.photos/seed/${Date.now()}/${window.screen.width}/${
          window.screen.height
        }`,
      );
    },

    changePage(number) {
      this.pages.currentPage = number;
      this.$router.push({ name: 'list', params: { number } });
    },

    getPhotos() {
      PhotoService.getPhotos(
        this.pages.currentPage,
        this.pages.photoLimitPerPage,
      )
        .then((response) => {
          this.pages.hasPrevPage = response.headers.link.includes('rel="prev"');
          this.pages.hasNextPage = response.headers.link.includes('rel="next"');

          this.photoList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getTotalNumberOfPages(limit) {
      PhotoService.getNumberOfPages(limit).then(
        (response) => (this.pages.totalNumberOfPages = response),
      );
    },
  },

  created() {
    this.getPhotos();
    this.getTotalNumberOfPages(this.pages.photoLimitPerPage);
  },

  beforeRouteUpdate(to, from, next) {
    this.getPhotos();
    next();
  },
};
</script>

<style lang="scss" scoped>
.galery {
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.galery__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2rem 0;
}

.photo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.paginator {
  margin: 2rem auto;
}
</style>
