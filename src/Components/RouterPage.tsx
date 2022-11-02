import React from 'react';
import styled from 'styled-components';
import BodyMainPage from './Body/BodyMainPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IntroMainPage from './Body/Company/IntroMainPage';

const RouterPage = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={BodyMainPage}></Route>
                <Route path="/Company/:Page_Label" component={IntroMainPage}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default RouterPage;
