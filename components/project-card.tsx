import Image from 'next/image';
import { FC } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

interface ProjectCardProps {
   image: string;
   title: string;
   description: string;
   imageHeight?: number;
   link?: string;
   githubUrl?: string;
   imageWidth?: number;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
   return <div className='shadow-xl bg-[#121727] overflow-hidden rounded-xl'>
      <Image
         src={props.image}
         alt={`${props.title})`}
         objectFit="cover"
         height={props.imageHeight}
         width={props.imageWidth}
      ></Image>
      <div className='flex flex-grow flex-col p-5'>
         <div className='flex-grow'>
            <small className='mb-2 text-2xl font-bold text-slate-200'>{props.title}</small>
            <div className='flex-grow text-slate-400'>
               <p className='mt-4'>
                  {props.description}
               </p>
            </div>
            {(props.link || props.githubUrl) && (
               <div className='mt-5 flex gap-2'>
                  {props.link &&
                     <a href={props.link} className='inline-flex items-center p-2 gap-2 transition-all transform hover:bg-emerald-600 text-white rounded-xl bg-emerald-700'><FaLink></FaLink>Visit</a>
                  }
                  {props.githubUrl &&
                     <a href={props.githubUrl} className='inline-flex items-center p-2 gap-2 transition-all transform hover:bg-slate-700 text-white rounded-xl bg-slate-800'><FaGithub></FaGithub>Github</a>
                  }
               </div>
            )}
         </div>
      </div>
   </div>
}

export default ProjectCard