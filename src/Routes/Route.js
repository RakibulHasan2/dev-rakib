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
                    return fetch(`https://dev-rakib-servrer.vercel.app/projects/${params.id}`)
                },
                element: <ProjectsDetails></ProjectsDetails>
            },
            {
                path: '/blog',
                element: <h1 className="text-4xl font-bold text-center">Blog is coming</h1>
            }
        ]
    }
])
export default router;