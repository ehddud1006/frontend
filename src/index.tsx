import { Global, ThemeProvider } from '@emotion/react';
import theme from 'assets/theme';
import { ArticlesProvider } from 'context/Articles';
import { AuthProvider } from 'context/Auth';
import { BoardProvider } from 'context/Board';
import { ChatProvider } from 'context/ChatContext';
import { JwtProvider } from 'context/JwtContext';
import { ScrollProvider } from 'context/ScrollContext';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styles from 'styles';

import App from './App';
import { store } from './store';

console.log(process.env.REACT_APP_MSW);

if (process.env.REACT_APP_MSW === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start({
    serviceWorker: {
      // Points to the custom location of the Service Worker file.
      url: '/ant_community_frontend_dev3/mockServiceWorker.js',
    },
  });
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <BoardProvider>
        <ArticlesProvider>
          <Global styles={styles} />
          <ChatProvider>
            <JwtProvider>
              <ScrollProvider>
                <Provider store={store}>
                  <App />
                </Provider>
              </ScrollProvider>
            </JwtProvider>
          </ChatProvider>
        </ArticlesProvider>
      </BoardProvider>
    </AuthProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
