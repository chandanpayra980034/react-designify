import { Fragment, useState } from "react";
import { Badge } from "../../components/badge";

export const BadgeView = () => {
    const [view, setView] = useState(true)
    return (
        <Fragment>
            {view && <Badge type="red" text="Red" size="small" />}
        </Fragment>
    );
}