<template>
  <div class="card">
    <header class="card__header">
      <router-link
        class="card__header-link link"
        title="Галерея фотографий"
        :to="{
          name: 'list',
          params: { number: !isNaN(prevPageNumber) ? prevPageNumber : 1 },
        }"
      >
        Назад к Фотолист
      </router-link>
    </header>
    <div class="card__info">
      <div
        class="card__preview"
        :class="{ 'full-screen': isOpen }"
        @click="toggleFullScreen"
        ref="preview"
      >
        <img
          class="card__preview-image"
          :src="photo.lowQualityUrl"
          @load="onImgLoad"
          alt="Фотография"
          ref="photo"
        />
        <div v-if="isLoading" class="card__preview-loader-wrapper">
          <BaseLoader class="card__preview-loader" />
        </div>
        <div v-if="isError" class="card__preview-error">
          ОШИБКА ЗАГРУЗКИ ФОТОРГАФИИ
        </div>
      </div>
      <div v-if="!isError" class="card__description">
        <div class="card__author">
          <b>Автор:</b> {{ photo.author }} :: <i>Фото №:</i> {{ photo.id }}
        </div>
        <a
          class="card__description-link link"
          :href="photo.url"
          target="_blank"
        >
          Подробнее
        </a>
        |
        <a
          class="card__preview-link link"
          :href="photo.download_url"
          target="_blank"
        >
          Скачать оригинал {{ photo.width }}x{{ photo.height }}
        </a>
        |
        <a
          class="card__current-screen-download-link link"
          :href="currentScreenDownloadLink"
          target="_blank"
        >
          Ваше разрешение {{ screenWidth }}x{{ screenHeight }}
        </a>
      </div>
    </div>
    <div class="card__buttons">
      <button v-if="this.id > 0" class="button-prev button" @click="prevPage">
        &lt;&nbsp;Предыдущая
      </button>
      <button
        v-if="this.id < 1084"
        class="button-next button"
        @click="nextPage"
      >
        Следующая&nbsp;&gt;
      </button>
    </div>
    <div class="card__text">
      <h3 class="card__text-title">{{ photo.title }}</h3>
      <div class="card__text-description" v-html="photo.description"></div>
    </div>
  </div>
</template>

<script>
import PhotoService from '@/services/PhotoService.js';
import BaseLoader from '@/components/BaseLoader.vue';

import axios from 'axios';

export default {
  components: { BaseLoader },

  props: { id: Number, prevPageNumber: Number },

  data() {
    return {
      photo: {},
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      currentPhotoNumber: 0,
      isLoading: true,
      isError: false,
      isOpen: false,
    };
  },

  computed: {
    currentScreenDownloadLink() {
      return `https://picsum.photos/id/${this.id}/${this.screenWidth}/${this.screenHeight}`;
    },
  },

  methods: {
    getLowQualityUrl(baseUrl, width, height) {
      const splitUrl = baseUrl.split('/');

      const widhtThumb = 800;
      const compressionRatio = width / widhtThumb;
      const heightThumb = parseInt(height / compressionRatio);

      splitUrl[splitUrl.length - 2] = widhtThumb;
      splitUrl[splitUrl.length - 1] = heightThumb;

      return splitUrl.join('/');
    },

    setAspectRatio(width, height) {
      const aspectRatio = width / height;
      const newPadding = 100 / aspectRatio;
      this.$refs.preview.style.paddingTop = `${newPadding}%`;
    },

    toggleFullScreen() {
      this.isOpen = !this.isOpen;
    },

    nextPage() {
      this.currentPhotoNumber = +this.id + 1;
      this.$router.replace({
        name: 'card',
        params: {
          id: this.currentPhotoNumber,
          prevPageNumber: this.prevPageNumber,
        },
      });
    },

    prevPage() {
      this.currentPhotoNumber = +this.id - 1;
      this.$router.replace({
        name: 'card',
        params: {
          id: this.currentPhotoNumber,
          prevPageNumber: this.prevPageNumber,
        },
      });
    },

    getPhotoById(id) {
      this.isLoading = true;
      this.isError = false;

      PhotoService.getPhotoById(id)
        .then((response) => {
          this.photo = response.data;
          this.photo.lowQualityUrl = this.getLowQualityUrl(
            this.photo.download_url,
            this.photo.width,
            this.photo.height,
          );
          this.setAspectRatio(this.photo.width, this.photo.height);
        })
        .then(() => {
          axios
            .get('https://fish-text.ru/get?type=title&number=1&format=json')
            .then((response) => {
              this.photo.title = response.data.text;
            });
        })
        .then(() => {
          axios
            .get('https://fish-text.ru/get?type=paragraph&number=3&format=html')
            .then((response) => {
              this.photo.description = response.data;
            });
        })
        .catch((error) => {
          this.isError = true;
          this.onImgLoad();
          this.photo = {};
          console.log(error);
        });
    },

    onImgLoad() {
      this.isLoading = false;
    },
  },

  beforeRouteUpdate(to, from, next) {
    this.getPhotoById(this.currentPhotoNumber);
    next();
  },

  created() {
    this.getPhotoById(this.id);
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__header {
  margin-bottom: 2rem;
}

.card__header-link {
  font-size: 3rem;
}

.card__info {
  max-width: 800px;
  width: 100%;
  font-size: 1.2rem;
}

.card__description {
  margin: 2rem;
}

.card__author {
  margin-bottom: 0.5rem;
}

.card__preview {
  width: 100%;
  position: relative;
  padding-top: 66.67%;
  overflow: hidden;
  background-color: dimgray;
}

.card__preview-image {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  cursor: pointer;
}

.card__text {
  margin-bottom: 2rem;
  max-width: 1100px;
}

.card__text-title,
.card__text-description {
  margin-bottom: 0.5rem;
}

.card__preview-loader-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222222dd;
}

.card__preview-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.link {
  display: inline-block;
  color: currentColor;
  // text-decoration: none;
  &:hover {
    text-decoration-line: underline;
  }
}

.card__buttons {
  display: flex;
  margin-bottom: 2rem;
}

.button {
  border: none;
  background: none;
  color: currentColor;
  cursor: pointer;
  font-size: 1.2rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    text-decoration-line: underline;
  }
}

.full-screen {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #222222dd;

  & .card__preview-image {
    top: 0;
    left: 0;
    transform: translate(0, 0);
    object-fit: contain;
    max-height: 100vh;
    max-width: 100vw;
  }
}
</style>
