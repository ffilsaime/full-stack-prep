import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

export default function Header(){

    return (
        <header className="header">
            <div className="container">
                <a href="/" className="link">
                    <FontAwesomeIcon icon={faTags} className="fa-icon"/>
                    <span className="brand-title">Eazy Stickers</span>
                </a>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/" className="link">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="link">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="link">Contact</a>
                        </li>
                        <li>
                            <a href="/login" className="link">Login</a>
                        </li>
                        <li>
                            <a href="/cart" className="link">
                                <FontAwesomeIcon icon={faShoppingBasket} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}