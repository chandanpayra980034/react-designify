import { Button } from "../../components/button"
import { Card } from "../../components/card"

export const CardView = () => {
    return (
        <Card
            title="Noteworthy technology acquisitions 2021"
            desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            action={() => {
                return (
                    <Button text="View Me" type="dark" rightIcon={() => {
                        return (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        )
                    }} />
                )
            }}
            // onClick={() => { }}
            rounded="lg"
            shadow="md"
            rightIcon={() => {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                )
            }}
        coverImage="https://flowbite.com/docs/images/blog/image-1.jpg"
        coverImageAlt="Default Image"
        />
    )
}