import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'


function Home() {
  const [displaySurvey, updateSurvey] = useState(false);

  const styles = {
    pageContent: {
      width: "80%",
      margin: "0px auto",
      display: "block",
      maxWidth: "1000px",
    },
    banner: {
      marginTop: "100px",
      width: "100%",
      backgroundColor: "rgba(156, 105, 226, 0.15)",
      minHeight: "300px",
      display: "flex",
      marginBottom: "100px"
    },
    bannerChildren: {
      width: "80%",
      maxWidth: "1000px",
      display: "flex",
      margin: "0px auto"
    },
    emojiWrapper: {
      width: "50%",
      position: "relative"
    },
    textWrapper: {
      width: "50%",
    },
    img: {
      position: "absolute",
      width: "70%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    },
    title: {
      fontFamily: "Avenir",
      color: "#212353",
      fontSize: "30px",
    },
    paragraph: {
      fontFamily: "Avenir",
      color: "rgba(75, 93, 104, 0.5)",
      fontSize: "15px",
      paddingBottom: "20px"
    },
    influencers: {
      display: "block",
      margin: "0px auto",
      width: "80%",
      maxWidth: "1000px"
    },
    centerTitle: {
      fontFamily: "Avenir",
      color: "#212353",
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "0px"
    },
    subtitle: {
      marginTop: "0px",
      fontFamily: "Avenir",
      color: "rgba(75, 93, 104, 0.5)",
      fontSize: "15px",
      paddingBottom: "20px",
      textAlign: "center"
    },
    footer: {
      marginTop: "80px"
    },
    heart: {
      fontFamily: "Avenir",
      textAlign: "center"
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
          {DiscoverContent({ updateSurvey })}
          
        </div>
        <div style={styles.banner}>
          <div style={styles.bannerChildren}>
            <div style={styles.emojiWrapper}>
              <img style={styles.img} src="./images/emojis.png" />
            </div>
            <div style={styles.textWrapper}>
              <h3 style={styles.title}>munch helps you find the right place to eat, everyday.</h3>
              <p style={styles.paragraph}>Using just your responses from five questions, munch curates the top five recomended restaurants for you. Munch gets smarted everytime you use it based on what restaurants you like and dislike. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
        <h3 style={styles.centerTitle}>What's Trending?</h3>
        <p style={styles.subtitle}>from influencers across the web</p>
        <img src="./images/people.svg" style={styles.influencers} />
        <div style={styles.footer}>
          <p style={styles.heart}>Made with ❤️ by the Kapurs</p>
        </div>
      </div>
      {SurveyScreen({ display: displaySurvey, updateSurvey: updateSurvey })}
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

function DiscoverContent(props) {
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
          {ButtonBar({ updateSurvey: props.updateSurvey })}
        </div>
        <div style={styles.imgWrapper}>
          <img src="./images/landing-img.svg" style={styles.landingImg} />
        </div>
      </div>
      {BrowseCategories()}
    </div>
  )
}

function ButtonBar(props) {
  const styles = {
    formStyle: {
      width: "355px",
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
      color: "#212353",
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
    <div style={styles.formStyle}>
      <button onClick={() => props.updateSurvey(true)} style={styles.munchButtonStyle}>Search!</button>
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
    <div style={styles.tile} onClick={() => { window.location = "search?discover=" + props.title.toLowerCase() }}>
      <img src={"./images/" + props.title.toLowerCase() + ".png"} style={styles.icon} />
      <p style={styles.title}>{props.title}</p>
    </div>
  )
}

function SurveyScreen(props) {
  const styles = {
    container: {
      position: "fixed",
      zIndex: "1",
      paddingTop: "100px",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(229, 229, 229, 0.4)",
    },
    modalContent: {
      backgroundColor: "#fefefe",
      margin: "auto",
      border: "1px solid white",
      width: "80%",
      maxWidth: "700px",
      position: "relative",
      paddingBottom: "40px",
      paddingTop: "3%",
      borderRadius: "17px",
      boxShadow: "0px 4px 20px rgba(75, 93, 104, 0.25)",
    },
    infoButton: {

    },
    closeButton: {
      marginTop: "20px",
      fontSize: "15px",
      fontFamily: "Avenir",
      fontWeight: "400",
      position: "absolute",
      right: "28px",
      top: "5px",
      cursor: "pointer",
      color: "#9C69E2"
    },
    screenContent: {

    },
    surveyNumber: {

    },
    title: {
      fontFamily: "Avenir",
      textAlign: "center",
      fontSize: "20px",
      marginBottom: "9px",
    },
    surveyOptions: {
      margin: "0px auto",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "80%",
      marginTop: "0px"
    },
    button: {
      backgroundColor: "#9C69E2",
      borderRadius: "20px",
      width: "120px",
      height: "40px",
      color: "white",
      fontFamily: "Avenir",
      fontSize: "15px",
      display: "block",
      margin: "0px auto",
      marginTop: "20px",
      cursor: "pointer",
      outline: "none",
      boxShadow: "0px 4px 20px rgba(75, 93, 104, 0.25)",
      border: "1px solid rgba(0, 0, 0, 0)"
    },
    number: {
      textAlign: "center",
      color: "#9C69E2"
    }
  }
  const [selectedIndex, updateSelected] = useState(null);
  const [categoryA, updateCategoryA] = useState(null);
  const [categoryB, updateCategoryB] = useState(null);
  const [categoryC, updateCategoryC] = useState(null);
  const [surveyState, updateSurveyState] = useState(0);


  function nextQuestion() {
    console.log("hi")

    if (surveyState == 0 && categoryA != null) {
      updateSurveyState(1);
      updateSelected(null);
    } else if (surveyState == 1 && categoryB != null) {
      updateSurveyState(2);
      updateSelected(null);
    } else if (surveyState == 2 && categoryC != null) {
      window.location.href = "search";
    }
  }

  let content;
  if (props.display) {
    switch (surveyState) {
      case 0:
        content = (
          <div>
            <h3 style={styles.title}>What are you looking for?</h3>
            <div style={styles.screenContent}>
              <div style={styles.surveyOptions}>
                {SurveyOption({ title: "Quick/on-the-go", img: "./images/go.svg", selectedIndex, updateSelected, index: 0, updateCategory: updateCategoryA })}
                {SurveyOption({ title: "Casual", img: "./images/casual.svg", selectedIndex, updateSelected, index: 1, updateCategory: updateCategoryA })}
                {SurveyOption({ title: "Fine Dining", img: "./images/fine.svg", selectedIndex, updateSelected, index: 2, updateCategory: updateCategoryA })}
              </div>
            </div>
          </div>
        );
        break;
      case 1:
        content = (
          <div>
            <h3 style={styles.title}>What sounds good?</h3>
            <div style={styles.screenContent}>
              <div style={styles.surveyOptions}>
                {MiniSurveyOption({ title: "American", img: "./images/go.svg", selectedIndex, updateSelected, index: 0, updateCategoryB })}
                {MiniSurveyOption({ title: "Chinese", img: "./images/casual.svg", selectedIndex, updateSelected, index: 1, updateCategoryB })}
                {MiniSurveyOption({ title: "Indian", img: "./images/fine.svg", selectedIndex, updateSelected, index: 2, updateCategoryB })}
                {MiniSurveyOption({ title: "Steak", img: "./images/fine.svg", selectedIndex, updateSelected, index: 3, updateCategoryB })}
                {MiniSurveyOption({ title: "Burgers", img: "./images/fine.svg", selectedIndex, updateSelected, index: 4, updateCategoryB })}
                {MiniSurveyOption({ title: "Pizza", img: "./images/fine.svg", selectedIndex, updateSelected, index: 5, updateCategoryB })}
                {MiniSurveyOption({ title: "Mediterranean", img: "./images/fine.svg", selectedIndex, updateSelected, index: 6, updateCategoryB })}
                {MiniSurveyOption({ title: "Italian", img: "./images/fine.svg", selectedIndex, updateSelected, index: 7, updateCategoryB })}
                {MiniSurveyOption({ title: "Surprise Me", img: "./images/fine.svg", selectedIndex, updateSelected, index: 8, updateCategoryB })}
              </div>
            </div>

          </div>
        );
        break;
      case 2:
        content = (
          <div>
            <h3 style={styles.title}>What kind of vibe?</h3>
            <div style={styles.screenContent}>
              <div style={styles.surveyOptions}>
                {SurveyOption({ title: "Trendy + Poppin'", img: "./images/trendy.svg", selectedIndex, updateSelected, index: 0, updateCategory: updateCategoryC })}
                {SurveyOption({ title: "Family Friendly", img: "./images/fam.svg", selectedIndex, updateSelected, index: 1, updateCategory: updateCategoryC })}
                {SurveyOption({ title: "Upscale + Fancy", img: "./images/money.svg", selectedIndex, updateSelected, index: 2, updateCategory: updateCategoryC })}
              </div>
            </div>
          </div>
        );
    }
    return (
      <div style={styles.container}>
        <div style={styles.modalContent}>
          <div style={styles.closeButton} onClick={() => { props.updateSurvey(false); updateSurveyState(0); updateSelected(null) }}>
            X
          </div>
          <p style={styles.number}>{surveyState+1}</p>
          {content}
          <div>
            <button onClick={() => { nextQuestion() }} style={styles.button}>next</button>
          </div>
          {CompletedDots({ completed: surveyState })}
        </div>
      </div>
    )
  } else {
    return null;
  }
}

function CompletedDots(props) {
  const container = {
    display: "flex",
    flexJustify: "center",
    margin: "0px auto",
    width: "50px",
    marginTop: "30px",
    marginBottom: "0px"
  }
  const dot = {
    width: "10px",
    height: "10px",
    border: "2px solid #9C69E2",
    backgroundColor: "#9C69E2",
    borderRadius: "50%",
    margin: "3px"
  }
  const emptyDot = {
    width: "10px",
    height: "10px",
    border: "2px solid #9C69E2",
    backgroundColor: "white",
    borderRadius: "50%",
    margin: "3px"
  }
  if (props.completed == 0) {
    return (
      <div style={container}>
        <div style={dot}></div>
        <div style={emptyDot}></div>
        <div style={emptyDot}></div>
      </div>
    )
  } else if (props.completed == 1) {
    return (
      <div style={container}>
        <div style={dot}></div>
        <div style={dot}></div>
        <div style={emptyDot}></div>
      </div>
    )
  } else {
    return (
      <div style={container}>
        <div style={dot}></div>
        <div style={dot}></div>
        <div style={dot}></div>
      </div>
    )
  }
}

function SurveyOption(props) {
  let size = "130px"
  const styles = {
    container: {
      boxShadow: "0px 4px 20px rgba(75, 93, 104, 0.25)",
      width: size,
      height: size,
      cursor: "pointer",
      margin: "15px",
      borderRadius: "15px",
      position: "relative"
    },
    clickedContainer: {
      boxShadow: "0px 4px 20px rgba(75, 93, 104, 0.25)",
      width: size,
      height: size,
      cursor: "pointer",
      margin: "15px",
      borderRadius: "15px",
      position: "relative",
      border: "2px solid purple"
    },
    title: {
      textAlign: "center",
      fontFamily: "Avenir"
    },
    img: {
      width: "40px",
      margin: "0px auto",
      display: "block",
      marginTop: "30px"
    }
  }
  const containerStyle = props.selectedIndex == props.index ? styles.clickedContainer : styles.container;
  return (
    <div style={containerStyle} onClick={() => { props.updateSelected(props.index); props.updateCategory(props.index) }}>
      <img src={props.img} style={styles.img} />
      <h5 style={styles.title}>{props.title}</h5>
    </div>
  )
}

function MiniSurveyOption(props) {
  const styles = {
    container: {
      boxShadow: "0px 4px 20px rgba(75, 93, 104, 0.25)",
      width: "120px",
      height: "35px",
      cursor: "pointer",
      margin: "15px",
      borderRadius: "15px",
      position: "relative"
    },
    clickedContainer: {
      boxShadow: "0px 4px 20px rgba(75, 93, 104, 0.25)",
      width: "120px",
      height: "35px",
      cursor: "pointer",
      margin: "15px",
      borderRadius: "15px",
      position: "relative",
      border: "2px solid purple"
    },
    title: {
      textAlign: "center",
      fontSize: "13px",
      fontFamily: "Avenir",
      marginTop: "10px"
    },
    img: {
      width: "40px",
      margin: "0px auto",
      display: "block",
      marginTop: "30px"
    }
  }
  const containerStyle = props.selectedIndex == props.index ? styles.clickedContainer : styles.container;
  return (
    <div style={containerStyle} onClick={() => { props.updateSelected(props.index); props.updateCategoryB(props.index) }}>
      <p style={styles.title}>{props.title}</p>
    </div>
  )
}

export default Home;
