import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Switch from 'react-bootstrap-switch';
import "react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.css"

const LightItem = (props) => (
  <div className='items'>
    <div className='item toggle'>
      <Switch onChange={(el, isOn) => props.onToggleLight(props.id, isOn)} value={props.isOn} name={`light_${props.name}`} />
        {props.reachable ? '' : <div className='warning'>not reachable</div>}
    </div>
    {props.reachable ? 
      <div className='item slider'>
        <ReactBootstrapSlider
          value={props.isOn ? props.bri : 0}
          slideStop={(event) => props.onBrightnessChanged(props.id,event.target.value)}
          step={1}
          max={255}
          min={0}
          orientation="horizontal"
          labelledby="test"
          reversed={false} />
      </div> : '' }
  </div>
);

export default LightItem;