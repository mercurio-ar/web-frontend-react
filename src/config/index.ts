import development from './development';

const env = process.env.NODE_ENV;

let current;

switch (env) {
    case 'development': current = development;
    default: current = development;
}

const base = {
    MercurioApi: {
        baseURL: ""
    }
};

export default Object.assign({}, base, current);
