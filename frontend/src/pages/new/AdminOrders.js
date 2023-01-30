import React, { useState, useEffect } from 'react';
import {useAppContext} from "../../context/AppContext";
import Header from "./Header";
import Table from "../../components/ui/Table";
import CardAdmin from "../../components/cards/CardAdmin";

export default function AdminOrders(){

    const {authHandler} = useAppContext();
    const {user} = authHandler;

    // const cardData = {
    //     title: "",

    // }


    return (
        <div className="admin">
            <Header user={user}></Header>

            <div className="workflow">
                <div className="container2">
                    <div className="workflow__wrapper">
                        <div className="title-admin">
                            Новые заявки
                        </div>
                        <div className="tabs dflex aic jcsb">
                            <ul className="tab dflex aic">
                                <li className="tab__li tab__li-active"><a href="frontend/src/pages#" data-tab="all">Все</a></li>
                                <li className="tab__li"><a href="frontend/src/pages#" data-tab="worktravel">Командировки</a></li>
                                <li className="tab__li"><a href="frontend/src/pages#" data-tab="conciergevents">Мероприятия</a></li>
                            </ul>
                            <a href="frontend/src/pages">Архив</a>
                        </div>

                        <div className="orders" id="all">
                            <div className="orders__wrapper">
                                <CardAdmin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}