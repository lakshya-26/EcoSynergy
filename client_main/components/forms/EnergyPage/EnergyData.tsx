import Spinner from "@/components/Spinner";
import { getEnergyData } from "@/utils/EnergyApi";
import { useEffect, useState } from "react";

const EnergyData = () => {
  const [energy, setEnergy] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const energyData = await getEnergyData();
        setEnergy(energyData);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {energy ? (
        <div>
          <h1 className="heading mb-2"></h1>
          <h3 className="text-l font-bold text-[#1e733d] mb-2">
            {energy.month}, {energy.year}
          </h3>
          <h1 className="font-sans text-4xl font-bold text-[#1e733d]">
            Total Carbon FootPrint Emitted: {energy.totalCarbonFootprint}
          </h1>
          <h2 className="font-sans text-2xl font-bold text-[#1e733d]">
            Carbon FootPrint Emitted in this cycle: {energy.carbonFootprint}
          </h2>
          <h3 className="font-sans text-xl font-bold text-[#1e733d] mb-[350px] heading">
            Electricity Usage: {energy.difference} kWh
          </h3>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="font-sans text-3xl font-bold text-[#1e733d]">
            Welcome to EcoSynergy!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            It looks like you haven't logged any energy data yet.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Start tracking your energy consumption today to monitor your carbon footprint.
          </p>
        </div>
      )}
    </>
  );
};

export default EnergyData;
