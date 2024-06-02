'use client';
import { useContext } from "react";
import { faAngleDown, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
import { FileStateContext } from "@/app/context/FileState";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarFiles() {
    const { setFiles }: any = useContext(FileStateContext);
    const { listOfFiles }: any = useContext(FileStateContext);
    const { files }: any = useContext(FileStateContext);
    const router = usePathname();
    const handleFilesClicks = (fileElement: any) => {
        setFiles((previousFile: any) => {
            let isAdd = false;
            for (let i = 0; i < previousFile.length; i++) {
                if (previousFile[i].fileId === fileElement.fileId) {
                    isAdd = true;
                    break;
                } else {
                    isAdd = false;
                }
            }
            if (!isAdd) {
                // console.log("previousFile", previousFile);
                return [...previousFile, fileElement]
            } else {
                return previousFile;
            }
        });
    }

    const createFileElement = (file: any) => {
        return (
            <>
                <Link href={file.fileRoute} className={`w-full ${ (router == file.fileRoute)  ? "bg-file-selected-foreground" : ""}`}>
                    <span className={`text-xs ${file.fileType}`} onClick={() => { handleFilesClicks({ fileName: file.fileName, fileId: file.fileId, fileRoute: file.fileRoute, fileSvg: file.fileSvg }) }}>
                        {file.fileSvg} {file.fileName}
                    </span>
                </Link>
            </>
        );
    }

    return (
        <div className="h-full flex flex-col justify-between py-2 bg-general-foreground-sidebar-icons">
            <div className="">
                <div className="flex items-center justify-between w-full mb-2 px-2">
                    <p className="text-xs">Explorer</p>
                    <FontAwesomeIcon icon={faEllipsis} className="mr-1" />
                </div>
                <div className="flex items-center justify-start w-full px-2">
                    <FontAwesomeIcon icon={faAngleDown} className="text-xs mr-1" />
                    <p className="text-sm mt-1">VSCODE-PORTFOLIO</p>
                </div>
                <div className="file-section">
                    <div className="list-of-files">
                        {
                            listOfFiles &&
                            listOfFiles.map((file: any, index: any) => {
                                return createFileElement(file);
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}