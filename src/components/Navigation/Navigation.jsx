import { NavLink } from 'react-router-dom';
import css from 'components/Navigation/Navigation.module.css';

const Navigate = () => { 
    return (
        <>
            <header className={css.header}>
                <ul className={css.nav}>
                    <li>
                        <NavLink className={css.nav_link} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={css.nav_link} to="/movies">Search Film</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Navigate;