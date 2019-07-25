import axios from 'axios'


const instance = axios.create(
    {
        baseURL:'http://localhost:8088/' 
    }
)

const getAllPackages = () => instance.get('luggages')
const addOrder = (luggage) => instance.post('luggages', luggage)
export { getAllPackages, addOrder}  