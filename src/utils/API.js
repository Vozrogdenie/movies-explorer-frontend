const api_url = "https://api.nomoreparties.co/beatfilm-movies";

class Api {
    constructor(api_url){
        this._url = api_url;

    };
    
    _handleResponce(res){
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    };
    async getApiCards(){
        return fetch(`${this._url}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(this._handleResponce);
    };
}
const api = new Api(api_url);
export default api;