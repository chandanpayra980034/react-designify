import { Carousel } from "../../components/carousel";

export const CarouselView = () => {
    return (
        <Carousel
            name="home"
            images={
                [
                    {
                        "img": "https://picsum.photos/1300/500",
                        "alt": "image 1"
                    },
                    {
                        "img": "https://picsum.photos/1302/500",
                        "alt": "image 1"
                    },
                    {
                        "img": "https://picsum.photos/1303/500",
                        "alt": "image 1"
                    },
                    {
                        "img": "https://picsum.photos/1304/500",
                        "alt": "image 1"
                    },
                    {
                        "img": "https://picsum.photos/1305/500",
                        "alt": "image 1"
                    },
                    {
                        "img": "https://picsum.photos/1306/500",
                        "alt": "image 1"
                    }
                ]
            }
            controls
        />
    );
}