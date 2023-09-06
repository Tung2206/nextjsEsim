import useSWR from "swr";
import unidecode from "unidecode";


export const convertToSlug = (text) => {
    const withoutAccents = unidecode(text);
    return withoutAccents.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};


export const useData = async () => {

    const res = await fetch("http://localhost:3000/api/product/");
    const data = await res.json();
    return data;
  };

