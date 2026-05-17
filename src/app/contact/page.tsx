import ContactForm from '@/components/ContactForm'
import styles from './contact.module.css'

export default function ContactPage(){
    return(
        <main className={styles.sectionContainer} id="contact-page">
            <div className={styles.leftContact}>
                <h1 className={styles.sectionTitle}>Contact</h1>

                <div className={styles.linkGroup}>
                    <a 
                        href="https://www.linkedin.com/in/ericlaudrum/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.resumeLink}
                    >
                        LinkedIn →
                    </a>

                    <a 
                        href="https://github.com/eric-laudrum" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.resumeLink}
                    >
                        GitHub →
                    </a>
                </div>
            
            </div>

            <div className={styles.rightContact}>
                <ContactForm />
            </div>
        </main>
    )
}