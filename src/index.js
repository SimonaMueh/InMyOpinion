import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar';
import App from './routes/App';
import Home from './routes/Home';
import TopicDetailPage from './routes/TopicDetailPage';
import TopicResultPage from './routes/TopicResultPage';


injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Switch>
            <Navbar>
              <Route exact path="/" component={Home} />
              <Route exact path="/topics/:id" component={TopicDetailPage} />
              <Route exact path="/topics/:id/result" component={TopicResultPage} />
            </Navbar>
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
document.getElementById('root'));

registerServiceWorker();
