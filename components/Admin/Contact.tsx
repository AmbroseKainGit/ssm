import { ParamsQuery } from "@/typings"

interface props {
    params?: ParamsQuery|null
}
export const Contact = ({params}: props) => {
    console.log(params?.getParams);
    const arrayAsString = JSON.stringify(params);
    return (
        <pre>{arrayAsString}</pre>        
    )
}