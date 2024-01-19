import fetchData from "@/Utils";
import { CarCard, Hero } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import Searchbar from "@/components/Searchbar";

export default async function Home() {
  const allCars = await fetchData();
  // console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars; 
  return (
    <main className="overflow-hidden">
      <Hero />  

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}

            {isDataEmpty ? (
              <section className="home__error-container">
                <h2>
                  Opps, no data!!
                </h2>
                <p>{allCars?.message}</p>
              </section>
            ) : (
              <section className="home__cars-wrapper">
                {allCars.map((car) => (
                  <CarCard car={car} />
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
