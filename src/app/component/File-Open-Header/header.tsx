'use client';
import { useContext, useEffect } from "react";
import { FileStateContext } from "@/app/context/FileState";
import { redirect, useRouter } from "next/navigation";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HeaderFiles() {
    const { files }: any = useContext(FileStateContext);
    const { setFiles }: any = useContext(FileStateContext);
    const router = usePathname();
    const route = useRouter();
    
    const createFileElement = (file: any) => {
        return (
            <>
                <div className={`file w-fit px-[13px] py-[4px] bg-file-foreground border-r-[1px] border-file-header-background ${(file.fileRoute === router) ? 'bg-file-selected-foreground' : 'bg-file-foreground'}`}>
                    <div className="flex items-center">
                        <Link href={file.fileRoute} className={`w-full`}>
                            <p className="mt-[3px] mr-[4px] text-xs font-light text-file-text-color">{file.fileName}</p>
                        </Link>
                        <FontAwesomeIcon icon={faXmark} className="font-light text-file-text-color text-[10px] p-[3px] px-[4px] rounded-[3px] cursor-pointer hover:bg-[#5e5d5d]" onClick={() => { closeFile(file) }} />
                    </div>
                </div>
            </>
        );
    }

    const closeFile = (fileEle: any) => {
        setFiles((previousFile: any) => {
            let newFiles = previousFile.filter((file: any) => file.fileId !== fileEle.fileId);
            if (newFiles.length === 0) {
                route.push('/pages/Dashboard');
            } else {
                if (router === fileEle.fileRoute) {
                    route.push(newFiles[newFiles.length - 1].fileRoute);
                }
            }
            return newFiles;
        });
    }

    return (
        <>
            <div className="file-header flex flex-row items-center overflow-x-scroll bg-file-header-background">
                {files &&
                    files.map((file: any, index: any) => {
                        return createFileElement(file);
                    })
                }
            </div>
        </>
    );
}
