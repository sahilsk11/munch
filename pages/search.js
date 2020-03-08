import Head from 'next/head'
import { usePosition } from 'use-position';
import GoogleMapReact from 'google-map-react';
import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch'
import StarRatings from 'react-star-ratings';


function queryYelpData(lat, lon, callback) {
  let corsUrl = "https://cors-anywhere.herokuapp.com/";
  fetch(
    "http://localhost:8080/https://api.yelp.com/v3/businesses/search?latitude=" + lat +
    "&longitude=" + lon + "&term=food&sort_by=distance", {
    method: 'GET',
    headers: {
      'Authorization': "Bearer zeOQeQVQL7pKKE5IRpws3wf5_NizQ1gErWsXqyhREu13H5hovg_VKI7R1d559FbneJNHjMkbgtWTnRltEbPVbztgIAJv92yuODe_B1iB5K2USE9at7UOU22JVxlkXnYx"
    }
  }
  ).then((response) => {
    return response.json();
  }).then((data) => {
    let parsedData = data.businesses.slice(0, 5)
    callback(parsedData);
  }).catch(() => {
    callback("error");
  })
}

function Home() {

  //component styles
  const styles = {
    pageContent: {
      width: "90%",
      margin: "0px auto",
      display: "block",
      maxWidth: "1000px",
      marginBottom: "10px"
    }
  }

  //component states
  const [lat, setLat] = useState(null);
  const [lng, setLon] = useState(null);
  const [yelpData, updateYelpData] = useState(null);
  const coords = usePosition();
  useEffect(() => {
  const yelpResponse = {"businesses": [{"id": "8bPIT3dWSUzE7ywqWejigw", "alias": "jimmy-johns-west-lafayette-8", "name": "Jimmy John's", "image_url": "", "is_closed": false, "url": "https://www.yelp.com/biz/jimmy-johns-west-lafayette-8?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 3, "categories": [{"alias": "hotdogs", "title": "Fast Food"}, {"alias": "delis", "title": "Delis"}, {"alias": "sandwiches", "title": "Sandwiches"}], "rating": 3.5, "coordinates": {"latitude": 40.42374, "longitude": -86.908444}, "transactions": [], "price": "$", "location": {"address1": "311 W State St", "address2": null, "address3": null, "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["311 W State St", "West Lafayette, IN 47906"]}, "phone": "+17657438200", "display_phone": "(765) 743-8200", "distance": 22.0585094890427}, {"id": "NgmdxVwt7IvsbXSZ4Tadkg", "alias": "lotsa-stone-fired-pizza-west-lafayette", "name": "Lotsa Stone Fired Pizza", "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/oICdN9sISSP-CRJTuRK9yg/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/lotsa-stone-fired-pizza-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 64, "categories": [{"alias": "pizza", "title": "Pizza"}], "rating": 4.0, "coordinates": {"latitude": 40.4241149, "longitude": -86.9087786}, "transactions": ["pickup", "delivery"], "price": "$", "location": {"address1": "316 W State St", "address2": null, "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["316 W State St", "West Lafayette, IN 47906"]}, "phone": "+17657614400", "display_phone": "(765) 761-4400", "distance": 37.88461164758533}, {"id": "N2wqhdM_r5nkvumlrXxEUQ", "alias": "hotbox-pizza-west-lafayette", "name": "HotBox Pizza", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/cy4bwGfHvO8-Qogtew0VbA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/hotbox-pizza-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 58, "categories": [{"alias": "pizza", "title": "Pizza"}], "rating": 3.5, "coordinates": {"latitude": 40.4236063031036, "longitude": -86.9079861006114}, "transactions": ["pickup", "delivery"], "price": "$", "location": {"address1": "135 S Chauncey Ave", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["135 S Chauncey Ave", "West Lafayette, IN 47906"]}, "phone": "+17657433400", "display_phone": "(765) 743-3400", "distance": 44.38231236421876}, {"id": "giFqitlgi0-SzdO5XymFJw", "alias": "tsaocaa-west-lafayette-2", "name": "Tsaocaa", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ZNUzHPkFsxse7eW4kqlcKg/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/tsaocaa-west-lafayette-2?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 4, "categories": [{"alias": "bubbletea", "title": "Bubble Tea"}], "rating": 4.0, "coordinates": {"latitude": 40.42414, "longitude": -86.90876}, "transactions": [], "location": {"address1": "318 W State St", "address2": "", "address3": null, "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["318 W State St", "West Lafayette, IN 47906"]}, "phone": "+17652505145", "display_phone": "(765) 250-5145", "distance": 46.36310621151741}, {"id": "7mNfoXkVmgcWsbSITtEDUQ", "alias": "greyhouse-coffee-and-supply-west-lafayette-2", "name": "Greyhouse Coffee & Supply", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/yPsInQleK4l2KlmfXPLT8g/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/greyhouse-coffee-and-supply-west-lafayette-2?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 246, "categories": [{"alias": "coffee", "title": "Coffee & Tea"}, {"alias": "donuts", "title": "Donuts"}, {"alias": "creperies", "title": "Creperies"}], "rating": 4.5, "coordinates": {"latitude": 40.4242, "longitude": -86.90778}, "transactions": ["delivery"], "price": "$", "location": {"address1": "100 Northwestern Ave", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["100 Northwestern Ave", "West Lafayette, IN 47906"]}, "phone": "+17657435316", "display_phone": "(765) 743-5316", "distance": 54.70342767098085}, {"id": "_xFNZTcKCcSvSfmpaPpefg", "alias": "khana-khazana-indian-grill-west-lafayette", "name": "Khana Khazana Indian Grill", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/a5YerLF31fMK8MsHzILKkg/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/khana-khazana-indian-grill-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 67, "categories": [{"alias": "indpak", "title": "Indian"}], "rating": 3.0, "coordinates": {"latitude": 40.42428, "longitude": -86.9078399}, "transactions": ["pickup", "delivery"], "price": "$$", "location": {"address1": "108 Northwestern Ave", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["108 Northwestern Ave", "West Lafayette, IN 47906"]}, "phone": "+17657431223", "display_phone": "(765) 743-1223", "distance": 56.72066282517514}, {"id": "PzLQ2U8uvPCQVwDkxOzNIw", "alias": "vienna-espresso-bar-and-bakery-west-lafayette", "name": "Vienna Espresso Bar & Bakery", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Rc4AbF6Z_WyBxn9JeE1BvQ/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/vienna-espresso-bar-and-bakery-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 57, "categories": [{"alias": "bakeries", "title": "Bakeries"}, {"alias": "coffee", "title": "Coffee & Tea"}, {"alias": "sandwiches", "title": "Sandwiches"}], "rating": 4.0, "coordinates": {"latitude": 40.424039, "longitude": -86.907576}, "transactions": ["pickup", "delivery"], "price": "$", "location": {"address1": "208 S St", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["208 S St", "West Lafayette, IN 47906"]}, "phone": "+17657434446", "display_phone": "(765) 743-4446", "distance": 62.426697326007115}, {"id": "l-84oEsqk57Dy8cLBQUbpg", "alias": "mad-mushroom-pizza-west-lafayette-2", "name": "Mad Mushroom Pizza", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/1V_RwcXy-E7npLkRP7EYTw/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/mad-mushroom-pizza-west-lafayette-2?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 46, "categories": [{"alias": "pizza", "title": "Pizza"}, {"alias": "sandwiches", "title": "Sandwiches"}, {"alias": "wraps", "title": "Wraps"}], "rating": 3.0, "coordinates": {"latitude": 40.4241331018239, "longitude": -86.9090435821113}, "transactions": ["pickup", "delivery"], "price": "$", "location": {"address1": "320 W State St", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["320 W State St", "West Lafayette, IN 47906"]}, "phone": "+17657435555", "display_phone": "(765) 743-5555", "distance": 67.10463349378081}, {"id": "1WBhwXtJcoAxyC9tt1PTwQ", "alias": "la-village-food-mart-west-lafayette", "name": "La Village Food Mart", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/TcEzjftnbdos7WQNoDwFAg/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/la-village-food-mart-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 3, "categories": [{"alias": "grocery", "title": "Grocery"}], "rating": 2.5, "coordinates": {"latitude": 40.4240303, "longitude": -86.9075623}, "transactions": [], "price": "$$", "location": {"address1": "208 South St", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["208 South St", "West Lafayette, IN 47906"]}, "phone": "+17657437047", "display_phone": "(765) 743-7047", "distance": 67.86053370683474}, {"id": "M8P96GmGImU0KOrFMfVCKw", "alias": "blue-nile-restaurant-west-lafayette", "name": "Blue Nile Restaurant", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/QPLyn7NzjGludfs3sH7soA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/blue-nile-restaurant-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 104, "categories": [{"alias": "mideastern", "title": "Middle Eastern"}, {"alias": "mediterranean", "title": "Mediterranean"}], "rating": 3.5, "coordinates": {"latitude": 40.4245223999023, "longitude": -86.9083251953125}, "transactions": ["pickup", "delivery"], "price": "$", "location": {"address1": "117 Northwestern Ave", "address2": "Ste 2", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["117 Northwestern Ave", "Ste 2", "West Lafayette, IN 47906"]}, "phone": "+17652699980", "display_phone": "(765) 269-9980", "distance": 69.76835229587672}, {"id": "EgkliPL7XtKCtFwDZfUnwg", "alias": "potbelly-sandwich-shop-west-lafayette", "name": "Potbelly Sandwich Shop", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/-W9jERdwPhTqtoZ4bFNwgQ/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/potbelly-sandwich-shop-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 25, "categories": [{"alias": "sandwiches", "title": "Sandwiches"}, {"alias": "hotdogs", "title": "Fast Food"}, {"alias": "salad", "title": "Salad"}], "rating": 4.0, "coordinates": {"latitude": 40.4245505920445, "longitude": -86.9081549351326}, "transactions": ["pickup", "delivery"], "price": "$", "location": {"address1": "117 Northwestern Ave", "address2": "Ste A", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["117 Northwestern Ave", "Ste A", "West Lafayette, IN 47906"]}, "phone": "+17657432993", "display_phone": "(765) 743-2993", "distance": 70.42043652925044}, {"id": "4BpucdsZZSBl6aofO6a87w", "alias": "five-guys-west-lafayette-west-lafayette", "name": "Five Guys West Lafayette", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/mICy_IDlKXZ_qhTVQYKmqA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/five-guys-west-lafayette-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 2, "categories": [{"alias": "burgers", "title": "Burgers"}, {"alias": "hotdogs", "title": "Fast Food"}], "rating": 2.5, "coordinates": {"latitude": 40.4232216004102, "longitude": -86.908021052217}, "transactions": [], "location": {"address1": "135 S Chauncey Ave", "address2": "Ste 1-K", "address3": null, "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["135 S Chauncey Ave", "Ste 1-K", "West Lafayette, IN 47906"]}, "phone": "+17657433100", "display_phone": "(765) 743-3100", "distance": 81.85853020204885}, {"id": "ZN8hjTb-J0QeND_i648kZQ", "alias": "kung-fu-tea-west-lafayette-2", "name": "Kung Fu Tea", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FbNvF-wmgP597on-IO9qWQ/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/kung-fu-tea-west-lafayette-2?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 26, "categories": [{"alias": "bubbletea", "title": "Bubble Tea"}, {"alias": "coffee", "title": "Coffee & Tea"}, {"alias": "juicebars", "title": "Juice Bars & Smoothies"}], "rating": 3.0, "coordinates": {"latitude": 40.4231945028166, "longitude": -86.9081861566326}, "transactions": [], "price": "$", "location": {"address1": "135 S Chauncey Ave", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["135 S Chauncey Ave", "West Lafayette, IN 47906"]}, "phone": "+17654279122", "display_phone": "(765) 427-9122", "distance": 81.98206044361872}, {"id": "if_WO0OL_d1pJRztdQXuDQ", "alias": "egyptian-cafe-west-lafayette", "name": "Egyptian Cafe", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8CKFeRHBU4qhltDsikeYFA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/egyptian-cafe-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 58, "categories": [{"alias": "hookah_bars", "title": "Hookah Bars"}, {"alias": "egyptian", "title": "Egyptian"}], "rating": 3.5, "coordinates": {"latitude": 40.42448, "longitude": -86.90777}, "transactions": ["pickup", "delivery"], "price": "$$", "location": {"address1": "130 Northwestern Ave", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["130 Northwestern Ave", "West Lafayette, IN 47906"]}, "phone": "+17657430500", "display_phone": "(765) 743-0500", "distance": 82.89157412110292}, {"id": "1-QS7y6KMCoSNnPuzgJqEw", "alias": "maj\u00e9-sushi-west-lafayette-west-lafayette-3", "name": "Maj\u00e9 Sushi - West Lafayette", "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DoqeloOFG9x7VnozgH3MRw/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/maj%C3%A9-sushi-west-lafayette-west-lafayette-3?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 53, "categories": [{"alias": "sushi", "title": "Sushi Bars"}], "rating": 4.0, "coordinates": {"latitude": 40.424032, "longitude": -86.907296}, "transactions": ["pickup", "delivery"], "price": "$$", "location": {"address1": "204 South St", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["204 South St", "West Lafayette, IN 47906"]}, "phone": "+17657437777", "display_phone": "(765) 743-7777", "distance": 85.67138764693635}, {"id": "Jc4EepzZ8xk1KCrThoF_fA", "alias": "famous-franks-west-lafayette", "name": "Famous Frank's", "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/vR2S-6FzsivvKqX3KydHvA/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/famous-franks-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 12, "categories": [{"alias": "hotdog", "title": "Hot Dogs"}, {"alias": "foodtrucks", "title": "Food Trucks"}, {"alias": "sandwiches", "title": "Sandwiches"}], "rating": 4.5, "coordinates": {"latitude": 40.4242172241211, "longitude": -86.9092559814453}, "transactions": [], "price": "$", "location": {"address1": "Pierce St", "address2": "", "address3": "", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["Pierce St", "West Lafayette, IN 47906"]}, "phone": "", "display_phone": "", "distance": 87.23850738437922}, {"id": "jjMEiLty-xBG4LpBqSAmSw", "alias": "qdoba-mexican-eats-west-lafayette", "name": "QDOBA Mexican Eats", "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Iuq-_SoFzOfXBM72f4YHQg/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/qdoba-mexican-eats-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 20, "categories": [{"alias": "mexican", "title": "Mexican"}, {"alias": "hotdogs", "title": "Fast Food"}], "rating": 3.0, "coordinates": {"latitude": 40.4247302496123, "longitude": -86.908155977726}, "transactions": [], "price": "$", "location": {"address1": "139 Northwestern Ave", "address2": "", "address3": null, "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["139 Northwestern Ave", "West Lafayette, IN 47906"]}, "phone": "+17658070338", "display_phone": "(765) 807-0338", "distance": 90.1514492690839}, {"id": "SHlw9p60gNjsQApkUo-Crg", "alias": "arbys-west-lafayette", "name": "Arby's", "image_url": "", "is_closed": false, "url": "https://www.yelp.com/biz/arbys-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 1, "categories": [{"alias": "hotdogs", "title": "Fast Food"}, {"alias": "sandwiches", "title": "Sandwiches"}], "rating": 3.0, "coordinates": {"latitude": 40.423168, "longitude": -86.907859}, "transactions": [], "price": "$", "location": {"address1": "135 S Chauncey Ave", "address2": "Ste 1570", "address3": "", "city": "West Lafayette", "zip_code": "47907", "country": "US", "state": "IN", "display_address": ["135 S Chauncey Ave", "Ste 1570", "West Lafayette, IN 47907"]}, "phone": "+17657436311", "display_phone": "(765) 743-6311", "distance": 94.81663073340036}, {"id": "Pmow7gVnjDbpKIwafYI-XA", "alias": "basil-thai-and-bubble-tea-west-lafayette", "name": "Basil Thai & Bubble Tea", "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/LglZkymjBGkNaKMigltpbw/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/basil-thai-and-bubble-tea-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 108, "categories": [{"alias": "thai", "title": "Thai"}], "rating": 3.0, "coordinates": {"latitude": 40.42317, "longitude": -86.90786}, "transactions": ["delivery"], "price": "$$", "location": {"address1": "135 S Chauncey Ave", "address2": "", "address3": "Chauncey Hill Mall", "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["135 S Chauncey Ave", "Chauncey Hill Mall", "West Lafayette, IN 47906"]}, "phone": "+17657433330", "display_phone": "(765) 743-3330", "distance": 94.81663073340036}, {"id": "HFEoQkAP1XNLbwZRjwGbTA", "alias": "panda-express-west-lafayette", "name": "Panda Express", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/1vd5UiAj1CUT0aVnP0EFLw/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/panda-express-west-lafayette?adjust_creative=Bhyy1ddL9M4R7JCNHCPuiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Bhyy1ddL9M4R7JCNHCPuiA", "review_count": 20, "categories": [{"alias": "chinese", "title": "Chinese"}, {"alias": "hotdogs", "title": "Fast Food"}], "rating": 3.0, "coordinates": {"latitude": 40.43103, "longitude": -86.91367}, "transactions": ["pickup", "delivery"], "price": "$", "location": {"address1": "138 Nwern Ave", "address2": null, "address3": null, "city": "West Lafayette", "zip_code": "47906", "country": "US", "state": "IN", "display_address": ["138 Nwern Ave", "West Lafayette, IN 47906"]}, "phone": "+17657430105", "display_phone": "(765) 743-0105", "distance": 95.48220040952336}], "total": 482, "region": {"center": {"longitude": -86.9082986, "latitude": 40.4239268}}}
  updateYelpData(yelpResponse.businesses.slice(0, 5))
  }, []);
  //component logic
  useEffect(() => {
    if (lat == null || lng == null) {
      if (lat == null && coords.latitude != undefined)
        setLat(coords.latitude);
      if (lng == null && coords.longitude != undefined)
        setLon(coords.longitude);
    }
  }, [coords]);

  useEffect(() => {
    if (lat != null) {
      queryYelpData(lat, lng, updateYelpData);
    }
  }, [lat]);
  console.log(yelpData);

  //component render
  let page;
  if (yelpData == null) {
    const loadingContainer = {
      display: "block",
      margin: "0px auto",
      width: "300px",
      marginTop: "100px",
    }
    const loadingStyle = {
      width: "100px",
      display: "block",
      margin: "0px auto",
    }
    const title = {
      marginTop: "0px",
      textAlign: "center"
    }
    page = (
      <div style={loadingContainer}>
        <img style={loadingStyle} src="./images/loading.gif" />
        <h5 style={title}>Crunching your Munch...</h5>
      </div>
    );
  } else {
    page = ResultsContent({ data: yelpData, lat, lng });
  }
  return (
    <div>
      <Head>
        <title>Munch</title>
      </Head>
      <div style={styles.backgroundStyle}>
        <div style={styles.pageContent}>
          {Navbar()}
          {page}
        </div>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          background-color: #F4FAFF
        }
        * {
          box-sizing: border-box;
        }
    `}</style>
    </div>
  )
}

function Navbar() {
  const styles = {
    wrapperStyle: {
      width: "100%",
      height: "80px"
    },
    navImg: {
      width: "80px",
      paddingTop: "20px"
    }
  }
  return (
    <div style={styles.wrapperStyle}>
      <img src="./images/navImg.png" style={styles.navImg} />
    </div>
  )
}

function ResultsContent(props) {
  const styles = {
    container: {
      borderRadius: "20px",
      backgroundColor: "white",
      width: "100%",
      height: "85vh",
      boxShadow: "0px 4px 20px rgba(75, 93, 104, 0.21)"
    },
    contentWrapper: {
      display: "flex",
      position: "relative"
    }
  }
  return (
    <div style={styles.container}>
      {TileTitle()}
      <div style={styles.contentWrapper}>
        {ResultsList({ data: props.data })}
        {RightColumn({ data: props.data, lat: props.lat, lng: props.lng })}
      </div>
    </div>
  )
}

function TileTitle() {
  const styles = {
    container: {
      height: "80px",
    },
    title: {
      textAlign: "center",
      fontFamily: "Avenir",
      paddingTop: "30px",
      fontSize: "23px"
    },
    ruleStyle: {
      marginBottom: "-1px"
    }
  }
  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>Your Top 5 Picks</h1>
      </div>
      <hr style={styles.ruleStyle} />
    </div>
  )
}

function ResultsList(props) {
  const styles = {
    container: {
      width: "50%",
      height: "calc(85vh - 90px)",
      overflow: "scroll"
    }
  }
  let entries = []
  console.log(props.data)
  let key = 0;
  props.data.forEach(function (restaurant) {
    entries.push(RestaurantEntry({ ...restaurant, key }));
    key++;
  });
  return (
    <div style={styles.container}>
      {entries}
    </div>
  )
}

function RestaurantEntry(props) {
  let imgSrc = props.image_url;
  if (imgSrc == "") {
    imgSrc = "./images/landing-img.png"
  }
  console.log(props)
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "30px",
      paddingLeft: "20px",
      cursor: "pointer"
    },
    img: {
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    col1: {
      minWidth: "10%",
      position: "relative",
      //border: "1px solid red"
    },
    col2: {
      width: "35%",
      position: "relative",
    },
    col3: {
      paddingLeft: "20px",
      width: "55%"
    },
    imgContainer: {
      //position: "absolute",
      paddingTop: "100%",
      backgroundImage: "url(" + imgSrc + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "10px"
    },
    resultNum: {
      position: "absolute",
      top: "50%",
      left: "30%",
      transform: "translate(-50%, -100%)",
      color: "#9C69E2",
      fontFamily: "Avenir"
    },
    title: {
      fontFamily: "Avenir",
      margin: "0px"
    },
    categoriesLabel: {
      margin: "0px",
      fontSize: "13px",
      color: "#767677",
      fontFamily: "Avenir"
    },
    subtext: {
      fontFamily: "Avenir",
      fontSize: "13px"
    }
  }
  let categoriesStr = "";
  props.categories.forEach(function(categories) {
    let category = categories.alias;
    if (categoriesStr.length == 0) {
      categoriesStr += category;
    } else {
      categoriesStr += " • " + category;
    }
  })
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.col1}>
          <p style={styles.resultNum}><strong>{props.key + 1}</strong></p>
        </div>
        <div style={styles.col2}>
          <div style={styles.imgContainer}>

          </div>
        </div>
        <div style={styles.col3}>
          <h3 style={styles.title}>{props.name}</h3>
          <p style={styles.categoriesLabel}>{categoriesStr}</p>
          <div style={{paddingTop: "10px"}}>
            <StarRatings
              rating={props.rating}
              starRatedColor="#DFC71E"
              starDimension="23px"
              starSpacing="2px"
            />
          </div>
          <p style={styles.subtext}>"A great place to eat for all ages!"</p>
        </div>
      </div>
      <hr></hr>

    </div>
  )
}

function RightColumn(props) {

  const styles = {
    container: {
      width: "50%",
      //backgroundImage: "url('./images/map.png')",
      height: "calc(85vh - 90px)"
    }
  }
  if (props.lat == null || props.lng == null) {
    return (
      <div style={styles.container}>
        loading
      </div>
    )
  }
  else {
    let markers = [];
    props.data.forEach(function(restaurant) {
      markers.push(<Marker title={restaurant.name} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} />)
    });
    return (
      <div style={styles.container}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC3Ai5zga37jqsXgj0uXvoJ0p1vXVwHSXU" }}
          defaultCenter={{ lat: props.lat, lng: props.lng }}
          defaultZoom={15}
        >
          {markers}
        </GoogleMapReact>
      </div>
    )
  }
}

class Marker extends React.Component {
  render() {
    const styleRound = {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "18px",
      height: "18px",
      backgroundColor: "#9C69E2",
      border: "2px solid #fff",
      borderRadius: "100%",
      userSelect: "none",
      transform: "translate(-50%, -50%)",
      cursor: "pointer"
    }
    const styleHover = {
      width: "30px",
      height: "30px",
      borderRadius: "50% 50% 50% 0",
      background: "#00cae9",
      position: "absolute",
      transform: "rotate(-45deg)",
      left: "50%",
      top: "50%",
      margin: "-20px 0 0 -20px",
    }
    let content = this.props.$hover ? this.props.title : "";
    return (
      <div style={styleRound}>
        {content}
      </div>
    )
  }
}

export default Home;
