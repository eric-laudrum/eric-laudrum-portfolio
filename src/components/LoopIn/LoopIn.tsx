"use client";

import styles from './LoopIn.module.css';
import Badge from '@/components/Badge';

interface LoopInProps {
    techStack?: string[];
}

export default function LoopIn({ techStack }: LoopInProps) {
    return (
        <div className={styles.sectionContainer}>
            
            {/* ---- Overview --- */}
            <div className={styles.projectContainer} id="loopIn_overview">
                <div className={styles.rightContainer}>
                    <img 
                        className={styles.projectImage} 
                        src="/assets/screenshots/loopInHome.jpg" 
                        alt="Loop-In Home" 
                    />
                </div>
                
                <div className={styles.leftContainer}>
                    <h4 className={styles.projectTagline}>
                        Stay in the loop
                    </h4>
                    <p className={styles.projectText}>
                        Loop-In is a blog-style platform exploring the intersection of programming and music production. 
                        Beatmaking and computer programming both rely on logical structure, pattern recognition, and iterative creative problem-solving. 
                    </p>
                    <p className={styles.projectText}>
                        Whether assembling lines of code or layering beats, samples, and effects, both disciplines involve building complex systems from smaller, organized components. 
                        Loop-In explores these parallels in depth through articles and artist features.
                    </p>
                </div>

                
            </div>

            <hr style={{ margin: "3rem 0" }} />

            {/* --- Tech Stack --- */}
            <div className={styles.projectContainer} id="loopIn_tech-stack">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Tech Stack</h2>
                    
                    <div className={styles.badgeContainer}>
                        {techStack?.map((tech) => (
                            <Badge key={tech} text={tech} />
                        ))}
                    </div>
                    
                    <ul className={styles.list}>
        
                        <li className={styles.listItem}><strong>MERN Stack:</strong> React (Vite) for a responsive frontend and Node.js/Express for the backend API.</li>
                        <li className={styles.listItem}><strong>MongoDB Atlas:</strong> A scalable cloud database serving as the central data store for content and user data.</li>
                        <li className={styles.listItem}><strong>Firebase Admin SDK:</strong> Secure, industry-standard authentication for protected administrative access.</li>
                        <li className={styles.listItem}><strong>Firebase Cloud Storage:</strong> High-performance asset hosting for article images via Google Cloud buckets.</li>
                    </ul>
               </div>
            </div>

            <hr style={{ margin: "3rem 0" }} />

            {/* --- Architecture & Design  --- */}
            <div className={styles.projectContainer} id="loopIn_architecture-design">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Architecture & Design</h2>
                    <p className={styles.projectText}>
                        The application follows a modular client-server architecture designed for seamless content management. 
                        The backend utilizes custom Express middleware to bridge Firebase's security layers with MongoDB's flexible schema.
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Decoupled Content Flow:</strong> Article metadata is handled by the database while heavy media assets are offloaded to Cloud Storage to maintain high performance.</li>
                        <li className={styles.listItem}><strong>Administrative Workflow:</strong> A protected dashboard allows for real-time CRUD operations, providing a streamlined interface for editing and publishing.</li>
                    </ul>
                </div>
            </div>

            <hr style={{ margin: "3rem 0" }} />

            {/* --- Roadmap Section --- */}
            <div className={styles.projectContainer} id="loopIn_roadmap">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Roadmap</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Emailing Integration:</strong> Implementing Formspree.io to handle automated newsletters and community notifications.</li>
                        <li className={styles.listItem}><strong>Events Calendar:</strong> A dynamic scheduling view to track new releases, relevant music events, and platform updates.</li>
                        <li className={styles.listItem}><strong>Video Embedding:</strong> Expanding the article editor to support native video playback for artist interviews and production tutorials.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}