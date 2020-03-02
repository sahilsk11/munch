import Head from 'next/head'

function Home() {
  const styles = {
    pageContent: {
      width: "80%",
      margin: "0px auto",
      display: "block",
      maxWidth: "1000px",
    }
  }
  return (
    <div>
      <Head>
        <title>Munch</title>
      </Head>
      <div style={styles.backgroundStyle}>
        <div style={styles.pageContent}>
          {Navbar()}
          {ResultsContent()}
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

function ResultsContent() {
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
        {ResultsList()}
        {LeftColumn()}
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

function ResultsList() {
  const styles = {
    container: {
      width: "50%",
      height: "calc(80vh - 90px)",
      overflow: "scroll"
    }
  }
  return (
    <div style={styles.container}>
      {RestaurantEntry()}
      {RestaurantEntry()}
      {RestaurantEntry()}
    </div>
  )
}

function RestaurantEntry(props) {
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
          <img src="./images/sweet-matcha-cafe.png" style={styles.img} />
        </div>
        <div style={styles.col3}>
          <h3>Sweet Matcha Cafe</h3>
          <p>dessert • new • ice cream</p>
          <div></div>
          <p>“An earthy cafe with yummy desserts. All ice creams are made in-house with the owner, Danni Burgess, family recipe...”</p>
        </div>
      </div>
      <hr></hr>

    </div>
  )
}

function LeftColumn() {
  const styles = {
    container: {
      width: "50%",
      backgroundImage: "url('./images/map.png')",
      height: "calc(80vh - 90px)"
    }
  }
  return (
    <div style={styles.container}></div>
  )
}

export default Home;
