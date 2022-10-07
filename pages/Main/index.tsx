import MainRoundMenu from "../components/MainRoundMenu";
import MainMd from "./md/main.mdx";
import Contacts from "./md/contacts.mdx";
import NotFound from "./md/notFound.mdx";
import {useState} from "react";

const menuItems = [
    {
        id: 'WhoAmI',
        title: 'Кто мы',
        icon:'Code'
    },
    {
        id: 'Expertise',
        title: 'Экспертиза',
        icon:'Check'
    },
    {
        id: 'Projects',
        title: 'Завершенные проекты ',
        icon:'Deploy'
    },
    {
        id: 'Contacts',
        title: 'Контакты',
        icon:'Commit'
    }
];

export const Main = () => {
    const [page, setPage] = useState('WhoAmI')
    return (
        <>
            <MainRoundMenu
                size = '440'
                iconSize = '130'
                menuItems = { menuItems }
                setPage = {setPage}
            />
            <div className="rm-page">
                {page === 'WhoAmI' ? <MainMd /> : page === 'Contacts' ? <Contacts /> : <NotFound />}
            </div>
        </>

    )
}
