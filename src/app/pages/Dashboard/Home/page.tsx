'use client';
import Image from 'next/image'
import '../globalPage.css';
import { TypeAnimation } from 'react-type-animation';
export default function Home() {
    return (
        <>
            <div className='index-page-section'>
                <div className='image-section'>
                    <Image src={"/pixelArt.png"} alt="user-image" width={100} height={100} className='w-[18%] h-auto rounded-full max-w-[100%] max-h-[100%]'></Image>
                </div>
                <div>
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            'print("Hola mundo")', // initially rendered starting point
                            1000,
                            'console.warn("Hola amigo 🤝")',
                            1000,
                            '<h1>My Name is <b>Himanshu Chauhan</b>👨‍💻</h1>',
                            1000,
                            'printf("I am a Full Stack Developer");',
                            500,
                            'console.log("Based in India");',
                            1000,
                            'console.info("Nice to meet you");'
                        ]}
                        className='text-with-animation'
                        speed={20}
                        style={{ fontSize: '14px' }}
                        repeat={Infinity}
                    />
                </div>
                <p className='text-description text-center w-[calc(100%_-_180px)]'>Indian full-stack developer. I leverage my skills to build innovative applications, resulting in {'['}X% increase in improved user engagement.</p>
                <div className='btn-section'>
                    <button>Contact Me</button>
                    <button>Want to Show My Resume</button>
                </div>
                <hr className='h-[2px] w-[calc(100%_-_180px)] bg-slate-200 my-3'/>
                <div className='working-details w-[calc(100%_-_180px)]'>
                    <div className='show-json-data flex items-start my-[25px] justify-between'>
                        <div className='code-section bg-[#87878730] px-7 py-4 rounded-lg'>
                            <span className='brackets text-xs text-[#f5de5b]'>{'{'}</span>
                            <p className='text-xs ml-7'><span className='key text-[#5bd3f5]'>{'"'}name{'"'}</span> : <span className='value text-[#ff9a63]'>{'"'}Himanshu Chauhan{'"'}</span>,</p>
                            <p className='text-xs ml-7'><span className='key text-[#5bd3f5]'>{'"'}location{'"'}</span> : <span className='value text-[#ff9a63]'>{'"'}India Gujarat{'"'}</span>,</p>
                            <p className='text-xs ml-7'><span className='key text-[#5bd3f5]'>{'"'}workingSince{'"'}</span> : <span className='value text-[#ff9a63]'>{'"'}1+ years{'"'}</span>,</p>
                            <p className='text-xs ml-7'><span className='key text-[#5bd3f5]'>{'"'}workingAs{'"'}</span> : <span className='value text-[#ff9a63]'>{'"'}Full Stack Developer{'"'}</span>,</p>
                            <p className='text-xs ml-7'><span className='key text-[#5bd3f5]'>{'"'}successfullyCompletedProjects{'"'}</span> : <span className='value text-[#ff9a63]'>{'"'}10+{'"'}</span></p>
                            <span className='brackets text-xs text-[#f5de5b]'>{'}'}</span>
                        </div>
                        <div className='code-detail-section text-justify w-[calc(73%_-_140px)]'>
                            <h6 className='text-base mb-3'>My Description</h6>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium ipsa, deleniti maiores totam soluta molestiae quod, ipsum quis nulla, reprehenderit nesciunt ducimus facere doloribus laboriosam corrupti et placeat vitae.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
