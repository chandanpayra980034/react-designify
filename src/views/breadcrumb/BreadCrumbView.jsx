import { BreadCrumb } from "../../components/breadcrumb";

export const BreadCrumbView = () => {
    const data = [
        {
            "item": "Home",
            "link": "/"
        },
        {
            "item": "Project",
            "link": "/project"
        },
        {
            "item": "React-Designify"
        }
    ]
    return (
        <BreadCrumb data={data} divider={() => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-500">
  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
</svg>

            )
        }}
            homeIcon={() => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                    </svg>
                );
            }}
        />
    );
}