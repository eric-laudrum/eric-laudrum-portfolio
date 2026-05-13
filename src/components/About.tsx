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
            <div className={styles.textColumns}>
                <div className={styles.textColumn}>
                    <p className={styles.quote}>
                        I Believe That Good Design Looks Invisible, And The Best Tools Are The Ones You Have Available. 
                    </p>
                </div>
                <div className={styles.textColumn}>
                    <p className={styles.text}>
                        I’m a full-stack developer bridging the gap between technical logic and human behavior. 
                        With a background in Sociology and a focus on Computer Programming, 
                         I build software that is as intuitive as it is powerful.
                    </p>
                </div>
            </div>

            {/* Interactive Preview */}
            <div className={styles.projectBar}>
                <div className={styles.badgeRow}>
                    <button className={`${styles.setActiveButton} ${activeTab === 'skills' ? styles.active : ''}`} onClick={() => setActiveTab('skills')}>Skills</button>
                    <button className={`${styles.setActiveButton} ${activeTab === 'projects' ? styles.active : ''}`} onClick={() => setActiveTab('projects')}>Projects</button>
                    <button className={`${styles.setActiveButton} ${activeTab === 'ai' ? styles.active : ''}`} onClick={() => setActiveTab('ai')}>AI & Data</button>
                </div>

                <div className={styles.projectRow}>
                    {activeTab === 'skills' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/warbleHome.jpg" alt="Skills" />
                            <div className={styles.projectAbout}>
                                <p className={styles.projectText}>Specializing in Java, C#, Python, and React. I build scalable backends and fluid frontends.</p>
                            </div>
                        </>
                    )}
                    {activeTab === 'projects' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />
                            <div className={styles.projectAbout}>
                                <p className={styles.projectText}>Check out some current projects, from real-time music production to e-commerce.</p>
                                <Link className={styles.linkButton} href='/projects'>View Projects</Link>
                            </div>
                        </>
                    )}
                    {activeTab === 'ai' && (
                        <>
                            <img className={styles.smallPhoto} src="/assets/screenshots/trellis-sequencer.jpg" alt="Project" />
                            <div className={styles.projectAbout}>
                                
                            <p className={styles.projectText}>Training and evaluating LLMs through structured data annotation and prompt engineering.</p>
                            </div>
                        </>    
                    )}
                </div>            
            </div>
        </section>
    );
}