"use client";

import { useState, useEffect } from "react";
import ProjectNav from "@/components/ProjectNav";
import Sidebar from "@/components/Sidebar";
import projects from "@/components/Data/ProjectsData";
import styles from "./projects.module.css"

export default function ProjectPage() {
    const [activeProject, setActiveProject] = useState("Trellis");
    const currentProject = projects.find(p => p.title === activeProject);

    const projectPrefixes: Record<string, string> = {
     /*   "Contractor Connect": "cc",*/
        "Trellis": "trellis",
        "Loop-In": "loopIn",
        "Warble": "warble"
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeProject]);


    return (
        <main className={styles.projectsContainer}>
            <ProjectNav setActive={setActiveProject} active={activeProject} />

            <div className={styles.projectLayout}>
                <aside className={styles.projectSidebarContainer}>
                    <Sidebar 
                        title="Project Contents" 
                        sections={currentProject?.sections || []}
                        repo={currentProject?.github} 
                        prefix={projectPrefixes[activeProject] || activeProject.toLowerCase().replace(/\s+/g, '')}
                    />
                </aside>

                <section className={styles.projectMainContent}>
                    <div className={styles.projectHeader}>
                        <h1 className={styles.sectionTitle}>{activeProject}</h1>
                        
                        
                    </div>

                    <div className={styles.projectContentArea}>
                
                        {currentProject && (
                            <currentProject.component 
                                website={currentProject.website}
                                techStack={currentProject.tags} 
                            />
                        )}
                    </div>

                    <div className={styles.projectGrid}>
                        {projects.map((project, index) => (
                            <div 
                                className={styles.projectCard} 
                                key={index} 
                                onClick={() => {
                                    setActiveProject(project.title);
                                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }}
                            >
                                <img 
                                    className={styles.projectImg} 
                                    src={project.image} 
                                    alt={project.title} 
                                />
                                <p className={styles.projectDescription}>{project.description}</p>
                                
                                
                                <div className={styles.projectCardContent}>
                                    <div className={styles.tagRow}>
                                        {project.tags?.map(tag => (
                                            <span key={tag} className={styles.tagBadge}>{tag}</span>
                                        ))}
                                    </div>
                                    <h2 className={styles.projectTitle}>{project.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}