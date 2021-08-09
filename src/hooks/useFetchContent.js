import { useCallback, useEffect, useState } from "react";

export const useFetchContent = () => {
  const [content, setContent] = useState([]);
  const [next, setNext] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const apiUrl = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setContent(result.results);
        setNext(result.info.next);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearch = useCallback((name) => {
    setIsLoading(true);
    fetch(apiUrl + "?name=" + name)
      .then((response) => response.json())
      .then((result) => {
        setContent(result.results);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   fetch(next)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     setContent((prevState) => [...prevState, ...result.results]);
  //     setNext(result.info.next);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   })
  //   .finally(() => {
  //     setIsLoading(false);
  //     // setIsFetched(true)
  //   });
  // }, [next]);

  const fetchMore = useCallback(() => {
    setIsLoading(true);
    fetch(next)
      .then((response) => response.json())
      .then((result) => {
        setContent((prevState) => [...prevState, ...result.results]);
        setNext(result.info.next);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
        // setIsFetched(true)
      });
  }, [next]);

  return { handleSearch, content, isLoading, fetchMore, isFetched };
};
