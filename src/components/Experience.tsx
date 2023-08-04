import { FaBriefcase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <section id="experience">
            <div className="wave-exp">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="experience hero min-h-screen bg-neutral">
                <div className="hero-content flex-col">
                    <div>
                        <div className="flex flex-row w-full">
                            <h3 className="text-lg text-white mr-1">EXPERIENCE</h3>
                            <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                        </div>
                        <h1 className="text-5xl font-bold text-white">Previous work experiences</h1>
                        <div className="pt-2 text-white">A roadmap of my professional background</div>
                        <VerticalTimeline layout={'1-column-left'} lineColor={'#2B2640'}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#3B3659', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="June 2023 - Today"
                                iconStyle={{ background: '#6A548F', color: '#fff' }}
                                icon={<FaBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title font-bold">Exati Tecnologia</h3>
                                <h5 className="vertical-timeline-element-subtitle">Fullstack Developer Intern</h5>
                                <p>
                                    {'\u00B7'} Java
                                    <br />{'\u00B7'} Vue.js
                                    <br />{'\u00B7'} PostgreSQL
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#3B3659', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="December 2020 - February 2021"
                                iconStyle={{ background: '#6A548F', color: '#fff' }}
                                icon={<FaBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title font-bold">Pague Melhor</h3>
                                <h5 className="vertical-timeline-element-subtitle">Freelancer Fullstack Developer</h5>
                                <p>
                                    {'\u00B7'} ASP.NET MVC
                                    <br />{'\u00B7'} API development
                                    <br />{'\u00B7'} Microsoft SQL Server Database
                                    <br />{'\u00B7'} Frontend with JQuery e Bootstrap
                                    <br />{'\u00B7'} Git versioning
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#3B3659', color: '#fff' }}
                                date="August - December 2019"
                                iconStyle={{ background: '#6A548F', color: '#fff' }}
                                icon={<FaBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title font-bold">Ticow</h3>
                                <h5 className="vertical-timeline-element-subtitle">Apprentice Mobile Developer</h5>
                                <p>
                                    {'\u00B7'} Flutter app development
                                    <br />{'\u00B7'} Frequent contact with .NET backend
                                    <br />{'\u00B7'} API development
                                    <br />{'\u00B7'} Git and Azure DevOps versioning
                                    <br />{'\u00B7'} Implementation of Firebase Authentication, Cloud Functions and Analytics services
                                    <br />{'\u00B7'} Unit and integration testing 
                                    <br />{'\u00B7'} Communication with other sectors within the project
                                    <br />{'\u00B7'} Familiarity with the adaptive nature of startups
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Experience;