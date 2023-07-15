import Divider from "./components/Divider/page";
import Layout from "./components/Layout/Layout";


export default function NotFound() {
return(
    <Layout>
        <div className="bg-blue-900 w-screen h-screen flex flex-col justify-center items-center ">
        <Divider/>
        <br />
        <h3 className="text-2xl">404 || Page not Found</h3>
        <p className="text-1xl">Sorry, This Page Dose Not Exist...!</p>
        <br />
        <Divider/>
    </div>
    </Layout>
)
}