import React from 'react'
import { createHashRouter } from "react-router-dom";
import GeneralLayout from '../layouts/GeneralLayout';
import HomeView from '../../pages/home/view/HomeView';
import ServicesView from '../../pages/services/view/ServicesView';
import AboutView from '../../pages/about/view/AboutView';
import ContactView from '../../pages/contact/view/ContactView';
import ProgramaView from '../../pages/programa/view/ProgramaView';
import PacientesView from '../../pages/pacientes/view/PacientesView';


export const appRouter = createHashRouter([
    {
        path: "/",
        element: (
            <GeneralLayout>
                <HomeView />
            </GeneralLayout>

        ),
    },
    {
        path: "/programa",
        element: (
            <GeneralLayout>
                <ProgramaView />
            </GeneralLayout>

        ),
    },
    {
        path: "/pacientes",
        element: (
            <GeneralLayout>
                <PacientesView />
            </GeneralLayout>

        ),
    },
    {
        path: "/services",
        element: (
            <GeneralLayout>
                <ServicesView />
            </GeneralLayout>

        ),
    },
    {
        path: "/about",
        element: (
            <GeneralLayout>
                <AboutView />
            </GeneralLayout>

        ),
    },
    {
        path: "/contact",
        element: (
            <GeneralLayout>
                <ContactView />
            </GeneralLayout>

        ),
    },
]);