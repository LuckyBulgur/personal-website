import { differenceInYears } from 'date-fns';
import { FC } from 'react';

interface HeroProps { }

const Hero: FC<HeroProps> = (props) => {

    const age = differenceInYears(new Date(), new Date('2006-04-01'));

    return <div className='min-h-screen min-w-screen flex flex-wrap bg-gradient-to-t from-slate-800 to-emerald-600'>
        <div className='flex flex-col justify-center gap-4 px-10 lg:px-28'>
            <small className="text-2xl font-light text-slate-200">Hello, my name is</small>
            <div className=' bg-emerald-900 rounded-xl h-max w-max inline box-decoration-clone p-3 text-3xl md:text-5xl font-extrabold leading-normal text-white'>Ugur Aydogan</div>
            <p className='text-2xl font-light max-w-xl text-slate-200'>
                I am a {age} year old passionate developer and always looking for new challenging projects.
            </p>
            <div className='flex flex-row'>
                <a href='#projects' className='inline-flex items-center gap-2 rounded-lg text-white transition-all transform cursor-pointer px-4 py-2 text-lg w-max border-2 hover:border-emerald-400'>Projects</a>
                <a href='#skills' className='inline-flex ml-5 items-center gap-2 rounded-lg text-white transition-all transform cursor-pointer px-4 py-2 text-lg w-max hover:bg-emerald-500 bg-emerald-600'>My skills</a>
            </div>
        </div>
    </div>
}

export default Hero