import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Page from '../components/Page'
import PageApp from '../components/PageApp'

const Welcome = lazy(() => import('../pages/Welcome'))
const CreateNewWalletStep1 = lazy(() => import('../pages/CreateNewWalletStep1'))
const CreateNewWalletStep2 = lazy(() => import('../pages/CreateNewWalletStep2'))
const CreateNewWalletStep3 = lazy(() => import('../pages/CreateNewWalletStep3'))
const CreateNewWalletStep4 = lazy(() => import('../pages/CreateNewWalletStep4'))
const Home = lazy(() => import('../pages/Home'))
const Bridge = lazy(() => import('../pages/Bridge'))
const Stake = lazy(() => import('../pages/Stake'))
const Validators = lazy(() => import('../pages/Validators'))
const Governance = lazy(() => import('../pages/Governance'))
const Apps = lazy(() => import('../pages/Apps'))
const Setting = lazy(() => import('../pages/Setting'))
const Proposal = lazy(() => import('../pages/Proposal'))


const Transactions = lazy(() => import('../pages/Transactions'))
const Transaction = lazy(() => import('../pages/Transaction'))
const Validator = lazy(() => import('../pages/Validator'))
const NotFoundPage = lazy(() => import('../pages/404'))
const Containers: CustomRouter.Route[] = [
  {
    name: 'Welcome',
    path: '/welcome',
    exact: true,
    comp: Welcome,
  },
  {
    name: 'CreateNewWalletStep1',
    path: '/newwalletstep1',
    exact: true,
    comp: CreateNewWalletStep1,
  },
  {
    name: 'CreateNewWalletStep2',
    path: '/newwalletstep2',
    exact: true,
    comp: CreateNewWalletStep2,
  },
  {
    name: 'CreateNewWalletStep3',
    path: '/newwalletstep3',
    exact: true,
    comp: CreateNewWalletStep3,
  },
  {
    name: 'CreateNewWalletStep4',
    path: '/newwalletstep4',
    exact: true,
    comp: CreateNewWalletStep4,
  },
  {
    name: 'Home',
    path: '/',
    exact: true,
    comp: Home,
  },
  {
    name: 'Bridge',
    path: '/bridge',
    exact: true,
    comp: Bridge,
  },
  {
    name: 'Stake',
    path: '/stake',
    exact: true,
    comp: Stake,
  },
  {
    name: 'Validators',
    path: '/validators',
    exact: true,
    comp: Validators,
  },
  {
    name: 'Governance',
    path: '/governance',
    exact: true,
    comp: Governance,
  },
  {
    name: 'Apps',
    path: '/apps',
    exact: true,
    comp: Apps,
  },
  {
    name: 'Setting',
    path: '/setting',
    exact: true,
    comp: Setting,
  },
  {
    name: 'Proposal',
    path: '/proposal/:id',
    exact: true,
    comp: Proposal,
  },


  {
    name: 'Transactions',
    path: '/transactions',
    exact: true,
    comp: Transactions,
  },
  {
    name: 'Transaction',
    path: '/transaction/:address',
    exact: true,
    comp: Transaction,
  },
  
  {
    name: 'Validator',
    path: '/validator/:address',
    exact: true,
    comp: Validator,
  },
  {
    name: '404',
    path: '/404',
    exact: true,
    comp: NotFoundPage,
  },
]

const RouterComp = ({ container, routeProps }: { container: CustomRouter.Route; routeProps: any }) => {
  return <container.comp {...routeProps} />
}

const Routers: React.FC = () => {
  const isLoggedIn = true
  return (
    <Router>
      <Route
        render={(props: any) => (
          isLoggedIn ?(
            <PageApp>
              <Suspense fallback={<span />}>
                <Switch location={props.location}>
                  {Containers.map(container => (
                    <Route
                      {...container}
                      key={container.name}
                      render={routeProps => <RouterComp container={container} routeProps={routeProps} />}
                    />
                  ))}
                  <Redirect from="*" to="/404" />
                </Switch>
              </Suspense>
              
            </PageApp>
          ):(
            <Page>
              <Suspense fallback={<span />}>
                <Switch>
                <Route path="/" exact>
                    <Welcome/>
                </Route>
                <Route path="/welcome" exact>
                    <Welcome/>
                </Route>
                <Route path="/newwalletstep1" exact>
                    <CreateNewWalletStep1/>
                </Route>
                <Route path="/newwalletstep2" exact>
                    <CreateNewWalletStep2/>
                </Route>
                <Route path="/newwalletstep3" exact>
                    <CreateNewWalletStep3/>
                </Route>
                <Route path="/newwalletstep4" exact>
                    <CreateNewWalletStep4/>
                </Route>
                <Redirect from="*" to="/welcome" />
                <Route path="*">
                  <Welcome/>
                </Route>
                </Switch>
              </Suspense>
            </Page>
          )
        )}
      />
    </Router>
  )
}

export default Routers
