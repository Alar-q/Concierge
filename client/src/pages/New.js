import React, { Fragment, useState, useEffect } from 'react';

import NavbarPanel from '../widgets/navbar_panel/NavbarPanel';
import Box from '../shared/ui/box/Box'
import NavigationPanel from '../widgets/navigation_panel/NavigationPanel';

import Card from '../shared/ui/card/Card';
import CardHeader from '../shared/ui/card/CardHeader';
import Logo from '../shared/ui/logo/Logo';
import CardBody from '../shared/ui/card/CardBody';
import CardFooter from '../shared/ui/card/CardFooter';
import Button from '../shared/ui/button/Button';
import ButtonCircle from '../shared/ui/button_circle/ButtonCircle';
import GroupButtons from '../shared/ui/group_buttons/GroupButtons';

import NewHotelOrder from '../entities/order/new_hotel_order/NewHotelOrder'
import NewTransferOrder from '../entities/order/new_transfer_order/NewTransferOrder'

export default function New({}){

    const [isActiveTab, setIsActiveTab] = useState(false)
    const [activeTab, setActiveTab] = useState(null)
    const [activeEl, setActiveEl] = useState(null)

    // useEffect(()=> {
    //     if 
    // }, [isSignup])

    useEffect(() => {
        console.log("activeTab", activeTab)
        switch (activeTab) {
            case 'hotel':
                setActiveEl(<NewHotelOrder />)
                break;
            case 'transfer':
                setActiveEl(<NewTransferOrder />)
                break;
            default:
                setActiveEl(null)
                break;
          }
      }, [activeTab]);

    const handleClick = (activeTab) => {
        setActiveTab(activeTab)
        setIsActiveTab(true);
    };

    return (
        <Fragment>
            <NavbarPanel/>
                <Box>
                    {isActiveTab && activeEl 
                        ? <ButtonCircle onClick={()=>handleClick('')}>Назад</ButtonCircle>
                        : ""
                    }
                    <Card>
                        <CardHeader>
                            <Logo />
                        </CardHeader>
                        <CardBody>
                            {isActiveTab && activeEl
                                ? activeEl
                                : <GroupButtons>
                                    <Button onClick={()=>handleClick('hotel')}>Найти отель</Button>
                                    <Button onClick={()=>handleClick('transfer')}>Найти трансфер</Button>
                                    <Button onClick={()=>handleClick()}>Найти билеты</Button>
                                </GroupButtons>
                            }
                            
                        </CardBody>
                        <CardFooter>
                            {/* {isSignup 
                                ? <TextWithLink text="Уже есть аккаунт?" linktext="Авторизация" onClick={() => handleClick(false)} />
                                : <TextWithLink text="Нет аккаунта?" linktext="Регистрация" onClick={() => handleClick(true)} />
                            }
                            */}
                        </CardFooter>
                    </Card>
                </Box>
            <NavigationPanel />
        </Fragment>
    )
}