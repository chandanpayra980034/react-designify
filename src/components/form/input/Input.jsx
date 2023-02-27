import { Fragment } from "react";

export const Input = ({ activeOutlineColor }) => {
    return (
        <Fragment>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-1 focus:outline-none ${activeOutlineColor ? `focus:ring-${activeOutlineColors?.find(e => e?.color === activeOutlineColor)?.class}` : ""} ${activeOutlineColor ? `focus:border-${activeOutlineColors?.find(e => e?.color === activeOutlineColor)?.class}` : ""} block w-64 p-2.5`} placeholder="name@flowbite.com" required />
        </Fragment>
    );
}
const activeOutlineColors = [
    {
        "color": "blue",
        "class": "blue-400"
    },
    {
        "color": "green",
        "class": "green-400"
    },
    {
        "color": "red",
        "class": "red-700"
    },
    {
        "color": "dark",
        "class": "gray-700"
    },
    {
        "color": "yellow",
        "class": "yellow-700"
    },
]