import { Button } from '@/components/ui/button';
// import {  Github, Linkedin, Mail } from 'lucide-react';
import {  GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon  } from '@radix-ui/react-icons';
import Link from 'next/link';



const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold sm:text-6xl">Mrisho Ally Mvungi</h1>
            <h2 className="text-xl space-y-4 text-muted-foreground sm:text-2xl">
              Self Taught 
              <span className='text-white bg-indigo-600 bg-[length:100%_5px] bg-no-repeat bg-bottom p-1'>Software Developer</span>
            </h2>
            <h6 className='text-center !leading-7 md:!leading-10 text-muted-foreground lg:text-xl text-blue-100'>
              Based in Dar es Salaam, Tanzania
              <br />
              Specialized in <span className='bg-indigo-600 bg-no-repeat bg-bottom p-1 text-white'>React</span> 
              and <span className='bg-indigo-600 bg-no-repeat bg-bottom p-1 text-white'>NextJS</span> 
            </h6>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Link href="https://github.com/babually" target="_blank"> 
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link href="https://linkedin.com/in/mrisho-ally-94457a100" target="_blank">
                  <LinkedInLogoIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link href="https://x.com/mrishoally15" target="_blank">
                   <TwitterLogoIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
  );
};


export default Hero;