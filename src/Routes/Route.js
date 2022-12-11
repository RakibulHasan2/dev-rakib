import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Home from "../Pages/Home/Home/Home";
import ProjectsDetails from "../Pages/ProjectsDetails/ProjectsDetails";
import Main from './../Layout/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/projects/:id',
                loader: async ({params}) => {
                    return fetch(`projectsData.json/${params.id}`)
                },
                element: <ProjectsDetails></ProjectsDetails>
            }
        ]
    }
])
export default router;