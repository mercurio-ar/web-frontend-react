import Axios from 'axios';
import config from '../config';

import { MercurioApi } from '../apis';


const { baseURL } = config.MercurioApi;

export const apisInitialState = {
    mercurioApi: new MercurioApi(Axios.create({
        baseURL
    })),
};

export default apisInitialState;
