import React, {useEffect, useMemo} from "react";

import {useLocation, useNavigate} from "react-router-dom";

import BackIcon from "../../../../assets/icons/backbtn_icon.svg";

import NavbarPanel from "../../../../widgets/navbar_panel/NavbarPanel";
import BottomControl from "../../../../shared/ui/bottom_control/BottomControl";
import Button from "../../../../shared/ui/button/Button";
import NavigationPanel from "../../../../widgets/navigation_panel/NavigationPanel";
import Box from "../../../../shared/ui/box/Box";
import Gallery from "../../../../shared/ui/gallery/Gallery";
import GalleryNew from "../../../../shared/gallery/Gallery";
import HotelGeo from "../../../../widgets/hotel/hotel_geo/HotelGeo";
import HotelChoiceRoom from "../../../../widgets/hotel/hotel_choice_room/HotelChoiceRoom";
import HotelPolitics from "../../../../widgets/hotel/hotel_politics/HotelPolitics";
import HotelDetails from "../../../../widgets/hotel/hotel_details/HotelDetails";
import NavbarLeft from "../../../../shared/ui/navbar/NavbarLeft";
import useBigList from "../../../../hooks/useBigList";
import Logger from "../../../../internal/Logger";
import Container from "../../../../shared/ui/box/Container";
import GalleryThumbColumn from "../../../../shared/gallery/GalleryThumbColumn";
import GalleryThumb from "../../../../shared/gallery/GalleryThumb";
import {useAppContext} from "../../../../context/AppContext";
import SliderNew from "../../../../shared/slider_new/SliderNew";
import ConciergeAction from "../../../../widgets/order/concierge_action/ConciergeAction";
import GroupInline from "../../../../shared/ui/group_inline/GroupInline";
import AppBar from "../../../../shared/ui/app_bar/AppBar";
import Block from "../../../../shared/ui/block/Block";
import Logo from "../../../../shared/ui/logo/Logo";
import Nav from "../../../../shared/ui/nav/Nav";
import NavLink from "../../../../shared/ui/nav/NavLink";

function getUrl(skip, limit, filter={}){
    return `/api/hotel/room/pagination/?` + new URLSearchParams({
        skip,
        limit,
        sort: 'createdAt',
        ...filter,
    });
}

const HotelSinglePage = ({ data={}, next=f=>f }) => {

    const logger = useMemo(() => new Logger('HotelSingle'), []);

    const { hotel } = data;
    const rooms = hotel['hotel/rooms'];

    const images = ['https://www.discoverlosangeles.com/sites/default/files/business/hilton-pasadena/h_2000-crm-la-1-hilton-pasadena_port-cochure-e454ef6c5056a36_e454f09a-5056-a36f-233cbb308efaf59d.jpg','https://avatars.mds.yandex.net/get-altay/998237/2a00000161e27a91e164a409a740f64aced7/XXL','https://venturesafrica.com/wp-content/uploads/2018/10/153050202-1-1024x661.jpg','https://www.theartofbusinesstravel.com/wp-content/uploads/2017/04/92275707.jpg','https://salon.ru/storage/thumbs/gallery/179/178992/5000_5000_s763.jpg','https://images.acase.ru/acase_images/1310763/204783592_P.jpg','https://archinect.imgix.net/uploads/9d/9ddc50df6e0ced48dc1b06785a946531.jpg?fit=crop&amp;auto=compress%2Cformat&amp;w=1200','https://images.acase.ru/acase_images/1310763/204733943_P.jpg', 'https://www.discoverlosangeles.com/sites/default/files/business/hilton-pasadena/h_2000-crm-la-1-hilton-pasadena_port-cochure-e454ef6c5056a36_e454f09a-5056-a36f-233cbb308efaf59d.jpg','https://avatars.mds.yandex.net/get-altay/998237/2a00000161e27a91e164a409a740f64aced7/XXL','https://venturesafrica.com/wp-content/uploads/2018/10/153050202-1-1024x661.jpg','https://www.theartofbusinesstravel.com/wp-content/uploads/2017/04/92275707.jpg','https://salon.ru/storage/thumbs/gallery/179/178992/5000_5000_s763.jpg','https://images.acase.ru/acase_images/1310763/204783592_P.jpg']
    // Разделение массива на группы по два элемента
    const groupedImages = [];
    for (let i = 1; i < images.length; i += 2) {
        groupedImages.push(images.slice(i, i + 2));
    }

    const { adaptiveHandler } = useAppContext();
    const { device } = adaptiveHandler;

    return (<>

        {device === 'mobile'
            ? <SliderNew photos={images} />
            : <GalleryNew>
                <GalleryThumb isBig={true}>
                    <img src={images[0]} alt="images[0]"/>
                </GalleryThumb>
                {groupedImages.map((groupedImage, index) => {
                    return (<>
                        <GalleryThumbColumn>
                            {groupedImage.map((image, index) => {
                                return (<GalleryThumb>
                                    <img src={image} alt={`image[${index}`}/>
                                </GalleryThumb>)
                            })}
                        </GalleryThumbColumn>
                    </>)
                })}
            </GalleryNew>
        }
        {/*<Gallery images={hotel.images.map(id=>`/file/${id}`)} height={240} />*/}


        <HotelGeo />
        {/*<HotelChoiceRoom />*/}
        <HotelPolitics hotel={hotel} />
        <HotelDetails hotel={hotel} />

        <BottomControl>
            <Button variant={'control'} onClick={e => next()}>Выбрать отель</Button>
        </BottomControl>
    </>)
}
export default function HotelSingle({ data={}, next=f=>f, back=f=>f, }) {

    const { hotel } = data;
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { adaptiveHandler } = useAppContext();
    const { device } = adaptiveHandler;

    if (device === 'mobile' || device === 'tablet') {
        return (<>
            <NavbarPanel
                LeftButton={<NavbarLeft Icon={<BackIcon />} onClick={e => back()} />}
                title={hotel?.name}
            />

            <Box navbar={true} menu={true} yummy={true}>
                <Container>
                    <HotelSinglePage data={data} next={next} back={back} />
                </Container>
            </Box>

            <NavigationPanel />
        </>)
    } else {
        return (<>
            <GroupInline width={'100%'} height={'100%'}>
                <AppBar left={true} isClientView={true}>
                    <Block>
                        <Logo/>
                        <Block top={80} isAlignCenter={true}>
                            <Nav block={true}>
                                <NavLink active={pathname.startsWith('/new')} text={'Главная'} onClick={e => navigate('/new', {replace: true,})}/>
                                <NavLink active={pathname.startsWith('/orders')} text={'Заказы'} onClick={e => navigate('/orders', {replace: true,})}/>
                                <NavLink active={pathname.startsWith('/chat')} text={'Чат'} onClick={e => navigate('/chat', {replace: true,})}/>
                                <NavLink active={pathname.startsWith('/profile')} text={'Сервисы'} onClick={e => navigate('/profile', {replace: true,})}/>
                            </Nav>
                        </Block>
                    </Block>
                </AppBar>
                <Container padding={'20px'}>
                    <HotelSinglePage data={data} next={next} back={back} />
                </Container>
            </GroupInline>
        </>)
    }
}