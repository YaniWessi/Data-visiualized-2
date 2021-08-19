import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import { 
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, 
} from 'reactstrap';



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


const StoresList = () => {


    const [store, setStore] = useState([''])


    useEffect(() =>{
        axios.get('https://www.easyfoodstamps.com/cms/stores')
          .then(res => setStore(res.data.stores))
        //   .then(res => console.log(res.data))
          .catch()
        }, []);


    return(
    <div>
        {store.map(renderCard)}
    </div> 
    )
}

export default StoresList;