import { FC } from 'react';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { SiCsharp, SiMysql, SiNextdotjs, SiTypescript } from 'react-icons/si';

import Skill from '../skill';

interface SkillsProps { }

const Skills: FC<SkillsProps> = (props) => {
    return <div id="skills" className='bg-myblue border-t border-slate-700 p-8 md:p-20 lg:p-28'>
        <h2 className='text-center text-white text-4xl mb-10 font-extrabold'>My skills</h2>

        <div className='mt-10 text-white'>
            <Skill name='TypeScript' level={90} icon={<SiTypescript></SiTypescript>}></Skill>
            <Skill name='NodeJs' level={85} icon={<FaNodeJs></FaNodeJs>}></Skill>
            <Skill name='Next.js' level={82} icon={<SiNextdotjs></SiNextdotjs>}></Skill>
            <Skill name='MySQL' level={80} icon={<SiMysql></SiMysql>}></Skill>
            <Skill name='C#' level={75} icon={<SiCsharp></SiCsharp>}></Skill>
            <Skill name='Java' level={73} icon={<FaJava></FaJava>}></Skill>
        </div >
    </div >
}

export default Skills