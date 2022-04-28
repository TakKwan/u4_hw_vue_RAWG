<template>
  <div class="game-content">
    <section class="image-container">
      <div v-if="gameDetails">
        <img :src="gameDetails.background_image" :alt="gameDetails.name" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div v-if="gameDetails">
        <h3>{{ gameDetails.name }}</h3>
        <p v-html="gameDetails.description"></p>
      </div>
      <p id="game_description"></p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_API_KEY
export default {
  name: 'GameDetails',
  data: () => ({
    gameDetails: null
  }),
  mounted() {
    this.getGameDetails()
    if (this.gameDetails) {
      document.getElementById('game_description').innerHTML =
        this.gameDetails.description
    }
  },
  methods: {
    async getGameDetails() {
      // Get game id from router here
      const gameId = parseInt(this.$route.params.game_id)
      this.gameDetails = await axios
        .get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
        .then((result) => result.data)
    }
  }
}
</script>
