import Link from "next/link";


const pageHeader = (props) => {


    const handleCollapse = () => {

       document.getElementById("navbarCollapse").classList.toggle("collapse");
      

    }

    return (

        <div>

            <div className="container-fluid">
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a href="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                className="text-primary font-weight-bold border px-3 mr-1">C</span>Shopper</h1>
                        </a>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products"/>
                                <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"/>
                            </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">

                        <Link href={"/cart"} className="btn border">
                            <img className="text-primary" style={{height: 1 + 'em'}} src="/cart.svg" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="container-fluid ">
                <div className="row border-top px-xl-5">

                    <div className="col-lg-9">
                        <nav className="nav navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                    className="text-primary font-weight-bold border px-3 mr-1">C</span>Shopper</h1>
                            </a>
                            <button onClick={handleCollapse} type="button" className="navbar-toggler"
                                    data-toggle="collapse"
                                    data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    {props.pages.map((page, index) => (
                                        <Link href={`/${page.slug}`}>
                                            <a className="nav-link nav-item ">
                                                {page.title}
                                            </a>
                                        </Link>

                                    ))}

                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    );


}

export default pageHeader;