import axios from 'axios'

const LandingPage =  ({currentUser}) => {
    console.log(currentUser)
    return <h1>Landing Page</h1>;
};

//executed during the server side rendering making request to server
/*
LandingPage.getInitialProps = async () =>{
    const response = await axios.get('/api/users/currentuser')
    return response.data
}
*/

export default LandingPage
