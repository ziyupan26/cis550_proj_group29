import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { amber, lightGreen } from '@mui/material/colors'
import { createTheme } from "@mui/material/styles";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SearchResultsPage from "./pages/SearchResultsPage";
import IngredientsPage from './pages/IngredientsPage';
import CalculatorPage from './pages/CalculatorPage';
//import CategoryPage from './pages/CategoryPage';
//import RecipePage from './pages/RecipePage';
//import CategoryInfoPage from './pages/CategoryInfoPage';


// createTheme enables you to customize the look and feel of your app past the default
// in this case, we only change the color scheme
export const theme = createTheme({
  palette: {
    primary: amber,
    secondary: lightGreen,
  },
});

// App is the root component of our application and as children contain all our pages
// We use React Router's BrowserRouter and Routes components to define the pages for
// our application, with each Route component representing a page and the common
// NavBar component allowing us to navigate between pages (with hyperlinks)
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/search_results" element={<SearchResultsPage />} />
          {/*<Route path="/category_tops" element={<CategoryPage />} /> {/* Category Page */}
          {/*<Route path="/category_info/:recipecategory" element={<CategoryInfoPage />} /> {/* Category Info Page */}
          {/*<Route path="/recipe/:recipeId" element={<RecipePage />} /> {/* Recipe Page */}
          <Route path="/all_ingredients" element={<IngredientsPage />} /> {/* Ingredients Page */}
          <Route path="/calculator" element={<CalculatorPage />} /> {/* Calculator Page */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}