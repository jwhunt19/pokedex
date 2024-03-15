import { useEffect, useState } from "react";
import { getEvolutionChain } from "../../services/pokeApi";
import EvolutionNode from "./EvolutionNode";

const Evolutions = ({ id }) => {
  const [chain, setChain] = useState(null);

  useEffect(() => {
    const fetchChain = async (id) => {
      try {
        const chainData = await getEvolutionChain(id);
        setChain(chainData);
      } catch (error) {
        console.error("Failed to fetch evolution chain:", error);
        setChain({});
      }
    };

    fetchChain(id);
  }, [id]);

  return <>{chain && <EvolutionNode stage={chain} />}</>;
};

export default Evolutions;
