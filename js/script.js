
const App = new Vue ({

  el: "#root",

  data:{

    movies:[],
    tvSeries:[],
    searchQuery:"",

  },

  methods:{

    searchMovie: function () {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "d49d990ef72ab3ecefdba4305a56dc85",
          query: this.searchQuery,
          language: "it-IT"
        }
      })
      .then((response)=>{
        MovieData = response.data.results;
        this.movies = MovieData;
        //dimezzo i voti dei film
        this.movies.forEach(element => element.vote_average = Math.floor(element.vote_average / 2));
      })

      axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "d49d990ef72ab3ecefdba4305a56dc85",
          query: this.searchQuery,
          language: "it-IT"
        }
      })
      .then((response)=>{
        TvData = response.data.results;
        this.tvSeries = TvData;
        //dimezzo i voti delle serie
        this.tvSeries.forEach(element => element.vote_average = Math.floor(element.vote_average / 2));

      })

      this.searchQuery = "";



    },

  },


});
