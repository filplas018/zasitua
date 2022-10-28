
export const Card = (props) => {

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href={props.link}>
                <img className="rounded-t-lg" src={props.img} alt="" />
                <span>{props.date}</span>
            </a>
            <div className="p-5">
                <a href={props.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.perex}</p>
            </div>
        </div>
    );

}
export default Card;