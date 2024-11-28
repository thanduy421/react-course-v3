import sublinks from './data';
import { useGlobalContext } from "./context";

const NavLinks = () => {
    const {selectPageID, setSelectPageID} = useGlobalContext();

    return (
        <nav className="navlinks">
            {sublinks.map(sublink => {
                const {pageId, page} = sublink;
                return (
                    <button className="page" key={pageId}
                            onMouseEnter={() => setSelectPageID(pageId)}
                    >
                        {page}
                    </button>
                )
            })
            }
        </nav>
    )
}

export default NavLinks;