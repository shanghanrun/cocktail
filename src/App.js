import "./App.css";
import Alcohol from './filter/alcohol/Alcohol';
import NonAlcohol from './filter/alcohol/NonAlcohol';
// import Cocktail from './filter/category/Cocktail'
// import OriginalDrink from './filter/category/OriginalDrink'
// import CocktailGlass from './filter/glass/CocktailGlass'
// import ChampagneFlute from './filter/glass/ChampagneFlute'
// import SearchDrinkByIngredient from './search/SearchDrinkByIngredient'
import SearchIngredient from './search/SearchIngredient'
// import SearchCocktailsByName from './search/SearchCocktailsByName'
// import SearchCocktailsByFirstLetter from './search/SearchCocktailsByFirstLetter'


function App() {
  return <div style={{display:'flex'}}>
    {/* <Alcohol />
    <h1 style={{color:'red'}}>==NonAlcohol==</h1>
    <NonAlcohol /> */}
    {/* <Cocktail />
    <h1 style={{color:'red'}}>== 경계 ==</h1>
    <OriginalDrink /> */}
    {/* <CocktailGlass /> */}
    {/* <h1 style={{color:'red'}}>== 경계 ==</h1> */}
    {/* <ChampagneFlute /> */}
    {/* {drinks.map((drink,i)=> <SearchIngredient str={drink} key={i}/>)} */}
    {/* <SearchDrinkByIngredient str="Gin" /> */}
    <SearchIngredient str="Vodka" />
    {/* <SearchCocktailsByName str="margarita" /> */}
    {/* <SearchCocktailsByFirstLetter str="b" /> */}
  </div>;
}

export default App;
