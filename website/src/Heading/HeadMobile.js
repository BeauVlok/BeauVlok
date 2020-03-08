import React from 'react'
import beau from '../assets/beau.jpg';
import './Head.css'
import { FaLanguage } from "react-icons/fa";
import {
    Image, 
  
} from 'semantic-ui-react'
class HeadMobile extends React.Component {
    render() {
        return (
            <>
                      <div
                    
                    onClick={this.props.setLanguage}
                  >
                    <FaLanguage id="mobileLanguage" size = '1.5em'/>
                  </div>
                <Image style={{zindex: 1}} src={beau}  />
            </>
        )
    }
}

export default HeadMobile