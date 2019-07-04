import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList'


class App extends Component {

  constructor(props) {
    super(props)


    this.state = ({
      movies: [
        {
          id: 0,
          img: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
          title: "Avengers: Infinity War"
        },
        {
          id: 1,
          img: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
          title: "	The Avengers"
        },
        {
          id: 3,
          img: "https://cps-static.rovicorp.com/2/Open/Disney_1040/Program/25738083/_derived_jpg_q90_480x340_m0/Toy-Story-4_2x3.jpg",
          title: "Toy Story 4"
        },
        {
          id: 4,
          img: "https://cps-static.rovicorp.com/2/Open/TMDB4_2462/Program/32770134/_derived_jpg_q90_480x340_m0/lionv.jpg",
          title: "The Lion King"
        },
        {
          id: 5,
          img: "https://cps-static.rovicorp.com/2/Open/Sony_Pictures_Television_369/Program/31768332/_derived_jpg_q90_480x340_m0/31768332_Spider-Man%20Far%20From%20Home_PosterT.jpg",
          title: "Spider-Man: Far From Home"
        }
      ],
      search: '',
    })

  }



  saveSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }

  render() {
    return (
      <div >
        <input className="name" onChange={this.saveSearch} type="text" placeholder="Movie name" />
        <div className="movie">
          
          {this.state.movies.filter(item => item.title.toUpperCase().includes(this.state.search.toUpperCase())).map(el => {
            return (
              <div style={{ background: "green", padding: '10px', margin: 10, border: "2px black solid", display: "flex", width: "500px" }} key={el.id}>
                <img src={el.img} style={{ width: 200 }} />
                <p style={{ fontSize: 30 }}>{el.title}</p>
              </div>
            )
          })}

          <main className="movie-app-main">
            <MovieList
              onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />
          </main>

        </div>
      </div>
    );
  }
}

export default App;
