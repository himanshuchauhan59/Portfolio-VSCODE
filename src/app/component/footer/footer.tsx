import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightArrowLeft, faCloudArrowUp, faCodeBranch, faRobot, faTowerBroadcast, faTowerCell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="flex justify-between bg-general-footer-background relative z-10">
            <div className="flex items-center justify-start w-full">
                <div className="bg-[#057a11] px-4 mr-2">
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-xs" />
                </div>
                <p className="text-xs mt-1"><FontAwesomeIcon icon={faCodeBranch} className="mr-1" />master*</p>
                <FontAwesomeIcon icon={faCloudArrowUp} className="mx-2 text-xs" />
                <p className="text-xs mt-1 mx-2"><FontAwesomeIcon icon={faTowerCell} className="mr-1 text-xs" />0</p>
            </div>
            <div className="flex items-center justify-end  w-full">
                <p className="text-xs mt-1">{"{}"} Typescript/Javascript</p>
                <p className="text-xs mt-1 mx-2"><FontAwesomeIcon icon={faTowerBroadcast} className="mr-1 text-xs" />Go Live</p>
                <FontAwesomeIcon icon={faRobot} className="mx-2 text-xs" />
                <FontAwesomeIcon icon={faBell} className="mx-2 text-xs" />
            </div>
        </div>
    );
}