/* 

- - - - - - - - - - About Tab - - - - - - - - - - 

*/

'use client';
import { useState} from 'react';
import styles from './about.module.css';
import GitHubStats from '@/components/GitHubStats';


export default function AboutPage() {

    const [ activeTab, setActiveTab ] = useState('skills');

    const tabData = {
        skills: {
            title: "Technical Skills",
            content: "React, Next.js, Node.js",
            image: '/assets/screenshots/warbleHome.jpg',
        },
        projects: {
            title: "Selected Projects",
            content: "Building full-stack apps with sociology in mind",
            image: '/assets/screenshots/trellis-sequencer.jpg',
        },
        ai: {
            title: "AI & Data",
            content: "Identifying bias and drawing real-world insights",
            image: '/assets/screenshots/loopInHome.jpg',
        }

    }

    return (
        <main className={styles.sectionContainer} id="about-section">
            {/*
            /////////////////////////////////
            <h1>About Page</h1>
            /////////////////////////////////
            */}
            <section className={styles.sectionContainer} id="about-section">
            
                    
                    {/* Title, headshot, text */}
                    <div className={styles.leftSide}>
                        <h1 className={styles.aboutTitle}>
                            Hi, I’m Eric
                        </h1>
                

                        <div className={styles.aboutBody}>

                            {/* Headshot */}
                            <div className={styles.imageWrapper}>
                                <img 
                                    className={styles.headshotImg}
                                    src="/assets/screenshots/eric-headshot.jpg" 
                                    alt="Eric Headshot"
                                    width={300}
                                    height={300}
                                />
                            </div>

                            {/* Text Content */}
                            <div className={styles.mainText} id="about">           
                                <ul className={styles.paragraphList}>
                                    
                                    <li className={styles.aboutParagraph}>
                                        A full-stack developer who turns complex ideas into simple, intuitive products that work cleanly and feel effortless to use. 
                                    </li>
                                    <li className={styles.aboutParagraph}>
                                        I work across Java, C#, Python, React, and Node.js, blending technical logic with a background in sociology.
                                    </li>
                                    <li className={styles.aboutParagraph}>
                                        I believe that good design should be invisible, and the best tools are the ones that stay out of the user's way.
                                    </li>
                            
                                </ul>
                            </div>
                            <GitHubStats />

                        </div>
                        
                    

                </div>
                
                
            </section>


        </main>
    );
}