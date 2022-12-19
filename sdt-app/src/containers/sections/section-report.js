import '../../styles/containers/section-report.css'
import report from '../../img/images/report.png'


function SectionReport() {
    return(
        <div id="section-report">
            <main className="section-report__main">
                <h3 className="section-report__main_label" style={{marginTop: '16px', textAlign: 'center'}}>Events</h3>
                <div className="section-report__main_reports">
                    <div className="section-report__main_reports_background">
                        <a download>
                            <figure style={{position: 'relative'}}>
                                <img src={report} style={{maxWidth: '380px', maxHeight: '570px'}} loading="lazy"/>
                                <p style={{maxWidth: '380px'}}>Успешные программисты-подростки. Встреча с МОТИН ДЕНИС СЕРГЕЕВИЧЕМ. Дата: 07.12.2022 Время 14:20 Аудитория: 301 </p>
                                <figcaption>
                                    <button className="section-report__main_button" type="button" tabIndex={0}>
                                        Know More ->
                                        <span className="section-report__main_span"></span>
                                    </button>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SectionReport
