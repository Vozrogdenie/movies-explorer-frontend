const api_headers = {
    url: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json'
    }
};
const media_url = 'https://api.nomoreparties.co';

class Api {
    constructor(api_headers) {
        this._url = api_headers.url;
        this._headers = api_headers.headers;
    };

    _getToken() {
        return localStorage.getItem("jwt");
    }

    _handleResponce(res) {
        if (!res.ok) {
            return Promise.reject(`${res.status}`);
        }
        return res.json();
    };

    async getMoviesCards() {
        return fetch(`${media_url}/beatfilm-movies`, {
            headers: this._headers
        }).then(this._handleResponce);
    };

    async getSavedMoviesCards() {
        return fetch(`${this._url}/api/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...api_headers.headers
            }
        }).then(this._handleResponce);
    };

    async updateProfile(email, name ) {
        return fetch(`${this._url}/api/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ email, name  }),
        }).then(this._handleResponse);
    }
    async getApiUser() {
        return fetch(`${this._url}/api/users/me`, {
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...api_headers.headers
            }
        }).then(this._handleResponce);
    };

    // async setApiUsers(name, about) {
    //     return fetch(`${this._url}/users/me`, {
    //         method: "PATCH",
    //         headers: {
    //             Authorization: `Bearer ${this._getToken()}`,
    //             ...api_headers.headers
    //         },
    //         body: JSON.stringify({
    //             name,
    //             about
    //         })
    //     }).then(this._handleResponce);
    // };

    saveMovie(movie) {
        const movieToSave = {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: media_url+movie.image.url,
            trailerLink: movie.trailerLink,
            trailer: movie.trailerLink,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            thumbnail: media_url+movie.image.url,
            movieId: movie.id
        };
        console.log(movieToSave)

        return fetch(`${this._url}/api/movies`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...api_headers.headers
            },
            body: JSON.stringify(movieToSave)
        }).then(this._handleResponce);
    };

    removeMovieFromSaved(movie_id) {
        return fetch(`${this._url}/api/movies/${movie_id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${this._getToken()}`,
                ...api_headers.headers
            }
        }).then(this._handleResponce);
    };

    // addLike(card) {
    //     return fetch(`${this._url}/api/movies`, {
    //         method: 'PUT',
    //         headers: {
    //             Authorization: `Bearer ${this._getToken()}`,
    //             ...api_headers.headers
    //         }
    //     }).then(this._handleResponce);
    // }
      
    // removeLike(card) {
    //     return fetch(`${this._url}/api/movies`, {
    //         method: 'DELETE',
    //         headers: {
    //             Authorization: `Bearer ${this._getToken()}`,
    //             ...api_headers.headers
    //         }
    //     }).then(this._handleResponce);
    // };

    // changeAvatar(Avatar) {
    //     return fetch(`${this._url}/users/me/avatar`, {
    //         method: 'PATCH',
    //         headers: {
    //             Authorization: `Bearer ${this._getToken()}`,
    //             ...api_headers.headers
    //         },
    //         body: JSON.stringify({
    //             avatar: Avatar,
    //         })
    //     }).then(this._handleResponce);
    // };

    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
            return this.removeLike(id);
        } else {
            return this.addLike(id);
        }
    }

};

const api = new Api(api_headers);
export default api;