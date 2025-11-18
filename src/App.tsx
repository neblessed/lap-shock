import "./App.css";
import Header from "./components/Header/Header";
import MenuItem from "./components/MenuItem/MenuItem";

const data = {
    title: "Beef Steak",
    description: "Norem ipsum dolor sit amet, consectetur",
    photo: "./food1.png",
};

function App() {
    return (
        <>
            <Header />
            <MenuItem
                title={data.title}
                description={data.description}
                photo={data.photo}
            />
        </>
    );
}

export default App;
