import React from 'react';
import InputForm from "../../../components/form/InputForm";
import FormWrapper from "../../../components/form/FormWrapper";

export default function UserForm({name, company_name, phone, email, updateFields=f=>f }){
        return (
            <FormWrapper title={"Последняя деталь"}>

                <InputForm label={"ФИО *"}
                           placeHolder={"Введите ваше полное имя"}
                           updateFields={updateFields}
                           field_key={"name"} value={name}
                />

                <InputForm label={"Название комании *"} placeHolder={"Введите название компании"}
                           updateFields={updateFields} field_key={"company_name"} value={company_name}/>

                <InputForm label={"Моб. телефон *"} placeHolder={"+7   (7 _ _)   _ _ _    _ _    _ _"}
                           updateFields={updateFields} field_key={"phone"} value={phone}/>

                <InputForm label={"Электронная почта *"} placeHolder={"Введите вашу эл. почту"}
                           updateFields={updateFields} field_key={"email"} value={email}/>

            </FormWrapper>
        );
}