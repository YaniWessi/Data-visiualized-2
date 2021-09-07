import React from 'react';
import { 
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, 
} from 'reactstrap';
import Search from "./search"



const renderCard = (store, index) => {
    return(
        <Card >
        <CardBody>
          <CardTitle tag="h2">{store.store_name}</CardTitle>
          <CardSubtitle tag="h3" className="mb-2 text-muted">{store.city}<br/>{store.state}</CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText>{store.county}<br/>{store.latitude}<br/>{store.longitude}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    )
}


const StoresList = (props) => {
    return(       
    <>
    <div className="search-list">
    <Search props={props}/>
    <div className="store-list">

        {props.store.map(renderCard)}
    </div> 
    </div>
    </>
    )
}

export default StoresList;