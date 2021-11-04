import React from 'react'
import "../skills/skills.css"
import { SkillsData } from "../../../list/skill-data"
import SkillsCard from "./skill-card"

function Skills() {
    const data = SkillsData;
    
    return (
        <div className="skills">
            <label className="section-title">Languages I Speak</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                            {item.list.map((skill)=>{
                                return <SkillsCard skill={skill} />
                            })}
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Skills
