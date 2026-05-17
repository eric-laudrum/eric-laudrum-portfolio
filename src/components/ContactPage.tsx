import ContactForm from '@/components/ContactForm'

export default function ContactPage(){

     return(
        <main className="section-container" id="contact-page">
            <div className="left-contact">
                <h1 className="section-title">Contact</h1>


                <div style={{ marginBottom: '2rem', marginTop: '-1rem' }}>
                    <a 
                        href="https://www.linkedin.com/in/ericlaudrum/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="resume-link"
                        style={{ fontWeight: 'bold', color: '#2a769c', fontSize: '0.9rem' }}
                    >
                        LinkedIn →
                    </a>
                </div>

                <div style={{ marginBottom: '2rem', marginTop: '-1rem' }}>
                    <a 
                        href="https://github.com/eric-laudrum" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="resume-link"
                        style={{ fontWeight: 'bold', color: '#2a769c', fontSize: '0.9rem' }}
                    >
                        GitHub →
                    </a>
                </div>

            </div>
            <div className="right-contact">
                <ContactForm />
            </div>


            

        </main>
    )
}
