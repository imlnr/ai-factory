import React, { useState } from 'react';
import OpenAI from 'openai';
import MyName from '../components/MyName';
import AddAttributeForm from '../components/AddAttributeForm';
import AttributeList from '../components/AttributeList';
import ApiKeyInput from '../components/ApiKeyInput';
import './src/resume.css';

const Resumegen = () => {
    const [educationList, setEducationList] = useState([]);
    const [skillsList, setSkillsList] = useState([]);
    const [hobbiesList, setHobbiesList] = useState([]);
    const [myName, setMyName] = useState("");
    const [response, setResponse] = useState("");
    const [apiKey,setApiKey] = useState("");

    const addEducation = (newEducation) =>
        setEducationList((prevEducationList) => [
            ...prevEducationList,
            newEducation,
        ]);
    const addHobbies = (newHobby) =>
        setHobbiesList((prevHobbiesList) => [...prevHobbiesList, newHobby]);
    const addSkills = (newSkill) =>
        setSkillsList((prevSkillsList) => [...prevSkillsList, newSkill]);
    const handleName = (event) => {
        setMyName(event.target.value);
    };

    const getCompletion = async () => {
        const openai = new OpenAI({
            apiKey: apiKey,
            dangerouslyAllowBrowser: true,
        });
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: buildContent() }],
            model: "gpt-3.5-turbo",
        });
        const res = chatCompletion.choices[0]["message"]["content"];
        console.log(res);
        setResponse(res);
    };

    const buildContent = () => {
        let content = "";
        content += `My name is ${myName}. `;
        content += `My education is ${joinList(educationList)}. `;
        content += `My hobbies are ${joinList(hobbiesList)}. `;
        content += `My skills are ${joinList(skillsList)}. `;
        content +=
            "Please create a one page resume for a software engineering job that highlights my skills.";
        console.log(content);
        return content;
    };

    const joinList = (list) => list.map((listItem) => listItem.title).join(", ");

    return (
        <div className="main-res-cont">
            <div className={'resume-cont'}>
                <h1>Resume Builder</h1>
                <hr />
                <MyName value={myName} onValueChange={handleName} />
                <hr />
                <AddAttributeForm labelText="Education" onAddAttribute={addEducation} />
                <AttributeList attributeList={educationList} />
                <hr />
                <AddAttributeForm labelText="Hobbies" onAddAttribute={addHobbies} />
                <AttributeList attributeList={hobbiesList} />
                <hr />
                <AddAttributeForm labelText="Skills" onAddAttribute={addSkills} />
                <AttributeList attributeList={skillsList} />
                <hr />
                <ApiKeyInput onApiKeySubmit={setApiKey} />
                <hr />
                <button title={"generate"} type={"submit"} onClick={getCompletion}>
                    Generate Resume
                </button>
                <hr />
            </div>
                <div className='out-div-res'
                    dangerouslySetInnerHTML={{ __html: response.replaceAll("\n", "<br/>") }}
                />
        </div>
    )
}

export default Resumegen;
