import Image from "next/image";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <div className="flex items-center justify-between py-2 px-2 bg-general-foreground">
            <div className="logo">
                <Image src="/vscode-logo.png" width="15" height="15" alt="logo"></Image>
            </div>
            <div>
                <p className="font-light text-xs">Himanshu.tsx - Portfolio-VS CODE - Visual Studio Code</p>
            </div>
            <div className="icon-section flex items-center justify-between">
                <FontAwesomeIcon icon={faMinus} className="px-3 text-xs font-light cursor-pointer" />
                <FontAwesomeIcon icon={faSquare} className="px-3 text-xs font-light cursor-pointer" />
                <FontAwesomeIcon icon={faXmark} className="px-3 text-xs font-light cursor-pointer" />
            </div>
        </div>
    );
}