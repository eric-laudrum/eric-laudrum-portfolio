"use client";

import React from 'react';
import styles from './Warble.module.css';
import Badge from '@/components/Badge';

interface WarbleProps {
    techStack?: string[];
}

export default function Warble({ techStack }: WarbleProps) {
    return (
        <div className={styles.sectionContainer}>
            
            {/* --- Overview --- */}
            <div className={styles.projectContainer}>
                <div className={styles.rightContainer}>
                    <img 
                        className={styles.projectImage} 
                        src="/assets/screenshots/warbleHome.jpg" 
                        alt="Warble Home" 
                    />
                </div>

                <div className={styles.leftContainer}>
                    <h4 className={styles.projectTagline}>
                        Professional E-commerce for Sound Designers
                    </h4>
                    <p className={styles.projectDescription}>
                        Warble (AudioShowcase) is a high-performance e-commerce platform engineered for the distribution of high-fidelity instrumental samples and foley sounds. 
                    </p>
                    <p className={styles.projectDescription}>
                        Unlike generic storefronts, Warble features a custom audio engine that manages complex metadata including BPM, Key, and Sample Rate, providing producers with the technical precision required for professional music production.
                    </p>
                </div>

                
            </div>

            <hr className={styles.horizontalRule} />

            {/* --- Tech Stack --- */}
            <div className={styles.projectContainer} id="warble_tech-stack">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Tech Stack</h2>
                    
                    <div className={styles.badgeContainer}>
                        {techStack?.map((tech) => (
                            <Badge key={tech} text={tech} />
                        ))}
                    </div>
                    
                    <ul>
                         <li className={styles.listItem}><strong>Spring Boot 3.4 & Java 17:</strong> A robust, type-safe backend providing an enterprise-grade REST API.</li>
                         <li className={styles.listItem}><strong>Spring Security & JWT:</strong> Implements stateless, token-based authentication for secure user sessions and role-based access control.</li>
                         <li className={styles.listItem}><strong>PostgreSQL & JPA:</strong> Relational data persistence with Spring Data JPA for consistent and reliable transaction management.</li>
                         <li className={styles.listItem}><strong>Cloudinary API:</strong> Offloads heavy audio and artwork assets to specialized cloud storage to ensure rapid global delivery.</li>
                    </ul>
               </div>
            </div>

            <hr className={styles.horizontalRule} />

            {/* --- Architecture & Design  --- */}
            <div className={styles.projectContainer} id="warble_architecture-design">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Architecture & Design</h2>
                    <p className={styles.projectDescription}>
                        The system utilizes a Monolithic-SPA hybrid architecture. While the React frontend handles the dynamic UI, the Spring Boot container serves the static assets and manages internal routing.
                    </p>
                    <ul className={styles.list}>
                         <li className={styles.listItem}><strong>Service-Oriented Logic:</strong> Business logic is decoupled from the controller layer, allowing for automated data seeding and isolated testing of the audio metadata engine.</li>
                         <li className={styles.listItem}><strong>Security-First Data Flow:</strong> All requests are intercepted by a custom JWT filter chain, ensuring that sensitive operations like file access are strictly authorized at the server level.</li>
                    </ul>
                </div>
            </div>

            <hr className={styles.horizontalRule} />

            {/* --- Roadmap --- */}
            <div className={styles.projectContainer} id="warble_roadmap">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Roadmap</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Docker Orchestration:</strong> Refining the Docker Compose environment to manage multi-container deployments across development and staging environments.</li>
                        <li className={styles.listItem}><strong>Advanced Search & Filters:</strong> Implementing full-text search capabilities to allow users to filter samples by multiple concurrent musical parameters (e.g., Genre + BPM + Mood).</li>
                        <li className={styles.listItem}><strong>Railway Deployment:</strong> Finalizing the CI/CD pipeline to automate deployments to Railway with integrated PostgreSQL and secret management.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}