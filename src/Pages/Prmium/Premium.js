import { useLoaderData } from "react-router-dom";


const Premium = () => {

    const premium = useLoaderData()
    const { name, description } = premium;

    return (
        <div className="card mt-5">

            <div className="card-body bg-info text-white">
                <h5 className="text-warning">{name}</h5>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Premium;