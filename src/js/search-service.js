import axios from 'axios';

export default class SearchApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.per_page = 40;
    }
    async fetchPictures() {
        return await axios.get(`https://pixabay.com/api/?key=32913610-49b3d582ca5680640c97479c9&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.per_page}`)
        .then(data => {
            return data;
        });
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}