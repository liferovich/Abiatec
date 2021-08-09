import Header from "./Header";
import ContentList from "./ContentList";
import Pagination from "./Pagination";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";

const App = () => {
  const {handleSearch, content, isLoading, fetchMore, isFetched} = useFetchContent();

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <h1>Simple content list</h1>
      <ContentList content={content} isLoading={isLoading} />
      <Pagination onLoad={fetchMore} disabled={isFetched}/>
    </div>
  );
};

export default App;
