<template>
  <select name="Sort Rating By" id="sort_dropdown" @change="changeOrder">
    <option value="-">DESC</option>
    <option value="">ASCE</option>
  </select>
  <div className="container-grid">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>

<script>
import axios from 'axios'
import GameCard from '../components/GameCard.vue'
const API_KEY = process.env.VUE_APP_API_KEY
export default {
  components: { GameCard },
  name: 'ViewGames',
  data: () => ({
    games: [],
    order: '-'
  }),
  mounted() {
    this.getGamesByGenre()
  },
  methods: {
    async getGamesByGenre() {
      // Get Genre Id here
      const genreId = parseInt(this.$route.params.genre_id)
      this.games = await axios
        .get(
          `https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}&ordering=${this.order}rating`
        )
        .then((result) => result.data.results)
    },
    changeOrder(e) {
      this.order = e.target.value
      this.getGamesByGenre()
    }
  }
}
</script>
