import * as React from 'react';
import { useState } from 'react';
import './style.scss'

const teamsData = [{
    id:1,
    name:"Bharathi K Das",
    position: "CEO, Founder",
    desc:"Bharathi Das is a seasoned executive with over 13+ years of experience in Customer Experience and Process Excellence. She optimizes operations with lean methodologies across a wide range of domains, including Strategy Consulting, Internet, E-commerce, DIgital Advertising, Cryptocurrency and Blockchain Technology in APAC, NA and EU. Ex- Amazon | Coinbase",
    imageSrc:"ceo.svg"
},{
    id:2,
    name:"Shamsuddin Butt",
    position: "Program manager - FOM",
    desc:"A quick-learning achiever with 9+ years of extensive and diversified experience across business operations and project management, having demonstrated success in creating, mentoring and leading various processes and projects with multi-geographic cross-functional teams towards successful project closure.",
    imageSrc:"sham.svg"
},{
    id:3,
    name:"Debanjan Choudhary",
    position: "Data scientist",
    desc:"Data Scientist with around 2 years of working experience in analyzing data, building, and deploying ML models. Capable of creating, developing, testing and building highly adaptive diverse services to translate business and functional qualifications into substantial deliverables. ",
    imageSrc:"deb.svg"
},{
    id:4,
    name:"Rahul Jain",
    position: "Product designer",
    desc:"Product designer with 6+ years of experience in building design systems across platforms and capable of doing UX research, Visual/UI design, branding and conceptualization. Demonstrated visual design and team leading experience in 5 years of tenure in Amazon. Ex- Amazon",
    imageSrc:"rahul.svg"
},
{
    id:5,
    name:"Poorna Chandra",
    position: "Data scientist Apprentice",
    desc:"Aspiring Data Scientist with strong math background and 9 months of experience in data processing, predictive modeling, and hyper parameter tuning. Experienced in Python, SQL, ML and Deep Learning techniques like neural networks, image processing as well as time series forecasting.",
    imageSrc:"poorna.svg"
},{
    id:6,
    name:"Sapeksh Ahirrao",
    position: "Data scientist Apprentice",
    desc:"Passionate about data-driven solutions, I am a skilled fresh graduate proficient in Python, Pandas, MySQL, EDA, data preprocessing, scikit-learn, NLP, statistics, data visualization, and machine learning. I completed hands-on Applied Machine Learning coursework, gaining experience in end-to-end ML projects. I excel in deriving insights and ensuring data accuracy. Experienced in NLP and deep learning, I tackle complex problems and visualize results effectively.",
    imageSrc:"sapesh.svg"
}]


export default function TeamsContainer() {

    const [teamImage, setTeamImage ] = useState('ceo.svg')
    const [teamDesc, setTeamDesc ] = useState("Bharathi Das is a seasoned executive with over 13+ years of experience in Customer Experience and Process Excellence. She optimizes operations with lean methodologies across a wide range of domains, including Strategy Consulting, Internet, E-commerce, DIgital Advertising, Cryptocurrency and Blockchain Technology in APAC, NA and EU. Ex- Amazon | Coinbase")
    const [teamName, setTeamName ] = useState('Bharathi K Das')
    const [teamPos, setTeamPos ] = useState("CEO, Founder")

    return (
        <div className='teams_section px-10 py-5 md:px-30 md:py-10'>
        <h2 className='flex text-3xl md:text-4xl justify-center font-medium text-white'>Meet the Team</h2>
        <div className='flex flex-col justify-center md:flex-row mt-6'>
            <div className='team_carousel flex-[1_0_5%]'>
                <div className='m-2 flex justify-center md:bg-[#fff] md:p-2 md:max-w-[60%] md:border-2 md:border-[#fff] md:border-solid md:rounded-3xl'>
                    <img src={require(`src/assets/aboutUs/${teamImage}`)} className='rounded-lg h-48 md:h-auto md:w-[100%]' alt=''/>
                </div>
                <div className='flex justify-center m-2 md:max-w-[60%] font-normal md:text-3xl text-[#000080]'>
                {teamName}
                </div>
                <div className='flex justify-center m-2 md:max-w-[60%] font-normal md:text-lg text-[#000080]'>
                {teamPos}
                </div>
            </div>
            <div className='md:flex-[1_0_30%]'>
                <div className='flex flex-wrap justify-center md:justify-normal team_images'>
                <div className='team_desc leading-6 md:leading-8 w-[100%]'>
                    {teamDesc}
                </div>
                    {teamsData.map(member =>
                                    <div className='m-2 pt-4' onClick={() => {
                                        setTeamImage(member.imageSrc);
                                        setTeamDesc(member.desc)
                                        setTeamName(member.name)
                                        setTeamPos(member.position)
                                        }}>
                                        <img src={require(`src/assets/aboutUs/${member.imageSrc}`)} className='rounded-lg w-[130px]' alt=''/>
                                    </div>
                        )}
                </div>
            </div>
        </div>
    </div>
    );
}