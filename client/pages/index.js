import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx)
  const {data} = await client.get('/api/users/currentuser')
  let pageProps;
  if(appContext.Component.getInitialProps){
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)
  }

  return {pageProps,...data}
};

export default LandingPage;
