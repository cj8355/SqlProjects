import "./projects.scss";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import ExcelFile1 from './CovidDeaths.csv';
import ExcelFile2 from './CovidVaccinations.csv';

export default function Projects() {
    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "assets/mysql_covid_proj.png",
            title: "Covid-19",
            desc: "MySQL project documenting Covid deaths/Vaccinations",
            img: "assets/mysql_covid_proj.png",
            code: "https://github.com/cj8355/MysqlCovidProject/blob/main/Covid.sql",
            repo: "https://github.com/cj8355/RetroLand",
            techUsed: [ "React", "Styled Components", "Firebase", "Material UI"]
        },
       
    ];
    
    const handleClick = (way)=> {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="Container">
            Projects
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                <div className="container" key={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                {/* <div className="imgContainer">
                                    <img src={process.env.PUBLIC_URL + "/" +  d.icon} alt="" />
                                </div> */}
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <div className="iconContainer">
                                {/* <a href={d.livesite} target="_blank"> <LanguageOutlinedIcon className="websiteIcon" /> </a> */}
                                {/* <a href={d.repo} target="_blank"> <GitHubIcon className="gitHubIcon" /> </a> */}
                                <a href={d.code} target="_blank"><CodeIcon /></a>
                                <a href={ExcelFile1} target="_blank">Download1</a>
                                <a href={ExcelFile2} target="_blank">Download2</a>
                                </div>
                                
                                {/* {d.techUsed.length && (
                                    <ul className="techUsed">
                                        {d.techUsed.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                    ))}
                                    </ul>
                                    )} */}
                                    
                            </div>
                        </div>
                        <div className="right">
                            <img src={process.env.PUBLIC_URL + "/" +  d.img} alt="" />
                        </div>
                    </div>
                    
                </div>
                ))}
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowForwardIosIcon className="arrow right"  onClick={()=>handleClick("right")}/>
        </div>
        
    )
}