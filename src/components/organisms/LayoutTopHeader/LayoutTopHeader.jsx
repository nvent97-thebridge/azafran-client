import menuIcon from "../../../assets/menuicon.svg";
import saffronIcon from "../../../assets/saffronicon.svg";

import "./LayoutTopHeader.scss";

export const LayoutTopHeader = ({ setMenuVisible }) => {
    return (
        <header className="layoutTopHeader">
            <button className="menuBtn" onClick={() => setMenuVisible(true)}>
                <img src={menuIcon} alt="Open Menu" style={{ width: 24, height: 24 }} />
            </button>
            <div className="layoutTitleContainer">
                <p className="layoutTitle">Azafrán</p>
                <img src={saffronIcon} alt="" />
            </div>
        </header>
    );
};
