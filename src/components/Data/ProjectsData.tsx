import React from 'react';

import ContractorConnect from "../ContractorConnect/ContractorConnect";
import TrellisSequencer from "../Trellis/Trellis";
import Warble from "../Warble/Warble";
import LoopIn from "../LoopIn/LoopIn";


export interface ProjectComponentProps {
    techStack?: string[];
    website?: string;
}


interface Project {
    title: string;
    sections: string[];
    description: string;
    tags: string[];
    image: string;
    github: string;
    website?: string;
    component: React.ComponentType<ProjectComponentProps>;
}

const projects: Project[] = [
   /* {
        title: "Contractor Connect",
        sections: ["Overview", "Project Plan", "Project Vision", "Project Requirements", "Diagrams", "Prototype", "System Implementation", "Status Report"],
        description: "An online bidding platform for home improvement projects.",
        tags: ["PHP", "MySQL", "MVC", "Bootstrap", "CodeIgniter 4", "PHPUnit"],
        image: "/assets/screenshots/contractor-connect.jpg",
        github: "https://github.com/AdelAlhajHussein/contractor_connect",
        website: "https://ContractorConnect.cc",
        component: ContractorConnect,
    },*/
    {
        title: "Trellis",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Prototype", "Roadmap"],
        description: "A real-time 16-step sequencer.",
        tags: ["React", "Node.js", "Express", "Socket.io", "Tone.js", "Yjs", "MongoDB", "CORS", "MULTER"],
        image: "/assets/screenshots/trellis-sequencer.jpg",
        github: "https://github.com/eric-laudrum/trellis-sequencer",
        component: TrellisSequencer,
    },
    {
        title: "Warble",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Roadmap"],
        description: "An online marketplace for audio kits and foley sounds.",
        tags: ["Spring Boot", "React", "PostgreSQL", "JWT", "Java", "Cloudinary", "Docker"],
        image: "/assets/screenshots/warbleHome.jpg",
        github: "https://github.com/eric-laudrum/warble",
        component: Warble,
    },
    {
        title: "Loop-In",
        sections: ["Overview", "Tech Stack", "Architecture & Design", "Roadmap"],
        description: "A blog style forum to discuss and track the development of different audio sampling tools.",
        tags: ["React", "Vite", "Node.js", "MongoDB", "Firebase", "Express"],
        image: "/assets/screenshots/loopInHome.jpg",
        github: "https://github.com/eric-laudrum/LoopIn",
        component: LoopIn, 
    },
];

export default projects;