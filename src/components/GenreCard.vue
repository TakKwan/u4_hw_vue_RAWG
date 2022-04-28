<template>
  <div class="card">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src="genre.image_background" :alt="genre.name">
    </div>
    <div class="info-wrapper flex-col">
      <!-- Genre Name Goes Here -->
      <h4>{{ genre.name }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard',
    props: {
      genre: null
    }
  }
</script>
