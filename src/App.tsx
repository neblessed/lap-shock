import "./App.css";
import Header from "./components/Header/Header";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import MenuItem from "./components/MenuItem/MenuItem";

const data = [
    {
        title: "Caviar Express",
        description: "Norem ipsum dolor sit amet, consectetur",
        photo: "./food2.png",
        price: "430",
    },
    {
        title: "Beef Steak",
        description: "Norem ipsum dolor sit amet, consectetur",
        photo: "./food1.png",
        price: "570",
    },
    {
        title: "Blue Berry",
        description: "Norem ipsum dolor sit amet, consectetur",
        photo: "./food3.png",
        price: "640",
    },
    {
        title: "Strawberry Finx",
        description: "Norem ipsum dolor sit amet, consectetur",
        photo: "./food4.png",
        price: "490",
    },
];

function App() {
    return (
        <>
            <Header />
            <MenuContainer>
                {data.map((item) => (
                    <MenuItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        photo={item.photo}
                    />
                ))}
            </MenuContainer>
        </>
    );
}

export default App;
