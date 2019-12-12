import './style.css';

import Component from './modules/Component';

import HistoryRouter from './components/HistoryRouter';
import BoardWithLanding from './components/BoardWithLanding';
import ResetButton from './components/debug/ResetButton';

export default class App extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'trello-app',
      },
      children: [{
        tag: HistoryRouter,
        attrs: {
          routes: {
            '/': {tag: BoardWithLanding, attrs: {store: this.attrs.store}},
            '/logout': () => {
              console.log('logging out now');
            },
          },
          default: '/',
        },
      },
      {
        tag: ResetButton,
        attrs: {store: this.attrs.store}
      },
  ],
    };
  }
}
