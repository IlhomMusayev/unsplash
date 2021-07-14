import '../App.css'
import logo from '../img/unsplash-logo_5f3e91b3e7bfe.png'
const Navbar = ({search}) => {

    return ( 
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="search__section">
                    {search}
                </div>
            </div>
        </>
     );
}
 
export default Navbar;