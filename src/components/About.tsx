/* 

- - - - - - - - Home Page / About Section - - - - - - - - 

*/
"use client"

import styles from './About.module.css';
import { useState} from 'react';
import Link from 'next/link';


export default function About() {
    const [activeTab, setActiveTab] = useState('skills');
    
    return (
        <section className={styles.sectionContainer}>
            {/* Visual Hook */}
            <div className={styles.imageBar}>
                <img src="/assets/screenshots/about-photos-04.png" alt="developer photos" className={styles.fullWidthPhoto} />
                <img src="/assets/screenshots/about-photos-06.png" alt="abstract static image" className={styles.fullWidthPhoto} />
            </div>

            {/* Philosophy & Short Intro */}

            <div className={styles.textColumn}>
                <p className={styles.quote}>
                    Good design, when it's done well, becomes invisible. It's only when it's done poorly that we notice it.
                </p>
                <p className={styles.attribution}>- Jared Spool</p>
            </div>
            


            {/* Interactive Preview */}
            <div className={styles.projectBar}>
                <div className={styles.badgeRow}>
                    <button className={`${styles.setActiveButton} ${activeTab === 'projects' ? styles.active : ''}`} onClick={() => setActiveTab('projects')}>Projects</button>
                    <button className={`${styles.setActiveButton} ${activeTab === 'skills' ? styles.active : ''}`} onClick={() => setActiveTab('skills')}>Skills</button>
                    <button className={`${styles.setActiveButton} ${activeTab === 'ai' ? styles.active : ''}`} onClick={() => setActiveTab('ai')}>AI & Data</button>
                </div>

                <div className={styles.projectRow}>
                    {activeTab === 'projects' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />
                            <div className={styles.projectAbout}>
                                <p className={styles.projectText}>
                                    Check out some current projects, from real-time web-based music production to specialized e-commerce engines.
                                </p>
                                <p className={styles.projectText}>
                                    I love diving into niche, complex technical puzzles and building the right tools to solve them. 
                                    
                                </p>
                                <p className={styles.projectText}>
                                    Whether that means eliminating latency so multiple users can collaborate in perfect lock-step, 
                                        or creating a custom marketplace to showcase products and engage with customers,
            
                                     my goal is always to create a user experience that feels intuitive, effortless, and inclusive. 
                                </p>
                                <Link className={styles.linkButton} href='/projects'>View Projects</Link>
                            </div>
                        </>
                    )}


                    {activeTab === 'skills' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/warbleHome.jpg" alt="Skills" />
                            <div className={styles.projectAbout}>
                                <p className={styles.projectText}>

                                    I specialize in building scalable backends and fluid, responsive frontends using Java, C#, Python, and React. 
                                    
                                </p>
                                <p className={styles.projectText}>
                                    My approach to development is largely driven by outcomes rather than being locked into a single stack.
                                    
                                    That means I am always adding to my toolkit and learning whatever language, library, or framework is required to get the job done right. 
                                </p>

                            </div>
                        </>
                    )}
                    
                    {activeTab === 'ai' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />
                            <div className={styles.projectAbout}>
                                
                                <p className={styles.projectText}>
                                    Beyond core development, I work with training and evaluating Large Language Models through structured data annotation, 
                                        code evaluation, and prompt engineering. 
                                </p>
                                <p className={styles.projectText}>
                                    My background helps me bridge the gap between raw numbers and real-world human behaviour, 
                                        allowing me to analyze data patterns with a focus on accuracy and context. 

                                
                                </p>
                            </div>
                        </>    
                    )}
                </div>            
            </div>
        </section>
    );
}