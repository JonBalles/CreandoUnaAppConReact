import { ContentRowTop } from "./ContentRowTop";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";



export const ContentWrapper = () => {
    return (
        <>
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
        <TopBar />
        <ContentRowTop />
        <Footer />
        </div>
        </div>
        </>
    )
}