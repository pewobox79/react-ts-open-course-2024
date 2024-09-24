import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import MainLayout from '../layouts/MainLayout';
import BlogPage from '../pages/BlogPage';
import SingleArticlePage from '../pages/SingleArticlePage';


export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />} >
            <Route index element={<Homepage />} />
            <Route path="blog">
                <Route index element={<BlogPage />} />
                <Route path=":id" element={<SingleArticlePage />} />
            </Route>
        </Route>
    )
)


