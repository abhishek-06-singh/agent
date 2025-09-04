import SupportCTA from './SupportCTA'
import DocumentationFaqs from './DocumentationFaqs'
import VideoTutorials from './VideoTutorials'
import PopularArticles from './PopularArticles'

export default function Help_Page() {
    return (
        <div className="w-full h-full pr-10 pb-10 pt-6 space-y-6">
            <DocumentationFaqs/>
            <VideoTutorials/>
            <PopularArticles/>
            <SupportCTA />
        </div>
    )
}
