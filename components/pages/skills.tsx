import { FC } from 'react';

import Skill from '../skill';

interface SkillsProps { }

const Skills: FC<SkillsProps> = (props) => {
    return <div id="skills" className='bg-myblue border-t border-slate-700 p-8 md:p-20 lg:p-28'>
        <h2 className='text-center text-white text-4xl mb-10 font-extrabold'>Skills</h2>

        <div className='mt-10'>
            <Skill name='TypeScript' level={90}></Skill>
            <Skill name='NodeJs' level={85}></Skill>
            <Skill name='Next.js' level={82}></Skill>
            <Skill name='MySQL' level={80}></Skill>
            <Skill name='C#' level={75}></Skill>
            <Skill name='Java' level={73}></Skill>
        </div>
    </div>
}

export default Skills