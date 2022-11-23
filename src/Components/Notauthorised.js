export default function Notauthorised (){
    return(
        <div className="jumbotron jumbotron-fluid bg-light my-3 p-3 m-5">
            <div className="container">
                <h1 className="display-4 text-center">Access denied!</h1>
                <h1 className="display-6 text-center pb-2">You are not authorised 
                to access this page.</h1>
            </div>
        </div>
    );
}