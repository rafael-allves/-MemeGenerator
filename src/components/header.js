import logo from '../assets/logo.svg';
import '../styles/header.css'

export default function Header(){
    return (
        <header className="root-header">
            <nav>
                <div>
                    <img src={logo} alt=""/>
                    <h1>Meme Generator</h1>
                </div>
                <div>
                    <p>React Course - Project 3</p>
                </div>
            </nav>
        </header>
    );
}