export default function Header(){
    return(
        <div className="m-0">
            <div className="row">
                <div className="col-lg-7" style={{backgroundColor : 'white'}}>
                    <img id='logo' src="Artboard 1.jpg"/>
                </div>
                <div className="col-lg-5 bg-light">
                    <a href='/' className="btn btn-warning mx-2 my-2">Home</a>
                    <a href='/gallery' className="btn btn-warning mx-2 my-2">Image Gallery</a>
                    <a href='/aboutus' className="btn btn-warning mx-2">About Us</a>
                    <a href='/contactus' className="btn btn-warning mx-2">Contact Us</a>
                </div>
            </div>
        </div>
    );
}