import Head from 'next/head'
import { usePosition } from 'use-position';
import GoogleMapReact from 'google-map-react';
import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch'


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
      marginBottom: "100px"
    }
  }

  //component states
  const [lat, setLat] = useState(null);
  const [lng, setLon] = useState(null);
  const [yelpData, updateYelpData] = useState(null);
  const [pageLoaded, updateLoaded] = useState(false);
  const coords = usePosition();

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
      updateLoaded(true)
    }
  }, [lat]);
  console.log(yelpData);

  //component render
  if (yelpData == null) {
    return <div></div>;
  }
  return (
    <div>
      <Head>
        <title>Munch</title>
      </Head>
      <div style={styles.backgroundStyle}>
        <div style={styles.pageContent}>
          {Navbar()}
          {ResultsContent({ data: yelpData, lat, lng })}
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
      height: "100px"
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
      height: "80vh",
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
        {RightColumn({ lat: props.lat, lng: props.lng })}
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
      height: "calc(80vh - 90px)",
      overflow: "scroll"
    }
  }
  let entries = []
  console.log(props.data)
  props.data.forEach(function(restaurant) {
    entries.push(RestaurantEntry(restaurant));
  })
  return (
    <div style={styles.container}>
      {entries}
    </div>
  )
}

function RestaurantEntry(props) {
  console.log(props)
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "30px"
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
    },
    col2: {
      width: "30%",
      position: "relative"
    }, col3: {
      paddingLeft: "20px",
      width: "60%"
    },
    resultNum: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -100%)"
    }
  }
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.col1}>
          <p style={styles.resultNum}>1</p>
        </div>
        <div style={styles.col2}>
          <img src={props.image_url} style={styles.img} />
        </div>
        <div style={styles.col3}>
          <h3>{props.name}</h3>
          <p>dessert • new • ice cream</p>
          <div></div>
          <p>“An earthy cafe with yummy desserts. All ice creams are made in-house with the owner, Danni Burgess, family recipe...”</p>
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
      height: "calc(80vh - 90px)"
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
    return (
      <div style={styles.container}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC3Ai5zga37jqsXgj0uXvoJ0p1vXVwHSXU" }}
          defaultCenter={{ lat: props.lat, lng: props.lng }}
          defaultZoom={11}
        />
      </div>
    )
  }
}

export default Home;
