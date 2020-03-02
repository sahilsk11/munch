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
          {DiscoverContent()}
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

function DiscoverContent() {
  const titleColor = "#212353";
  const styles = {
    containerWrapper: {
      marginTop: "60px",
      display: "flex"
    },
    textWrapper: {
      width: "60%",
      //border: "1px solid green"
    },
    imgWrapper: {
      width: "40%",
      //border: "1px solid red"
    },
    landingImg: {
      width: "100%",
      margin: "0px auto",
      display: "block",
      marginTop: "30px"
    },
    title: {
      color: titleColor,
      marginBottom: "0px",
      paddingBottom: "0px",
      fontSize: "60px"
    },
    secondaryTitle: {
      marginTop: "0px",
      marginBottom: "0px",
      color: titleColor,
      fontWeight: "400",
      fontSize: "40px"
    },
    subtitle: {
      fontWeight: "500",
      fontFamily: "Avenir",
      fontSize: "17px",
      color: "#767777",
      marginTop: "15px"
    }
  }
  return (
    <div>
      <div style={styles.containerWrapper}>
        <div style={styles.textWrapper}>
          <h1 style={styles.title}>Discover</h1>
          <h1 style={styles.secondaryTitle}>the perfect place to eat</h1>
          <h5 style={styles.subtitle}>Curated restaurant picks personalized for you.</h5>
          {ButtonBar()}
        </div>
        <div style={styles.imgWrapper}>
          <img src="./images/landing-img.svg" style={styles.landingImg} />
        </div>
      </div>
      {BrowseCategories()}
    </div>
  )
}

function ButtonBar() {
  const styles = {
    formStyle: {
      width: "100%",
      display: "flex"
    },
    searchStyle: {
      borderRadius: "40px",
      border: "1px solid #F0F0F0",
      width: "100%",
      marginRight: "10px",
      height: "40px",
      outline: "none",
      paddingLeft: "20px",
      fontWeight: "500",
      fontFamily: "Avenir",
      fontSize: "14px",
      color: "black",
    },
    munchButtonStyle: {
      border: "none",
      backgroundColor: "#9C69E2",
      color: "white",
      borderRadius: "40px",
      width: "150px",
      height: "40px",
      fontFamily: "Avenir",
      fontSize: "14px",
      outline: "none",
      cursor: "pointer",
      boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)"
    },
    infoButtonStyle: {
      border: "none",
      backgroundColor: "white",
      color: "black",
      borderRadius: "40px",
      width: "150px",
      height: "40px",
      fontFamily: "Avenir",
      fontSize: "14px",
      outline: "none",
      cursor: "pointer",
      marginLeft: "20px",
      boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)"
    },
  }
  return (
    <div>
      <button style={styles.munchButtonStyle}>Search!</button>
      <button style={styles.infoButtonStyle}>What's Munch?</button>
    </div>
  )
}

function BrowseCategories() {
  const categoryTitles = ["Burgers", "Drinks", "Desserts", "Pizza", "Chinese"]
  let categoryObjects = [];
  categoryTitles.forEach(function (title) {
    categoryObjects.push(Category({ title }));
  })

  const styles = {
    containerStyle: {
      marginTop: "50px"
    },
    categoriesWrapper: {
      maxWidth: "700px",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "stretch"
    },
    subtitle: {
      fontWeight: "500",
      fontFamily: "Avenir",
      fontSize: "18px",
      color: "#767777",
      marginBottom: "20px"
    }
  }

  return (
    <div style={styles.containerStyle}>
      <h5 style={styles.subtitle}>Or browse what's trending in your city</h5>
      <div style={styles.categoriesWrapper}>
        {categoryObjects}
        {Category({ title: "More" })}
      </div>
    </div>
  )
}

function Category(props) {
  const size = "80px";
  const styles = {
    tile: {
      minWidth: size,
      minHeight: size,
      maxWidth: size,
      maxHeight: size,
      backgroundColor: "white",
      marginRight: "20px",
      marginBottom: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 5px rgba(75, 93, 104, 0.25)",
      cursor: "pointer"
    },
    icon: {
      margin: "0px auto",
      display: "block",
      height: "40px",
      paddingTop: "10px"
    },
    title: {
      textAlign: "center",
      fontFamily: "Avenir",
      fontWeight: "600",
      color: "black",
      marginTop: "7px"
    }
  }
  return (
    <div style={styles.tile}>
      <img src={"./images/" + props.title.toLowerCase() + ".png"} style={styles.icon} />
      <p style={styles.title}>{props.title}</p>
    </div>
  )
}

export default Home;
