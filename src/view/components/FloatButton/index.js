import {
    FloatingMenu,
    MainButton,
} from 'react-floating-button-menu';
import * as Icon from '@material-ui/icons';
import {useEffect, useState} from "react";
import GlobalStyle from "../../../global";
import {useHistory, useLocation} from "react-router-dom";


export const FloatButton = () => {
    const history = useHistory();
    const location = useLocation();
    const [page, setPage] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if (location.pathname === "/criador") {
            setIsOpen(false)
            setPage(0)
        } else if (location.pathname.indexOf("/editar/") === 0) {
            setIsOpen(false)
            setPage(1)
        }
    }, [location.pathname])

    return (
        <FloatingMenu
            slideSpeed={500}
            direction="up"
            spacing={8}
            isOpen={isOpen}
        >
            <GlobalStyle/>
            {isOpen ? (
                <MainButton
                    iconActive={<Icon.Menu style={{fontSize: 20, color: "white"}}/>}
                    background="var(--color-dark-green)"
                    onClick={() => history.push("/criador")}
                    size={56}/>
            ) : (
                page === 0 ? (
                    <MainButton
                        iconResting={<Icon.PlusOneOutlined style={{fontSize: 20, color: "white"}}/>}
                        background="var(--color-dark-green)"
                        onClick={() => history.push("/")}
                        size={56}
                    />
                ) : (
                    <MainButton
                        iconResting={<Icon.Edit style={{fontSize: 20, color: "white"}}/>}
                        background="var(--color-dark-green)"
                        onClick={() => history.push("/")}
                        size={56}
                    />
                )
            )}

        </FloatingMenu>

    )
}

