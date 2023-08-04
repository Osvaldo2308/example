
    import axios from 'axios';

    const sendCRM = axios.create({
        baseURL: 'http://sinnteccrm.test/' 
    })
    
    export default sendCRM
