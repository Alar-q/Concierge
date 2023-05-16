import React from 'react';
import Block from "../../../shared/ui/block/Block";
import Typography from "../../../shared/ui/typography/Typography";
import _NavigationButtons from "../_navigation_buttons/_NavigationButtons";
import CardBody from "../../../shared/ui/card/CardBody";
import Card from "../../../shared/ui/card/Card";
import Checkbox from "../../../shared/ui/checkbox/Checkbox";

export default function AirfareStep({
                                        data={},
                                        upsertFields=f=>f,

                                        next=f=>f,
                                        back=f=>f,

                                        submit=f=>f,
                                        close=f=>f,

                                        isFirstStep=false,
                                        isLastStep=false,
                                    }){

    const {  } = data;

    function onSubmitHandler(e) {
        e.preventDefault();

        if (isLastStep) {
            return submit()
        }
        return next();
    }

    return (<>
        <form onSubmit={onSubmitHandler}>
            <Card>
                <CardBody>
                    <Block isAlignCenter={true} bottom={20}>
                        <Typography size={20} weight={700} align={'center'}>Данные по билетам</Typography>
                    </Block>
                </CardBody>

                <Checkbox required={true} onChange={f=>f} label={'For text'}/>

                <_NavigationButtons isLastStep={isLastStep} isFirstStep={isFirstStep} back={back}/>
            </Card>
        </form>
    </>);
}