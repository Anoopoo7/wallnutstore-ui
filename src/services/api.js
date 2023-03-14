import axios from 'axios'
import { baseurl } from '@use/config' 

const instance = axios.create({
  baseURL: baseurl,
})
export default instance