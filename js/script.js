
const App = new Vue ({

  el: "#root",

  data:{

    movies:[],
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
        console.log(this.movies);
      })
      this.searchQuery = "";
    },

  },


});
