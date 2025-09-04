'use client'
import { Breadcrumb } from "antd"
import Navbar from "../../../components/minicomponents/Navbar"
import DocumentContent from "./components/DocumentContent"


export default function UserPageDocument({ params }) {
  const { document } = params // dynamic segment
  const decodedDocument = decodeURIComponent(document)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* AntD Breadcrumb with custom separator */}
      <div className="ml-10 mt-4 text-textheading">
        <Breadcrumb  

          separator=">"
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboard/agent/documents">
                  Documents

                </a>
              ),
            },
            {
              title: (
               <span className="text-textnormal font-bold">
                              
                  {decodedDocument}
                  </span>

               
              ),
            },
          ]}
        />
      </div>
      <DocumentContent doc={decodedDocument} />




</div>
  )
}
