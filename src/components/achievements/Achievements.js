import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import {useParams} from "react-router-dom";

function Achievements({user}){
    const {id} = useParams()

    const [achievementList,setAchievementList] = useState([])
    const [achievement,setAchievement] = useState()

    useEffect(()=>{
        async function getAchievements(){
            let {data} = await axios.get(`/api/achievement/${id}`)
            setAchievementList(data.achievements)
        }
        getAchievements()
    },[])

    async function completeTask(e){
        e.preventDefault()
        try{
            await setAchievement(achievementList.filter((i)=>i._id===e.target.value)[0])
            let checkAchieve = await achievement._id
            let check = await user.achievements.find((e)=>e===checkAchieve)

            if (check){
                alert(`Achievement already completed!`)
            } else {
                await axios.put(`/api/achievement/${id}`,{achievement:achievement,user:user._id})
                await alert(`Task complete! you have been awarded ${achievement.pointsAwarded} points!`)
            }

        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
            {achievementList.map((a)=>(
                <>
                    <div >
                        {a.achievementName}
                        <Button variant="primary" onClick={completeTask} value={a._id}>Complete Task</Button>
                    </div>
                </>
            ))}

        </>
    )

}

export default Achievements
