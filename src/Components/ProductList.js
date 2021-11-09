import React from "react"
import {Link} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return(
        <div>
            {props.product.map((product, id) => {
                return <div>
                        <Link to={`/api/product/${product._id}`} key={id}>{product.title}<br></br></Link>
                    </div>
            })}
        </div>
    )
}

