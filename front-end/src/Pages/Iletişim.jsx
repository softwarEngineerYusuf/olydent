import GoogleMap from "../Components/map/GoogleMap"

function Iletişim()
    {
        return(
            <div className="mt-2 container">
                <div className="container mt-5 d-flex justify-content-center">
                    <h1>
                        İletişim
                    </h1>
                </div>


                <div>
                <GoogleMap/>
                </div>
                
                

               
            </div>
        )

    }
export default Iletişim