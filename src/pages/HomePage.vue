<template>
  <div>
    <div class="search">
      <!-- Search Form Goes Here -->
      <form className="search" @submit="getSearchResults">
        <input type="text" :value="searchQuery" @change="handleChange"/>
        <button type="Submit">Search</button>
      </form>
      <h2>Search Results</h2>
      <section v-if="searched" class="search-results container-grid">
        <GameCard v-for="game in searchResults" :key="game.id" :game="game" @click="selectGame(game.id)"/>
      </section>
    </div>

    <div v-if="!searched" class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard v-for="genre in genres" :key="genre.id" :genre="genre" @click="selectGenre(genre.id)"/>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'
  const API_KEY = process.env.VUE_APP_API_KEY
  export default {
  components: { GenreCard, GameCard },
    name: 'HomePage',
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    mounted() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = [...res.data.results]
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = [...res.data.results]
        this.searched = true
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      selectGenre(genreId) {
        this.$router.push(`/games/${genreId}`)
      }
    }
  }
</script>
