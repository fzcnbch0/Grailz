import Navbar from "../../components/navbar";
import AccountDetail from "../../components/accountinfo";
import Heading from "../../components/heading";
import Footer from "../../components/footer";
import './index.css'
function AccountPage(){

    return(
        <>
            <Navbar/>
            <Heading/>

            <AccountDetail/>
            <Footer/>
        </>
    )
}

export default AccountPage;
