import React from "react";
import {apiData} from "../public/slideData/data"
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card"

const Test = () => {
  return (
    <>
    <div className="flex flex-col gap-12">
      {/* Full-width section for search bar */}
      <div className="container mx-auto w-[100%] px-8 md:px-10 bg-white rounded-xl shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="md:text-4xl text-3xl font-bold tracking-tight text-[#1e733d] heading">
          Efficient Carbon Footprint Tracking
        </h1>
        <div className="flex gap-4">
            {apiData.map((card) => (
              <Card key={card.id} className="shadow-2xl" >
                <CardHeader>
                  <CardTitle><h1 className="font-serif">{card.title}</h1></CardTitle>
                </CardHeader>
                <CardContent className="font-sans">
                  {card.content}
                </CardContent>
              </Card>
            ))}
          </div>
      </div>

      {/* Full-width Food Gallery */}
      
      {/* Grid layout for the landing image and app download section */}
    </div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    </>
  )
}

export default Test