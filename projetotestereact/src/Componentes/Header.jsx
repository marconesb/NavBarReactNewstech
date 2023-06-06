import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Componentes/Header.css";




function HeaderNavbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Marcone</h3>
			<nav ref={navRef} className="navbar-right">
				<a href="/">Home</a>
				<a href="/Contato">Contato</a>
				<a href="/Sobre">Sobre</a>
				<button><a href="/#">Fale conosco</a></button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default HeaderNavbar;
