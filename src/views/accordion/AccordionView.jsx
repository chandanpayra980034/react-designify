import { Fragment } from "react";
import { Accordion } from "../../components/accordion"

function AccordionView() {
    const data = [
        {
            "header": "Header 1",
            "content": function () {
                return (
                    <Fragment>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Fragment>
                );
            }
        },
        {
            "header": "Header 2",
            "content": function () {
                return (
                    <Fragment>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Fragment>
                );
            },
            "active": true
        },
        {
            "header": "Header 3",
            "content": function () {
                return (
                    <Fragment>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Fragment>
                );
            }
        }
    ]
    return (
        <div style={{ width: '50%', margin: "48px auto" }}>
            <Accordion data={data} />
        </div>
    )
}

export default AccordionView
