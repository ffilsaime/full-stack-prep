import PageTitle from "./PageTitle";
import type {ReactNode} from "react";

interface PageHeadingProps {
    title: string;
    children: ReactNode;
}

export default function PageHeading ({title, children}: PageHeadingProps){

    return (
        <div className="page-heading-container">
            <PageTitle title={title}/>
            <p className="page-heading-paragraph">{children}</p>
        </div>
    );
}