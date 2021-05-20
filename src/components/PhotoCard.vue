<template>
  <router-link
    class="photo-link"
    :to="{
      name: 'card',
      params: { id: parseInt(photo.id), prevPageNumber: currentPage },
    }"
  >
    <div class="photo-link__image-wrapper">
      <img
        class="photo-link__image"
        :src="getPreviewUrl(photo.download_url)"
        alt="Фотография"
      />
    </div>
    <div class="photo-link__description">
      <div class="photo-link__author photo-link__col">{{ photo.author }}</div>
      <div class="photo-link__number photo-link__col">№ {{ photo.id }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: { photo: Object, currentPage: Number },

  methods: {
    getPreviewUrl(baseUrl) {
      const splitUrl = baseUrl.split('/');

      const widhtThumb = 300;
      const heightThumb = 200;

      splitUrl[splitUrl.length - 2] = widhtThumb;
      splitUrl[splitUrl.length - 1] = heightThumb;

      return splitUrl.join('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.photo-link {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
    box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 10%);
  }
}

.photo-link__image-wrapper {
  position: relative;
  display: block;
  width: 100%;
  padding-top: 66.67%;
}

.photo-link__image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.photo-link__description {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
}

.photo-link__col {
  color: black;
}

.photo-link__author {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 70%;
}
</style>
