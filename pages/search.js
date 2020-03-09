import Head from 'next/head'
import { usePosition } from 'use-position';
import GoogleMapReact from 'google-map-react';
import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch'
import StarRatings from 'react-star-ratings';


function queryYelpData(lat, lon, callback) {
  let corsUrl = "https://cors-anywhere.herokuapp.com/";
  let localUrl = "http://localhost:8080/";
  fetch(
    localUrl + "https://api.yelp.com/v3/businesses/search?latitude=" + lat +
    "&longitude=" + lon + "&term=restaurant&sort_by=distance", {
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
  //var search = document.url.substring(document.url.indexOf("?") + 1)
  //params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  //console.log(name);

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
  const [lat, setLat] = useState(37.314807);
  const [lng, setLon] = useState(-121.914609);
  const [yelpData, updateYelpData] = useState(null)
  const coords = usePosition();
  const [columnState, updateColumn] = useState(0);

  const dev = true;

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
    page = ResultsContent({ data: yelpData, lat, lng, columnState, updateColumn });
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
      height: "80px",
      cursor: "pointer"
    },
    navImg: {
      width: "80px",
      paddingTop: "20px"
    }
  }
  return (
    <div style={styles.wrapperStyle} onClick={() => { window.location.href = "/" }}>
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
        {ResultsList({ data: props.data, updateColumn: props.updateColumn })}
        {RightColumn({ data: props.data, lat: props.lat, lng: props.lng, columnState: props.columnState, updateColumn: props.updateColumn })}
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
  let key = 0;
  props.data.forEach(function (restaurant) {
    entries.push(RestaurantEntry({ ...restaurant, key, updateColumn: props.updateColumn }));
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
  props.categories.forEach(function (categories) {
    let category = categories.alias;
    if (categoriesStr.length == 0) {
      categoriesStr += category;
    } else {
      categoriesStr += " • " + category;
    }
  })
  return (
    <div>
      <div style={styles.container} onClick={() => { props.updateColumn(props.key) }}>
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
          <div style={{ paddingTop: "10px" }}>
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
      height: "calc(85vh - 90px)",
      position: "relative"
    }
  }
  if (props.lat == null || props.lng == null) {
    return (
      <div style={styles.container}>
        loading
      </div>
    )
  }
  else if (props.columnState == "map") {
    let markers = [];
    var index = 0;
    props.data.forEach(function (restaurant) {
      markers.push(
        <Marker title={restaurant.name} lat={restaurant.coordinates.latitude} index={index} test={"hi"} updateColumn={props.updateColumn} lng={restaurant.coordinates.longitude} />
      );
      console.log(index)
      index++;
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
  } else {
    console.log(props.columnState)
    const styles1 = {
      container: {
        borderLeft: "1px solid grey",
        position: "relative",
        height: "100%",
        overflow: "scroll"
      },
      close: {
        marginTop: "0px",
        fontSize: "14px",
        fontFamily: "Avenir",
        fontWeight: "400",
        position: "absolute",
        right: "10px",
        top: "5px",
        cursor: "pointer"
      },
      img: {
        width: "80%",
        maxWidth: "300px",
        display: "block",
        margin: "0px auto",
        paddingTop: "30px",
      },
      title: {
        fontFamily: "Avenir",
        textAlign: "center",
        marginBottom: "0px"
      },
      categoriesLabel: {
        margin: "0px",
        fontSize: "13px",
        color: "#767677",
        fontFamily: "Avenir",
        textAlign: "center"
      },
      subtitle: {
        fontFamily: "Avenir",
        textAlign: "center",
        marginBottom: "10px",
        marginTop: "30px"
      },
      reviews: {
        display: "block",
        margin: "0px auto",
        width: "135px"
      },
      address1: {
        fontFamily: "Avenir",
        fontSize: "14px",
        color: "#767677",
        textAlign: "center",
        marginBottom: "0px"
      },
      address2: {
        fontFamily: "Avenir",
        fontSize: "10px",
        color: "#767677",
        textAlign: "center",
        marginTop: "0px"
      },
      storiesContainer: {
        display: "flex",
        justifyContent: "center",
        width: "50%",
        margin: "0px auto"
      },
      story: {
        borderRadius: "100%",
        width: "50px",
        height: "50px",
        border: "2px dashed grey",
        cursor: "pointer",
        display: "block",
        margin: "0px auto",
        overflow: "hidden"
      },
      paragraph: {
        color: "#767677",
        fontSize: "13px",
        width: "80%",
        maxWidth: "400px",
        textAlign: "center",
        margin: "0px auto",
        display: "block",
        fontFamily: "Avenir"
      },
      contact: {
        textAlign: "center",
        width: "70%",
        fontFamily: "Avenir",
        display: "block",
        margin: "0px auto",
        marginTop: "30px",
        marginBottom: "30px",

      },
      phone: {
        color: "#9C69E2",
        cursor: "pointer"
      },
      closeButton: {
        backgroundColor: "#9C69E2",
        color: "white",
        fontFamily: "Avenir",
        textAlign: "center",
        border: 'none',
        display: "block",
        margin: "0px auto",
        marginBottom: "50px",
        width: "80px",
        height: "30px",
        fontSize: "13px",
        cursor: "pointer",
        borderRadius: "15px"
      }
    }
    const restaurant = props.data[props.columnState];

    let categoriesStr = "";
    restaurant.categories.forEach(function (categories) {
      let category = categories.alias;
      if (categoriesStr.length == 0) {
        categoriesStr += category;
      } else {
        categoriesStr += " • " + category;
      }
    })
    return (
      <div style={styles.container}>
        <div style={styles1.container}>
          <p style={styles1.close} onClick={() => { props.updateColumn("map") }}>close X</p>
          <img src={restaurant.image_url} style={styles1.img} />
          <h1 style={styles1.title}>{restaurant.name}</h1>
          <p style={styles1.categoriesLabel}>{categoriesStr}</p>
          <div style={styles1.reviews}>
            <StarRatings
              rating={restaurant.rating}
              starRatedColor="#DFC71E"
              starDimension="23px"
              starSpacing="2px"
            />
          </div>
          <p style={styles1.address1}>{restaurant.location.display_address[0]}</p>
          <p style={styles1.address2}>{restaurant.location.display_address[1]}</p>

          <h3 style={styles1.subtitle}>Curated Stories from the Owner</h3>
          <div style={styles1.storiesContainer}>
            <img src={restaurant.image_url} style={styles1.story}/>
            <img src={restaurant.image_url} style={styles1.story} />
            <img src={restaurant.image_url} style={styles1.story} />
          </div>

          <h3 style={styles1.subtitle}>History, Culture, and Scene</h3>
          <p style={styles1.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <h5 style={styles1.contact}>Interested in more? Hit up the owner at:<br></br> <span style={styles1.phone}>{restaurant.display_phone}</span></h5>

          <button onClick={() => {props.updateColumn("map")}} style={styles1.closeButton}>close</button>
        </div>
      </div >
    )
  }
}

class Marker extends React.Component {
  constructor(props) {
    super(props);
  }
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
    console.log(this.props)
    return (
      <div style={styleRound} onClick={() => { console.log(this.props.key); this.props.updateColumn(this.props.index) }}>
        {content}
      </div>
    )
  }
}

export default Home;
