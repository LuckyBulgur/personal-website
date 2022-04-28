import { FC } from 'react';
import { FaDiscord, FaGithub, FaTwitch } from 'react-icons/fa';

interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {
    const year = new Date().getFullYear();
    return <div className="flex flex-row flex-wrap items-center bg-gradient-to-r from-slate-800 to-slate-700 px-20 py-5 dark:border-t dark:border-t-slate-600">
        <div className="w-full md:w-auto">
            <p className="text-center text-slate-200 mb-5 md:mb-0 md:text-left">
                Ugur Aydogan &middot; {year}
            </p>
        </div>
        <div className="flex w-full flex-grow items-center justify-center gap-3 md:w-auto md:justify-end">
            <a className='bg-slate-800 p-5 rounded-xl hover:outline transition-all duration-75' style={{ color: 'white' }} href="https://discord.com/invite/fortnitede">
                <FaDiscord />
            </a>
            <a className='bg-slate-800 p-5 rounded-xl hover:outline transition-all duration-75' style={{ color: 'white' }} href="https://github.com/luckybulgur">
                <FaGithub />
            </a>
            <a className='bg-slate-800 p-5 rounded-xl hover:outline transition-all duration-75' style={{ color: '#9146ff' }} href="https://www.twitch.tv/luckybulgur">
                <FaTwitch />
            </a>
        </div>
    </div>
}

export default Footer