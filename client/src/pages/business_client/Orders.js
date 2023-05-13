import React, {useEffect, useMemo, useState} from 'react';

import {useAppContext} from "../../context/AppContext";

import NavbarPanel from '../../widgets/navbar_panel/NavbarPanel';
import Box from '../../shared/ui/box/Box'
import NavigationPanel from '../../widgets/navigation_panel/NavigationPanel';

import Accordion from '../../shared/ui/accordion/Accordion'
import AccordionSummary from '../../shared/ui/accordion/AccordionSummary'
import AccordionDetails from '../../shared/ui/accordion/AccordionDetails'
import Card from '../../shared/ui/card/Card';
import CardBody from '../../shared/ui/card/CardBody';
import GroupFlex from '../../shared/ui/group_flex/GroupFlex'
import EmployeeInfo from '../../entities/employee/employee_info/EmployeeInfo'

import TriangleIcon from '../../assets/icons/drop-down-info.svg';
import BottomControl from "../../shared/ui/bottom_control/BottomControl";
import Button from "../../shared/ui/button/Button";
import HotelCard from "../../widgets/hotel/hotel_card/HotelCard";
import Configurator from "../../widgets/configurator/Configurator";
import Logger from "../../internal/Logger";
import useBigList from "../../hooks/useBigList";
import HotelMealsChoice from "../../widgets/hotel/hotel_meals_choice/HotelMealsChoice";
import OrderCard from "../../widgets/order/order_card/OrderCard";
import Container from "../../shared/ui/box/Container";
import {useNavigate} from "react-router-dom";


export default function Orders({}){
    const logger = useMemo(()=>new Logger('Orders'), [])
    const navigate = useNavigate();

    const { orderHandler, } = useAppContext();
    const { orders, ordersLoading, takeOrder } = orderHandler;

    return (<>
        <NavbarPanel title={'Заказы'} />
        <Box navbar={true} menu={true} yummy={true}>

            <Container>
                {orders.map((order, i) => {
                    return (<div key={i}>
                        <OrderCard
                            order={order}
                            onClick={e => {
                                logger.log({order})
                                navigate(`/orders/${order.id}`);
                            }}
                        />
                    </div>);
                }

                )}

            </Container>

        </Box>
        <BottomControl>
            <Button variant={'control'} onClick={e => navigate('/new')}>Добавить заказ</Button>
        </BottomControl>
        <NavigationPanel />
    </>)
}