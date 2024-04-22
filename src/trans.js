import React from "react";
import { useDetailCocktail } from "../hooks/useDetailCocktail";
import { useParams } from "react-router-dom";
import RecommendCocktail from "../components/RecommendCocktail";
import { useSearchByIngredient } from "../hooks/useSearchByIngredient";
import DetailCocktail from "../components/DetailCocktail";
import LoadingPage from "./loadingPage/LoadingPage";
import "../styles/detailPage.style.css";
import {useState, useEffect} from 'react'
import axios from 'axios';

const DetailPage = () => {
	const { id } = useParams();
	const [isKor, setIsKor] = useState(false)
	const [primaryData, setPrimaryData] = useState([])
	const [usingData, setUsingData] = useState([])
	const apiKey = process.env.REACT_APP_API_KEY; 
	const [eTextList, setETextList] = useState([]);
	const [kTextList, setKTextList] = useState([]);


	async function translate(){
		if(isKor){
			setIsKor(false)
			setUsingData(primaryData)
		} else{
			console.log('번역시작')
			const translatedList=[]

			for(const text of eTextList){
				try{
					const resp = await axios.post(
						`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
						{
						q: text,
						source: 'en',
						target: 'ko' 
						}
					);
					translatedList.push(resp.data.data.translations[0].translatedText);
				} catch (error) {
					console.error('Error translating text:', error);
				}
			}
			setIsKor(true)
			setKTextList(translatedList);
			console.log('번역완료')
		}
	}


	const { data: detailData, isLoading: detailLoading } = useDetailCocktail(id);

	const {
		data: searchByIngredientData,
		isLoading,
		isError,
	} = useSearchByIngredient(detailData?.strIngredient1, id);
	const base = detailData?.strIngredient1;
	console.log("searchByIngredientData", searchByIngredientData);

	useEffect(() => {
		if(detailData){
			const primaryIngredient = data.ingredients[0];
			setPrimaryData(primaryIngredient);
			setUsingData(primaryIngredient);
			setETextList([primaryIngredient.strAlcohol, primaryIngredient.strDescription]);
		}
    }, [data]);

	return (
		<div id="detail-page">
			{/* 로딩 페이지를 먼저 보여주고, detailLoading과 isLoading이 모두 false인 경우에만 컴포넌트를 보여줌 */}
			{detailLoading || isLoading ? (
				<LoadingPage />
			) : (
				<div>
					<DetailCocktail detailData={detailData} />
					<RecommendCocktail searchByIngredientData={searchByIngredientData} base={base} />
				</div>
			)}
		</div>
	);
};

export default DetailPage;
