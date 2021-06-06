import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import {
    BrowserRouter as Router, Route, Switch,
  } from "react-router-dom";
import { ContractIDForm } from './pages/Form/ContractIDForm';
import { ContractDisplay } from './pages/Display/ContractDisplay';

interface RouteProps {
    path: string;
    children: React.ReactElement;
}  
const AppRoute = (props: RouteProps) => {
    return  (
      <Route
        exact
        path={props.path}
        render={(routeProps) =>
          React.cloneElement(props.children, { ...routeProps })
        }
      />
    ) 
};
function App() {
    return (
        <Router>  
            <Switch>
                <AppRoute path="/contracts/:id">
                    <Layout>
                        <ContractDisplay/>
                    </Layout>
                </AppRoute>
                <AppRoute path="/contract-viewer-app">
                    <Layout>
                        <ContractIDForm />
                    </Layout>
                </AppRoute>
            </Switch>
        </Router>
    );
}
export default App;
