import React from 'react'
import { 
  AccordionItem,
  Accordion, 
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState
}   from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import "./Value.css"
import data from "../../utils/accordion"

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Values We Give</span>
          <span className='secondaryText'>Oak Homes is a leading Real .

<br /> Our apartments are u!
</span>

<Accordion
allowMultipleExpanded = {false}
preExpanded={[0]}
className='accordion'
>
  {
    data.map((item, i) => {
      return(
        <AccordionItem className='accordionItem' key={i} uuid={i}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="flecCenter icon">
                {item.icon}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
      )
    })
  }

</Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value