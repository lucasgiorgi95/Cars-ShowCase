'use client'
import { useEffect, useState } from 'react';
import { fetchCars } from '@/utils';
import { CarCard, CustomButton, CustomFilter, Hero, SearchBar } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import Loading from '@/components/Loading';

export default function Home({ searchParams }: HomeProps) {
  const [visibleCars, setVisibleCars] = useState(10);
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2023,
        fuel: searchParams.fuel || '',
        limit: visibleCars,
        model: searchParams.model || '',
      });
      setAllCars(data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [visibleCars]); 

  const handleShowMore = () => {
    setVisibleCars(prevVisibleCars => prevVisibleCars + 10);
  };

  if (isLoading) {
    return <div> <Loading/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        <section>
          <div className="home__cars-wrapper">
            {allCars.map(car => (
              <CarCard car={car} key={car} />
            ))}
          </div>
          {allCars.length >= visibleCars && (
            <div className="flex items-center justify-center">
              <CustomButton handleClick={handleShowMore} btnType="button" title="Show More" containerStyles="bg-primary-blue rounded-full text-white" />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
