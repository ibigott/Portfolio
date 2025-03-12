import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div className="NavigationBar">
                <h1><Link to="/">Home</Link></h1>
                <h1><Link to="/about">About</Link></h1>
                <h1><Link to="/projects">Projects</Link></h1>
                <h1><Link to="/resume">Résumé</Link></h1>
                <h1><Link to="/contact">Contact</Link></h1>
            </div>
        </div>
    );
}

export default NavigationBar;