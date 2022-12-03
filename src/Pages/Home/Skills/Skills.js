import React from 'react';
import SkillBar from 'react-skillbars';
import skillImg from '../../../images/pngwing.com (3).png'
import './Skills.css'
const Skills = () => {
    const skills = [
        { type: 'React', level: 94 },
        { type: 'Javascript', level: 92 },
        { type: 'Tailwind', level: 98 },
        { type: 'Bootstrap', level: 97 },
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 95 },
        { type: 'NodeJS', level: 57 },
        { type: 'Mongodb', level: 70 },
        { type: 'ExpressJs', level: 55 },
    ];
    const colors = {
        bar: "#3498db",
        title: {
            text: "#fff",
            background: "#2980b9"
        }
    };

    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-white mb-8'>My Skills</h1>
            <div className='lg:flex justify-evenly'>
                <img className='skillImg' src={skillImg} alt="" />
                <div className='lg:w-1/2 '>
                    <SkillBar skills={skills} colors={colors} />
                </div>
            </div>
        </div>
    );
};

export default Skills;