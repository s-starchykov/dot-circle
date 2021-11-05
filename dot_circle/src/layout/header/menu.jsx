import s from "./menu.module.scss";
import {useLocation, NavLink} from "react-router-dom";
import i18n from "i18next";
import {withNamespaces} from 'react-i18next';
import {useState} from "react";
import Logo from '../../assets/logo_title.png';
import {connect} from "react-redux";
import {compose} from "redux";


const Menu = ({t, menu}) => {

    // Change language
    const switchLang = (lng) => {
        // Set language code
        localStorage.setItem('i18nextLng', lng);

        // Change language wia i18n
        i18n.changeLanguage(lng).then(() => console.log(`Current language: ${lng}`));
    };

    // Define menu state wia hook
    const [isActive, setActive] = useState(false);
    // Set menu className to state
    const toggleClass = () => setActive(!isActive);

    // Get current path for props
    const location = useLocation().pathname;

    // Language switcher buttons
    const langButtons = () => ['en', 'ru', 'az'].map((l) => isActive
        ? <button key={l} className={`${s.open} ${i18n.language.includes(l) && s.current}`} onClick={() => switchLang(l)}>{l}</button>
        : <button key={l} className={`${i18n.language === l && s.current}`} onClick={() => switchLang(l)}>{l}</button>
    );

    // Render menu item
    let menuItems = () => menu.headerItems.map(i =>
        <li>
            <NavLink to={i.path} activeClassName={`${location === i.path && s.activeLink}`}>
                <i className={i.icon}/>
                <span className={s.links_name}>{t(i.title)}</span>
            </NavLink>
            <span className={s.tooltip}>{i.title}</span>
        </li>);

    return (
        <div className={`${s.sidebar} ${isActive && s.open} `} onMouseEnter={() => toggleClass()}
             onMouseLeave={() => toggleClass()}>
            <div className={s.logo_details}>
                <div className={s.logo_name}><img src={Logo} alt="Logo"/>DOT&CIRCLE</div>
                <i className={`bx btn ${isActive ? 'bx-menu-alt-right' : 'bx-menu'} ${s.btn}`} id="btn"/>
            </div>
            <ul className={s.item_list}>
                {menuItems()}
                <div className={s.langPanel}>{langButtons()}</div>
            </ul>
        </div>
    )
};

let mapStateToProps = (state) => ({menu: state.menuReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(Menu);