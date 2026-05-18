import { ProjectComponentProps } from '@/components/Data/ProjectsData';
import styles from './Trellis.module.css'
import Badge from '@/components/Badge';

interface TrellisProps {
    techStack?: string[];
    tags?: string[];
}



export default function TrellisSequencer({ techStack }: ProjectComponentProps) {

    console.log("TechStack in Trellis:", techStack);

    return(
        <div className={styles.sectionContainer}>

            <div className={styles.projectContainer} id="trellis_overview">

                <div className={styles.leftContainer}>


                    <h4 className={styles.projectTagline}>
                        A real-time 16-step sequencer
                    </h4>

                    <p className={styles.projectDescription}>
                        Trellis is a collaborative, real-time 16-step sequencer engineered to eliminate the latency barriers that plague web-based music production. 
                    </p>
                    <p style={{marginTop:"1rem"}}>While most browser-based DAWs suffer from synchronization drift, Trellis provides a solid timing environment where multiple users can manipulate a shared grid in perfect lock-step.</p>
                </div>

                <div className={styles.rightContainer}>
                     <div className={styles.videoContainer}>
                        <iframe
                            src="https://www.youtube.com/embed/xl6ijl_q9w4"
                            title="YouTube video player"
                    
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>

            <hr style={{margin:"3rem 0"}}/>


            <div className={styles.projectContainer} id="trellis_tech-stack">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Tech Stack</h2>
                    
                    <div className={styles.badgeContainer}>
                        {techStack?.map((tech) => (
                            <Badge key={tech} text={tech} />
                        ))}
                    </div>
                    
                    <ul>
                        <li><strong>Next.js & TypeScript:</strong> Modern, type-safe frontend architecture for a predictable state.</li>
                        <li><strong>Socket.io:</strong> Low-latency, bi-directional communication for instant grid updates across all connected clients.</li>
                        <li><strong>Tone.js:</strong> A sophisticated web-audio framework that handles scheduling and synthesis with sub-millisecond precision.</li>
                        <li><strong>Node.js:</strong> A lightweight, event-driven backend acting as the central relay for sequencer state.</li>
                    </ul>
               </div>
            </div>


            <hr style={{margin:"3rem 0"}}/>

            <div className={styles.projectContainer} id="trellis_architecture-design">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Architecture & Design</h2>
                
                    
                    <p className={styles.projectDescription}>
                        <strong>State-Sync Relay Architecture:</strong>
                        Rather than streaming audio, which is bandwidth-heavy and prone to lag, 
                        Trellis transmits only the "Step Data" (small JSON packets) via WebSockets.
                    </p>

                    <ul>
                        <li><strong>Decoupled Audio Clock:</strong> The audio engine runs on a separate timing thread from the UI, ensuring that even if the browser is under heavy load, the beat never drops.</li>
                        <li><strong>Optimistic UI Updates:</strong> The interface reflects user changes instantly while the server validates and broadcasts the state in the background to maintain a single source of origin.</li>
                    </ul>
                </div>
            </div>


            <hr style={{margin:"3rem 0"}}/>

            <div className={styles.projectContainer} id="trellis_prototype">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Prototype</h2>
                
                    
                    <p className={styles.projectDescription}>
                       The initial phase involved mapping out the Audio-Visual Latency Gap. 
                       Early wireframes focused on a "Mobile-First" 4x4 grid, which eventually evolved into the current 16-step desktop-optimized interface. 
                       The prototype phase was critical in testing how many simultaneous users the Node.js relay could handle before packet collision occurred.
                    </p>

                </div>
            </div>



        
            <hr style={{margin:"3rem 0"}}/>

            <div className={styles.projectContainer} id="trellis_roadmap">
                <div className={styles.leftContainer}>
                    <h2 className={styles.projectTitle}>Roadmap</h2>
                
                    
                    <ul>

                        <li><strong>User Attribution:</strong></li>
                        <li>Instead of simple on/off toggles, the grid will track individual contributions. Every pad placed will be tagged with a unique color or name to allow collaborators to see exactly who is building the beat in real-time.</li>
                        <li><strong>Private Rooms:</strong></li>
                        <li>Moving beyond public rooms to a tiered access model. Users will be able to lock their sessions with unique keys, ensuring that your collaborative sketches stay private and accessible only to those with an invite link.</li>
                        <li><strong>Audio Export: </strong></li>
                        <li>A dedicated recording engine that allows you to capture your live session. Simply set the number of loops, hit record, and download a high-quality .wav file of your arrangement to use in your own DAW.</li>
                    </ul>

                </div>
            </div>




        </div>
    )
}