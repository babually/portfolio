import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";

const projects = [
    { 
        title: "E-commerce Platform", 
        url: "https://github.com/babually/Invoice-app",
        description: "A full-stack Invoice App built with React and Next.js" 
    },
    { 
        title: "Task Management App", 
        url: "",
        description: "A productivity app created with React Native and Firebase" 
    },
    { 
        title: "Data Visualization Dashboard", 
        url: "",
        description: "An interactive dashboard using D3.js and Vue.js" 
    }
]

const Projects =  () => {
    return (
        <section id="projects" className="px-4 md:px-6">
            <div className="mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button asChild>
                                <Link href={project.url} target="_blank">
                                   View Project
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;