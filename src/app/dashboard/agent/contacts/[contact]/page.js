'use client'
import { Breadcrumb } from "antd"
import Navbar from "../../../components/minicomponents/Navbar"
import ContactDetailsPage from "./components/ContactDetailsPage"


export default function UserPageContact({ params }) {
  const { contact } = params // dynamic segment
  const decodedContact = decodeURIComponent(contact)

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
                <a className="text-textnormal" href="/dashboard/agent/contacts">
                  <span className="text-textnormal font-bold">
                  Contacts
                  </span>

                </a>
              ),
            },
            {
              title: (
               <span className="text-textnormal font-bold">
                              
                  {decodedContact}
                  </span>

               
              ),
            },
          ]}
        />
      </div>
      <ContactDetailsPage contact={decodedContact} />

     
</div>
  )}