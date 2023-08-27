"use client";
// import styles of this component
import styles from "./App.module.css";

// import other components to use
import Header from "./Components/Header/Header";
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
// App component
const Com = (props) => {
  return (
    <>
      <Header />

      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      >
        <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>All images</h1>
          </div>
          <MasonryLayout images={props.images} />
        </ContainerCard>
      </div>
    </>
  );
};

export default Com;
