import {useEffect, useState} from 'react'
import axios from 'axios'

const api = "https://us-central1-gndx-fake-api.cloudfunctions.net/api";

const useInitialState = () => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(api);
        setProducts(response.data);
    }, [])

    return {
        products
    }
}

export default useInitialState;