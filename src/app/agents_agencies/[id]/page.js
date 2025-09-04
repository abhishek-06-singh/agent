import React from "react"
import BackButton from "../../components/AgentandAgencyComponents/BackButton"
import DetailAgentCard from "../../components/AgentandAgencyComponents/DetailAgentCard"
import listing from '../../Data/Real_Estate.json'
import AgentNav from "../../components/AgentandAgencyComponents/AgentNav"

export default function AboutAgent({params}) {
      const { id } = params;
      const property = listing.find((item) => item.id === id);
      if (!property) {
        return <div>Property not found</div>;
      }
      const agentName = property.agent;  
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* {listing.map((item) => (
        <DetailAgentCard key={item.id} listing={item} />
      ))} */}
      <BackButton/>
      <DetailAgentCard listing={property} />
      <AgentNav listing={listing} agentName={agentName}/>

    </div>
  )}
