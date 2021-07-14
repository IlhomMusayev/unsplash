import '../App.css'
import { useState } from 'react'
import Navbar from './Navbat'
import Posts from './post'
import UseFetch from './useFetch'
import Search from './search'

const Home = () => {
    const [value, setValue] = useState()
    const [page, setPage] = useState(1)
    const handleSearch = (e) =>{
        e.preventDefault()
    }
    
    const { data, isPending } = UseFetch(`https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=ATclCxmM7wyxooSatjppwppgX8HTNaN_BSFTQWDR-v8`)
    
    
    return ( 
        <>
            <div className="container">
                <Navbar search = {<Search setValue = {setValue} handleSearch = {handleSearch}/>}/>
                <Posts data = {data} isPending = {isPending} setPage = {setPage} page = {page ? page : 1}/>
            </div>
        </>
     );
}
 
export default Home;