import {FaMusic} from "react-icons/fa";
import Link from "next/link";

function Logo(){
    return <>
        <div>
            <Link className="flex justify-center gap-4 items-center" href="/">
                <i className="text-xl mt-2">
                    <FaMusic />
                </i>
                <h1 className="">DJ Events</h1>
            </Link>
        </div>
    </>
}

export default Logo;