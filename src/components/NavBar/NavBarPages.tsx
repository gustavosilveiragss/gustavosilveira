const NavBtn = ({ id }) => {
    return (
        <button
            onClick={() => {
                let element = document.getElementById(id);
                element && element.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, '', id == 'home' ? '/' : ('#' + id));
            }}
            className="text-white rounded-lg"
        >
            {id.toUpperCase()}
        </button>
    );
}

const NavBarPages = () => {
    return (
        <>
            <li>
                <NavBtn id='home'></NavBtn>
            </li>
            <li>
                <NavBtn id='about'></NavBtn>
            </li>
            <li>
                <NavBtn id='skills'></NavBtn>
            </li>
            <li>
                <NavBtn id='experience'></NavBtn>
            </li>
            <li>
                <NavBtn id='projects'></NavBtn>
            </li>
        </>
    )
};

export default NavBarPages;