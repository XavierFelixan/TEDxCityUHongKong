import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import {Banner} from "../Components/banner";

import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import API from '../Components/apicall'

const Container = styled.div``
const ContentWrapper = styled.div`
    justify-content: center;
`;
const RadioList = styled.div``;
const RadioWrapper = styled.div``;

const Choice = styled.label`
    border: 1px solid;
    transition: all 200ms ease-out;
    justify-content: center;
    text-align: center;
    &:hover {
        transition-timing-function: ease-in;
        cursor: pointer;
    }
`;

const ChoiceRadio = styled.input.attrs({
    type: "radio",
})``;

const Form = styled.form`
    justify-content: center;
    align-items: center;
`;
const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;
const LabelSubmit = styled.label`
    color: red;
    font-weight: 500;
`;

const Input = styled.input`
    border: 1px solid;
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
    font-size: 14px;
`;

const InputOther = styled.input`
    border: 1px solid;
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    transition: all 200ms ease-out;
    &:disabled {
        opacity: 0.2;
        background-color: gray;
    }
`;

const Button = styled.button`
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:disabled {
        opacity: 0.5;
    }
    &:enabled {
        cursor: pointer;
    }
`;

const baseUrl = "http://localhost:5000"

export default function RegistrationPage(){

    const list_of_radio = ['Friends and Family', 'Posters and Banners', 'Social Media', 'Promotional Booths', 'Others']  
    const [info, setInfo] = useState({
        "reg_name": "",
        "email": "",
        "phone": "",
        "aff": "",
        "choice": "",
        "other": ""
    });
    const [submitted, setSubmitted] = useState(false);

    const register = async () => {
        API.addRegistrant(info, baseUrl)
        // .then((response) => props.insertedArticle(response))
        .catch(error => console.log('error', error));
        // console.log(info)
        // return fetch(`${baseUrl}/registration`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: info,
        // })
        //     .then((response) => response.json())
        //     .catch((error) => console.log(error));
    }

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setSubmitted(false);  
        setInfo(values => ({...values, [name]: value}));

        if (value === 'Friends and Family' || value === 'Posters and Banners' || value === 'Social Media' || value === 'Promotional Booths'){
            setInfo(values => ({...values, ['other']: ""}));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  
        setSubmitted(true);      
        register();
        setInfo({
            "reg_name": "",
            "email": "",
            "phone": "",
            "aff": "",
            "choice": "",
            "other": ""
        });
    };
    
    return (
        <Container>
            <Navbar />
            <Banner text={"Registration"}/>
            <ContentWrapper className="items-center py-20 px-44">
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="info">Name
                    </Label>
                        <Input onChange={handleChange} type="text" name="reg_name" id="reg_name" value={info.reg_name}>
                        </Input>
                    <Label htmlFor="info">Email
                    </Label>
                        <Input onChange={handleChange} type="email" name="email" id="email" value={info.email}>
                        </Input>
                    <Label htmlFor="info">Telephone Number
                    </Label>
                        <Input onChange={handleChange} type="text" name="phone" id="phone" value={info.phone}>
                        </Input>
                    <Label htmlFor="info">Affiliation (CityU Students, etc.)
                    </Label>
                        <Input onChange={handleChange} type="text" name="aff" id="aff" value={info.aff}>
                        </Input>
                    <Label className="mb-1">Radio Hear</Label>
                        <RadioList className="lg:grid-cols-5 lg:gap-x-3 grid flex ">
                            {list_of_radio.map((radio, index) => (
                                <RadioWrapper key={index} className="mb-2.5">
                                    <ChoiceRadio id={radio} name='choice' className='hidden peer' value={radio} onChange={handleChange} checked={info.choice === radio}/>
                                    <Choice htmlFor={radio} className='lg:h-14 justify-center items-center w-full rounded-md shadow-lg px-3 text-base text-black border border-border inline-flex peer-checked:border-red peer-checked:shadow-none'>
                                        {radio}
                                    </Choice>
                                </RadioWrapper>
                            ))}
                        </RadioList>
                        <InputOther onChange={handleChange} disabled={info.choice !== 'Others'} type="text" name="other" id="other" value={info.choice === 'Others' ? info.other : ""}>
                        </InputOther>
                    <Container className="flex items-center">
                        <Button onClick={handleSubmit} disabled={info.reg_name === "" || info.email === "" || info.phone === "" || info.aff === "" || info.choice === "" || (info.choice === 'Others' && info.other === "")} type="submit">Submit</Button>
                        {submitted && <LabelSubmit className="px-4">Submitted!</LabelSubmit>}
                    </Container>
                </Form>
            </ContentWrapper>
            <Footer />
        </Container>
    );
}