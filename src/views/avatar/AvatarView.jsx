import { Fragment } from "react";
import { Avatar } from "../../components/avatar";

export const AvatarView = () => {
    return (
        <Fragment>
            <Avatar
                src="https://picsum.photos/24"
                type="square"
                textStyle={{color:"white"}}
                style={{ width: 48, height: 48,background:"mediumseagreen" }}
            />
        </Fragment>
    );
}