import React from 'react'
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import { Col, Row, CustomInput, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Rent extends React.Component {
    state = {
        currentNeighborhood: '',
        propertiesName: 'Property Name',
        image: 'https://placebear.com/200/300',
        unAvailable: false

    }
    handleRentalSubmit = (e) => {
        e.preventDefault()
        console.log('submitted!', e.target.name.value)
        // axios.get()
        // .then()
        // .catch()
    }
    render() {
    return (
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/seattle.jpg") + ")"
          }}
          // ref={pageHeader}
        ></div>
        <div className='Rental-Form'>
        <h1>Rental Content</h1>
        <Form onSubmit={this.handleRentalSubmit}>
        <FormGroup>
          <Label className="Rental-Content" for="exampleCustomSelect">Select Neighborhood</Label> 
          <br></br><br></br>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
            <option value="">Seattle</option>
            <option name="ballard">Ballard</option>
            <option name="beaconHill">Beacon Hill</option>
            <option name="captialHill">Capitol Hil</option>
            <option name="queenAnne">Queen Anne</option>
            <option name="rainerValley">Rainier Valley</option>
            <option name="universityDistrict">University District</option>
          </CustomInput>
        </FormGroup>
        <Button type="submit">Search Rental Properties!</Button>
      </Form>

        </div>
        </div>
    )
    }
}

export default Rent