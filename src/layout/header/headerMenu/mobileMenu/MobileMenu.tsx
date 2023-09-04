import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'


export const MobileMenu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setOpen(!open)    ;
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={open} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={open} onClick={() => setOpen(false)}>
                <Menu/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
}


