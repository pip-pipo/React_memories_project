import axios from 'axios';

const url = 'http://localhost:5000/posts';

export default fetchPost = ()=> {axios.get(url);}