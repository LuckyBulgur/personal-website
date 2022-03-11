import { FC } from 'react';

interface SkillProps {
    name: string;
    level: number;
}

const Skill: FC<SkillProps> = (props) => {
    return <div className='w-full mt-10'>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-white">{props.name}</span>
            <span className="text-sm font-medium text-white">{props.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className=" bg-emerald-600 h-2.5 rounded-full" style={{ width: `${props.level}%` }}></div>
        </div>
    </div>
}

export default Skill