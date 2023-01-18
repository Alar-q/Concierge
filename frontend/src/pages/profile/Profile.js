import React from 'react'

import Workflow from "../../components/phone/Workflow";
import Menu from "../../components/phone/Menu";
import Container from "../../components/phone/Container";
import CardOrder from "../../components/cards/CardOrder";
import PushIcon from "../../assets/icons/clipboard-tick.svg";


export default function Profile(){
    return (
        <Workflow>

            <Container>

                <div className='profile_content'>
                    <div className="profile__person">
                        <div className="profile__hello">
                            Здравствуйте, <br/>
                            <span>Олжас!</span>
                        </div>
                        <div className="profile__avatar">
                            {/* <!-- <img src="" alt=""> --> */}
                        </div>
                    </div>

                    <div class="profile__stats stats">
                        <div class="stats__block">
                            <div class="stats__num">12</div>
                            <div class="stats__category">Заявок</div>
                        </div>
                        <div class="stats__block">
                            <div class="stats__num">4</div>
                            <div class="stats__category">Договоров</div>
                        </div>
                        <div class="stats__block">
                            <div class="stats__num">24 M</div>
                            <div class="stats__category">Заработано</div>
                        </div>
                    </div>

                    <div className="profile__pushs">
                        <div className="push">
                            <div className="push__icon">
                                <PushIcon />
                                    
                            </div>
                            <div className="push__info">
                                <div className="push__title">На сегодня</div>
                                <div className="push__descr">Заселение в 7 часов в отель Бондюор</div>
                            </div>
                        </div>
                        <div className="push">
                            <div className="push__icon">
                                <PushIcon />
                                    
                            </div>
                            <div className="push__info">
                                <div className="push__title">На сегодня</div>
                                <div className="push__descr">Заселение в 7 часов в отель Бондюор</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cards">
                        <div className="cards__title">
                            Мои заявки
                        </div>
                        <CardOrder />
                        <CardOrder />
                        <CardOrder />
                    </div>
                </div>

            </Container>

            <Menu />

        </Workflow>
    )
}