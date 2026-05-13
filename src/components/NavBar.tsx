import Link from 'next/link';

const NavBar = () => {
    return(
        <nav>
            <div className="nav-bar">

                <Link className="nav-link" href='/'>Home</Link>

                <Link className="nav-link" href='/about'>About</Link>

                <Link className="nav-link" href='/projects'>Projects</Link>

                {/*<Link className="nav-link" href='/resume'>Resume</Link>*/}
            
                <Link className="nav-link" href='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;