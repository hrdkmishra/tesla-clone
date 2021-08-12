import React from 'react'
import Section from "./Section"

function Home() {
    return (
        <div>
           <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            leftBtnText="Custom Order"
            rightBtnText="Exisiting Inventory"
            bgImage ="model-s.jpg"
           /> 
            <Section 
             title="Model Y"
             description="Order Online for Touchless Delivery"
             leftBtnText="Custom Order"
             rightBtnText="Exisiting Inventory"
             bgImage ="model-y.jpg"
            /> 
            <Section 
             title="Model 3"
             description="Order Online for Touchless Delivery"
             leftBtnText="Custom Order"
             rightBtnText="Exisiting Inventory"
             bgImage ="model-3.jpg"
            /> 
           <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            leftBtnText="Custom Order"
            rightBtnText="Exisiting Inventory"
            bgImage ="model-x.jpg"
           /> 
           <Section 
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            leftBtnText="Order Open"
            rightBtnText="Learn More"
            bgImage ="solar-panel.jpg"
           /> 
           <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            leftBtnText="Order Open"
            rightBtnText="Learn More"
            bgImage ="solar-roof.jpg"
           /> 
           <Section 
            title="Accessories"
            //description="Order Online for Touchless Delivery"
            leftBtnText="Shop now"
            //rightBtnText="Exisiting Inventory"
            bgImage ="accessories.jpg"
           /> 
        </div>
    )
}

export default Home
