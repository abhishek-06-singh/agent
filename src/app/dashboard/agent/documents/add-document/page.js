'use client'
import { Breadcrumb } from "antd"
import Navbar from "../../../components/minicomponents/Navbar"
import UploadDocument from '../components/UploadDocument'



export default function Add_Document() {
  

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
                              Add Document
                  </span>

               
              ),
            },
          ]}
        />
      </div>
      <UploadDocument/>
</div>
  )
}
