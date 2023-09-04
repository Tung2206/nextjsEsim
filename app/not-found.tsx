'use Client'

import Link from "next/link";

const NotFound = () => {
    return (
       <section className="mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="not-found text-center">
                        <h1 className="mb-3">404 Not Found</h1>
                        <h2 className="mb-3">This page cannot be found</h2>
                        <p>Go back to the <Link href='/' className="text-success">Home Page</Link></p>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default NotFound;