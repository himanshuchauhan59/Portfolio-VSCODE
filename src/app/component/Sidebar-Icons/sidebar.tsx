import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faCopy, faGear, faLaptopCode, faLocationDot, faMagnifyingGlass, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
export default function SideBarIconsOnly() {
    return (
        <div className="h-full flex items-center flex-col justify-between py-2 px-2 bg-general-foreground-sidebar-files">
            <div className="flex flex-col items-center file-action-icons">
                <FontAwesomeIcon icon={faCopy} className="text-lg my-2 cursor-pointer font-thin" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg my-3 cursor-pointer font-thin" />
                <FontAwesomeIcon icon={faCodeBranch} className="text-lg my-3 cursor-pointer font-thin" />
                <FontAwesomeIcon icon={faLaptopCode} className="text-lg my-3 cursor-pointer font-thin" />
                <FontAwesomeIcon icon={faLocationDot} className="text-lg my-3 cursor-pointer font-thin" />
                <FontAwesomeIcon icon={faMessage} className="text-lg my-3 cursor-pointer font-thin" />
            </div>
            <div className="flex flex-col items-center file-action-icons">
                <FontAwesomeIcon icon={faUserCircle} className="text-lg my-3 cursor-pointer font-thin" />
                <FontAwesomeIcon icon={faGear} className="text-lg my-3 cursor-pointer font-thin" />
            </div>
        </div>
    );
}