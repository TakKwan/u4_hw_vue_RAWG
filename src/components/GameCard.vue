<template>
  <div class="card game-card" @click="selectGame(game.id)">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src="game.background_image" :alt="game.name">
    </div>
    <div class="info-wrapper flex-col">
      <!-- Game Name Goes Here -->
      {{ game.name }}
      Rating: {{ game.rating }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: {
      game: null
    },
    methods: {
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
    }
  }
</script>
