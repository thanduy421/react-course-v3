import {useGlobalContext} from "./context";
import sublinks from './data';
import {useRef} from 'react';

const Submenu = () => {
  const {selectPageID, setSelectPageID} = useGlobalContext();
  const sublink =  selectPageID? sublinks.find( sublink => sublink.pageId === selectPageID) : {};
  const {page="", links=[]} = sublink;
  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const result = submenu.getBoundingClientRect();
    const {clientX, clientY} = event;
    const {left, bottom, right} = result;

    if(clientX < left || clientX > right || clientY > bottom-1) {
      setSelectPageID(null);
    }
  }

    return (
      <div className="submenu-container">
        <div className={selectPageID? 'submenu show-submenu' : 'submenu'}
              ref={submenuContainer}
              onMouseLeave={handleMouseLeave}>
          <h5 className="page-header">{page}</h5>
          <ul className='sub-links'
            style={{
              gridTemplateColumns:
                sublink?.links?.length > 3? '1fr 1fr' : '1fr',             
            }}
          >
            {links.map(link => {
              const {id, label, icon, url} = link;
              return(
                <li key={id}>
                    <a href={url} target="_blank">{icon} {label}</a>
                </li>
              )
              })
            }
          </ul>
        </div>
      </div>
    );
  };

export default Submenu;
  