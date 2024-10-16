import Image from 'next/image';

import { Card } from "./ui/card";
import Link from 'next/link';


const skills = [
    {
        title: "Javascript",
        url: "https://getbootstrap.com",
        image: "https://api.iconify.design/devicon:javascript.svg"
    },
    {
        title: "Typescript",
        url: "https://typescript.org",
        image: "https://api.iconify.design/devicon:typescript.svg"
    },
    {
        title: "React",
        url: "https://react.dev",
        image: "https://api.iconify.design/devicon:react.svg"
    },
    {
        title: "NextJS",
        url: "https://nextjs.org",
        image: "https://api.iconify.design/devicon:nextjs.svg"
    },
    {
        title: "TailwindCSS",
        url: "https://tailwindcss.com",
        image: "https://api.iconify.design/devicon:tailwindcss.svg"
    },
    {
        title: "CSS3",
        url: "https://css3.com",
        image: "https://api.iconify.design/devicon:css3.svg"
    },
    {
        title: "BootStrap",
        url: "https://getbootstrap.com",
        image: "https://api.iconify.design/devicon:bootstrap.svg"
    },
    {
        title: "ViteJS",
        url: "https://vitejs.org",
        image: "https://api.iconify.design/devicon:vitejs.svg"
    },
];

const otherSkills = [
    {
        title: "Git",
        url: "https://git-scm.com",
        image: "https://api.iconify.design/devicon:git.svg"
    },
    {
        title: "Php",
        url: "https://php.net",
        image: "https://api.iconify.design/devicon:php.svg"
    },
    {
        title: "Laravel",
        url: "https://laravel.com",
        image: "https://api.iconify.design/devicon:laravel.svg"
    },
    {
        title: "Python",
        url: "https://nextjs.org",
        image: "https://api.iconify.design/devicon:python.svg"
    },
    {
        title: "Flutter",
        url: "https://flutter.dev",
        image: "https://api.iconify.design/devicon:flutter.svg"
    },
    {
        title: "PostgreSql",
        url: "https://postgresql.org",
        image: "https://api.iconify.design/devicon:postgresql.svg"
    },
    {
        title: "MySql",
        url: "https://mysql.com",
        image: "https://api.iconify.design/devicon:mysql.svg"
    },
    {
        title: "MongoDB",
        url: "https://mongodb.com",
        image: "https://api.iconify.design/devicon:mongodb.svg"
    },
];


const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 md:px-6">
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center mx-10'>
                    <h2 className="mb-4 lg:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Technical Skills
                    </h2>
                    <h3 className='text-start text-2xl py-4'>Regularly Working with:</h3>
                    <div className="grid gap-2 md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 xs:grid=cols-2">
                        {skills.map((skill, index) => (
                            <Card key={index} className="w-40 h-40 flex flex-col items-center justify-center">
                                <div className='flex flex-col items-center w-full gap-2'>
                                    <Image
                                        src={skill.image}
                                        alt={skill.title}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover w-16 h-16 border border-white bg-white"
                                    />
                                    <h6 className='text-start text-lg font-bold text-blue-100'>
                                        { skill.url ? (
                                            <Link
                                                target="_blank"
                                                href={skill.url}
                                                className='hover:underline'
                                            >
                                                { skill.title }
                                            </Link>
                                        ) : (
                                            skill.title
                                        )}
                                    </h6>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className='text-center mx-10 py-20'>
                    <h3 className='text-start text-2xl py-4'>Also Familiar with:</h3>
                    <div className="grid gap-2 md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 xs:grid=cols-2">
                        {otherSkills.map((otherSkill, index) => (
                            <Card key={index} className="w-40 h-40 flex flex-col items-center justify-center">
                                <div className='flex flex-col items-center w-full gap-2'>
                                    <Image
                                        src={otherSkill.image}role=''
                                        alt={otherSkill.title}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover w-16 h-16 border border-white bg-white"
                                    />
                                    <h6 className='text-start text-lg font-bold text-blue-100'>
                                        { otherSkill.url ? (
                                            <Link
                                                target="_blank"
                                                href={otherSkill.url}
                                                className='hover:underline'
                                            >
                                                { otherSkill.title }
                                            </Link>
                                        ) : (
                                            otherSkill.title
                                        )}
                                    </h6>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
            
        </section>
    );
};

export default Skills;